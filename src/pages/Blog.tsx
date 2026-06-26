
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

// Type for our posts
interface Post {
  id: number;
  title: string;
  excerpt?: string;
  image_url?: string;
  category: string;
  author?: string;
  published_at?: string;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('published_at', { ascending: false });
        
        if (error) throw error;
        setAllPosts(data || []);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data?.map(post => post.category) || [])];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    
    fetchPosts();
  }, []);

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-light mb-2">
        <span>Blog</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8">Thoughts on technology, SRE, and more</p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search articles..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl">No articles found matching your criteria.</p>
          <Button 
            className="mt-4" 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory(null);
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : ''}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
