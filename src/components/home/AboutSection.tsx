import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-nord0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-5xl md:text-7xl tracking-tighter text-nord6 mb-12">
            <span className="opacity-70 font-light">Who</span><span className="font-semibold">AmI</span>
          </h2>

          <div className="space-y-6 text-nord4/80 text-lg leading-relaxed font-medium">
            <p>
              I am the intersection — where creativity meets technology, guided by a warm heart.
              A disruptive thinker who solves complex IT problems with elegant solutions.
              I try to make the world better — especially for dogs.
            </p>
            <p>
              <small>
                Currently living in Brazil (well, I've always lived here),
                I have <b>16+</b> years of experience in software development.
                I've worked with a wide range of technologies.
                From web to mobile, from frontend to backend, and also as a DevOps Engineer.
                I'm currently studying CyberSecurity.
              </small>
            </p>
            <p>
              <small>
                When I'm not coding, or debugging something, or learning something new
                (that I'll throw away minutes later), you can find me playing guitar,
                making music, hanging out with my dogs, or playing games.
              </small>
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-nord8 font-bold text-3xl font-headline">16+</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-nord15 font-bold text-3xl font-headline">5000 L+</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                Coffee Consumed
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-nord14 font-bold text-3xl font-headline">3</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                Herniated Discs
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-nord13 font-bold text-3xl font-headline">6</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                Mutt Dogs
              </span>
            </div>
          </div>
        </div>

        {/* Image + decorations */}
        <div className="order-1 md:order-2">
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden border border-nord3/30 shadow-2xl relative z-10">
              <img
                src="/images/thiagobraga-hero-section.jpg"
                alt="Thiago Braga — Software Engineer"
                className="w-full h-full object-cover saturate-50 contrast-110 ease-in-out hover:scale-105 hover:saturate-100 hover:transition duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-48 h-48 border border-nord10/20 rounded-full -z-0 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-nord8/5 blur-3xl rounded-full -z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
