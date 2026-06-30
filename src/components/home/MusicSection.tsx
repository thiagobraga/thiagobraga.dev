import React, { useState } from 'react';

interface Album {
  title: string;
  artist: string;
  genre: string;
  image: string;
  imageWebp?: string;
  tracks: string[];
  duration: string;
  progress: string; // as Tailwind w-* fraction, e.g. "w-2/3"
  progressTime: string;
}

const ALBUMS: Album[] = [
  {
    title: 'Immutable',
    artist: 'Meshuggah',
    genre: 'Djent / Progressive Metal',
    image: '/images/listen/Meshuggah_Immutable.jpg',
    imageWebp: '/images/listen/Meshuggah_Immutable.webp',
    tracks: ['Broken Cog', 'The Abysmal Eye', 'Light the Shortening Fuse'],
    duration: '56:03',
    progress: 'w-1/3',
    progressTime: '18:41',
  },
  {
    title: 'Octavarium',
    artist: 'Dream Theater',
    genre: 'Progressive Metal',
    image: '/images/listen/Dream_Theater_Octavarium.jpg',
    imageWebp: '/images/listen/Dream_Theater_Octavarium.webp',
    tracks: ['The Root of All Evil', 'The Answer Lies Within', 'These Walls'],
    duration: '95:02',
    progress: 'w-3/5',
    progressTime: '54:21',
  },
  {
    title: 'Ghost Reveries',
    artist: 'Opeth',
    genre: 'Progressive Death Metal',
    image: '/images/listen/Opeth_Ghost_Reveries.jpg',
    imageWebp: '/images/listen/Opeth_Ghost_Reveries.webp',
    tracks: ['Ghost of Perdition', 'The Baying of the Hounds', 'Beneath the Mire'],
    duration: '67:05',
    progress: 'w-1/2',
    progressTime: '33:32',
  },
  {
    title: 'Physical Graffiti',
    artist: 'Led Zeppelin',
    genre: 'Hard Rock / Blues Rock',
    image: '/images/listen/Led_Zeppelin_Physical_Graffiti.jpg',
    imageWebp: '/images/listen/Led_Zeppelin_Physical_Graffiti.webp',
    tracks: ['Custard Pie', 'The Rover', 'In My Time of Dying'],
    duration: '82:45',
    progress: 'w-2/3',
    progressTime: '55:10',
  },
  {
    title: 'Fear of a Blank Planet',
    artist: 'Porcupine Tree',
    genre: 'Progressive Rock',
    image: '/images/listen/Porcupine-Tree-Fear-of-A-Blank-Planet.webp',
    tracks: ['Fear of a Blank Planet', 'My Ashes', 'Anesthetize'],
    duration: '51:21',
    progress: 'w-1/4',
    progressTime: '12:50',
  },
];

const MusicSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const album = ALBUMS[activeIdx];

  return (
    <section id="music" className="py-32 px-6 md:px-20 bg-nord1 relative overflow-hidden border-y border-nord3/20">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-16">
          <h2 className="font-mono text-5xl md:text-7xl tracking-tighter text-nord6">
            <code className="section-heading-code">
              <span className="opacity-70 font-light">--listen</span>
            </code>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Album Art */}
          <div className="relative size-72 max-w-full md:size-[32rem] shrink-0">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-nord3/30">
              <picture>
                {album.imageWebp && <source srcSet={album.imageWebp} type="image/webp" />}
                <img
                  src={album.image}
                  alt={`${album.title} — ${album.artist}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </picture>
            </div>
          </div>

          {/* Track info */}
          <div className="flex-1 space-y-10 w-full">
            {/* Album info */}
            <div>
              <h3 className="font-headline text-3xl font-bold mb-1 text-nord6">{album.title}</h3>
              <p className="text-nord8 font-label font-bold text-sm mb-1">{album.artist}</p>
              <p className="text-nord13 font-label uppercase tracking-widest text-xs mb-8 font-bold">
                {album.genre}
              </p>
              {/* Progress bar */}
              <div className="h-1 bg-nord3 rounded-full overflow-hidden">
                <div className={`${album.progress} h-full bg-nord13 rounded-full transition-[width] duration-700`} />
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-label text-nord4/75 uppercase font-bold">
                <span>{album.progressTime}</span>
                <span>{album.duration}</span>
              </div>
            </div>

            {/* Track list */}
            <div className="space-y-3">
              {album.tracks.map((track, i) => (
                <div
                  key={track}
                  className="flex items-center justify-between p-4 rounded-lg bg-nord0/40 border border-nord3/20 hover:bg-nord0/60 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-nord4/70 font-label text-sm font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-headline font-semibold text-nord6 text-sm">{track}</span>
                  </div>
                  <span className="material-symbols-outlined text-nord4/70 group-hover:text-nord13 transition-colors">
                    more_vert
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Album switcher */}
        <div className="mt-16 pt-10 border-t border-nord3/20">
          <span className="font-label text-xs uppercase tracking-[0.4em] text-nord3 font-black block mb-8">
            Current Rotation
          </span>
          <div className="flex gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {ALBUMS.map((a, i) => (
              <button
                key={a.title}
                id={`music-album-${i}`}
                onClick={() => setActiveIdx(i)}
                className={`
                  flex flex-col items-center gap-3 shrink-0 w-36 group transition-opacity
                  ${i === activeIdx ? 'opacity-100' : 'opacity-50 hover:opacity-80'}
                `}
              >
                <div className={`w-36 h-36 rounded-xl overflow-hidden border-2 transition-[colors,box-shadow] ${i === activeIdx ? 'border-nord13 shadow-lg shadow-nord13/20' : 'border-transparent'}`}>
                  <picture>
                    {a.imageWebp && <source srcSet={a.imageWebp} type="image/webp" />}
                    <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </picture>
                </div>
                <div className="text-center">
                  <p className={`text-xs font-label font-bold truncate w-full ${i === activeIdx ? 'text-nord13' : 'text-nord4/70'}`}>{a.artist}</p>
                  <p className="text-[10px] font-label text-nord4/70 truncate w-full">{a.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
