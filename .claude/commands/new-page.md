Scaffold a new page and wire its route into App.tsx.

Usage: `/project:new-page PageName` or `/project:new-page admin/PageName`

## Steps

1. Parse `$ARGUMENTS`:
   - If it starts with `admin/` → AdminLayout (no Navbar/Footer), path `/admin/pagename`
   - Otherwise → MainLayout (with Navbar/Footer), path `/pagename`

2. Read `src/App.tsx` to understand the routing structure before editing

3. Create `src/pages/PageName.tsx`:
   ```tsx
   export default function PageName() {
     return (
       <div className="min-h-screen">
         <h1>PageName</h1>
       </div>
     )
   }
   ```
   - **Default export** for pages (React Router convention)
   - **No layout wrappers inside the page** — layout is applied in App.tsx

4. Add the route to `src/App.tsx`:
   - Import the page at the top with other page imports
   - Add `<Route path="/pagename" element={<PageName />} />` inside the correct layout block:
     - MainLayout block: public routes
     - AdminLayout block: admin routes

5. Report:
   - File created: `src/pages/PageName.tsx`
   - Route added: `App.tsx` line number
   - URL to visit: `http://localhost:5173/pagename`

## Routing reference

- `src/App.tsx` — all routes defined here
- MainLayout: Navbar + Footer wrapper for public pages
- AdminLayout: bare wrapper for `/admin/*` pages
