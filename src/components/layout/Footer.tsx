import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, type LucideIcon } from 'lucide-react';

interface Social {
  label: string;
  href: string;
  Icon: LucideIcon;
  hoverColor: string;
  hoverBg: string;
}

const SOCIALS: Social[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/thiagobragadev',
    Icon: Instagram,
    hoverColor: '#E1306C',
    hoverBg: '#E1306C',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-braga/',
    Icon: Linkedin,
    hoverColor: '#0A66C2',
    hoverBg: '#0A66C2',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thiagobraga',
    Icon: Github,
    hoverColor: '#FFFFFF',
    hoverBg: '#FFFFFF',
  },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/1096219/thiagobraga',
    Icon: Github,
    hoverColor: '#F58025',
    hoverBg: '#F58025',
  },
];

const SITE_LINKS = [
  { label: 'Home',     to: '/#hero' },
  { label: 'About',    to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Music',    to: '/#music' },
  { label: 'Pets',     to: '/#pets' },
  { label: 'Career',   to: '/timeline' },
];

const ReactLogo: React.FC = () => (
  <svg
    aria-label="React"
    className="inline h-4 w-4 align-[-0.25em] text-nord8"
    fill="none"
    role="img"
    viewBox="-11.5 -10.23174 23 20.46348"
  >
    <circle cx="0" cy="0" fill="currentColor" r="2.05" />
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const StackOverflowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path d="M6 19.5h12v-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    <path d="M8 17h8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M8.4 14.1l7.8 1.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M9.4 11.2l7.3 2.9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M11 8.5l6.2 4.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M13.3 5.9l4.5 6.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 px-8 border-t border-nord1 shadow-[0_-40px_120px_rgba(0,0,0,0.28)] overflow-hidden">
      <img
        src="/images/backgrounds/wood-texture.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#151922]/96 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.8fr_1.4fr] md:items-start">
          {/* Branding */}
          <div className="text-center md:text-left">
            <a href="/" className="group font-headline text-2xl block mb-3 tracking-tighter text-nord6">
              <span className="font-light opacity-70 group-hover:opacity-90 transition-opacity duration-400">thiago</span>
              <span className="font-bold text-nord6 group-hover:text-white transition-colors duration-400">braga</span>
              <span className="font-semibold text-nord6 group-hover:text-nord13 transition-colors duration-400">.dev</span>
            </a>

            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              {SOCIALS.map(({ label, href, Icon, hoverColor, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-nord3/40 bg-nord0/40 text-nord4/80 transition-all hover:-translate-y-1"
                  style={{
                    '--hover-color': hoverColor,
                    '--hover-bg': hoverBg,
                  } as React.CSSProperties & { '--hover-color': string; '--hover-bg': string }}
                >
                  {label === 'Stack Overflow' ? (
                    <StackOverflowIcon className="h-5 w-5 transition-colors group-hover:text-[var(--hover-color)]" />
                  ) : (
                    <Icon className="h-5 w-5 transition-colors group-hover:text-[var(--hover-color)]" aria-hidden="true" strokeWidth={1.8} />
                  )}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="text-center md:text-left">
            <h2 className="font-label text-[10px] font-black uppercase tracking-[0.35em] text-nord8/70">
              Site Links
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1">
              {SITE_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="font-label text-xs font-bold uppercase tracking-[0.22em] text-nord4/75 transition-colors hover:text-nord13"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="text-center md:text-left">
            <h2 className="font-label text-[10px] font-black uppercase tracking-[0.35em] text-nord8/70">
              Tech Details
            </h2>
            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-nord4/65">
              This website was created on top of <ReactLogo /> React, TypeScript,
              Vite, Tailwind CSS, GSAP, and Lenis, then shipped as a lightweight
              static site running on an always-free server on OCI.
            </p>
            <a
              href="https://www.oracle.com/cloud/free/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-label text-[10px] font-black uppercase tracking-[0.28em] text-nord4/75 transition-colors hover:text-nord13"
            >
              Always-Free OCI
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-nord4/35 font-bold">
            © {new Date().getFullYear()} thiagobraga.dev. Built with love, inspiration, coffee, and AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
