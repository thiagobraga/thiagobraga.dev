Review changed files in this project for code quality, consistency, and issues.

## Steps

1. Run `git diff HEAD` and `git diff --staged` to see all changes
2. Run `git status` to list untracked files
3. Analyze each changed file for:
   - **TypeScript**: Type safety, unused imports, any casts that could be avoided
   - **React**: Hook dependency arrays, missing keys, unnecessary re-renders
   - **Security**: XSS risks (especially `dangerouslySetInnerHTML` in BlogPost page), unvalidated inputs
   - **Conventions**: Named exports, `@/` alias imports (not relative `../../`), Tailwind classes (no inline styles)
   - **Design**: Glassmorphism and Nordic aesthetic consistency in UI components
   - **Accessibility**: Missing `alt` text, poor contrast, missing ARIA labels
   - **Dead code**: Unused variables, commented-out blocks, duplicate logic

4. Check if `src/hooks/usePosts.tsx` (old) is being modified — prefer `src/hooks/usePosts.ts`

5. Report findings grouped by severity:
   - 🔴 **Critical**: Security issues, broken logic
   - 🟡 **Warning**: Convention violations, potential bugs
   - 🟢 **Suggestion**: Style, readability, minor improvements

If `$ARGUMENTS` is provided, focus review on that specific file or directory.
