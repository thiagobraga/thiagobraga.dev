
import React from 'react';
import { Link } from 'react-router-dom';

// Types for posts
interface Post {
  id: number;
  title: string;
  excerpt?: string;
  image_url?: string;
  date?: string;
  author?: string;
  category?: string;
  published_at?: string;
}

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-light mb-4">Latest from the <strong>Blog</strong></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                <div className="mt-3 text-xs text-gray-500">
                  {post.published_at ? new Date(post.published_at).toLocaleDateString() : ''}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
