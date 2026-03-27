import React from 'react';

const PETS = [
  {
    name: 'Oliver',
    title: 'Lead Sleep Officer',
    image: '/images/pet-oliver.png',
    alt: 'Oliver — orange tabby cat',
    offset: '',
  },
  {
    name: 'Luna',
    title: 'VP of Morale',
    image: '/images/pet-luna.png',
    alt: 'Luna — golden retriever',
    offset: 'translate-y-6',
  },
  {
    name: 'Pixel',
    title: 'Chief Happiness Architect',
    image: '/images/pet-pixel.png',
    alt: 'Pixel — Samoyed dog',
    offset: '',
    hideOnMd: true,
  },
];

const PetsSection: React.FC = () => {
  return (
    <section id="companions" className="py-32 bg-nord0 px-6 md:px-20">
      <div className="max-w-7xl mx-auto rounded-3xl bg-nord1 p-12 md:p-24 border border-nord3/30 relative overflow-hidden">
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <span className="font-label text-nord9 uppercase tracking-[0.3em] text-sm block mb-4 font-bold">
                The Team Behind the Scenes
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-nord6">
                <span className="opacity-70 font-light">My</span> <b>Companions</b>
              </h2>
            </div>
            <p className="max-w-sm text-nord4/60 leading-relaxed italic border-l-2 border-nord10 pl-6">
              "The best debugging partners don't speak code, they speak in purrs and tail wags."
            </p>
          </div>

          {/* Pet grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PETS.map(({ name, title, image, alt, offset, hideOnMd }) => (
              <div
                key={name}
                className={`flex flex-col items-center ${offset} ${hideOnMd ? 'hidden lg:flex' : ''}`}
              >
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 shadow-xl border border-nord3/30 grayscale hover:grayscale-0 transition-all duration-1000">
                  <img src={image} alt={alt} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-headline text-2xl font-bold text-nord6">{name}</h4>
                <p className="font-label text-nord4/50 text-xs uppercase tracking-[0.2em] mt-2 font-bold">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
