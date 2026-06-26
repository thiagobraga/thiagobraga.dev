import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import type { IconType } from 'react-icons';
import { FaAws, FaCss3Alt, FaWindows } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import {
  SiAnthropic,
  SiApple,
  // SiBootstrap,
  // SiDebian,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJavascript,
  // SiJquery,
  // SiKalilinux,
  SiKubernetes,
  SiBitbucket,
  SiCanva,
  SiGimp,
  SiLaravel,
  SiLinux,
  SiNextdotjs,
  SiOpenai,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiUbuntu,
  SiVirtualbox,
  SiVmware,
} from 'react-icons/si';
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
  TbCloud,
  TbGitBranch,
  TbRobot,
  TbServer,
  TbWand,
  TbSettingsAutomation,
  TbShieldLock,
} from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  images: string[];
  linkLabel: string;
  linkTo: string;
  linkColor: string;
}

const PROJECTS: Project[] = [
  {
    title: 'ABNT Maker',
    description:
      'Create academic documents in ABNT format with a single click.',
    tags: [
      { label: 'Academic', color: 'bg-nord9/20 text-nord9 border-nord9/30' },
      { label: 'Documents', color: 'bg-nord4/20 text-nord4 border-nord4/30' },
      { label: 'Automation', color: 'bg-nord6/20 text-nord6 border-nord6/30' },
    ],
    images: ['/images/abnt-maker.png'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord8',
  },
  {
    title: 'AgentMeter',
    description:
      'A real-time agent that updates token usage for Claude, Codex, and more.',
    tags: [
      { label: 'GNOME', color: 'bg-am-teal/20 text-am-teal border-am-teal/30' },
      { label: 'Extension', color: 'bg-am-teal/20 text-am-teal border-am-teal/30' },
      { label: 'Ubuntu', color: 'bg-nord1/70 text-nord5 border-nord3/50' },
      { label: 'AI', color: 'bg-nord1/70 text-nord5 border-nord3/50' },
    ],
    images: ['/images/agentmeter.png'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-am-teal',
  },
  {
    title: 'Lodo Records',
    description:
      'An ecommerce platform for Lodo Records music label, featuring a catalog of albums, merchandise, and exclusive content.',
    tags: [
      { label: 'Ecommerce', color: 'bg-[#425450] text-[#efebe4] border-[#2d3c39]' },
      { label: 'Music', color: 'bg-[#4f534a] text-[#efebe4] border-[#62655a]' },
      { label: 'Label', color: 'bg-[#efebe4] text-[#6c6a44] border-[#6b6856]' },
    ],
    images: ['/images/lodo-records.png'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord14',
  },
  {
    title: 'OpenClaw UI improvements',
    description:
      'A set of UI improvements for OpenClaw, a web application for managing and monitoring cloud infrastructure.',
    tags: [
      { label: 'UI', color: 'bg-nord11/20 text-nord11 border-nord11/30' },
      { label: 'UX', color: 'bg-nord15/20 text-nord15 border-nord15/30' },
      { label: 'AI', color: 'bg-nord9/20 text-nord9 border-nord9/30' },
    ],
    images: ['/images/openclaw.png'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord11',
  },
  {
    title: 'Petsy',
    description:
      'A pet adoption platform that connects animal shelters with potential adopters, providing a seamless experience for finding and adopting pets.',
    tags: [
      { label: 'Pets', color: 'bg-nord13/20 text-nord13 border-nord13/30' },
      { label: 'Adoption', color: 'bg-nord14/20 text-nord14 border-nord14/30' },
      { label: 'Platform', color: 'bg-nord9/20 text-nord9 border-nord9/30' },
    ],
    images: ['/images/petsy.png'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord14',
  },
  {
    title: 'Planner',
    description:
      'Real bullet journal planner with a digital companion app, allowing users to organize their tasks, goals, and notes in a flexible and customizable way.',
    tags: [
      { label: 'Planner', color: 'bg-nord8/20 text-nord8 border-nord8/30' },
      { label: 'Productivity', color: 'bg-nord14/20 text-nord14 border-nord14/30' },
      { label: 'Journal', color: 'bg-nord13/20 text-nord13 border-nord13/30' },
    ],
    images: ['/images/planner.png', '/images/planner-2.png'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord14',
  },
  {
    title: 'Revel HC',
    description:
      'Website for band Revel, from Bauru, Sao Paulo, Brazil. The website features a discography, tour dates, and a blog with news and updates about the band.',
    tags: [
      { label: 'Website', color: 'bg-nord8/20 text-nord8 border-nord8/30' },
      { label: 'Music', color: 'bg-nord13/20 text-nord13 border-nord13/30' },
      { label: 'Underground', color: 'bg-nord15/20 text-nord15 border-nord15/30' },
    ],
    images: ['/images/revel-hc.jpg'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord14',
  },
  {
    title: 'Sociopata',
    description:
      'Website for Brazilian thrash/progressive metal band Sociopata, centered around the band identity and embedded music experience.',
    tags: [
      { label: 'Website', color: 'bg-nord8/20 text-nord8 border-nord8/30' },
      { label: 'Music', color: 'bg-nord13/20 text-nord13 border-nord13/30' },
      { label: 'Metal', color: 'bg-nord11/20 text-nord11 border-nord11/30' },
    ],
    images: ['/images/sociopata-bg.jpg'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord11',
  },
];

const SKILL_GROUPS: {
  title: string;
  skills: { label: string; Icon: IconType; color: string }[];
}[] = [
    {
      title: 'Languages',
      skills: [
        { label: 'PHP', Icon: SiPhp, color: 'text-nord15' },
        { label: 'Python', Icon: SiPython, color: 'text-nord8' },
        { label: 'JavaScript', Icon: SiJavascript, color: 'text-nord13' },
        { label: 'CSS', Icon: FaCss3Alt, color: 'text-nord10' },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { label: 'React',    Icon: SiReact,       color: 'text-nord8'  },
        { label: 'Laravel',  Icon: SiLaravel,     color: 'text-nord11' },
        { label: 'Tailwind', Icon: SiTailwindcss, color: 'text-nord7'  },
        { label: 'Next.js',  Icon: SiNextdotjs,   color: 'text-nord6'  },
      ],
    },
    {
      title: 'Operating Systems',
      skills: [
        { label: 'Linux', Icon: SiLinux, color: 'text-nord13' },
        { label: 'Ubuntu', Icon: SiUbuntu, color: 'text-nord12' },
        // { label: 'Debian', Icon: SiDebian, color: 'text-nord11' },
        // { label: 'Kali', Icon: SiKalilinux, color: 'text-nord9' },
        { label: 'Windows', Icon: FaWindows, color: 'text-nord8' },
        { label: 'macOS', Icon: SiApple, color: 'text-nord6' },
      ],
    },
    {
      title: 'Creative Tools',
      skills: [
        { label: 'Photoshop', Icon: TbBrandAdobePhotoshop, color: 'text-nord8'  },
        { label: 'Premiere',  Icon: TbBrandAdobePremier,   color: 'text-nord15' },
        { label: 'GIMP',      Icon: SiGimp,               color: 'text-nord13' },
        { label: 'Canva',     Icon: SiCanva,              color: 'text-nord9'  },
      ],
    },
    {
      title: 'Infrastructure',
      skills: [
        { label: 'Docker', Icon: SiDocker, color: 'text-nord8' },
        { label: 'Kubernetes', Icon: SiKubernetes, color: 'text-nord9' },
        { label: 'VMware', Icon: SiVmware, color: 'text-nord10' },
        { label: 'VirtualBox', Icon: SiVirtualbox, color: 'text-nord8' },
      ],
    },
    {
      title: 'Engineering Practices',
      skills: [
        { label: 'DevOps', Icon: TbSettingsAutomation, color: 'text-nord14' },
        { label: 'Security', Icon: TbShieldLock, color: 'text-nord11' },
        { label: 'CI/CD', Icon: SiGithubactions, color: 'text-nord9' },
        { label: 'Cloud', Icon: TbCloud, color: 'text-nord8' },
      ],
    },
    {
      title: 'Version Control',
      skills: [
        { label: 'Git',       Icon: SiGit,       color: 'text-nord12' },
        { label: 'GitHub',    Icon: SiGithub,    color: 'text-nord6'  },
        { label: 'GitLab',    Icon: SiGitlab,    color: 'text-nord12' },
        { label: 'Bitbucket', Icon: SiBitbucket, color: 'text-nord9'  },
      ],
    },
    {
      title: 'Cloud & Hosting',
      skills: [
        { label: 'AWS', Icon: FaAws, color: 'text-nord13' },
        { label: 'OCI', Icon: GrOracle, color: 'text-nord11' },
        { label: 'Selfhosted', Icon: TbServer, color: 'text-nord14' },
        { label: 'GitOps', Icon: TbGitBranch, color: 'text-nord9' },
      ],
    },
    {
      title: 'AI',
      skills: [
        { label: 'Claude',     Icon: SiAnthropic,  color: 'text-nord12'  },
        { label: 'Codex',      Icon: SiOpenai,     color: 'text-nord6'   },
        { label: 'Midjourney', Icon: TbWand,        color: 'text-nord9'   },
        { label: 'OpenClaw',   Icon: TbRobot,      color: 'text-am-teal' },
      ],
    },
  ];

const ProjectImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    // 4s display duration + 1s fade transition = 5s total interval
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="project-image-carousel relative w-full h-[410px] lg:h-[540px] overflow-hidden group">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`${title} - slide ${idx}`}
          className={`carousel-slide-img absolute inset-0 w-full h-full object-cover object-top grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out ${
            idx === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="carousel-dot-nav absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-nord0/45 backdrop-blur-md px-3 py-2 rounded-full border border-nord3/30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`carousel-dot-btn w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === index
                  ? 'bg-nord8 scale-110 shadow-md shadow-nord8/25'
                  : 'bg-nord4/40 hover:bg-nord4/70 hover:scale-105'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isReversed = index % 2 === 1;

  return (
    <div className={`project-card-row ${isReversed ? 'project-card-row--right' : 'project-card-row--left'}`}>
      <article
        className={`
          project-card-shell ${isReversed ? 'project-card-shell--from-right' : 'project-card-shell--from-left'}
          relative overflow-hidden
        `}
      >
        <div
          className={`absolute w-72 h-72 blur-3xl rounded-full pointer-events-none ${isReversed ? '-bottom-16 -right-16 bg-nord15/10' : '-top-16 -left-16 bg-nord10/10'
            }`}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Image preview */}
          <div
            className={`
              relative z-10 group min-h-72 overflow-hidden border-nord3/30
              ${isReversed ? 'md:order-2 md:border-l' : 'md:order-1 md:border-r'}
            `}
          >
            <div className="h-full aspect-[16/10] md:aspect-auto">
              <ProjectImageCarousel images={project.images} title={project.title} />
            </div>
          </div>

          {/* Text and info */}
          <div
            className={`
              relative z-20 flex flex-col min-h-72 p-8 md:p-12 lg:p-14
              ${isReversed ? 'md:order-1' : 'md:order-2'}
            `}
          >
            <div className="project-card-details-content flex-1">
              <h3 className="project-card-title font-headline text-3xl md:text-4xl font-extrabold mb-6 text-nord6 tracking-tighter">
                {project.title}
              </h3>
              <p className="project-card-description text-nord4/90 mb-8 leading-relaxed text-base font-medium">
                {project.description}
              </p>
              <a
                href={project.linkTo}
                className={`project-card-link inline-flex items-center gap-4 font-black uppercase tracking-widest text-xs hover:gap-6 transition-all ${project.linkColor}`}
              >
                {project.linkLabel}
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </a>
            </div>

            <div className="project-card-tags-container flex gap-3 mt-8 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`project-card-tag px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projectListRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      return;
    }

    const updateScrollTrigger = () => ScrollTrigger.update();

    lenis.on('scroll', updateScrollTrigger);
    ScrollTrigger.refresh();

    return () => {
      lenis.off('scroll', updateScrollTrigger);
    };
  }, [lenis]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card-shell');

      cards.forEach((card) => {
        const entersFromRight = card.classList.contains('project-card-shell--from-right');

        gsap.set(card, {
          autoAlpha: 0,
          force3D: true,
          x: entersFromRight ? 220 : -220,
        });

        gsap.to(card, {
          autoAlpha: 1,
          clearProps: 'transform,opacity,visibility',
          duration: 0.68,
          ease: 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: card,
            start: 'top 84%',
            once: true,
          },
          x: 0,
        });
      });

      ScrollTrigger.refresh();
    }, projectListRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    if (!bgRef.current || !sectionRef.current) return;

    const tween = gsap.fromTo(
      bgRef.current,
      { backgroundPosition: 'center 20%' },
      {
        backgroundPosition: 'center 80%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-48 px-6 md:px-20 bg-nord0 overflow-x-clip">
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Base organic gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 30%, rgba(136, 192, 208, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(102, 166, 192, 0.02) 0%, transparent 50%)`,
          }}
        />

        {/* SVG pattern layer - git graph, organic, geometric, code */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.15, mixBlendMode: 'screen' }}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Organic curves */}
          <defs>
            <pattern id="gridPattern" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 80 0 L 80 80 L 0 80 Z" fill="none" stroke="rgba(88, 166, 200, 0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Flowing organic curves */}
          <path
            d="M -200 100 Q 300 200 600 150 T 1200 200"
            stroke="rgba(136, 192, 208, 0.3)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 400 Q 400 300 800 450 T 1600 300"
            stroke="rgba(102, 166, 192, 0.25)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Git-like nodes and connections */}
          <g opacity="0.4">
            <circle cx="150" cy="250" r="6" fill="rgba(136, 192, 208, 0.6)" />
            <circle cx="300" cy="350" r="5" fill="rgba(136, 192, 208, 0.5)" />
            <circle cx="450" cy="280" r="6" fill="rgba(136, 192, 208, 0.6)" />
            <line x1="150" y1="250" x2="300" y2="350" stroke="rgba(136, 192, 208, 0.3)" strokeWidth="1.5" />
            <line x1="300" y1="350" x2="450" y2="280" stroke="rgba(136, 192, 208, 0.3)" strokeWidth="1.5" />

            <circle cx="800" cy="150" r="5" fill="rgba(102, 166, 192, 0.5)" />
            <circle cx="950" cy="200" r="6" fill="rgba(102, 166, 192, 0.6)" />
            <circle cx="1050" cy="320" r="5" fill="rgba(102, 166, 192, 0.5)" />
            <line x1="800" y1="150" x2="950" y2="200" stroke="rgba(102, 166, 192, 0.3)" strokeWidth="1.5" />
            <line x1="950" y1="200" x2="1050" y2="320" stroke="rgba(102, 166, 192, 0.3)" strokeWidth="1.5" />
          </g>

          {/* Geometric patterns */}
          <g opacity="0.2">
            <polygon points="200,600 250,620 230,670 180,650" fill="none" stroke="rgba(88, 166, 200, 0.4)" strokeWidth="1" />
            <polygon points="1000,100 1080,120 1060,200 980,180" fill="none" stroke="rgba(88, 166, 200, 0.3)" strokeWidth="1" />
          </g>

          {/* Code-like markers */}
          <g opacity="0.2">
            <circle cx="600" cy="100" r="3" fill="rgba(136, 192, 208, 0.4)" />
            <circle cx="750" cy="180" r="2.5" fill="rgba(102, 166, 192, 0.3)" />
            <circle cx="900" cy="500" r="3" fill="rgba(136, 192, 208, 0.35)" />
          </g>
        </svg>

        {/* Code snippet texture overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(136, 192, 208, 0.03) 2px,
              rgba(136, 192, 208, 0.03) 4px
            )`,
            opacity: 0.5,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between pb-12 mb-16">
          <h2 className="font-mono text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6">
            <code className="section-heading-code">
              <span className="opacity-70 font-light">ls</span> <b>projects</b>
            </code>
          </h2>
        </div>

        {/* Project list */}
        <div ref={projectListRef} className="space-y-20 md:space-y-28">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Skills */}
        <div className="mt-48 pt-32">
          <div className="glass-panel rounded-[3rem] p-8 md:p-16">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-nord6">
                <code className="section-heading-code">skills</code>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {SKILL_GROUPS.map(({ title, skills }) => (
                <div
                  key={title}
                  className="glass-card rounded-3xl p-6 transition-all hover:border-nord8/20 hover:brightness-100"
                >
                  <h4 className="mb-5 text-[11px] font-black uppercase tracking-[0.32em] text-nord4/50">
                    {title}
                  </h4>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skills.map(({ label, Icon, color }) => (
                      <div
                        key={label}
                        className="glass-card group flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all hover:brightness-125"
                      >
                        <Icon
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 ${color} opacity-80 transition-opacity group-hover:opacity-100`}
                        />
                        <span className="min-w-0 truncate font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-nord4/75">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
