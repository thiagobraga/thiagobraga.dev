import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '@/hooks/usePosts';
import FeaturedPostsList from './FeaturedPostsList';
import RecentPostsList from './RecentPostsList';

const CATEGORY_COLORS: Record<string, string> = {
  DevOps: 'text-nord8',
  Security: 'text-nord15',
  Cloud: 'text-nord14',
  Dev: 'text-nord9',
};

const CARD_HOVER_COLORS: Record<string, string> = {
  DevOps: 'group-hover:text-nord8',
  Security: 'group-hover:text-nord15',
  Cloud: 'group-hover:text-nord14',
  Dev: 'group-hover:text-nord9',
};

const READ_MORE_COLORS: Record<string, string> = {
  DevOps: 'hover:text-nord8',
  Security: 'hover:text-nord15',
  Cloud: 'hover:text-nord14',
  Dev: 'hover:text-nord9',
};

function formatShortDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

const BlogSection: React.FC = () => {
  const { recentPosts, featuredPosts, loading } = usePosts();

  // Top 3 cards matching Stitch design exactly
  const topCards = recentPosts.slice(0, 3);

  return (
    <section id="blog" className="py-32 px-6 md:px-20 bg-nord0">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <h2 className="font-mono text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-16">
          <code className="section-heading-code">
            <span className="opacity-70 font-light">GET</span> <b>/posts</b>
            <br/>
          </code>
        </h2>

        {/* ── Stitch-style top 3 cards ── */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`bg-nord1 rounded-2xl border border-nord3/30 p-8 animate-pulse ${i === 1 ? 'sm:row-span-2' : ''} h-48`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {topCards.map((post, idx) => {
              const hoverColor = CARD_HOVER_COLORS[post.category] ?? 'group-hover:text-nord8';
              const readMoreColor = READ_MORE_COLORS[post.category] ?? 'hover:text-nord8';
              const categoryColor = CATEGORY_COLORS[post.category] ?? 'text-nord8';
              return (
                <div
                  key={post.id}
                  className={[
                    'group bg-nord1 rounded-2xl border border-nord3/30 p-8 hover:bg-nord2 transition-colors',
                    idx === 0 ? 'sm:row-span-2 lg:row-span-1' : '',
                  ].join(' ')}
                >
                  <div className="flex justify-between items-center mb-10">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${categoryColor}`}>
                      {post.category}
                    </span>
                    <span className="font-label text-xs text-nord4/75">
                      {formatShortDate(post.published_at)}
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
                    className={`inline-flex items-center gap-2 text-sm font-bold text-nord6 transition-colors ${readMoreColor}`}
                  >
                    Read more
                    <span className="material-symbols-outlined text-xs">east</span>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Extended split view: Recent + Featured ── */}
        <div className="mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Recent Posts (left) */}
            <RecentPostsList posts={recentPosts} />
            {/* Featured Posts (right) */}
            <FeaturedPostsList posts={featuredPosts} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
