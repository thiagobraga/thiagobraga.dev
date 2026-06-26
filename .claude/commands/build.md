Build the project for production and report results.

## Steps

1. Run `bun run build` (Vite production build)
2. Report:
   - Success or failure
   - Any TypeScript errors (these block the build)
   - Bundle size per chunk (look for chunks > 500KB — Vite warns about these)
   - Total build time

3. If the build fails:
   - Show the exact error with file and line
   - Read the failing file and diagnose the issue
   - Suggest a fix

4. If the build succeeds and `$ARGUMENTS` includes `preview`:
   - Run `bun run preview` to serve the production build locally
   - URL: `http://localhost:4173`

## Notes

- Config: `vite.config.ts`
- `@/` alias maps to `src/`
- Output: `dist/` directory
- TypeScript: loose config (`noImplicitAny: false`, `strictNullChecks: false`) — type errors that still appear are real
