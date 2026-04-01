import { serve, build, type BuildConfig, spawn } from "bun";
import { join } from "path";

const PORT = 8080;

const config: BuildConfig = {
  entrypoints: ["./src/main.tsx"],
  outdir: "./dist",
  minify: false,
  sourcemap: "inline",
};

// 1. Clean dist on startup
// spawn(["rm", "-rf", "./dist"]);

// 2. Start Tailwind CSS CLI watcher for V4
console.log("🚀 Starting Tailwind CSS V4 CLI watcher...");
const twProcess = spawn(
  ["bunx", "@tailwindcss/cli", "-i", "./src/index.css", "-o", "./dist/index.css", "--watch"],
  { stdout: "inherit", stderr: "inherit" }
);

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

const devServer = serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    console.log(`[REQ] ${req.method} ${path}`);

    // SPA logic: If it's the root or a route, serve index.html with JS injection
    if (path === "/" || !path.includes(".")) {
      await performBuild(); // Refresh JS bundle
      let html = await Bun.file("./index.html").text();
      
      // Inject CSS link (overriding anything that was there)
      if (!html.includes('id="bun-css"')) {
        html = html.replace("</head>", '    <link id="bun-css" rel="stylesheet" href="/index.css">\n  </head>');
      }

      // Rewrite the module link to the built main.js in dist
      // If index.html has a src="/src/main.tsx", we need to point it to /main.js
      html = html.replace('src="/src/main.tsx"', 'src="/main.js"');

      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    // Try serving directly from /dist/
    let file = Bun.file(join(process.cwd(), "dist", path));
    if (await file.exists()) return new Response(file);

    // Try serving directly from /public/
    file = Bun.file(join(process.cwd(), "public", path));
    if (await file.exists()) return new Response(file);

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`\n🪐 Bun Dev Server ready at http://localhost:${PORT}`);
