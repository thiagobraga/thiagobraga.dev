import React, { useEffect } from 'react';
import { TIMELINE_DATA } from '@/data/timeline';

const TimelinePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-nord0 pt-32 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-nord1/50 to-transparent pointer-events-none" />
      <div className="absolute top-40 -left-64 w-96 h-96 bg-nord8/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-96 -right-64 w-96 h-96 bg-nord10/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-20">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-6">
            <span className="opacity-70 font-light">Career</span> <b>Timeline</b>
          </h1>
          <p className="text-xl text-nord4/80 max-w-2xl leading-relaxed">
            A comprehensive overview of my professional journey, the roles I've held, and the impact I've made along the way.
          </p>
        </header>

        <div className="relative border-l border-nord3/40 ml-4 md:ml-12 space-y-24">
          {TIMELINE_DATA.map((company, index) => (
            <div key={`${company.company}-${index}`} className="relative pl-10 md:pl-20">
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-nord1 border-4 border-nord8 shadow-[0_0_15px_rgba(136,192,208,0.3)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-nord8" />
              </div>

              {/* Company Header */}
              <div className="mb-12">
                <span className="font-label text-sm uppercase tracking-widest text-nord8 font-black block mb-3">
                  {company.startDate} - {company.endDate}
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-nord6">
                  {company.company}
                </h2>
              </div>

              {/* Roles */}
              <div className="space-y-16">
                {company.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="bg-nord1/40 border border-nord3/40 rounded-3xl p-8 md:p-12 hover:border-nord8/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                      <div>
                        <h3 className="font-headline text-2xl font-bold text-nord4 mb-2">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-nord4/60 font-medium">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            {role.startDate} - {role.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            {role.duration}
                          </span>
                          {role.location && (
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">location_on</span>
                              {role.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {role.description.map((desc, i) => (
                        <li key={i} className="text-nord4/80 leading-relaxed flex items-start gap-4">
                          <span className="material-symbols-outlined text-nord8 text-sm mt-1.5 shrink-0">arrow_right</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {role.skills && role.skills.length > 0 && (
                      <div className="pt-8 border-t border-nord3/30 flex flex-wrap gap-3">
                        {role.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-nord2/50 text-nord4 border border-nord3 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
