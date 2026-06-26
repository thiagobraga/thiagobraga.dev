import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Instagram, Linkedin, type LucideIcon } from 'lucide-react';

const SOCIALS: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: 'Instagram',      href: 'https://instagram.com/thiagobragadev', Icon: Instagram },
  { label: 'LinkedIn',       href: 'https://www.linkedin.com/in/thiago-braga/', Icon: Linkedin },
  { label: 'GitHub',         href: 'https://github.com/thiagobraga', Icon: Github },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/1096219/thiagobraga', Icon: Code2 },
];

const SITE_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Career',   to: '/timeline' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Music',    to: '/#music' },
  { label: 'About',    to: '/#about' },
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

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151922] pt-24 pb-12 px-8 border-t border-nord8/10 shadow-[0_-40px_120px_rgba(0,0,0,0.28)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.8fr_1.4fr] md:items-start">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-headline text-2xl block mb-3 tracking-tighter hover:text-nord8 transition-colors text-nord6">
              <span className="font-light opacity-70">thiago</span>
              <span className="font-bold">braga.dev</span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-nord4/70 max-w-sm">
              Built with love, inspiration, coffee, and AI.
            </p>

            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-nord3/40 bg-nord0/40 text-nord4/60 transition-all hover:-translate-y-1 hover:border-nord13/50 hover:bg-nord13/10 hover:text-nord13"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
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
                  className="font-label text-xs font-bold uppercase tracking-[0.22em] text-nord4/50 transition-colors hover:text-nord13"
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
              className="mt-6 inline-flex font-label text-[10px] font-black uppercase tracking-[0.28em] text-nord13 transition-colors hover:text-nord8"
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
