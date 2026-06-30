import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!bgRef.current || !sectionRef.current) return;

    const tween = gsap.fromTo(
      bgRef.current,
      { xPercent: -4 },
      {
        xPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6 md:px-20 bg-nord0 overflow-hidden">
      {/* Fog Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center overflow-hidden">
        <img
          ref={bgRef}
          src="/images/backgrounds/fog.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-[1500px] max-w-[150vw] h-[900px] max-h-[150vh] object-contain"
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
                Developer, musician, and dog father with <b>16+</b> years shipping software —
                from PHP monoliths to React frontends and DevOps pipelines.
              </p>
              <p>
                Based in Brazil, currently studying Information Security at SENAC.
                Formalizing what I've been practicing in the field. The goal: understand
                systems well enough to break them, then build them better.
              </p>
              <p>
                When I'm not in a terminal, I'm making music. Or surrounded by six dogs.
                Sometimes both. Guitar, music production, and the occasional game fill
                whatever's left.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 md:mt-12 grid grid-cols-3 gap-5 sm:flex sm:items-center sm:gap-12">
              <div className="flex flex-col">
                <span className="text-nord8 font-bold text-3xl font-headline">16+</span>
                <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                  Years<br />
                  Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-nord13 font-bold text-3xl font-headline">6</span>
                <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                  Mutt<br />
                  Dogs
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-nord11 font-bold text-3xl font-headline">2</span>
                <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                  Music<br />
                  Bands
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-nord14 font-bold text-3xl font-headline">3</span>
                <span className="text-[10px] font-label uppercase tracking-widest text-nord4 font-black mt-1">
                  Herniated<br />
                  Discs
                </span>
              </div>
            </div>
          </div>

          {/* Image + decorations */}
          <div className="w-full order-1 sm:order-2">
            <div className="relative group">
              <div className="h-72 sm:h-96 md:h-[41rem] rounded-2xl md:rounded-3xl overflow-hidden border border-nord3/30 shadow-xl relative z-10">
                <img
                  src="/images/people/thiagobraga-hero-section.webp"
                  alt="Thiago Braga - Software Engineer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover saturate-50 contrast-100 ease-in-out hover:saturate-90 hover:transition duration-1500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
