import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '@/lib/mock/posts';

interface FeaturedPostsListProps {
  posts: Post[];
}

const CATEGORY_COLORS: Record<string, string> = {
  DevOps:   'text-nord8',
  Security: 'text-nord15',
  Cloud:    'text-nord14',
  Dev:      'text-nord9',
};

const FeaturedPostsList: React.FC<FeaturedPostsListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="font-headline text-xl font-bold text-nord6 mb-8">
        <span className="opacity-60 font-light">Featured</span> Posts
      </h3>

      <div className="flex flex-col gap-6 flex-1">
        {posts.slice(0, 4).map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group flex gap-5 items-start p-5 rounded-xl bg-nord1 border border-nord3/30 hover:bg-nord2 hover:border-nord8/30 transition-all"
          >
            {/* Thumbnail */}
            {post.image_url && (
              <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            )}
            <div className="min-w-0">
              <span className={`text-[10px] font-black uppercase tracking-widest ${CATEGORY_COLORS[post.category] ?? 'text-nord8'}`}>
                {post.category}
              </span>
              <h4 className="font-headline font-semibold text-nord6 text-sm leading-snug mt-1 group-hover:text-nord8 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-nord4/60 text-xs mt-2 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/blog"
        className="inline-flex items-center gap-2 mt-8 text-xs font-black uppercase tracking-widest text-nord8 hover:gap-4 transition-all"
      >
        See all featured
        <span className="material-symbols-outlined text-sm">east</span>
      </Link>
    </div>
  );
};

export default FeaturedPostsList;
