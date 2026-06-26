Run the test suite and report results.

## Steps

1. Run `bun run test:run` (headless, single pass)
2. Parse output:
   - Report pass/fail counts
   - Show each failing test with its error message and file location
   - For each failure, read the relevant source file and suggest a fix

3. If `$ARGUMENTS` is provided, run only matching tests:
   ```bash
   bunx vitest run $ARGUMENTS
   ```

4. After reporting failures, ask if the user wants to:
   - See coverage: `bun run coverage`
   - Open the Vitest UI: `bun run test:ui`
   - Fix the failing tests

## Test file conventions

- Test files: `src/**/*.test.tsx` or `src/**/*.test.ts`
- Setup: `src/test/setup.ts` (jest-dom matchers auto-imported)
- Vitest globals enabled — no need to import `describe`, `it`, `expect`
- jsdom environment — DOM APIs available
