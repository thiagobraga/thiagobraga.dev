import React from 'react';
import { useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/#hero' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Music', to: '/#music' },
  { label: 'Pets', to: '/#pets' },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

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
          flex items-center gap-10 px-8 py-3 rounded-full
          border border-nord3/30 bg-nord1/60 backdrop-blur-xl
          shadow-lg shadow-black/20
        `}
      >
        {/* Logo */}
        <a href="/" className="group font-headline text-xl block tracking-tighter text-nord6">
          <span className="font-light opacity-70 group-hover:opacity-90 transition-opacity duration-400">thiago</span>
          <span className="font-bold text-nord6 group-hover:text-white transition-colors duration-400">braga</span>
          <span className="font-semibold text-nord6 group-hover:text-nord13 transition-colors duration-400">.dev</span>
        </a>

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
                    : 'text-nord4/80 hover:text-nord13'}
                `}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right icon — hidden for now */}
        {/* <div className="flex items-center text-nord8">
          <Link to="/admin" title="Login" className="material-symbols-outlined hover:scale-105 active:opacity-80 transition-all text-[22px]">
            account_circle
          </Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
