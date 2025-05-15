
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/40 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extralight navbar-link">
          Thiago <strong>Braga</strong>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-extralight hover:text-primary/80 transition-colors navbar-link">
            Home
          </Link>
          <Link to="/blog" className="text-sm font-extralight hover:text-primary/80 transition-colors navbar-link">
            Blog
          </Link>
          <Link to="/about" className="text-sm font-extralight hover:text-primary/80 transition-colors navbar-link">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Link to="/admin">
            <Button variant="ghost" size="sm" className="navbar-link font-extralight">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
