import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

// Mock blog data
const featuredPosts = [
  {
    id: 1,
    title: 'Optimizing Kubernetes Clusters for Scale',
    excerpt: 'Best practices for managing large Kubernetes deployments in production environments',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500',
    date: '2025-04-01T12:00:00.000Z',
    author: 'Thiago Braga'
  },
  {
    id: 2,
    title: 'Implementing Zero-Trust Security Models',
    excerpt: 'A comprehensive guide to implementing zero-trust architecture in modern enterprises',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500',
    date: '2025-03-25T12:00:00.000Z',
    author: 'Thiago Braga'
  },
  {
    id: 3,
    title: 'Monitoring Infrastructure with Prometheus',
    excerpt: 'Setting up robust monitoring solutions for cloud-native applications',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500',
    date: '2025-03-18T12:00:00.000Z',
    author: 'Thiago Braga'
  }
];

const recentPosts = [
  {
    id: 4,
    title: 'Automating CI/CD Pipelines',
    date: '2025-03-10T12:00:00.000Z',
  },
  {
    id: 5,
    title: 'Managing Secrets in Kubernetes',
    date: '2025-03-05T12:00:00.000Z',
  },
  {
    id: 6,
    title: 'Serverless Functions for Microservices',
    date: '2025-02-28T12:00:00.000Z',
  },
  {
    id: 7,
    title: 'Database Performance Tuning Tips',
    date: '2025-02-22T12:00:00.000Z',
  },
  {
    id: 8,
    title: 'Infrastructure as Code Best Practices',
    date: '2025-02-15T12:00:00.000Z',
  },
  {
    id: 9,
    title: 'Effective Incident Response Strategies',
    date: '2025-02-08T12:00:00.000Z',
  }
];

const carouselImages = [
  '/lovable-uploads/a976cfcf-474d-4b93-9fdd-852fd452a8e5.png',
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
];

const careerDescriptions = [
  "With over a decade of experience in SRE and DevOps, I specialize in building resilient cloud infrastructure and optimizing system performance at scale.",
  "Passionate about automation and infrastructure as code, I help organizations streamline their deployment pipelines and improve operational efficiency.",
  "Bridging the gap between development and operations with a focus on observability, monitoring, and continuous improvement of system reliability."
];

// Select a random career description
const randomDescription = careerDescriptions[Math.floor(Math.random() * careerDescriptions.length)];

const IndexPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center text-white relative">
        <div className="container relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold animate-fade-in">Thiago Braga</h1>
          <p className="mt-4 text-lg md:text-xl animate-fade-in">
            SRE Engineer living in Brazil · currently working at Scaffold Education
          </p>
          <p className="mt-6 max-w-xl mx-auto text-white/80 animate-fade-in">
            {randomDescription}
          </p>
          <div className="mt-12 animate-fade-in">
            <Button 
              variant="outline" 
              className="rounded-full bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20"
              onClick={() => {
                document.getElementById('carousel-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="mr-2" size={16} />
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="carousel-section" className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">My Journey</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="bg-black overflow-hidden rounded-lg aspect-video">
                      <img
                        src={image}
                        alt={`Carousel image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white/20 text-white" />
            <CarouselNext className="border-white/20 text-white" />
          </Carousel>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
                  alt="Laptop"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Latest from the Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredPosts.map((post) => (
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
              <div>
                <h3 className="text-xl font-semibold mb-4">More Articles</h3>
                <ul className="divide-y">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="py-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        <div className="flex justify-between items-center">
                          <span>{post.title}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
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
