# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

```bash
bun install
bun run dev       # Vite on http://localhost:5173
bun run build     # Production build
bun run lint      # ESLint check
bun run preview   # Preview production build locally
```

**Docker alternative:** `docker compose up -d`

## Testing

**Stack:** Vitest + Testing Library + jsdom

```bash
bun test           # Watch mode
bun run test:run   # Run once (CI)
bun run test:ui    # Browser UI
bun run coverage   # Coverage report
```

Test files: `src/**/*.test.tsx` or `src/**/*.test.ts`
Setup: `src/test/setup.ts` (imports jest-dom matchers)

## Architecture Overview

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4

**Entry:** `src/main.tsx` → `src/App.tsx`

### Routing & Layouts

Two layout patterns in `src/App.tsx`:

1. **MainLayout** — Navbar/Footer for public routes: `/`, `/blog`, `/blog/:slug`, `/timeline`, `/styleguide`, `/author`
2. **AdminLayout** — No header/footer: `/admin/login`, `/admin/dashboard`, `/admin/editor`

### Data Layer

**Mock/Live toggle via `VITE_MOCK` env flag** (see `.env.example`):
- `VITE_MOCK=true` — uses `src/lib/mock/posts.ts` (no network, default)
- `VITE_MOCK=false` — fetches from Supabase (not yet fully wired — throws error)

**Main hook:** `src/hooks/usePosts.ts` — returns `{ featuredPosts, recentPosts, loading, error }`
- Note: `src/hooks/usePosts.tsx` also exists (older version) — prefer `.ts`

**Supabase client** at `src/integrations/supabase/client.ts`; types at `src/integrations/supabase/types.ts`. Only needed when `VITE_MOCK=false`.

**No react-query** — data fetching uses plain `useState`/`useEffect`.

### UI & Components

- `src/components/ui/` — shadcn/ui components (Radix UI + Tailwind)
- `src/components/layout/` — Navbar, Footer
- `src/components/theme/` — ThemeProvider (toggles `light`/`dark` class on `document.documentElement`), ThemeToggle
- `src/components/home/` — FeaturedPosts, RecentPosts, HeroSection

### Key Conventions

- `@/` alias maps to `src/` (vite.config.ts + tsconfig.json)
- TypeScript is loose (`noImplicitAny: false`, `strictNullChecks: false`)
- `BlogPost` page uses `dangerouslySetInnerHTML` — XSS risk if extended
- Vite server binds `0.0.0.0` with polling (Docker-compatible), HMR on port 443

## Design System

Nordic aesthetic, glassmorphism, animations (`fade-up`, `scroll-bounce`), typography: Plus Jakarta Sans, Inter, Manrope. See `src/pages/Styleguide.tsx`.

## Files to Reference

- `src/App.tsx` — routing, layouts
- `src/hooks/usePosts.ts` — post fetching, mock/live toggle
- `src/lib/mock/posts.ts` — mock data shape and Post type
- `src/integrations/supabase/client.ts` — Supabase config
- `vite.config.ts` — build config, aliases, dev server
