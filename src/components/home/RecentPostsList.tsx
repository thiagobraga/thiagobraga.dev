import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '@/lib/mock/posts';

interface RecentPostsListProps {
  posts: Post[];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7)  return `${diffDays} days ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const CATEGORY_COLORS: Record<string, string> = {
  DevOps:   'text-nord8',
  Security: 'text-nord15',
  Cloud:    'text-nord14',
  Dev:      'text-nord9',
};

const RecentPostsList: React.FC<RecentPostsListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="font-headline text-xl font-bold text-nord6 mb-8">
        <span className="opacity-60 font-light">Recent</span> Posts
      </h3>

      <ul className="flex flex-col divide-y divide-nord3/20 flex-1">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="group flex items-baseline gap-5 py-4 hover:bg-nord1/40 px-3 -mx-3 rounded-lg transition-all"
            >
              {/* Date */}
              <span className="shrink-0 font-label text-xs text-nord4/40 font-bold w-20 text-right">
                {formatDate(post.published_at)}
              </span>
              {/* Title */}
              <div className="min-w-0">
                <span
                  className={`text-[9px] font-black uppercase tracking-widest mr-2 ${CATEGORY_COLORS[post.category] ?? 'text-nord8'}`}
                >
                  {post.category}
                </span>
                <span className="font-headline font-semibold text-nord4/90 text-sm group-hover:text-nord8 transition-colors leading-snug">
                  {post.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/blog"
        className="inline-flex items-center gap-2 mt-8 text-xs font-black uppercase tracking-widest text-nord8 hover:gap-4 transition-all"
      >
        See all posts
        <span className="material-symbols-outlined text-sm">east</span>
      </Link>
    </div>
  );
};

export default RecentPostsList;
