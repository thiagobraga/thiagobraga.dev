import React from 'react';

const HeroSection: React.FC = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden bg-nord0">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center grayscale contrast-125 brightness-50"
          style={{ backgroundImage: "url('/images/misty-forest.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nord0/40 via-nord0/20 to-nord0" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl animate-fade-up">
        {/* Avatar */}
        <div className="mb-8 p-0.5 rounded-full bg-nord4/20 backdrop-blur-sm">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-nord0/50 overflow-hidden">
            <img
              src="/images/avatar.png"
              alt="Thiago Braga"
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-nord6">
          <span className="opacity-70 font-light">Thiago</span>{' '}
          <b>Braga</b>
        </h1>

        {/* Subtitle — middle dot (·) separated */}
        <p className="font-label text-nord4 text-base md:text-lg tracking-widest mb-12 uppercase leading-relaxed">
          <span className="text-nord8">Creative Musician and Developer</span>
          <span className="text-nord3 mx-3">·</span>
          <span>Dog Lover</span>
          <span className="text-nord3 mx-3">·</span>
          <span className="text-nord9">Information Security Student</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-5">
          <button
            id="hero-explore-btn"
            onClick={() => handleScroll('projects')}
            className="px-10 py-4 bg-nord13 text-nord0 font-headline font-bold rounded-lg hover:bg-nord13/90 transition-all active:scale-95 shadow-lg shadow-nord13/10"
          >
            Explore
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => handleScroll('about')}
            className="px-10 py-4 border border-nord3 text-nord6 font-headline font-bold rounded-lg hover:bg-nord1 transition-all active:scale-95 flex items-center gap-2"
          >
            Get in Touch
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-nord3 flex flex-col items-center gap-2">
        <span className="text-[10px] font-label uppercase tracking-widest">Scroll to discover</span>
        <span className="material-symbols-outlined animate-scroll-bounce">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
};

export default HeroSection;