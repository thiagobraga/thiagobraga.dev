---
name: new-page
description: Scaffold a new routed page component and register it in App.tsx with the correct layout
---

## When to use this skill

Trigger when the user says any of:
- "add a new page", "create a page", "new route", "add a route"
- "create a /something page"
- Mentions adding to `src/pages/` or `src/App.tsx`

## Context

Routing in `src/App.tsx`. Two layout wrappers:
- **`MainLayout`** — wraps with `<Navbar />` and `<Footer />`. All public-facing pages.
- **`AdminLayout`** — bare `<main>` only. All `/admin/*` routes.

Public page components: `src/pages/`. Admin pages: `src/pages/admin/`.
Routing: `react-router-dom` v6 `<Routes>/<Route>` (no data router / loaders).

## Workflow

1. **Confirm route path and layout.** Public → `MainLayout`, admin → `AdminLayout`.

2. **Create page component** at `src/pages/<PageName>.tsx` (or `src/pages/admin/<PageName>.tsx`).

3. **Register in `App.tsx`:**
   - Add import in the matching block (public vs admin).
   - Add `<Route>` in the correct layout wrapper.

4. **Add Navbar link if needed** in `src/components/layout/Navbar.tsx` → `NAV_LINKS` array.

5. **Verify.** Run `bun run lint`. Navigate to the route in `bun run dev`.

## Page component template (public)

```tsx
import React, { useEffect } from 'react';

const <PageName>: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-nord0 pt-32 pb-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        <header className="mb-20">
          <span className="font-label text-xs text-nord9 uppercase tracking-[0.4em] font-black block mb-6">
            Page category
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-6">
            <span className="opacity-70 font-light">Light part</span> <b>Bold part</b>
          </h1>
          <p className="text-xl text-nord4/80 max-w-2xl leading-relaxed">
            Supporting description.
          </p>
        </header>

        {/* Page content */}

      </div>
    </div>
  );
};

export default <PageName>;
```

## Route registration in App.tsx

In the `{/* Main site routes */}` block:
```tsx
import <PageName> from "./pages/<PageName>";

<Route
  path="/<kebab-path>"
  element={
    <MainLayout>
      <<PageName> />
    </MainLayout>
  }
/>
```

Dynamic segment pattern:
```tsx
<Route
  path="/items/:id"
  element={
    <MainLayout>
      <ItemDetail />
    </MainLayout>
  }
/>
```
Access param with `useParams<{ id: string }>()`.

## Design conventions

### Public page layout
- Root: `min-h-screen bg-nord0 pt-32 pb-24 px-6 md:px-20`
- Reading-heavy pages: `max-w-4xl mx-auto`
- Wide-layout pages: `max-w-7xl mx-auto`

### Page header pattern (from Timeline.tsx, Styleguide.tsx)
```tsx
<header className="mb-20">
  <span className="font-label text-xs text-nord9 uppercase tracking-[0.4em] font-black block mb-6">
    Eyebrow label
  </span>
  <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-6">
    <span className="opacity-70 font-light">Light part</span> <b>Bold part</b>
  </h1>
  <p className="text-xl text-nord4/80 max-w-2xl leading-relaxed">
    Supporting description.
  </p>
</header>
```

### Background decorations (optional, use sparingly — max 2–3 blur orbs)
Requires `relative overflow-hidden` on root div, `relative z-10` on content wrapper:
```tsx
<div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-nord1/50 to-transparent pointer-events-none" />
<div className="absolute top-40 -left-64 w-96 h-96 bg-nord8/5 rounded-full blur-[100px] pointer-events-none" />
```

### `window.scrollTo` on mount
Every standalone page MUST call `window.scrollTo({ top: 0, behavior: 'auto' })` in a `useEffect` with empty deps. Prevents React Router from preserving scroll position on navigation.

## Admin page conventions

- No `pt-32` (no Navbar)
- Background: `bg-nord0 min-h-screen`
- Register under `{/* Admin routes */}` in `App.tsx` with `<AdminLayout>`
- Auth checking not yet wired — add TODO comment if needed
