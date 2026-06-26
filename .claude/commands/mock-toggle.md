Toggle the VITE_MOCK environment variable between mock and live Supabase data.

## Steps

1. Read `.env` (or `.env.local` if `.env` doesn't exist) to find the current `VITE_MOCK` value
   - If no `.env` exists, read `.env.example` to understand the expected format

2. Report current state:
   - `VITE_MOCK=true` → using mock data from `src/lib/mock/posts.ts`
   - `VITE_MOCK=false` → using live Supabase (may throw — see warning below)

3. If `$ARGUMENTS` is `on` or `true` → set `VITE_MOCK=true`
   If `$ARGUMENTS` is `off` or `false` → set `VITE_MOCK=false`
   If no argument → toggle the current value

4. Write the updated value to `.env`

5. Remind the user to **restart the dev server** for the change to take effect (Vite reads env at startup)

## Warning — live Supabase mode

> `VITE_MOCK=false` fetches from Supabase. The integration is not fully wired and may throw errors. Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set in `.env` before switching to live mode.

## Data sources

| Mode | Source |
|------|--------|
| `VITE_MOCK=true` | `src/lib/mock/posts.ts` — hardcoded array |
| `VITE_MOCK=false` | Supabase via `src/integrations/supabase/client.ts` |

Hook: `src/hooks/usePosts.ts` — reads `import.meta.env.VITE_MOCK` to decide which source to use.
