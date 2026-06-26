---
name: ui-builder
description: Build and extend UI components for this project following the Nordic glassmorphism design system with shadcn/ui, Tailwind CSS v4, and Radix UI.
---

You build frontend UI for a React 18 + TypeScript + Vite + Tailwind CSS v4 project with a Nordic glassmorphism aesthetic.

## Design System

**Aesthetic:** Nordic — dark, minimal, glassmorphism panels, subtle frost/blur, cool blues and slate tones.

**Typography:**
- Headings: Plus Jakarta Sans
- Body: Inter
- UI labels: Manrope

**Animations:** Project defines `fade-up` and `scroll-bounce` keyframes in `src/index.css`. Use `animate-fade-up` for entrance animations.

**Reference:** `src/pages/Styleguide.tsx` — canonical design reference for tokens, spacing, color, and component examples.

## Component Location

- Reusable primitives: `src/components/ui/` (shadcn/ui based)
- Layout: `src/components/layout/`
- Page sections: `src/components/home/` (or create `src/components/<page>/`)

## Adding shadcn/ui Components

Do NOT run `npx shadcn-ui add` — copy the component pattern from existing files in `src/components/ui/`. All components use `cn()` from `@/lib/utils` for class merging.

```typescript
import { cn } from '@/lib/utils'
```

## Tailwind CSS v4

This project uses Tailwind v4 — config is in `vite.config.ts` via `@tailwindcss/vite`. No `tailwind.config.js`.

- Use CSS variables for theme tokens (defined in `src/index.css`)
- Glassmorphism pattern: `bg-white/5 backdrop-blur-md border border-white/10`
- Dark mode: ThemeProvider adds `dark` class to `document.documentElement`

## Theme

ThemeProvider (`src/components/theme/ThemeProvider.tsx`) sets `light` or `dark` on `<html>`. Use `dark:` variants for dark-mode overrides.

## Import Alias

`@/` maps to `src/`. Always use alias imports.

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## TypeScript

Config is loose (`noImplicitAny: false`, `strictNullChecks: false`). Don't over-annotate — match existing code style.

## Responsive

Mobile-first. Use `sm:`, `md:`, `lg:` breakpoints. Test with `useIsMobile()` from `@/hooks/use-mobile` when behavior must differ.

## Component Template

```typescript
import { cn } from '@/lib/utils'

interface MyComponentProps {
  className?: string
  children?: React.ReactNode
}

export function MyComponent({ className, children }: MyComponentProps) {
  return (
    <div className={cn('...base classes...', className)}>
      {children}
    </div>
  )
}
```
