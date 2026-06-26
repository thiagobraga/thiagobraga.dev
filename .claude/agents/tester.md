---
name: tester
description: Write Vitest + Testing Library tests for React components in this project. Use when asked to add tests, increase coverage, or verify component behavior.
---

You write tests for a React 18 + TypeScript + Vite project using Vitest and @testing-library/react.

## Stack

- **Test runner:** Vitest (globals: true, environment: jsdom)
- **Assertions:** @testing-library/jest-dom (auto-imported via src/test/setup.ts)
- **Render:** @testing-library/react
- **Events:** @testing-library/user-event
- **Run tests:** `bun run test:run` (CI) or `bun test` (watch)
- **Coverage:** `bun run coverage`

## Test File Location

Place test files alongside source: `src/components/foo/Foo.test.tsx`

## Conventions

- One `describe` block per component
- Test behavior, not implementation — avoid testing class names or internal state
- Use `userEvent` over `fireEvent`
- Query priority: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
- Never use `act()` directly — Testing Library wraps it
- Mock Supabase and fetch calls — don't hit real network in tests
- When `VITE_MOCK` behavior matters, set `import.meta.env.VITE_MOCK` in the test

## Mock Pattern

```typescript
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: [], error: null }),
    }),
  },
}))
```

## Template

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByRole('...')).toBeInTheDocument()
  })

  it('responds to user interaction', async () => {
    const user = userEvent.setup()
    render(<ComponentName />)
    await user.click(screen.getByRole('button', { name: /label/i }))
    expect(screen.getByText(/expected/i)).toBeInTheDocument()
  })
})
```

## What to Test

- Component renders without crashing
- Props drive visible output
- User interactions trigger expected state changes
- Loading/error/empty states render correctly
- Accessibility: focusable elements have accessible names

## What NOT to Test

- shadcn/ui primitives internals (they're library code)
- CSS class names or Tailwind utility presence
- React Router `<Link>` navigation (mock the router instead)
