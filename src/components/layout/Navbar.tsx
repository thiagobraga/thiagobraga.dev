
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/40 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-medium navbar-link">
          Thiago Braga
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors navbar-link">
            Home
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary/80 transition-colors navbar-link">
            Blog
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary/80 transition-colors navbar-link">
            About
          </Link>
        </nav>
        <div>
          <Link to="/admin">
            <Button variant="ghost" size="sm" className="navbar-link">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
