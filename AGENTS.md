# AGENTS.md

Agent guidance for the `thiagobraga.dev` codebase.

## Project

Personal portfolio and blog site. Built with React 18 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui. Supports mock data (default, no backend required) or live Supabase integration via env flag.

---

## Commands

**Package manager: Bun**

```bash
bun install          # Install dependencies
bun run dev          # Dev server → http://localhost:5173
bun run build        # Production build → dist/
bun run lint         # ESLint check (no --fix by default)
bun run preview      # Serve production build locally
```

**Docker (Traefik proxy, HTTPS at `thiagobraga.dev.local`):**

```bash
docker compose up -d          # Start dev container
docker compose logs -f        # Tail logs
docker compose down           # Stop
```

**No test suite.** There are no test files or test runner config in this project.

---

## Architecture

### Entry

```
src/main.tsx → src/App.tsx
```

### Routing & Layouts (`src/App.tsx`)

Two layout wrappers:

| Layout | Routes |
|--------|--------|
| `MainLayout` (Navbar + Footer) | `/`, `/blog`, `/blog/:id`, `/timeline`, `/author/:id`, `/styleguide` |
| `AdminLayout` (bare) | `/admin`, `/admin/dashboard`, `/admin/post/new`, `/admin/post/:id` |

Catch-all `*` renders `NotFound`.

### Data Layer

Toggle via `VITE_MOCK` env var:

- `VITE_MOCK=true` (default) — reads from `src/lib/mock/posts.ts`, no network
- `VITE_MOCK=false` — fetches from Supabase (client at `src/integrations/supabase/client.ts`)

Main data hook: `src/hooks/usePosts.ts` → returns `{ featuredPosts, recentPosts, loading, error }`.

> Note: `src/hooks/usePosts.tsx` also exists (older version using React Query). Prefer `usePosts.ts`.

### Component Structure

```
src/components/
  ui/        # 49 shadcn/ui components (Radix UI + Tailwind) — do not hand-edit
  layout/    # Navbar.tsx, Footer.tsx
  theme/     # ThemeProvider.tsx, ThemeToggle.tsx
  home/      # Page section components (HeroSection, FeaturedPosts, RecentPosts, …)
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Routing, layout wrappers |
| `src/main.tsx` | App entry point |
| `src/hooks/usePosts.ts` | Post fetching, mock/live toggle |
| `src/lib/mock/posts.ts` | Mock data + `Post` type definition |
| `src/integrations/supabase/client.ts` | Supabase client init |
| `src/integrations/supabase/types.ts` | Generated Supabase DB types |
| `src/data/timeline.ts` | Static timeline entries |
| `src/pages/Styleguide.tsx` | Design system showcase |
| `src/index.css` | Tailwind imports + global CSS vars/tokens |
| `vite.config.ts` | Build config, path aliases, dev server |
| `tsconfig.app.json` | TypeScript compiler options |
| `compose.yml` | Docker Compose (dev, Traefik labels) |
| `.env.example` | Env var template |

---

## Environment Variables

```bash
VITE_MOCK=true                  # true = mock data, false = Supabase
VITE_SUPABASE_URL=...           # Required only when VITE_MOCK=false
VITE_SUPABASE_ANON_KEY=...      # Required only when VITE_MOCK=false
```

---

## Coding Conventions

### TypeScript

- Loose config: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`
- Path alias `@/` maps to `src/` — use it for all internal imports
- Prefer `.ts` over `.tsx` for non-JSX files

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.*` file)
- Use `cn()` from `src/lib/utils.ts` to merge class names (wraps `clsx` + `tailwind-merge`)
- Design tokens defined as CSS custom properties in `src/index.css`
- Typography: Plus Jakarta Sans, Inter, Manrope
- Design language: Nordic aesthetic, glassmorphism, `fade-up` / `scroll-bounce` animations

### Components

- UI primitives live in `src/components/ui/` — these are shadcn/ui generated files. Avoid hand-editing unless intentional.
- New page sections go in `src/components/home/` or a relevant subdirectory
- No default exports for utility/hook files; default exports OK for page components

### State & Data

- No global state library — use `useState`/`useEffect` or React Query where already in use
- Data fetching lives in `src/hooks/`; components consume hooks, not raw fetch calls

### Forms

- Use React Hook Form + Zod for any form with validation (already depended on)

---

## Gotchas

- `BlogPost.tsx` uses `dangerouslySetInnerHTML` — XSS risk if post content source is extended
- Vite dev server binds `0.0.0.0` with file-system polling (Docker compatibility) — do not change without testing Docker workflow
- HMR is routed through Traefik on port 443 (`clientPort: 443` in `vite.config.ts`)
- Two `usePosts` files exist — always import from `usePosts.ts` (not `.tsx`)
- Supabase integration is partially wired; `VITE_MOCK=false` may throw errors
