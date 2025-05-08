
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Thiago Braga</h3>
          <p className="text-sm text-secondary-foreground/80">
            SRE Engineer living in Brazil · 
            currently working at Scaffold Education
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-sm hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:text-white transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/projects" className="text-sm hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/tools" className="text-sm hover:text-white transition-colors">
                Tools
              </Link>
            </li>
            <li>
              <Link to="/talks" className="text-sm hover:text-white transition-colors">
                Talks
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-white/10">
        <p className="text-sm text-secondary-foreground/70">
          © {new Date().getFullYear()} Thiago Braga. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
