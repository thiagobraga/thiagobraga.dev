import React, { useRef } from 'react';
// TEMP: gsap/ScrollTrigger disabled for perf testing
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  images: string[];
  linkLabel: string;
  linkTo: string;
  linkColor: string;
  glowColor: string;
  imagePosition?: 'top' | 'center' | 'bottom';
  hidden?: boolean;
}

const IMAGE_POSITION_CLASSES: Record<NonNullable<Project['imagePosition']>, string> = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
};

const withAiAssistance = (description: string) => `${description} Built with help from Claude and Codex.`;

const PROJECTS: Project[] = [
  {
    title: 'ABNT Maker',
    description: withAiAssistance(
      `A project I wrote to help me create ABNT formatted academic papers.
      It generates the documents as PDF or DOCX, and provides a simple
      interface for managing the sections and configurations.`
    ),
    tags: [
      { label: 'Academic', color: 'bg-[#2b3c57] text-[#ffffff] border-[#000000]/10' },
      { label: 'Automation', color: 'bg-nord0 text-[#efebe4] border-nord0/10' },
      { label: 'Documents', color: 'bg-[#ffffff] text-[#2b3c57] border-[#2d3c39]' },
    ],
    images: ['/images/projects/abnt-maker.png'],
    linkLabel: 'Github',
    linkTo: 'https://github.com/thiagobraga/abnt-maker',
    linkColor: 'text-[#596a85]',
    glowColor: '#596a85',
  },
  {
    title: 'AgentMeter',
    description: withAiAssistance(
      `AgentMeter is a GNOME shell extension that shows token usage for
      Claude, Codex, and more. Still on development. This idea comes from
      CodexBar for MacOS (because I don't have a MacOS).`
    ),
    tags: [
      { label: 'Ubuntu', color: 'bg-[#343d43] text-[#d4d7d9] border-[#474e53]' },
      { label: 'GNOME', color: 'bg-[#71ac81] text-[#3c553e] border-[#48635b]' },
      { label: 'Extension', color: 'bg-[#1ea8a9] text-[#314839] border-[#47c9ba]' },
      { label: 'AI', color: 'bg-[aliceblue] text-[#343e44] border-[#323c42]' },
    ],
    images: ['/images/projects/agentmeter.png'],
    linkLabel: 'Github',
    linkTo: '#',
    linkColor: 'text-am-teal',
    glowColor: '#1ea8a9',
    imagePosition: 'center',
  },
  {
    title: 'Lodo Records',
    description: withAiAssistance(
      `Lodo Records is a record label focused on underground music.
      The name is an idea of a friend of mine, and the website is an
      ecommerce platform for the label, with clothing, music, and
      other products about the label and its artists.`
    ),
    tags: [
      { label: 'Ecommerce', color: 'bg-[#425450] text-[#efebe4] border-[#2d3c39]' },
      { label: 'Music', color: 'bg-[#4f534a] text-[#efebe4] border-[#62655a]' },
      { label: 'Label', color: 'bg-[#efebe4] text-[#6c6a44] border-[#6b6856]' },
    ],
    images: ['/images/projects/lodo-records.png'],
    linkLabel: 'Github',
    linkTo: 'https://github.com/thiagobraga/lodorecords',
    linkColor: 'text-[#7b9c94]',
    glowColor: '#7b9c94',
    imagePosition: 'top',
  },
  {
    title: 'OpenClaw UI improvements',
    description: withAiAssistance(
      `A set of UI improvements I made - using AI of course - for OpenClaw.`
    ),
    tags: [
      { label: 'UI', color: 'bg-[#fd565a] text-[#ffffff] border-[#fd565a]' },
      { label: 'UX', color: 'bg-nord15/20 text-nord15 border-nord15/30' },
      { label: 'AI', color: 'bg-nord9/20 text-nord9 border-nord9/30' },
    ],
    images: ['/images/projects/openclaw.png'],
    linkLabel: 'Github',
    linkTo: '#',
    linkColor: 'text-[#fd565a]',
    glowColor: '#fd565a',
    hidden: true,
  },
  {
    title: 'Petsy',
    description: withAiAssistance(
      `Another idea to solve my real problems. Petsy aims to help me
      to manage the life of my 6 dogs and others that I take care of.
      It has a simple interface to manage the dogs, their health,
      and their activities. Still in development, but I hope to
      make it available for other dog owners.`
    ),
    tags: [
      { label: 'Pets', color: 'bg-[#fd717f] text-[#ffffff] border-[#fd717f]' },
      { label: 'UI', color: 'bg-[#fdfdfd] text-[#fd717f] border-[#fdddd3]' },
      { label: 'UX', color: 'bg-[#dfbfb1] text-[#bb641b] border-[#dfbfb1]' },
      // { label: 'UI', color: 'bg-[#d08770] text-[#ffffff] border-[#e4c593]' },
    ],
    images: ['/images/projects/petsy.png'],
    linkLabel: 'Github',
    linkTo: 'https://github.com/thiagobraga/petsy',
    linkColor: 'text-[#fd717f]',
    glowColor: '#fd717f',
  },
  {
    title: 'Planner',
    description: withAiAssistance(
      `Maybe just another To-do app, but the main idea behind Planner is to
      have a todo app that looks like a real bullet journal. The app is
      built with React, TypeScript, and Tailwind CSS, and it uses local
      storage to save the data. It has a simple interface to manage
      tasks, projects, and notes.`
    ),
    tags: [
      { label: 'Planner', color: 'bg-[#52534d] text-[#ebe6de] border-[#52534d]/30' },
      { label: 'UI', color: 'bg-[#52534d] text-[#ebe6de] border-[#52534d]/30' },
      { label: 'Bullet Journal', color: 'bg-[#ebe6de] text-[#52534d] border-[#ebe6de]/30' },
    ],
    images: ['/images/projects/planner.png'],
    linkLabel: 'Github',
    linkTo: 'https://github.com/thiagobraga/planner',
    linkColor: 'text-[#7e816b]',
    glowColor: '#c9c5b5',
  },
  {
    title: 'Revel HC',
    description: withAiAssistance(
      `Website for band Revel, from Bauru, Sao Paulo, Brazil. The website features a discography, tour dates, and a blog with news and updates about the band.`,
    ),
    tags: [
      { label: 'Website', color: 'bg-nord8/20 text-nord8 border-nord8/30' },
      { label: 'Music', color: 'bg-nord13/20 text-nord13 border-nord13/30' },
      { label: 'Underground', color: 'bg-nord15/20 text-nord15 border-nord15/30' },
    ],
    images: ['/images/projects/revel-hc.jpg'],
    linkLabel: 'Read More...',
    linkTo: '#',
    linkColor: 'text-nord14',
    glowColor: '#a3be8c',
    hidden: true,
  },
  {
    title: 'Sociopata',
    description: withAiAssistance(
      `I'm developing the new website for my band Sociopata,
      a crossover thrash metal band, centered around
      the band identity and embedded music experience.`
    ),
    tags: [
      { label: 'Website', color: 'bg-[#73312d] text-[#bfb8af] border-[#732c26]' },
      { label: 'Music', color: 'bg-[#8a7d6e] text-[#3c3834] border-[#8a7d6e]' },
      { label: 'Metal', color: 'bg-[#272b2b] text-[#aeaba9] border-[#30302c]' },
    ],
    images: ['/images/projects/sociopata.png'],
    linkLabel: 'Go to Site',
    linkTo: 'https://sociopata.org',
    linkColor: 'text-[#b05f5a]',
    glowColor: '#b05f5a',
  },
  {
    title: 'thiagobraga.dev',
    description: withAiAssistance(
      `This website. My personal portfolio website, built with React, TypeScript,
      Tailwind CSS, and GSAP. It features a blog, a portfolio, and a music section.`
    ),
    tags: [
      { label: 'Portfolio', color: 'bg-nord8/20 text-nord8 border-nord8/30' },
      { label: 'React', color: 'bg-nord9/20 text-nord9 border-nord9/30' },
      { label: 'Website', color: 'bg-nord6/20 text-nord6 border-nord6/30' },
    ],
    images: ['/images/projects/thiagobraga.png'],
    linkLabel: 'Visit Site',
    linkTo: 'https://thiagobraga.dev',
    linkColor: 'text-nord8',
    glowColor: '#88c0d0',
  },
];


