
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
        
        // First, get all posts ordered by published_at
        const { data: allPosts, error: postsError } = await supabase
          .from('posts')
          .select('*')
          .order('published_at', { ascending: false });

        if (postsError) throw postsError;
        
        if (allPosts && allPosts.length > 0) {
          // Make sure the first post has an image_url
          const firstPost = allPosts[0];
          if (!firstPost.image_url) {
            firstPost.image_url = "https://via.placeholder.com/800x450?text=Featured+Post";
          }
          
          // Set the first post as featured and display 2 more
          setFeaturedPosts([firstPost, ...allPosts.slice(1, 3)]);
          
          // Set the next posts as recent
          setRecentPosts(allPosts.slice(3, 9));
        } else {
          setFeaturedPosts([]);
          setRecentPosts([]);
        }
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
