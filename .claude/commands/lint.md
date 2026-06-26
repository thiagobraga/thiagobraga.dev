Run ESLint and report issues.

## Steps

1. Run `bun run lint` (ESLint flat config, TypeScript + React hooks + React refresh rules)
2. Parse output and categorize errors vs warnings
3. Report a summary: total errors, total warnings, files affected
4. Show the top issues grouped by rule name

5. Ask the user if they want to autofix:
   - If yes, run `bunx eslint . --fix`
   - Then re-run lint to show what remains (autofixable issues resolved, manual ones remain)
   - Read and show any files that still have errors

## Notes

- Config: `eslint.config.js` (flat config format)
- No Prettier — ESLint only
- React hooks rules enforce dependency arrays — do not ignore these
- If `$ARGUMENTS` is provided, lint only that path: `bunx eslint $ARGUMENTS`
