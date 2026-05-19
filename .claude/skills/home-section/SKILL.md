---
name: home-section
description: Scaffold a new homepage section component matching the Nordic glassmorphism design system
---

## When to use this skill

Trigger when the user says any of:
- "add a section to the homepage", "new homepage section", "create a section"
- "add [SomeName]Section", "build a home section"
- Any request to extend `src/pages/Index.tsx` with a new visual block

## Context

Homepage sections live in `src/components/home/`. Each is a standalone React FC exported as default. `src/pages/Index.tsx` imports them and stacks them vertically — no props passed at page level unless data is needed.

**Existing sections and backgrounds:**
- `HeroSection` — `bg-nord0`, `min-h-screen`
- `AboutSection` — `bg-nord0`, `py-32`
- `ProjectsSection` — `bg-nord1/30`, `py-48`
- `TimelineSection` — `bg-nord0`, `py-32`
- `BlogSection` — `bg-nord0`, `py-32`
- `MusicSection` — `bg-nord1`, `py-32`, `border-y border-nord3/20`
- `PetsSection` — `bg-nord0`, `py-32`

Backgrounds must ALTERNATE between `bg-nord0` and `bg-nord1`. Two `bg-nord0` sections back-to-back require a `border-y border-nord3/20` separator.

## Workflow

1. **Confirm name and purpose.** File: `src/components/home/<Name>Section.tsx`

2. **Choose background.** Check `Index.tsx` and alternate from the preceding section.

3. **Assign section ID.** Root `<section>` must have `id="<lowercase-name>"` for Navbar anchor nav.

4. **Scaffold the file** using the template below.

5. **Register in `Index.tsx`.** Import and place at correct vertical position.

6. **Optional: add Navbar link** in `src/components/layout/Navbar.tsx`:
   ```typescript
   { label: 'SectionName', to: '/#<id>' }
   ```

7. **Verify.** Run `bun run lint` and check rendering in `bun run dev`.

## Component template

```tsx
import React from 'react';

interface <Name>Item {
  // define data shape here
}

const ITEMS: <Name>Item[] = [
  // static data — never inline JSX with raw strings
];

const <Name>Section: React.FC = () => {
  return (
    <section id="<id>" className="py-32 px-6 md:px-20 bg-nord0">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-nord3/30 pb-12">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6">
            <span className="opacity-70 font-light">Light</span> <b>Bold</b>
          </h2>
          <span className="font-label text-sm text-nord8 tracking-widest uppercase mb-2 font-bold">
            Section subtitle
          </span>
        </div>

        {/* Content */}

      </div>
    </section>
  );
};

export default <Name>Section;
```

## Design conventions

### Card variants (pick one, be consistent within the section)
- **Default card:** `bg-nord1 border border-nord3/30 rounded-2xl p-8 hover:bg-nord2 transition-all`
- **Glass card:** `glass rounded-2xl p-6` (`.glass` utility from `src/index.css`)
- **Highlight card:** `bg-nord2 border border-nord8/20 rounded-2xl p-6 shadow-xl shadow-nord8/5`

### Typography
- Section title: `font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6`
- Card title: `font-headline text-xl font-bold text-nord6`
- Body text: `text-nord4/80 leading-relaxed`
- Labels: `font-label text-[10px] font-black uppercase tracking-widest`

### Icons (decorative, homepage sections only)
```tsx
<span className="material-symbols-outlined text-nord8 text-2xl">icon_name</span>
```
Never use Lucide icons decoratively in homepage sections.

### Animations
- Entry: `animate-fade-up` on primary content container
- Scroll indicator: `animate-scroll-bounce` on chevrons
- Hover image: `hover:scale-105 transition-transform duration-700`
- Card hover: `transition-all` (no explicit duration)

### Spacing scale

| Use                       | Class              |
|---------------------------|--------------------|
| Section vertical padding  | `py-32` or `py-48` |
| Section horizontal padding| `px-6 md:px-20`   |
| Max content width         | `max-w-7xl mx-auto`|
| Card grid gap (3-col)     | `gap-10`           |
| Card grid gap (2-col)     | `gap-16`           |

## Conventions to enforce

- Section `id` must be `lowercase-kebab`, never `sectionName` or `SectionName`
- All static data arrays at module scope, above the component
- Props interfaces above the component
- Export is `export default` at the bottom (not inline)
- No `useEffect` + `useState` for static data
