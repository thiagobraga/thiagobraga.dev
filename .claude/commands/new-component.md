Scaffold a new React component following project conventions.

Usage: `/project:new-component ComponentName` or `/project:new-component path/to/ComponentName`

## Steps

1. Parse `$ARGUMENTS`:
   - If it contains a `/`, use as-is relative to `src/`: e.g. `home/HeroSection` → `src/components/home/HeroSection.tsx`
   - Otherwise place in `src/components/`: e.g. `MyCard` → `src/components/MyCard.tsx`

2. Read a similar existing component to match style (e.g. `src/components/home/FeaturedPosts.tsx`)

3. Create the file with:
   ```tsx
   interface ComponentNameProps {
     // define props here
   }

   export function ComponentName({ }: ComponentNameProps) {
     return (
       <div>
         {/* content */}
       </div>
     )
   }
   ```

4. Follow these conventions:
   - **Named export** (not default)
   - **`@/` alias** for all imports — never relative `../../`
   - **Tailwind classes only** — no inline styles, no CSS modules
   - **TypeScript props interface** — even if empty to start
   - **Glassmorphism pattern** for card-like UI: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl`
   - **Nordic palette**: slate/zinc grays, muted blues, avoid bright saturated colors
   - **Animation**: use `fade-up` class or Tailwind `animate-` utilities if the component is above the fold

5. Ask if the user wants a test file created at `src/components/ComponentName.test.tsx`

## Design system reference

See `src/pages/Styleguide.tsx` for the full design token reference.
