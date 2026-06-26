import React, { useRef } from 'react';
import { useLenis } from 'lenis/react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLenis(() => {
    if (bgRef.current && sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      bgRef.current.style.transform = `translateX(${-rect.top * 0.15}px)`;
    }
  });

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6 md:px-20 bg-nord0 overflow-hidden">
      {/* Fog Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center overflow-hidden">
        <div
          ref={bgRef}
          className="w-[1500px] max-w-[150vw] h-[900px] max-h-[150vh] bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/images/fog.png')",
            backgroundSize: "contain"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-mono text-5xl md:text-7xl tracking-tighter text-nord6 mb-12">
          <code className="section-heading-code">
            <span className="opacity-70 font-light">who</span><span className="font-semibold">am</span><span className="opacity-70 font-light">i</span>
          </code>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(8rem,38vw)] md:grid-cols-2 items-start gap-6 md:gap-32">
          {/* Text content */}
          <div className="min-w-0 order-2 sm:order-1">
            <div className="space-y-6 text-nord4/80 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            <p>
              I am the intersection - where creativity meets technology, guided by a warm heart.
              A disruptive thinker who solves complex IT problems with elegant solutions.
              I try to make the world better - especially for dogs.
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
          <div className="mt-10 md:mt-12 grid grid-cols-2 gap-5 sm:flex sm:items-center sm:gap-12">
            <div className="flex flex-col">
              <span className="text-nord8 font-bold text-3xl font-headline">16+</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-nord15 font-bold text-3xl font-headline">50 L+</span>
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
        <div className="w-full order-1 sm:order-2">
          <div className="relative group">
            <div className="h-72 sm:h-96 md:h-[41rem] rounded-2xl md:rounded-3xl overflow-hidden border border-nord3/30 shadow-xl relative z-10">
              <img
                src="/images/thiagobraga-hero-section.jpg"
                alt="Thiago Braga - Software Engineer"
                className="w-full h-full object-cover saturate-50 contrast-100 ease-in-out hover:saturate-90 hover:transition duration-1500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-48 h-48 border border-nord10/20 rounded-full -z-0 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-nord8/5 blur-3xl rounded-full -z-0 pointer-events-none" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
