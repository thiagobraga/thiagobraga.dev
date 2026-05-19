---
name: nord-audit
description: Audit a component or page for Nordic design system compliance and fix all violations
---

## When to use this skill

Trigger when the user says any of:
- "audit the design", "check design consistency", "nord audit", "fix the styling"
- "this doesn't look right", "the design is off"
- After scaffolding a new component to verify compliance
- When a component uses `bg-white`, `text-gray-*`, `bg-black`, raw hex values
- Whenever `$ARGUMENTS` points to a file in `src/components/` or `src/pages/`
- When reviewing any PR touching `.tsx` UI files

## Context

Nord palette reference — ALL UI colors must use these tokens:

| Token  | Hex     | Role                                   |
|--------|---------|----------------------------------------|
| nord0  | #2E3440 | Page backgrounds, deepest dark         |
| nord1  | #3B4252 | Section backgrounds, card bg           |
| nord2  | #434C5E | Card hover bg, overlay bg             |
| nord3  | #4C566A | Borders, dividers, muted elements     |
| nord4  | #D8DEE9 | Body text, secondary text             |
| nord5  | #E5E9F0 | Lighter text (rare)                   |
| nord6  | #ECEFF4 | Primary text, headings                |
| nord7  | #8FBCBB | Frost accent (teal, rare)             |
| nord8  | #88C0D0 | PRIMARY — links, active states        |
| nord9  | #81A1C1 | SECONDARY — secondary links           |
| nord10 | #5E81AC | Frost deep — borders, blockquotes     |
| nord11 | #BF616A | Error / destructive                   |
| nord12 | #D08770 | Warning / aurora orange               |
| nord13 | #EBCB8B | CTA / aurora yellow — primary buttons |
| nord14 | #A3BE8C | Success / Cloud category              |
| nord15 | #B48EAD | Security category / aurora purple     |

Raw hex values are ONLY acceptable in `src/index.css` and styleguide data arrays.

## Workflow

1. **Read the target file(s).** If `$ARGUMENTS` provided, audit those. Otherwise audit recently changed `.tsx` files via `git diff --name-only`.

2. **Run the violation checklist** below.

3. **Fix all violations** in a single edit pass per file.

4. **Re-read the patched file** to verify no violations remain.

5. **Report** a summary of what was changed.

## Violation checklist

### Critical (fix immediately)
- [ ] Raw hex in className or style props (`color: '#2E3440'`, `bg-[#2E3440]`)
- [ ] `bg-white`, `text-white`, `bg-black`, `text-black` → replace with Nord equivalent
- [ ] `text-gray-*`, `bg-gray-*` → replace with Nord token
- [ ] `border-gray-*` → replace with `border-nord3/30` or `border-nord3/40`
- [ ] Lucide icons used decoratively in homepage sections (use Material Symbols Outlined)
- [ ] `style={{ color: '...' }}` → must use Tailwind class, never inline style for color

### Warning (fix before shipping)
- [ ] Wrong font class: headings not using `font-headline`, labels/UI not using `font-label`
- [ ] Section missing `id` attribute on root `<section>` element
- [ ] Section root not using `px-6 md:px-20` horizontal padding
- [ ] Section inner wrapper not using `max-w-7xl mx-auto`
- [ ] Card missing `transition-all` or `transition-colors` on hover state
- [ ] `text-nord4` without opacity modifier (body text → `text-nord4/80` or `text-nord4/70`)
- [ ] Image without `alt` text
- [ ] `rounded-md` used for cards → `rounded-2xl` or `rounded-3xl`

### Suggestion (note, do not auto-fix)
- [ ] Two consecutive `bg-nord0` sections without `border-y border-nord3/20` separator
- [ ] Section header missing the light/bold split title pattern
- [ ] Category badge not using: `px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${colorClass}`
- [ ] Decorative divs missing `pointer-events-none`

## Common replacement patterns

| Wrong                | Correct                     |
|----------------------|-----------------------------|
| `bg-white`           | `bg-nord1` or `bg-nord2`   |
| `text-white`         | `text-nord6`                |
| `text-gray-500`      | `text-nord4/60`             |
| `text-gray-400`      | `text-nord4/40`             |
| `border-gray-200`    | `border-nord3/30`           |
| `bg-gray-900`        | `bg-nord0`                  |
| `bg-gray-800`        | `bg-nord1`                  |
| `rounded-lg` (cards) | `rounded-2xl`               |
| `shadow-md` (cards)  | `shadow-xl shadow-nord8/5`  |

## Glass utility

The `.glass` utility (defined in `src/index.css`) is the ONLY correct way to apply glassmorphism:
```css
.glass {
  background-color: rgba(59, 66, 82, 0.6);  /* nord1/60 */
  backdrop-filter: blur(24px);
  border: 1px solid rgba(76, 86, 106, 0.3); /* nord3/30 */
}
```

Never recreate glassmorphism inline. Use `className="glass rounded-2xl"`.

## Known violation file

`src/pages/Blog.tsx` uses `bg-white rounded-lg` and `text-gray-600` throughout — a direct violation. When touching that file, apply the replacement table above and also migrate its direct Supabase calls to use `usePosts()` from `@/hooks/usePosts`.
