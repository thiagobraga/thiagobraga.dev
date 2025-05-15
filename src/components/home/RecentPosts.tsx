
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Types for posts
interface Post {
  id: number;
  title: string;
  published_at?: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div>
      <h3 className="text-3xl font-light mb-4">More <strong>Articles</strong></h3>
      <ul className="divide-y">
        {posts.map((post) => (
          <li key={post.id} className="py-3">
            <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
              <div className="flex justify-between items-center">
                <span>{post.title}</span>
                <span className="text-sm text-gray-500">
                  {post.published_at ? new Date(post.published_at).toLocaleDateString() : ''}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to="/blog">
          <Button>View All Posts</Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentPosts;
