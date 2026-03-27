# Copilot instructions for thiagobraga.dev

Goal: help an AI coding agent become productive quickly in this repo — concise, actionable notes derived from the codebase.

Quick start (commands)
- Install deps: `npm i` (package.json is the source of truth).
- Dev server: `npm run dev` — Vite runs on host `::` and port `8080` (see `vite.config.ts`).
- Build: `npm run build` (or `npm run build:dev` to build with development mode).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured in repo).

Big picture / architecture
- Frontend single-page app built with React + TypeScript + Vite. Entry: `src/main.tsx` → `src/App.tsx`.
- Routing: `react-router` routes are defined in `src/App.tsx`. Two layout styles:
  - `MainLayout` (site header/footer) for `/`, `/blog`, `/author` routes.
  - `AdminLayout` (no header/footer) for `/admin` routes (Login, Dashboard, PostEditor).
- Data layer: Supabase is used as the primary backend (client at `src/integrations/supabase/client.ts`).
- Types: Supabase DB shape is typed in `src/integrations/supabase/types.ts` — keep this in sync with any DB schema changes.
- Client-side caching: `@tanstack/react-query` is configured at the app root (`QueryClientProvider` in `src/App.tsx`).

Important project conventions and patterns
- Path alias: `@` → `src` (defined in `vite.config.ts`). Use imports like `import X from '@/components/...'`.
- UI primitives live under `src/components/ui/` (shadcn-style components). Example: `src/components/ui/toaster.tsx` and `src/components/ui/sonner.tsx` are used together for notifications.
- Theme: custom `ThemeProvider` at `src/components/theme/ThemeProvider.tsx` toggles `light`/`dark` classes on the document root (search for `root.classList.add('light'|'dark')`).
- Posts fetching: `src/hooks/usePosts.tsx` handles fetching posts from Supabase and sets `featuredPosts` and `recentPosts`. Note the logic:
  - Orders by `published_at` descending.
  - Ensures first post has an `image_url` (injects placeholder when missing).
  - Slices posts into featured (first 3) and recent (next 6).
- Some pages use mock/hard-coded content (e.g. `src/pages/BlogPost.tsx` contains `blogPosts` local mock data). Be careful when adding features expecting real DB-backed content.
- HTML content: `BlogPost` uses `dangerouslySetInnerHTML` for post content and `author` may contain markup — Sanitize or preserve intentionally.

Integration points & external deps
- Supabase client: `src/integrations/supabase/client.ts`. The client is typed with `createClient<Database>(...)`. If you change DB schema, update `types.ts`.
- Notifications: `sonner` and a custom `Toaster` are both present; check `src/components/ui/sonner.tsx` and `src/components/ui/toaster.tsx` when adding notifications.
- Dev tooling: `lovable-tagger` runs as a Vite plugin in development (see `vite.config.ts`). Expect additional metadata/tags in dev mode.

Common developer tasks (examples)
- Add a new page: create `src/pages/MyPage.tsx`, export default component, and add a `<Route path="/my" element={<MainLayout><MyPage/></MainLayout>} />` in `src/App.tsx`.
- Read/write posts: use `supabase.from('posts')` and prefer types from `src/integrations/supabase/types.ts` for strict typing.
- Add a UI component: put it under `src/components/ui/` and follow existing naming and prop patterns used across files.

How AI agents should modify code (rules)
- Preserve import alias `@` and existing layout routes unless the change requires new routing.
- When modifying DB interactions, update `src/integrations/supabase/types.ts` (it's the canonical DB type in the repo).
- Match styling conventions: Tailwind utility classes and shadcn-style primitives are used throughout; prefer adding small utility classes rather than large CSS files.
- Respect theme behaviour: toggling theme updates `document.documentElement` classes — don't replace with a different theme mechanism without updating `ThemeProvider` and usages.

Caveats observed in repo
- Supabase credentials are currently hard-coded in `src/integrations/supabase/client.ts` (publishable key). If you rotate or change keys, update that file. The repo contains `bun.lockb` but `package.json` scripts use npm/Vite — prefer `npm` for the commands above.
- Some pages are mock-only (e.g., `src/pages/BlogPost.tsx`) while hooks use Supabase — confirm whether to wire mocks to real data before making feature work.

Files to inspect for context (start here)
- `vite.config.ts` — alias and dev plugin behavior.
- `package.json` — scripts and deps.
- `src/App.tsx` and `src/main.tsx` — app bootstrap and routing.
- `src/integrations/supabase/*` — client + types.
- `src/hooks/usePosts.tsx` — canonical example of how posts are fetched and shaped.
- `src/components/theme/ThemeProvider.tsx` — theme semantics.

If anything above is unclear or you'd like more examples (small code snippets showing how to add routes, use `supabase` with types, or the expected post shape), tell me which area to expand and I will iterate.
