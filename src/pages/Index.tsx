
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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

const IndexPage: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center text-white relative">
        <div className="container relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-light animate-fade-in">
            Thiago <strong>Braga</strong>
          </h1>
          <p className="mt-4 text-lg md:text-xl animate-fade-in font-light">
            SRE Engineer living in Brazil <br /> currently working at Scaffold Education
          </p>
          <div className="absolute bottom-16 left-0 right-0 animate-fade-in">
            <Button 
              variant="outline" 
              className="rounded-full bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 font-light mx-auto mb-8"
              onClick={() => {
                document.getElementById('blog-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="mr-2" size={16} />
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog-section" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12">
              <div className="mb-8">
                <h2 className="text-3xl font-light mb-4">Latest from the <strong>Blog</strong></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredPosts.map((post) => (
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
              <div>
                <h3 className="text-2xl font-light mb-4">More <strong>Articles</strong></h3>
                <ul className="divide-y">
                  {recentPosts.map((post) => (
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
