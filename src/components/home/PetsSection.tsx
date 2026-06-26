import React from 'react';

const PETS = [
  {
    name: 'Meg',
    image: '/images/meg.jpg',
    alt: 'Meg the dog',
  },
  {
    name: 'Snoopy',
    image: '/images/snoopy.jpg',
    alt: 'Snoopy on a balcony looking back over the shoulder',
  },
  {
    name: 'Lucy',
    image: '/images/lucy.jpg',
    alt: 'Lucy in a close portrait with a white coat',
  },
  {
    name: 'Kali',
    image: '/images/kali.jpg',
    alt: 'Kali sleeping on a wooden floor',
  },
  {
    name: 'Luke',
    image: '/images/luke.png',
    alt: 'Luke resting on the floor in the sunlight',
  },
  {
    name: 'Lila',
    image: '/images/lila.jpg',
    alt: 'Lila resting in warm sunlight on the floor',
  },
  {
    name: 'Chico',
    image: '/images/chico.jpg',
    alt: 'Chico standing on a balcony and looking sideways',
  },
];

const PetsSection: React.FC = () => {
  return (
    <section id="companions" className="py-32 bg-nord0 px-6 md:px-20">
      <div className="max-w-7xl mx-auto rounded-3xl bg-nord1 p-12 md:p-24 border border-nord3/30 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <span className="font-label text-nord9 uppercase tracking-[0.3em] text-sm block mb-4 font-bold">
                The Team Behind the Scenes
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-nord6">
                <code className="section-heading-code">Pets</code>
              </h2>
            </div>
            <p className="max-w-sm text-nord4/60 leading-relaxed italic border-l-2 border-nord10 pl-6">
              "The best debugging partners don't speak code, they speak in purrs and tail wags."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {PETS.slice(0, 6).map(({ name, image, alt }) => (
              <div key={name} className="group flex flex-col items-center">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 shadow-xl border border-nord3/30">
                  <img src={image} alt={alt} className="w-full h-full object-cover grayscale-50 opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h4 className="font-headline text-2xl font-bold text-nord6">{name}</h4>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            {PETS.slice(6).map(({ name, image, alt }) => (
              <div key={name} className="group flex flex-col items-center max-w-sm w-full">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 shadow-xl border border-nord3/30">
                  <img src={image} alt={alt} className="w-full h-full object-cover grayscale-50 opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h4 className="font-headline text-2xl font-bold text-nord6">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
