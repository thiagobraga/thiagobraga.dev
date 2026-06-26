export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
  image_url?: string;
  featured?: boolean;
}

// ── Recent Posts (10 entries) ─────────────────────────────────────
export const mockRecentPosts: Post[] = [
  {
    id: 1,
    title: 'The Future of CI/CD: AI Orchestration',
    excerpt: 'How machine learning models are beginning to predict deployment failures before they happen, reshaping how teams ship software.',
    category: 'DevOps',
    published_at: '2026-03-26T00:00:00Z',
    image_url: '/images/project-sentinel.png',
  },
  {
    id: 2,
    title: 'Post-Quantum Cryptography in Production',
    excerpt: 'Preparing our architecture for the quantum leap. Why you should care about lattice-based crypto today.',
    category: 'Security',
    published_at: '2026-03-12T00:00:00Z',
    image_url: '/images/project-nexus.png',
  },
  {
    id: 3,
    title: 'Why Rust Won the Systems Race',
    excerpt: 'Exploring memory safety and the psychological impact of zero-cost abstractions on developer velocity.',
    category: 'Dev',
    published_at: '2026-02-28T00:00:00Z',
    image_url: '/images/project-sonic.png',
  },
  {
    id: 4,
    title: 'Observability First: OpenTelemetry at Scale',
    excerpt: 'Traces, metrics and logs unified. A hands-on guide to rolling out OTel across a 50-service Kubernetes cluster.',
    category: 'Cloud',
    published_at: '2026-02-15T00:00:00Z',
  },
  {
    id: 5,
    title: "eBPF: The Linux Kernel Superpowers You're Not Using",
    excerpt: "From network filtering to runtime security - eBPF is redefining what's possible without kernel modifications.",
    category: 'Security',
    published_at: '2026-02-01T00:00:00Z',
  },
  {
    id: 6,
    title: 'GitOps at the Edge: Lessons from 6 Months in Production',
    excerpt: 'Managing Flux and ArgoCD across edge nodes with unreliable connectivity taught us things no docs prepared us for.',
    category: 'DevOps',
    published_at: '2026-01-20T00:00:00Z',
  },
  {
    id: 7,
    title: 'Zero-Trust Networking with Cilium',
    excerpt: 'Identity-based policies, mutual TLS, and layer 7 visibility without a service mesh. Cilium is quietly eating the world.',
    category: 'Security',
    published_at: '2026-01-10T00:00:00Z',
  },
  {
    id: 8,
    title: 'Cost Engineering: Cutting AWS Bills by 40%',
    excerpt: 'Spot instances, savings plans, and Karpenter — the exact playbook that halved our cloud bill in 90 days.',
    category: 'Cloud',
    published_at: '2025-12-22T00:00:00Z',
  },
  {
    id: 9,
    title: 'Designing APIs That Don\'t Hate Their Users',
    excerpt: 'REST vs GraphQL vs gRPC — a pragmatic guide to picking the right protocol for the right team.',
    category: 'Dev',
    published_at: '2025-12-10T00:00:00Z',
  },
  {
    id: 10,
    title: 'Terraform at Scale: Modules, Workspaces & State Management',
    excerpt: 'When your Terraform repo has 200 modules and 50 engineers, everything you thought you knew needs to be revisited.',
    category: 'Cloud',
    published_at: '2025-11-28T00:00:00Z',
  },
];

// ── Featured Posts (5 entries, some shared with recent) ───────────
export const mockFeaturedPosts: Post[] = [
  { ...mockRecentPosts[0], featured: true },
  { ...mockRecentPosts[1], featured: true },
  { ...mockRecentPosts[4], featured: true },
  {
    id: 11,
    title: 'Kubernetes Security Hardening: A 2026 Checklist',
    excerpt: 'Pod Security Admission, network policies, RBAC audits, and supply chain integrity — the complete guide.',
    category: 'Security',
    published_at: '2026-03-01T00:00:00Z',
    image_url: '/images/project-sentinel.png',
    featured: true,
  },
  {
    id: 12,
    title: 'Building a Homelab That Actually Teaches You Something',
    excerpt: 'From bare metal to production-grade Kubernetes — the architecture decisions that changed how I think about infrastructure.',
    category: 'DevOps',
    published_at: '2026-01-05T00:00:00Z',
    image_url: '/images/project-nexus.png',
    featured: true,
  },
];
