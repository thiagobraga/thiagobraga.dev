import { serve, build, type BuildConfig, spawn } from "bun";
import { watch } from "node:fs";
import { join } from "node:path";

const PORT = 3000;
const config: BuildConfig = {
  entrypoints: ["./src/main.tsx"],
  outdir: "./dist",
  minify: false,
  sourcemap: "inline",
};

// 1. Tailwind Process (Managed)
console.log("Iniciando Tailwind CSS Watcher... 🎨");
const tailwindProc = spawn(["bun", "tailwindcss", "-i", "./src/index.css", "-o", "./dist/index.css", "--watch"], {
  stdout: "inherit",
  stderr: "inherit",
});

// Clean up tailwind on exit
process.on("exit", () => tailwindProc.kill());
process.on("SIGINT", () => { tailwindProc.kill(); process.exit(); });

const clients = new Set<any>();

async function performBuild() {
  console.log("Rebuilding JS/TSX assets...");
  const result = await build(config);
  if (!result.success) {
    console.error("Build failed:", result.logs);
    return false;
  }
  console.log("Build successful");
  return true;
}

// 2. Watchers with Debounce
let srcTimer: Timer | null = null;
watch(join(process.cwd(), "src"), { recursive: true }, async (event, filename) => {
  if (filename?.endsWith(".css")) return; // Tailwind handles CSS
  if (srcTimer) clearTimeout(srcTimer);

  srcTimer = setTimeout(async () => {
    console.log(`[Watcher] Change in src/${filename}, rebuilding...`);
    if (await performBuild()) {
      clients.forEach(c => c.send("reload-page"));
    }
    srcTimer = null;
  }, 100);
});

let distTimer: Timer | null = null;
watch(join(process.cwd(), "dist"), (event, filename) => {
  if (filename === "index.css") {
    if (distTimer) clearTimeout(distTimer);
    distTimer = setTimeout(() => {
      console.log(`[Watcher] CSS updated, notifying clients...`);
      clients.forEach(c => c.send("reload-css"));
      distTimer = null;
    }, 100);
  }
});

// 3. Initial Build and Serve
await performBuild();

serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/ws") {
      if (server.upgrade(req)) return;
      return new Response("WS Upgrade Failed", { status: 400 });
    }

    if (url.pathname === "/" || !url.pathname.includes(".")) {
      return (async () => {
        let html = await Bun.file("./index.html").text();
        const reloadScript = `
          <script>
            (function() {
              function connect() {
                const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
                const socket = new WebSocket(protocol + '//' + window.location.host + '/ws');

                console.log(socket);

                socket.onopen = () => {
                  console.log('[HMR] Connected');
                  setInterval(() => {
                    if (socket.readyState === 1) socket.send('ping');
                  }, 10000);
                };

                socket.onmessage = (e) => {
                  if (e.data === 'reload-css') {
                    console.log('[HMR] Reloading CSS');
                    const link = document.querySelector('link[href*="index.css"]');
                    if (link) link.href = '/index.css?v=' + Date.now();
                  } else if (e.data === 'reload-page') {
                    console.log('[HMR] Reloading Page');
                    window.location.reload();
                  } else if (e.data.includes('PONG')) {
                    console.log('[HMR] Received:', e.data);
                  }
                };

                socket.onclose = () => {
                  console.log('[HMR] Disconnected, retrying...');
                  setTimeout(connect, 1000);
                };
              }
              connect();
            })();
          </script>
        `;
        html = html.replace(/<\/body>/i, reloadScript + "</body>");
        html = html.replace('src="/src/main.tsx"', 'src="/main.js"');
        return new Response(html, { headers: { "Content-Type": "text/html" } });
      })();
    }

    // Asset serving with public fallback
    const distPath = join(process.cwd(), url.pathname.startsWith("/dist/") ? url.pathname : join("dist", url.pathname));
    const publicPath = join(process.cwd(), "public", url.pathname);

    const distFile = Bun.file(distPath);
    if (await distFile.exists()) {
      return new Response(distFile, {
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
      });
    }

    const publicFile = Bun.file(publicPath);
    if (await publicFile.exists()) {
      return new Response(publicFile);
    }

    return new Response("Not Found", { status: 404 });
  },
  websocket: {
    open(ws) { clients.add(ws); console.log(`[WS] Client Joined (${clients.size})`); },
    message(ws, msg) {
      if (msg === "ping") {
        ws.send("PONG from Bun! 🚀");
        console.log("[WS] Received PING, sent PONG");
      }
    },
    close(ws) { clients.delete(ws); console.log(`[WS] Client Left (${clients.size})`); },
  }
});

console.log(`\n🚀 Bun Server Ready on port ${PORT}`);
