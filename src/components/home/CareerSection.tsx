import React from 'react';
import { TIMELINE_DATA } from '@/data/timeline';

const CareerSection: React.FC = () => {

  return (
    <section id="career" className="py-24 px-6 md:px-20 bg-nord0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="font-mono text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-16">
          <code className="section-heading-code">
            <span className="opacity-70 font-light">cd</span> <b>career</b>
          </code>
        </h2>

        {/* Career Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default CareerSection;
