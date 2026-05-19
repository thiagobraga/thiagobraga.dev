---
name: add-mock-post
description: Add a new post entry to src/lib/mock/posts.ts following all project conventions
---

## When to use this skill

Trigger when the user says any of:
- "add a post", "add a blog post", "new post", "create a post entry"
- "add mock data", "add to mock posts"
- References `src/lib/mock/posts.ts`

## Context

Mock data lives in `src/lib/mock/posts.ts`. It exports two arrays:
- `mockRecentPosts: Post[]` — entries in descending date order, newest first
- `mockFeaturedPosts: Post[]` — 5–6 entries; some spread from recentPosts, some unique (IDs 11+)

The `Post` interface:
```typescript
export interface Post {
  id: number;           // always unique; recent uses 1-N; featured-only use 11+
  title: string;        // sentence case, no trailing period
  excerpt: string;      // 1–2 sentences; ends with period; no "In this post..."
  category: string;     // ENUM: "DevOps" | "Security" | "Cloud" | "Dev"
  published_at: string; // ISO 8601 full UTC: "2026-04-10T00:00:00Z"
  image_url?: string;   // optional; reference images in /public/images/
  featured?: boolean;   // only set on entries inside mockFeaturedPosts
}
```

## Workflow

1. **Read `src/lib/mock/posts.ts` first.** Never assume current IDs.

2. **Determine target array.** Ask (or infer) whether recent, featured, or both.

3. **Assign ID:**
   - Recent post: max ID in `mockRecentPosts` + 1
   - Featured-only: max ID across both arrays + 1
   - Both: add to `mockRecentPosts` first, then spread into `mockFeaturedPosts`

4. **Set `published_at`:** Use `"YYYY-MM-DDT00:00:00Z"`. Use today's date or user-specified date.

5. **Choose category:** Must be `DevOps | Security | Cloud | Dev`. Ask if unclear.

6. **Append at TOP of array** (newest first). Never sort after inserting.

7. **Featured spread pattern** — DO NOT duplicate the object:
   ```typescript
   { ...mockRecentPosts[0], featured: true }
   ```

8. **Verify:**
   - No duplicate IDs across both arrays
   - `mockFeaturedPosts` has 5–6 entries max
   - `image_url` references an existing file in `/public/images/`

## Code patterns

Recent post with image:
```typescript
{
  id: 13,
  title: 'Your Title Here',
  excerpt: 'Two-sentence excerpt that previews content clearly.',
  category: 'DevOps',
  published_at: '2026-05-19T00:00:00Z',
  image_url: '/images/project-sentinel.png',
},
```

Recent post without image:
```typescript
{
  id: 14,
  title: 'Your Title Here',
  excerpt: 'Single-sentence excerpt that is informative and punchy.',
  category: 'Security',
  published_at: '2026-05-10T00:00:00Z',
},
```

Featured-only post:
```typescript
{
  id: 15,
  title: 'Your Title Here',
  excerpt: 'Compelling summary for featured placement.',
  category: 'Cloud',
  published_at: '2026-05-01T00:00:00Z',
  image_url: '/images/project-nexus.png',
  featured: true,
},
```

## Category → Nord color mapping

| Category | Text class    | Hex     |
|----------|---------------|---------|
| DevOps   | `text-nord8`  | #88C0D0 |
| Security | `text-nord15` | #B48EAD |
| Cloud    | `text-nord14` | #A3BE8C |
| Dev      | `text-nord9`  | #81A1C1 |

New categories also require updating `CATEGORY_COLORS` in `src/components/home/BlogSection.tsx`.

## Conventions to enforce

- Never add `featured: true` to entries in `mockRecentPosts` — only in `mockFeaturedPosts`
- Keep `mockRecentPosts` in descending date order (newest first)
- `excerpt` must never start with "This post", "In this article", or "We will"
- Never use `new Date().toISOString()` in static data files
