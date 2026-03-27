import React, { useState } from 'react';

interface Album {
  title: string;
  artist: string;
  genre: string;
  image: string;
  tracks: string[];
  duration: string;
  progress: string; // as Tailwind w-* fraction, e.g. "w-2/3"
  progressTime: string;
}

const ALBUMS: Album[] = [
  {
    title: 'Octavarium',
    artist: 'Dream Theater',
    genre: 'Progressive Metal',
    image: '/images/album-octavarium.png',
    tracks: ['The Root of All Evil', 'The Answer Lies Within', 'These Walls'],
    duration: '95:02',
    progress: 'w-3/5',
    progressTime: '54:21',
  },
  {
    title: 'Immutable',
    artist: 'Meshuggah',
    genre: 'Djent / Progressive Metal',
    image: '/images/album-immutable.png',
    tracks: ['Broken Cog', 'The Abysmal Eye', 'Light the Shortening Fuse'],
    duration: '56:03',
    progress: 'w-1/3',
    progressTime: '18:41',
  },
  {
    title: 'Ghost Reveries',
    artist: 'Opeth',
    genre: 'Progressive Death Metal',
    image: '/images/album-ghost-reveries.png',
    tracks: ['Ghost of Perdition', 'The Baying of the Hounds', 'Beneath the Mire'],
    duration: '67:05',
    progress: 'w-1/2',
    progressTime: '33:32',
  },
  {
    title: 'Physical Graffiti',
    artist: 'Led Zeppelin',
    genre: 'Hard Rock / Blues Rock',
    image: '/images/album-physical-graffiti.png',
    tracks: ['Custard Pie', 'The Rover', 'In My Time of Dying'],
    duration: '82:45',
    progress: 'w-2/3',
    progressTime: '55:10',
  },
  {
    title: 'Fear of a Blank Planet',
    artist: 'Porcupine Tree',
    genre: 'Progressive Rock',
    image: '/images/album-fear-blank-planet.png',
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
    <section id="music" className="py-32 bg-nord1 relative overflow-hidden border-y border-nord3/20">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-16">
          <span className="material-symbols-outlined text-nord13 text-4xl">graphic_eq</span>
          <h2 className="font-headline text-4xl font-bold text-nord6">
            <span className="opacity-70 font-light">What</span> <b>I'm Listening To</b>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Album Art */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-nord3/30">
              <img
                src={album.image}
                alt={`${album.title} — ${album.artist}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Play badge */}
            <div className="absolute -bottom-4 -right-4 bg-nord0 p-4 rounded-full border border-nord13 shadow-xl">
              <span className="material-symbols-outlined text-nord13 text-xl">play_arrow</span>
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
                <div className={`${album.progress} h-full bg-nord13 rounded-full transition-all duration-700`} />
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-label text-nord4/50 uppercase font-bold">
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
                    <span className="text-nord4/40 font-label text-sm font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-headline font-semibold text-nord6 text-sm">{track}</span>
                  </div>
                  <span className="material-symbols-outlined text-nord4/40 group-hover:text-nord13 transition-colors">
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
          <div className="flex flex-wrap gap-4">
            {ALBUMS.map((a, i) => (
              <button
                key={a.title}
                id={`music-album-${i}`}
                onClick={() => setActiveIdx(i)}
                className={`
                  flex items-center gap-3 px-5 py-3 rounded-full border text-sm font-label font-bold transition-all
                  ${i === activeIdx
                    ? 'bg-nord13/20 border-nord13/50 text-nord13'
                    : 'border-nord3/30 text-nord4/60 hover:border-nord8/40 hover:text-nord8'}
                `}
              >
                <div className="w-6 h-6 rounded overflow-hidden shrink-0">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <span>{a.artist}</span>
                <span className="opacity-60">—</span>
                <span>{a.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
