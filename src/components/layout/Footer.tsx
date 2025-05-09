
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-light mb-4">
            Thiago <strong>Braga</strong>
          </h3>
          <p className="text-sm text-secondary-foreground/80 font-light">
            SRE Engineer living in Brazil · 
            currently working at Scaffold Education
          </p>
        </div>
        <div>
          <h4 className="font-light mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm hover:text-white transition-colors font-light">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-sm hover:text-white transition-colors font-light">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:text-white transition-colors font-light">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-light mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/projects" className="text-sm hover:text-white transition-colors font-light">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/tools" className="text-sm hover:text-white transition-colors font-light">
                Tools
              </Link>
            </li>
            <li>
              <Link to="/talks" className="text-sm hover:text-white transition-colors font-light">
                Talks
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-light mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/" className="text-sm hover:text-white transition-colors font-light" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="text-sm hover:text-white transition-colors font-light" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" className="text-sm hover:text-white transition-colors font-light" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-white/10">
        <p className="text-sm text-secondary-foreground/70 font-light">
          © {new Date().getFullYear()} Thiago <strong>Braga</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
