import React, { useRef } from 'react';
import { TIMELINE_DATA } from '@/data/timeline';
import { Link } from 'react-router-dom';

const TimelineSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="py-24 px-6 md:px-20 bg-nord0/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-nord3/30 pb-12 gap-6">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6">
            <span className="opacity-70 font-light">My</span> <b>Career</b>
          </h2>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-nord3/40 flex items-center justify-center text-nord4 hover:bg-nord3/20 hover:text-nord8 transition-all"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-nord3/40 flex items-center justify-center text-nord4 hover:bg-nord3/20 hover:text-nord8 transition-all"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <Link
              to="/timeline"
              className="inline-flex items-center gap-3 bg-nord8 text-nord0 px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs hover:bg-nord9 hover:gap-5 transition-all w-fit"
            >
              Complete Timeline
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-20 md:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TIMELINE_DATA.map((company, index) => (
            <div 
              key={`${company.company}-${index}`} 
              className="min-w-[320px] md:min-w-[420px] max-w-[420px] snap-center shrink-0 flex flex-col relative group"
            >
              <div className="absolute top-8 -left-4 md:-left-12 w-[200%] h-[2px] bg-nord3/30 -z-10" />
              
              {/* Point on timeline */}
              <div className="w-5 h-5 rounded-full bg-nord1 border-4 border-nord8 mb-8 z-10 mx-auto left-0 right-0 absolute group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(136,192,208,0.5)]" />
              
              <div className="bg-nord1/80 backdrop-blur-md border border-nord3/40 p-8 rounded-3xl mt-16 h-full flex flex-col hover:border-nord8/40 transition-colors">
                <div className="mb-6">
                  <span className="font-label text-xs uppercase tracking-widest text-nord8 font-bold block mb-2">
                    {company.startDate} - {company.endDate}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-nord6">
                    {company.company}
                  </h3>
                </div>

                <div className="space-y-6 flex-1">
                  {company.roles.map((role, idx) => (
                    <div key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-nord4 before:rounded-full before:opacity-50">
                      <h4 className="font-bold text-nord4 text-lg mb-1">{role.title}</h4>
                      <span className="text-sm text-nord4/60 font-medium">
                        {role.startDate} - {role.endDate} · {role.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
