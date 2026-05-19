---
name: blog-component
description: Build or fix blog post display components using the Post type, usePosts hook, and category color system
---

## When to use this skill

Trigger when the user says any of:
- "build a blog card", "create a post list", "post grid", "blog component"
- "fix the blog page", "update BlogSection", "refactor RecentPostsList"
- Any request involving rendering `Post` data in a new visual form
- When `Blog.tsx` needs updating to use mock data instead of direct Supabase calls

## Context

### Post type (canonical source: `src/lib/mock/posts.ts`)
```typescript
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;       // "DevOps" | "Security" | "Cloud" | "Dev"
  published_at: string;   // ISO 8601 UTC string
  image_url?: string;
  featured?: boolean;
}
```

Always import `Post` from `@/lib/mock/posts` — never redefine locally.

### The data hook (`src/hooks/usePosts.ts`)
```typescript
import { usePosts } from '@/hooks/usePosts';
const { featuredPosts, recentPosts, loading, error } = usePosts();
```
- Returns mock data immediately when `VITE_MOCK=true` (no loading state in mock mode)
- Always handle `loading` for live mode compatibility
- `error` is `Error | null` — always render an error state
- Call `usePosts()` at section/page level only, NOT in card components

### Category color system
```typescript
const CATEGORY_COLORS: Record<string, string> = {
  DevOps:   'text-nord8',
  Security: 'text-nord15',
  Cloud:    'text-nord14',
  Dev:      'text-nord9',
};
// Always use fallback:
const color = CATEGORY_COLORS[post.category] ?? 'text-nord8';
```

Badge background variant:
```typescript
const CATEGORY_BADGE_COLORS: Record<string, string> = {
  DevOps:   'bg-nord8/20 text-nord8 border-nord8/30',
  Security: 'bg-nord15/20 text-nord15 border-nord15/30',
  Cloud:    'bg-nord14/20 text-nord14 border-nord14/30',
  Dev:      'bg-nord9/20 text-nord9 border-nord9/30',
};
```

### Date formatting

**Relative (list views):**
```typescript
function formatDate(dateStr: string): string {
  const diffDays = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7)  return `${diffDays} days ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
```

**Short absolute (cards):**
```typescript
new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
```

## Workflow

1. **Determine component type.** List (vertical), card grid, featured hero, or full page listing?

2. **Scaffold using the correct pattern** from templates below.

3. **Import `Post` type** as `import type { Post } from '@/lib/mock/posts'`.

4. **Wire data at section/page level** — not inside card components.

5. **Add category color fallbacks** everywhere.

6. **If updating `Blog.tsx`**: migrate direct Supabase calls to `usePosts()`:
   ```typescript
   const { recentPosts: allPosts, loading } = usePosts();
   ```
   This respects the `VITE_MOCK` toggle.

## Component templates

### Blog card (grid item)
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '@/lib/mock/posts';

const CATEGORY_COLORS: Record<string, string> = {
  DevOps:   'text-nord8',
  Security: 'text-nord15',
  Cloud:    'text-nord14',
  Dev:      'text-nord9',
};

const CARD_HOVER_COLORS: Record<string, string> = {
  DevOps:   'group-hover:text-nord8',
  Security: 'group-hover:text-nord15',
  Cloud:    'group-hover:text-nord14',
  Dev:      'group-hover:text-nord9',
};

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const categoryColor = CATEGORY_COLORS[post.category] ?? 'text-nord8';
  const hoverColor = CARD_HOVER_COLORS[post.category] ?? 'group-hover:text-nord8';

  return (
    <div className="group bg-nord1 rounded-2xl border border-nord3/30 p-8 hover:bg-nord2 transition-all">
      <div className="flex justify-between items-center mb-10">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${categoryColor}`}>
          {post.category}
        </span>
        <span className="font-label text-xs text-nord4/50">
          {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
      <h3 className={`font-headline text-xl font-bold mb-5 transition-colors ${hoverColor}`}>
        {post.title}
      </h3>
      <p className="text-nord4/70 text-sm leading-relaxed mb-10 line-clamp-3">
        {post.excerpt}
      </p>
      <Link
        to={`/blog/${post.id}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-nord6 hover:text-nord8 transition-all"
      >
        Read more
        <span className="material-symbols-outlined text-xs">east</span>
      </Link>
    </div>
  );
};

export default PostCard;
```

### Loading skeleton (for grid)
```tsx
{loading ? (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-nord1 rounded-2xl border border-nord3/30 p-8 animate-pulse h-64" />
    ))}
  </div>
) : (
  // actual grid
)}
```

### Error state
```tsx
{error && (
  <div className="bg-nord11/10 border border-nord11/30 rounded-2xl p-8 text-nord11 font-label text-sm">
    <span className="material-symbols-outlined align-middle mr-2">error</span>
    {error.message}
  </div>
)}
```

### Empty state
```tsx
{!loading && posts.length === 0 && (
  <div className="text-center py-24">
    <span className="material-symbols-outlined text-nord3 text-5xl block mb-6">article</span>
    <p className="font-headline text-xl text-nord4/60">No posts found.</p>
  </div>
)}
```

## Conventions to enforce

- Import `Post` type: `import type { Post } from '@/lib/mock/posts'` (use `type` keyword)
- List components accept `posts: Post[]` as prop — never call `usePosts()` in card components
- Never use `bg-white` or `text-gray-*` (run `nord-audit` skill if found)
- "Read more" link: always `<Link to={`/blog/${post.id}`}>` (react-router-dom), never `<a href>`
- Excerpts in cards: always `line-clamp-3` or `line-clamp-2`
- Category display: always `uppercase tracking-widest text-[10px] font-bold` — never title case
- `Blog.tsx` bypasses `usePosts()` — migrate to `usePosts()` whenever touching that file
