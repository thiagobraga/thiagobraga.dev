import React from 'react';
import { Link } from 'react-router-dom';

const SOCIALS = [
  { label: 'Instagram',     href: 'https://instagram.com/thiagobraga' },
  { label: 'LinkedIn',      href: 'https://linkedin.com/in/thiagobraga' },
  { label: 'GitHub',        href: 'https://github.com/thiagobraga' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/thiagobraga' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-nord0 pt-24 pb-12 px-8 border-t border-nord3/10">
      <div className="max-w-7xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-headline text-2xl block mb-3 tracking-tighter hover:text-nord8 transition-colors text-nord6">
              <span className="font-light opacity-70">thiago</span>
              <span className="font-bold">braga.dev</span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-nord4/60 max-w-sm">
              Designing digital experiences with precision, performance, and a touch of arctic editorial craft.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-8">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nord4/40 hover:text-nord13 transition-all font-label text-xs uppercase tracking-[0.2em] font-bold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-nord4/30 font-bold">
            © {new Date().getFullYear()} thiagobraga.dev. Built with Arctic Editorial precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
