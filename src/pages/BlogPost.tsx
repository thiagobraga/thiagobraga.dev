
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Mock blog post data
const blogPosts = {
  "1": {
    id: 1,
    title: 'Optimizing Kubernetes Clusters for Scale',
    description: 'A deep dive into best practices for managing large Kubernetes deployments in production environments',
    content: `
      <p>When managing Kubernetes clusters at scale, there are several important considerations to keep in mind. This article explores optimization techniques that can help improve performance, reliability, and maintainability.</p>
      
      <h2>Resource Allocation Strategies</h2>
      <p>One of the most critical aspects of optimizing Kubernetes clusters is properly allocating resources. This includes setting appropriate CPU and memory requests and limits for your containers. Underprovisioning can lead to performance issues, while overprovisioning wastes resources.</p>
      
      <p>Here are some key strategies:</p>
      <ul>
        <li>Monitor actual resource usage and adjust requests/limits accordingly</li>
        <li>Implement horizontal pod autoscaling based on metrics</li>
        <li>Consider using vertical pod autoscaling for applications with varying workloads</li>
        <li>Use resource quotas and limit ranges to prevent resource hogging</li>
      </ul>
      
      <h2>Network Optimization</h2>
      <p>Network performance is often a bottleneck in large Kubernetes deployments. Consider the following approaches:</p>
      
      <ul>
        <li>Choose an appropriate Container Network Interface (CNI) plugin for your needs</li>
        <li>Implement network policies to control traffic flow</li>
        <li>Use service mesh solutions like Istio or Linkerd for complex networking needs</li>
        <li>Optimize DNS resolution to prevent performance degradation</li>
      </ul>
      
      <h2>Storage Considerations</h2>
      <p>Persistent storage is another critical component that requires careful planning:</p>
      
      <ul>
        <li>Choose the right storage class for your workloads</li>
        <li>Implement proper backup and disaster recovery solutions</li>
        <li>Consider using local persistent volumes for I/O-intensive applications</li>
        <li>Implement storage quotas to prevent individual workloads from consuming all available storage</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Optimizing Kubernetes clusters for scale requires a holistic approach that considers compute resources, networking, and storage. By implementing the strategies outlined in this article, you can build more resilient and efficient containerized infrastructures.</p>
    `,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1920',
    date: '2025-04-01T12:00:00.000Z',
    author: 'Thiago <strong>Braga</strong>',
    authorId: '1',
    tags: ['kubernetes', 'devops', 'scalability'],
    category: 'Infrastructure'
  },
  "2": {
    id: 2,
    title: 'Implementing Zero-Trust Security Models',
    description: 'A comprehensive guide to implementing zero-trust architecture in modern enterprises',
    content: `
      <p>Zero-trust security is a model that assumes no user or device should be automatically trusted, whether they're inside or outside the network perimeter. This article explores how to implement this approach in modern enterprise environments.</p>

      <h2>Core Principles of Zero-Trust</h2>
      <p>The zero-trust security model is based on several key principles:</p>

      <ul>
        <li>Verify explicitly: Always authenticate and authorize based on all available data points</li>
        <li>Use least privilege access: Limit user access with Just-In-Time and Just-Enough-Access</li>
        <li>Assume breach: Minimize blast radius and segment access, verify end-to-end encryption, and use analytics to detect threats</li>
      </ul>

      <h2>Implementation Strategy</h2>
      <p>Implementing zero-trust requires a strategic approach:</p>

      <ol>
        <li>Identify your sensitive data and assets</li>
        <li>Map the flows of sensitive data</li>
        <li>Architect your zero-trust environment</li>
        <li>Create your zero-trust policies</li>
        <li>Monitor and maintain your environment</li>
      </ol>

      <h2>Technology Components</h2>
      <p>Several technologies are essential for a robust zero-trust implementation:</p>

      <ul>
        <li>Multi-factor authentication (MFA)</li>
        <li>Identity and access management (IAM)</li>
        <li>Micro-segmentation</li>
        <li>Software-defined perimeters</li>
        <li>Security information and event management (SIEM)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Zero-trust security represents a paradigm shift in how organizations approach security. By adopting these principles and technologies, organizations can significantly reduce their attack surface and better protect their sensitive assets in today's complex threat landscape.</p>
    `,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920',
    date: '2025-03-25T12:00:00.000Z',
    author: 'Thiago <strong>Braga</strong>',
    authorId: '1',
    tags: ['security', 'zero-trust', 'cybersecurity'],
    category: 'Security'
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[id as keyof typeof blogPosts];
  
  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return (
      <div className="container py-20">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} - ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div 
        className="blog-post-hero mb-8" 
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container h-full flex flex-col justify-end pb-12 relative z-10">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl mb-6">{post.description}</p>
            <div className="flex items-center text-sm">
              <a href={`/author/${post.authorId}`} className="hover:underline" dangerouslySetInnerHTML={{ __html: post.author }} />
              <span className="mx-2">·</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container pb-20">
        <article className="blog-content prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </>
  );
};

export default BlogPost;
