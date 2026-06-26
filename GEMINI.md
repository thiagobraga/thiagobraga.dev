# GEMINI.md — thiagobraga.dev

Personal blog/portfolio SPA. Nordic aesthetic, glassmorphism, dark-only. Built with React 18 + TypeScript + Vite + Tailwind CSS v4.

## Quick Start

```bash
bun install
bun run dev       # Vite dev server → http://localhost:5173
bun run build     # Production build
bun run lint      # ESLint check
bun run preview   # Preview production build locally
```

**Docker:** `docker compose up -d`

## Commands

| Command | What it does |
|---------|-------------|
| `bun run dev` | Vite on port 5173 (binds 0.0.0.0, polling, HMR on 443) |
| `bun run build` | Vite production build → `dist/` |
| `bun run lint` | ESLint with typescript-eslint + react-hooks |
| `bun run preview` | Serve `dist/` locally |

## Tests

No test infrastructure. No vitest, jest, or test files exist.

## Architecture

```
src/
├── main.tsx                   # Entry point
├── App.tsx                    # Router + providers + layouts
├── App.css / index.css        # Global styles + Tailwind v4 theme
├── components/
│   ├── home/                  # HeroSection, FeaturedPosts, RecentPosts, etc.
│   ├── layout/                # Navbar, Footer
│   ├── theme/                 # ThemeProvider, ThemeToggle
│   └── ui/                   # ~60 shadcn/ui components (Radix UI + Tailwind)
├── data/
│   └── timeline.ts
├── hooks/
│   ├── usePosts.ts            # Main data hook (prefer .ts over .tsx)
│   ├── usePosts.tsx           # Older version — do not use
│   └── use-mobile.tsx
├── integrations/
│   └── supabase/              # client.ts, types.ts
├── lib/
│   ├── mock/posts.ts          # Mock data + Post type
│   └── utils.ts               # cn() helper
└── pages/
    ├── Index.tsx
    ├── Blog.tsx
    ├── BlogPost.tsx
    ├── Timeline.tsx
    ├── Author.tsx
    ├── Styleguide.tsx
    ├── NotFound.tsx
    └── admin/                 # Login, Dashboard, PostEditor
```

## Routing & Layouts

Two layout wrappers in `src/App.tsx`:

**MainLayout** — Navbar + main + Footer
- `/` → Index
- `/blog` → Blog
- `/blog/:id` → BlogPost
- `/timeline` → Timeline
- `/author/:id` → Author
- `/styleguide` → Styleguide

**AdminLayout** — main only (no nav/footer)
- `/admin` → Login
- `/admin/dashboard` → Dashboard
- `/admin/post/new` → PostEditor
- `/admin/post/:id` → PostEditor

**Providers (outermost → innermost):** `QueryClientProvider` → `ThemeProvider` → `TooltipProvider` → `BrowserRouter` → `Toaster` (shadcn + Sonner)

## Data Layer

**Toggle mock vs live with `VITE_MOCK` env flag** (see `.env.example`):

```env
VITE_MOCK=true   # default — uses src/lib/mock/posts.ts, no network
VITE_MOCK=false  # fetches from Supabase (not fully wired — throws errors)
```

**Main hook:** `src/hooks/usePosts.ts`
- Returns `{ featuredPosts, recentPosts, loading, error }`
- Reads `VITE_MOCK` flag internally

**Post type** (`src/lib/mock/posts.ts`):
```typescript
interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
  image_url?: string;
  featured?: boolean;
}
```

**Supabase:** `src/integrations/supabase/client.ts` — only active when `VITE_MOCK=false`.

**TanStack Query** is installed but data fetching uses plain `useState`/`useEffect` in `usePosts`.

## Design System

**Theme:** Nord color palette, forced dark mode (`color-scheme: dark` on `html`).

**Defined in `src/index.css` via Tailwind v4 `@theme` block:**
- Nord tokens: `nord0`–`nord15` + semantic aliases (`surface`, `primary`, `secondary`, `tertiary`)
- HSL tokens for shadcn/ui (`background`, `foreground`, `card`, `border`, `sidebar`, etc.)
- Animations: `fade-in`, `fade-up`, `scroll-bounce`, `accordion-down/up`
- Custom utilities: `.glass`, `.ghost-border`, `.section-dim`, `.gradient-primary-secondary`, `.text-gradient-nord`

**Fonts:**
- Plus Jakarta Sans — headlines
- Inter — body
- Manrope — labels
- Playfair Display — serif accents

**Icons:** Material Symbols (variable font)

See `src/pages/Styleguide.tsx` for full design reference.

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Routing, layouts, providers |
| `src/index.css` | Tailwind v4 theme, Nord palette, animations |
| `src/hooks/usePosts.ts` | Post data fetching + mock/live toggle |
| `src/lib/mock/posts.ts` | Mock posts + Post type definition |
| `src/integrations/supabase/client.ts` | Supabase config |
| `src/pages/Styleguide.tsx` | Design system reference |
| `vite.config.ts` | Build config, `@/` alias, dev server |
| `.env.example` | Environment variable reference |

## Coding Conventions

- **Path alias:** `@/` maps to `src/` (configured in `vite.config.ts` + `tsconfig.json`)
- **TypeScript:** Loose settings — `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`
- **No tests** — no testing framework installed
- **shadcn/ui components** in `src/components/ui/` — generated, avoid heavy edits
- **XSS risk:** `BlogPost.tsx` uses `dangerouslySetInnerHTML` — do not extend without sanitization
- **HMR port 443** — configured for reverse proxy (Traefik/HTTPS); don't change without updating proxy config
- **usePosts.tsx** exists but is the older version — always use `usePosts.ts`
- **ESLint:** `@typescript-eslint/no-unused-vars` disabled; react-hooks rules enforced
- **No comments by default** — only add when the WHY is non-obvious
