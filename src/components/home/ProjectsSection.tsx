import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  image: string;
  linkLabel: string;
  linkTo: string;
  linkColor: string;
  layout: 'left' | 'right';
}

const PROJECTS: Project[] = [
  {
    title: 'Sentinel Guard OS',
    description:
      'A next-generation automated security auditing framework for distributed Kubernetes clusters, built with Rust and eBPF technology.',
    tags: [
      { label: 'Security', color: 'bg-nord10/20 text-nord9 border-nord10/30' },
      { label: 'Cloud',    color: 'bg-nord8/20 text-nord8 border-nord8/30'   },
    ],
    image: '/images/project-sentinel.png',
    linkLabel: 'View Case Study',
    linkTo: '#',
    linkColor: 'text-nord8',
    layout: 'left',
  },
  {
    title: 'Sonic Canvas',
    description:
      'Real-time audio visualizer that maps frequencies to generative 3D art, pushing the boundaries of web-based GPU rendering.',
    tags: [
      { label: 'Creative', color: 'bg-nord15/20 text-nord15 border-nord15/30' },
      { label: 'Audio',    color: 'bg-nord7/20 text-nord7 border-nord7/30'   },
    ],
    image: '/images/project-sonic.png',
    linkLabel: 'Explore Live Lab',
    linkTo: '#',
    linkColor: 'text-nord15',
    layout: 'right',
  },
  {
    title: 'Nexus Deploy',
    description:
      'Serverless deployment orchestrator optimized for edge computing nodes, reducing cold starts by 45% using predictive warming algorithms.',
    tags: [
      { label: 'Infrastructure', color: 'bg-nord14/20 text-nord14 border-nord14/30' },
      { label: 'DevOps',         color: 'bg-nord9/20 text-nord9 border-nord9/30'    },
    ],
    image: '/images/project-nexus.png',
    linkLabel: 'Read Documentation',
    linkTo: '#',
    linkColor: 'text-nord14',
    layout: 'left',
  },
];

const TECH_ICONS = [
  { icon: 'terminal',   hoverColor: 'hover:text-nord8'  },
  { icon: 'database',   hoverColor: 'hover:text-nord9'  },
  { icon: 'cloud',      hoverColor: 'hover:text-nord10' },
  { icon: 'security',   hoverColor: 'hover:text-nord11' },
  { icon: 'javascript', hoverColor: 'hover:text-nord13' },
  { icon: 'api',        hoverColor: 'hover:text-nord14' },
  { icon: 'monitoring', hoverColor: 'hover:text-nord15' },
  { icon: 'memory',     hoverColor: 'hover:text-nord7'  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isLeft = project.layout === 'left';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 items-center">
      {/* Image */}
      <div
        className={`
          relative z-10 group
          ${isLeft ? 'md:col-span-8' : 'md:col-span-8 md:col-start-5 order-1 md:order-2'}
        `}
      >
        <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-nord3/30 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        {/* Accent blur */}
        <div
          className={`absolute w-64 h-64 blur-3xl rounded-full -z-10 pointer-events-none
            ${isLeft ? '-top-12 -left-12 bg-nord10/5' : '-bottom-12 -right-12 bg-nord15/5'}
          `}
        />
      </div>

      {/* Text card */}
      <div
        className={`
          relative z-20
          ${isLeft
            ? 'md:col-span-6 md:col-start-7 md:-ml-24 -mt-20 md:mt-0'
            : 'md:col-span-6 md:col-start-1 md:-mr-24 -mb-20 md:mb-0 order-2 md:order-1'}
        `}
      >
        <div className="bg-nord2/95 backdrop-blur-xl border border-nord3/40 p-10 md:p-14 rounded-3xl shadow-2xl">
          {/* Tags */}
          <div className="flex gap-3 mb-7 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <h3 className="font-headline text-3xl md:text-4xl font-extrabold mb-6 text-nord6 tracking-tighter">
            {project.title}
          </h3>
          <p className="text-nord4/90 mb-8 leading-relaxed text-base font-medium">
            {project.description}
          </p>
          <a
            href={project.linkTo}
            className={`inline-flex items-center gap-4 font-black uppercase tracking-widest text-xs hover:gap-6 transition-all ${project.linkColor}`}
          >
            {project.linkLabel}
            <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-48 px-6 md:px-20 bg-nord1/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-48 border-b border-nord3/30 pb-12">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6">
            <span className="opacity-70 font-light">Things</span> <b>I Build</b>
          </h2>
          <span className="font-label text-sm text-nord8 tracking-widest uppercase mb-2 font-bold">
            Portfolio 2026
          </span>
        </div>

        {/* Project list */}
        <div className="space-y-64">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Tech stack strip */}
        <div className="mt-48 pt-32">
          <div className="bg-nord2/20 border border-nord3/20 rounded-[3rem] p-16 md:p-24 text-center">
            <span className="font-label text-xs uppercase tracking-[0.6em] text-nord3 font-black block mb-16">
              Core Technical Ecosystem
            </span>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-nord3/40">
              {TECH_ICONS.map(({ icon, hoverColor }) => (
                <span
                  key={icon}
                  className={`material-symbols-outlined text-5xl ${hoverColor} transition-all hover:scale-125 cursor-default`}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
