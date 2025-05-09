
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

// Mock author data
const authors = {
  "1": {
    id: "1",
    name: "Thiago <strong>Braga</strong>",
    avatar: "/lovable-uploads/5350092f-cd95-4355-8c32-491d23cf53d9.png",
    bio: "SRE Engineer with over 10 years of experience in building and maintaining large-scale infrastructure. Passionate about automation, cloud architecture, and DevOps culture.",
    position: "SRE Engineer at Scaffold Education",
    location: "Brazil",
    social: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:contact@example.com"
    }
  }
};

// Mock post data
const postsByAuthor = {
  "1": [
    {
      id: 1,
      title: 'Optimizing Kubernetes Clusters for Scale',
      excerpt: 'Best practices for managing large Kubernetes deployments in production environments',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500',
      date: '2025-04-01T12:00:00.000Z',
    },
    {
      id: 2,
      title: 'Implementing Zero-Trust Security Models',
      excerpt: 'A comprehensive guide to implementing zero-trust architecture in modern enterprises',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500',
      date: '2025-03-25T12:00:00.000Z',
    },
    {
      id: 3,
      title: 'Monitoring Infrastructure with Prometheus',
      excerpt: 'Setting up robust monitoring solutions for cloud-native applications',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500',
      date: '2025-03-18T12:00:00.000Z',
    },
    {
      id: 4,
      title: 'Automating CI/CD Pipelines',
      excerpt: 'Building efficient continuous integration and delivery workflows',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=500',
      date: '2025-03-10T12:00:00.000Z',
    },
  ]
};

const Author: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const author = authors[id as keyof typeof authors];
  const posts = postsByAuthor[id as keyof typeof postsByAuthor] || [];
  
  if (!author) {
    return (
      <div className="container py-20">
        <h1 className="text-3xl font-bold">Author not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-secondary">
            <img 
              src={author.avatar} 
              alt={author.name.replace(/<[^>]*>?/gm, '')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold font-light mb-2" dangerouslySetInnerHTML={{ __html: author.name }} />
            <p className="text-lg text-muted-foreground mb-4">{author.position}</p>
            <p className="mb-6">{author.bio}</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={author.social.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href={author.social.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href={author.social.email}>
                <Button variant="outline" size="icon">
                  <Mail size={18} />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Articles by <span dangerouslySetInnerHTML={{ __html: author.name }} /></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
