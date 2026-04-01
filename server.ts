import { serve, build, type BuildConfig, spawn, watch } from "bun";
import { join } from "path";

const PORT = 8080;

const config: BuildConfig = {
  entrypoints: ["./src/main.tsx"],
  outdir: "./dist",
  minify: false,
  sourcemap: "inline",
};

// 1. Start Tailwind CSS CLI watcher for V4
console.log("🚀 Starting Tailwind CSS V4 CLI watcher...");
spawn(["bunx", "@tailwindcss/cli", "-i", "./src/index.css", "-o", "./dist/index.css", "--watch"], {
  stdout: "inherit",
  stderr: "inherit",
});

const clients = new Set<any>();

// 2. Watch the src directory for changes to trigger a reload
console.log("👀 Watching src directory for browser reload...");
watch(join(process.cwd(), "src"), { recursive: true }, (event, filename) => {
  console.log(`[WATCH] ${filename} changed, notifying clients...`);
  for (const client of clients) {
    client.send("reload");
  }
});

async function performBuild() {
  console.log("⚙️  Rebuilding JS/TSX assets...");
  const result = await build(config);
  if (!result.success) {
    console.error("❌ Build failed:", result.logs);
  } else {
    console.log("✅ Build successful");
  }
}

// Initial full build
await performBuild();

const server = serve({
  port: PORT,
  fetch(req, server) {
    const url = new URL(req.url);
    const path = url.pathname;

    // WebSocket endpoint for hot reloading
    if (path === "/ws") {
      if (server.upgrade(req)) return;
      return new Response("Upgrade failed", { status: 400 });
    }

    // SPA logic: If it's the root or a route, serve index.html with transformations
    if (path === "/" || !path.includes(".")) {
      return (async () => {
        await performBuild();
        let html = await Bun.file("./index.html").text();
        
        // CSS Integration
        if (!html.includes('id="bun-css"')) {
          html = html.replace("</head>", '    <link id="bun-css" rel="stylesheet" href="/index.css">\n  </head>');
        }

        // Icon Fix: Material Symbols CDN injection
        if (!html.includes('fonts.googleapis.com/css2?family=Material+Symbols+Outlined')) {
           html = html.replace("<head>", '<head>\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,fill,GRAD@20..48,100..700,0..1,-50..200" />');
        }

        // Script Redirection
        html = html.replace('src="/src/main.tsx"', 'src="/main.js"');

        // 🔥 Hot Reload Client Script Injection
        const reloadScript = `
          <script>
            (function() {
              let socket;
              function connect() {
                const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
                socket = new WebSocket(protocol + window.location.host + '/ws');
                socket.onmessage = (event) => {
                  if (event.data === 'reload') {
                    console.log('🔄 Hot reloaded triggered by server change');
                    window.location.reload();
                  }
                };
                socket.onclose = () => {
                  console.log('📡 HMR Socket closed. Retrying in 1s...');
                  setTimeout(connect, 1000);
                };
              }
              connect();
            })();
          </script>
        `;
        html = html.replace("</body>", `${reloadScript}    </body>`);

        return new Response(html, { headers: { "Content-Type": "text/html" } });
      })();
    }

    // Try serving directly from /dist/
    let file = Bun.file(join(process.cwd(), "dist", path));
    if (file.size > 0) return new Response(file);

    // Try serving directly from /public/
    file = Bun.file(join(process.cwd(), "public", path));
    if (file.size > 0) return new Response(file);

    return new Response("Not Found", { status: 404 });
  },
  websocket: {
    open(ws) {
      clients.add(ws);
    },
    message(ws, message) {},
    close(ws) {
      clients.delete(ws);
    },
  },
});

console.log(`\n🪐 Bun Dev Server ready at http://localhost:${PORT}`);
