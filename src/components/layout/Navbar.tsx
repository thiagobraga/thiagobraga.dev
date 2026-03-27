import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Music',    to: '/#music' },
  { label: 'About',    to: '/#about' },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-5">
      <nav
        className={`
          flex items-center gap-10 px-8 py-3 rounded-full border transition-all duration-500 ease-premium
          bg-nord1/60 backdrop-blur-xl border-nord3/30
          ${scrolled ? 'shadow-lg shadow-black/20' : ''}
        `}
      >
        {/* Logo */}
        <Link to="/" className="text-xl tracking-tighter text-nord6 font-headline shrink-0">
          <span className="font-light opacity-70">thiago</span>
          <span className="font-bold">braga.dev</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to.replace('/#', '/'));
            return (
              <a
                key={label}
                href={to}
                onClick={(e) => handleAnchorClick(e, to)}
                className={`
                  font-headline font-medium tracking-tight text-sm transition-all duration-300
                  ${isActive
                    ? 'text-nord8 font-bold border-b border-nord8 pb-0.5'
                    : 'text-nord4/80 hover:text-nord8'}
                `}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right icon */}
        <div className="flex items-center text-nord8">
          <Link to="/admin" title="Login" className="material-symbols-outlined hover:scale-105 active:opacity-80 transition-all text-[22px]">
            account_circle
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
