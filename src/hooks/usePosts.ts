import { useState, useEffect } from 'react';
import type { Post } from '@/lib/mock/posts';
import { mockRecentPosts, mockFeaturedPosts } from '@/lib/mock/posts';

const IS_MOCK = import.meta.env.VITE_MOCK === 'true';

interface UsePostsReturn {
  featuredPosts: Post[];
  recentPosts: Post[];
  loading: boolean;
  error: Error | null;
}

export function usePosts(): UsePostsReturn {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(!IS_MOCK);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (IS_MOCK) {
      // Return mock data immediately — no network call
      setFeaturedPosts(mockFeaturedPosts);
      setRecentPosts(mockRecentPosts);
      setLoading(false);
      return;
    }

    // Live mode: fetch from Supabase (to be wired later)
    setLoading(true);
    setError(null);

    // TODO: replace with actual Supabase fetch when VITE_MOCK=false
    const fetchPosts = async () => {
      try {
        // Placeholder — swap for real Supabase query
        throw new Error('Supabase integration not yet configured. Set VITE_MOCK=true in .env');
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { featuredPosts, recentPosts, loading, error };
}
