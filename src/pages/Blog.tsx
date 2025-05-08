
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock blog data
const allPosts = [
  {
    id: 1,
    title: 'Optimizing Kubernetes Clusters for Scale',
    excerpt: 'Best practices for managing large Kubernetes deployments in production environments',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500',
    date: '2025-04-01T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'Infrastructure'
  },
  {
    id: 2,
    title: 'Implementing Zero-Trust Security Models',
    excerpt: 'A comprehensive guide to implementing zero-trust architecture in modern enterprises',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500',
    date: '2025-03-25T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'Security'
  },
  {
    id: 3,
    title: 'Monitoring Infrastructure with Prometheus',
    excerpt: 'Setting up robust monitoring solutions for cloud-native applications',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500',
    date: '2025-03-18T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'Monitoring'
  },
  {
    id: 4,
    title: 'Automating CI/CD Pipelines',
    excerpt: 'Building efficient continuous integration and delivery workflows',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=500',
    date: '2025-03-10T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'DevOps'
  },
  {
    id: 5,
    title: 'Managing Secrets in Kubernetes',
    excerpt: 'Best practices for securing sensitive information in Kubernetes environments',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500',
    date: '2025-03-05T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'Security'
  },
  {
    id: 6,
    title: 'Serverless Functions for Microservices',
    excerpt: 'Leveraging serverless architecture for scalable microservice deployments',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500',
    date: '2025-02-28T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'Architecture'
  },
  {
    id: 7,
    title: 'Database Performance Tuning Tips',
    excerpt: 'Optimizing database performance for high-traffic applications',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500',
    date: '2025-02-22T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'Databases'
  },
  {
    id: 8,
    title: 'Infrastructure as Code Best Practices',
    excerpt: 'Building maintainable and scalable infrastructure using code',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=500',
    date: '2025-02-15T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'DevOps'
  },
  {
    id: 9,
    title: 'Effective Incident Response Strategies',
    excerpt: 'How to prepare and respond to system outages and incidents',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80&w=500',
    date: '2025-02-08T12:00:00.000Z',
    author: 'Thiago Braga',
    category: 'SRE'
  }
];

// Get unique categories
const categories = [...new Set(allPosts.map(post => post.category))];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
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
                    src={post.image}
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
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
