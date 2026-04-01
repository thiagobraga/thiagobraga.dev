import { serve, build, type BuildConfig, spawn } from "bun";
import { watch } from "node:fs";
import { join } from "node:path";

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
try {
  watch(join(process.cwd(), "src"), { recursive: true }, (event, filename) => {
    if (filename && (filename.endsWith(".tsx") || filename.endsWith(".ts") || filename.endsWith(".css"))) {
      console.log(`[WATCH] Hot reloading triggered by change in: ${filename}`);
      for (const client of clients) {
        client.send("reload");
      }
    }
  });
} catch (e) {
  console.error("⚠️ Watcher failed to start (likely platform limitation):", e);
}

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
  hostname: "0.0.0.0",
  fetch(req, server) {
    const url = new URL(req.url);
    const path = url.pathname;

    // WebSocket endpoint for hot reloading
    if (path === "/ws") {
      const upgraded = server.upgrade(req);
      if (upgraded) return;
      return new Response("Upgrade failed", { status: 400 });
    }

    // SPA logic: If it's the root or a route, serve index.html with transformations
    if (path === "/" || !path.includes(".")) {
      return (async () => {
        await performBuild();
        let html = await Bun.file("./index.html").text();
        
        // CSS Integration
        if (!html.includes('id="bun-css"')) {
          html = html.replace(/<\/head>/i, '    <link id="bun-css" rel="stylesheet" href="/index.css">\n  </head>');
        }

        // Icon Fix: Use Material Symbols CDN
        if (!html.includes('fonts.googleapis.com')) {
           const iconLink = '\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,fill,GRAD@24,400,0,0" />';
           html = html.replace(/<head[^>]*>/i, (match) => match + iconLink);
        }

        // Script Redirection
        html = html.replace('src="/src/main.tsx"', 'src="/main.js"');

        // 🔥 Hot Reload Client Script Injection
        const reloadScript = `
          <script>
            (function() {
              console.log('✅ Hot Reload client active');
              let socket;
              function connect() {
                const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
                const wsUrl = protocol + window.location.host + '/ws';
                console.log('🔌 Connecting to HMR WebSocket at ' + wsUrl);
                socket = new WebSocket(wsUrl);
                socket.onopen = () => console.log('🟢 HMR WebSocket connected');
                socket.onmessage = (event) => {
                  if (event.data === 'reload') {
                    console.log('🔄 Reloading page...');
                    window.location.reload();
                  }
                };
                socket.onclose = () => {
                  console.log('🟡 HMR Socket closed. Retrying in 2s...');
                  setTimeout(connect, 2000);
                };
              }
              connect();
            })();
          </script>
        `;
        html = html.replace(/<\/body>/i, `${reloadScript}\n  </body>`);

        return new Response(html, { headers: { "Content-Type": "text/html" } });
      })();
    }

    // Serving assets
    return (async () => {
      // 1. Try dist
      const distFile = Bun.file(join(process.cwd(), "dist", path));
      if (await distFile.exists()) return new Response(distFile);

      // 2. Try public
      const publicFile = Bun.file(join(process.cwd(), "public", path));
      if (await publicFile.exists()) return new Response(publicFile);

      return new Response("Not Found", { status: 404 });
    })();
  },
  websocket: {
    open(ws) {
      clients.add(ws);
      console.log(`[WS] Client joined. Total: ${clients.size}`);
    },
    message(ws, message) {},
    close(ws) {
      clients.delete(ws);
      console.log(`[WS] Client left. Total: ${clients.size}`);
    },
  },
});

console.log(`\n🪐 Bun Dev Server ready at http://localhost:${PORT}`);