const ProjectImageCarousel: React.FC<{ images: string[]; title: string; imagePosition?: 'top' | 'center' | 'bottom' }> = ({ images, title, imagePosition = 'top' }) => {
  const [index, setIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imgWrapRef = React.useRef<HTMLDivElement>(null);
  const imagePositionClass = IMAGE_POSITION_CLASSES[imagePosition];

  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="project-image-carousel relative w-full h-[410px] lg:h-[540px] overflow-hidden"
    >
      <div ref={imgWrapRef} className="absolute inset-0" style={{ willChange: 'transform' }}>
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`${title} - slide ${idx}`}
            loading="lazy"
            decoding="async"
            className={`carousel-slide-img absolute inset-0 w-full h-full object-cover ${imagePositionClass}
              transition-opacity duration-1000 ease-in-out ${idx === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="carousel-dot-nav absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-nord0/45 backdrop-blur-md px-3 py-2 rounded-full border border-nord3/30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`carousel-dot-btn w-2.5 h-2.5 rounded-full transition-[colors,transform] duration-300 cursor-pointer ${idx === index
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
    <div className={`project-card-row`}>
      <article
        className={`
          project-card-shell ${isReversed ? 'project-card-shell--from-right' : 'project-card-shell--from-left'}
          relative overflow-hidden
        `}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Image preview */}
          <div
            className={`
              relative z-10 group min-h-72 overflow-hidden border-nord3/30
              ${isReversed ? 'md:order-2 md:border-l' : 'md:order-1 md:border-r'}
            `}
          >
            <div className="h-full aspect-16/10 md:aspect-auto min-h-80 md:min-h-96">
              <ProjectImageCarousel images={project.images} title={project.title} imagePosition={project.imagePosition} />
            </div>
          </div>

          {/* Text and info */}
          <div
            className={`
              relative z-20 flex flex-col min-h-72 p-8 md:p-12 lg:p-14 overflow-hidden
              ${isReversed ? 'md:order-1' : 'md:order-2'}
            `}
          >
            <div
              className="absolute w-96 h-96 blur-2xl rounded-full pointer-events-none -top-64 -left-64"
              style={{ backgroundColor: `${project.glowColor}07 ` }}
            />
            <div
              className="absolute w-5xl h-256 blur-128 rounded-xl pointer-events-none -bottom-32 -right-32"
              style={{ backgroundColor: `${project.glowColor}09 ` }}
            />
            <div className="project-card-details-content flex-1 relative z-10">
              <h3 className="project-card-title font-headline text-shadow-md text-shadow-nord0 text-3xl md:text-4xl font-extrabold mb-6 text-nord6 tracking-tighter">
                {project.title}
              </h3>
              <p className="project-card-description text-nord4/90 mb-6 text-shadow-md leading-relaxed text-base font-medium">
                {project.description}
              </p>
              <a
                href={project.linkTo}
                className={`project-card-link inline-flex items-center gap-4 font-black uppercase tracking-widest text-xs text-shadow-md hover:gap-6 transition-[gap] ${project.linkColor}`}
              >
                {project.linkLabel}
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </a>
            </div>

            <div className="project-card-tags-container relative z-10 flex gap-3 mt-8 flex-wrap">
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

  // TEMP: card reveal animation disabled for perf testing
  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const cards = gsap.utils.toArray<HTMLElement>('.project-card-shell');
  //
  //     cards.forEach((card) => {
  //       const entersFromRight = card.classList.contains('project-card-shell--from-right');
  //
  //       gsap.set(card, {
  //         autoAlpha: 0,
  //         force3D: true,
  //         x: entersFromRight ? 220 : -220,
  //       });
  //
  //       gsap.to(card, {
  //         autoAlpha: 1,
  //         clearProps: 'transform,opacity,visibility',
  //         duration: 0.68,
  //         ease: 'power3.out',
  //         overwrite: 'auto',
  //         scrollTrigger: {
  //           trigger: card,
  //           start: 'top 84%',
  //           once: true,
  //         },
  //         x: 0,
  //       });
  //     });
  //
  //     ScrollTrigger.refresh();
  //   }, projectListRef);
  //
  //   return () => context.revert();
  // }, []);

  return (
    <section id="projects" className="relative py-48 px-6 md:px-20 bg-nord0 overflow-x-clip">
      <div className="absolute top-0 left-0 w-full pointer-events-none select-none flex flex-col gap-48">
        <img
          src="/images/backgrounds/projects-bg1.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1456}
          height={816}
          className="w-full"
          style={{
            opacity: 0.04,
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 70%, transparent 100%)',
          }}
        />
        <img
          src="/images/backgrounds/projects-bg2.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1456}
          height={816}
          className="w-full"
          style={{
            opacity: 0.04,
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 70%, transparent 100%)',
          }}
        />
      </div>
      {/* Top fade: eases oil painting in from section edge */}
      <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-10 bg-linear-to-b from-nord0 via-nord0/70 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-20">
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
          {PROJECTS.filter(p => !p.hidden).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProjectsSection;
