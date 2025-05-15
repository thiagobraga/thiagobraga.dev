
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

// Types for our posts
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

export const usePosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch featured posts (first 3)
        const { data: featuredData, error: featuredError } = await supabase
          .from('posts')
          .select('*')
          .order('published_at', { ascending: false })
          .limit(3);

        if (featuredError) throw featuredError;
        setFeaturedPosts(featuredData);

        // Fetch recent posts (next 6)
        const { data: recentData, error: recentError } = await supabase
          .from('posts')
          .select('id, title, published_at')
          .order('published_at', { ascending: false })
          .range(3, 8);

        if (recentError) throw recentError;
        setRecentPosts(recentData);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { featuredPosts, recentPosts, loading, error };
};
