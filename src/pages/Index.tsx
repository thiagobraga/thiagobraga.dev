
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import RecentPosts from '@/components/home/RecentPosts';
import { usePosts } from '@/hooks/usePosts';

const IndexPage: React.FC = () => {
  const { featuredPosts, recentPosts, loading, error } = usePosts();

  return (
    <>
      <HeroSection />

      {/* Blog Section */}
      <section id="blog-section" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12">
              {loading ? (
                <p>Loading posts...</p>
              ) : error ? (
                <p>Error loading posts: {error.message}</p>
              ) : (
                <>
                  <FeaturedPosts posts={featuredPosts} />
                  <RecentPosts posts={recentPosts} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
