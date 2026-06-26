import React, { useRef, useEffect } from 'react';
import { TIMELINE_DATA } from '@/data/timeline';

const CareerSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.shiftKey) {
        e.preventDefault();
        const scrollAmount = e.deltaY > 0 ? 50 : -50;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="career" className="py-24 px-6 md:px-20 bg-nord0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-12 gap-6">
          <div>
            <h2 className="font-mono text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-2">
              <code className="section-heading-code">
                <span className="opacity-70 font-light">cd</span> <b>career</b>
              </code>
            </h2>
            <p className="text-nord4/70 text-sm md:text-base font-medium">
              Scroll horizontally or use <kbd className="px-2 py-1 bg-nord1 border border-nord3 rounded text-xs font-mono">Shift+Scroll</kbd> to navigate
            </p>
          </div>
          <div className="flex items-center gap-2">
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
        </div>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory -mx-6 px-6 md:-mx-20 md:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TIMELINE_DATA.map((company, companyIdx) => (
            <div
              key={`${company.company}-${companyIdx}`}
              className="min-w-[320px] md:min-w-[420px] max-w-[420px] snap-center shrink-0 flex flex-col"
            >
              <div className="bg-nord1/50 backdrop-blur-md border border-nord3/40 rounded-2xl overflow-hidden h-full hover:border-nord8/40 transition-colors group">
                {/* Company header */}
                <div className="px-6 pt-6 pb-4 border-b border-nord3/30 bg-gradient-to-br from-nord1/80 to-nord0/80">
                  <h3 className="font-headline text-xl font-bold text-nord8 mb-1">
                    {company.company}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-nord4/60 font-bold">
                    {company.startDate} · {company.endDate}
                  </span>
                </div>

                {/* Roles */}
                <div className="px-6 py-6 space-y-4 flex-1 max-h-96 overflow-y-auto">
                  {company.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="group/role">
                      <h4 className="font-bold text-nord6 text-sm mb-2 group-hover/role:text-nord8 transition-colors">
                        {role.title}
                      </h4>
                      <span className="text-xs text-nord4/60 font-mono block mb-2">
                        {role.startDate} – {role.endDate}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-1 bg-nord3/30 text-nord4/80 rounded-full font-mono uppercase tracking-tight"
                          >
                            {skill}
                          </span>
                        ))}
                        {role.skills.length > 3 && (
                          <span className="text-[10px] px-2 py-1 bg-nord3/20 text-nord4/60 rounded-full font-mono">
                            +{role.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        #career > div > div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CareerSection;
