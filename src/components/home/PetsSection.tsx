import React from 'react';

const PETS = [
  {
    name: 'Meg',
    image: '/images/pets/meg.jpg',
    alt: 'Meg the dog',
  },
  {
    name: 'Lucy',
    image: '/images/pets/lucy.jpg',
    alt: 'Lucy in a close portrait with a white coat',
  },
  {
    name: 'Kali',
    image: '/images/pets/kali.jpg',
    alt: 'Kali sleeping on a wooden floor',
  },
  {
    name: 'Snoopy',
    image: '/images/pets/snoopy.jpg',
    alt: 'Snoopy on a balcony looking back over the shoulder',
  },
  {
    name: 'Lila',
    image: '/images/pets/lila.jpg',
    alt: 'Lila resting in warm sunlight on the floor',
  },
  {
    name: 'Luke',
    image: '/images/pets/luke.png',
    alt: 'Luke resting on the floor in the sunlight',
  },
  // {
  //   name: 'Chico',
  //   image: '/images/pets/chico.jpg',
  //   alt: 'Chico standing on a balcony and looking sideways',
  // },
];

const PetsSection: React.FC = () => {
  return (
    <section id="pets" className="py-32 px-6 md:px-20 bg-nord1 border-y border-nord3/20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="font-mono text-5xl md:text-7xl tracking-tighter text-nord6 mb-8">
            <code className="section-heading-code">
              <b>healthcheck</b>
            </code>
          </h2>
          <p className="max-w-xl text-nord4/60 leading-relaxed border-l-2 border-nord10 pl-6">
            This is the backend to ensure 100% emotional availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PETS.slice(0, 6).map(({ name, image, alt }) => (
            <div key={name} className="group relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-nord3/30">
              <img src={image} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-nord0/90 to-transparent" />
              <h4 className="absolute bottom-5 left-0 right-0 text-center font-headline text-2xl font-bold text-nord6 drop-shadow-lg">{name}</h4>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 flex justify-center">
          {PETS.slice(6).map(({ name, image, alt }) => (
            <div key={name} className="group relative max-w-sm w-full aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-nord3/30">
              <img src={image} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-50 opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-nord0/90 to-transparent" />
              <h4 className="absolute bottom-5 left-0 right-0 text-center font-headline text-2xl font-bold text-nord6 drop-shadow-lg">{name}</h4>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PetsSection;
