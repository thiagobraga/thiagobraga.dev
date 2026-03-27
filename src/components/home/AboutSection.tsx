import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-nord0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-12">
            <span className="opacity-70 font-light">Who</span> <b>Am I</b>
          </h2>

          <div className="space-y-6 text-nord4/80 text-lg leading-relaxed font-medium">
            <p>
              I'm a software engineer driven by the intersection of high-performance systems and
              creative aesthetics. With a background spanning from low-level security infrastructure
              to generative audio-visual arts, I build digital experiences that are as robust as
              they are beautiful.
            </p>
            <p>
              Based in Brazil, my work often reflects a sharp, precise sensibility — clean,
              minimal, and deeply functional. When I'm not auditing Kubernetes clusters or
              writing Rust, you can find me experimenting with synthesizers or exploring
              nature with my dogs.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-nord8 font-bold text-3xl font-headline">10+</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord3 font-black mt-1">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-nord15 font-bold text-3xl font-headline">50+</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-nord3 font-black mt-1">
                Projects Shipped
              </span>
            </div>
          </div>
        </div>

        {/* Image + decorations */}
        <div className="order-1 md:order-2">
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden border border-nord3/30 shadow-2xl relative z-10">
              <img
                src="/images/avatar.png"
                alt="Thiago Braga — Software Engineer"
                className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-1000"
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
