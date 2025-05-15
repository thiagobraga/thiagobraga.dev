
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center text-white relative">
      <div className="container relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-light animate-fade-in">
          Thiago <strong>Braga</strong>
        </h1>
        <p className="mt-4 text-lg md:text-xl animate-fade-in font-light">
          SRE Engineer living in Brazil <br /> currently working at Scaffold Education
        </p>
        <div className="absolute bottom-8 left-0 right-0 animate-fade-in">
          <Button 
            variant="outline" 
            className="rounded-full bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 font-light mx-auto mb-8"
            onClick={() => {
              document.getElementById('blog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown className="mr-2" size={16} />
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
