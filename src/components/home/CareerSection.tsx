import React, { useState } from 'react';
import { TIMELINE_DATA, type TimelineCompany } from '@/data/timeline';

const CareerSection: React.FC = () => {
  const [selected, setSelected] = useState<TimelineCompany>(TIMELINE_DATA[0]);
  const [animating, setAnimating] = useState(false);

  const select = (company: TimelineCompany) => {
    if (company.company === selected.company) return;
    setAnimating(true);
    setTimeout(() => {
      setSelected(company);
      setAnimating(false);
    }, 140);
  };

  return (
    <section id="career" className="py-24 px-6 md:px-20 bg-nord0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="font-mono text-5xl md:text-7xl font-extrabold tracking-tighter text-nord6 mb-16">
          <code className="section-heading-code">
            <span className="opacity-50 font-light">tail -f</span> <b>career</b>
          </code>
        </h2>

        {/* Two-panel layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 border border-nord3/30 rounded-sm overflow-hidden">

          {/* Left: company list */}
          <div className="lg:w-2/5 border-b lg:border-b-0 lg:border-r border-nord3/30">
            {TIMELINE_DATA.map((company) => {
              const isActive = selected.company === company.company;
              return (
                <button
                  key={company.company}
                  onClick={() => select(company)}
                  onMouseEnter={() => select(company)}
                  className={[
                    'w-full text-left px-6 py-5 border-b border-nord3/20 last:border-b-0 transition-all duration-150 cursor-pointer group',
                    isActive
                      ? 'bg-nord1/80 border-l-2 border-l-nord8'
                      : 'hover:bg-nord1/40 border-l-2 border-l-transparent',
                  ].join(' ')}
                >
                  <span className={[
                    'block font-headline font-bold text-sm mb-1 transition-colors duration-150',
                    isActive ? 'text-nord8' : 'text-nord5 group-hover:text-nord6',
                  ].join(' ')}>
                    {company.company}
                  </span>
                  <span className="block font-mono text-[11px] text-nord4/50">
                    {company.startDate} · {company.endDate}
                  </span>
                  <span className="block font-mono text-[11px] text-nord4/40 mt-0.5">
                    {company.roles.map(r => r.title).join(' · ')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:w-3/5 bg-nord1/30 p-8 lg:p-10">
            <div
              className={[
                'transition-all duration-150',
                animating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0',
              ].join(' ')}
            >
              {/* Company header */}
              <div className="mb-8">
                <h3 className="font-headline text-2xl font-bold text-nord6 mb-1">
                  {selected.company}
                </h3>
                <span className="font-mono text-[11px] text-nord8/60 uppercase tracking-widest">
                  {selected.startDate} — {selected.endDate}
                </span>
              </div>

              {/* Roles */}
              <div className="space-y-8">
                {selected.roles.map((role, idx) => (
                  <div key={idx}>
                    {/* Role title + dates */}
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                      <h4 className="font-headline font-bold text-nord8 text-base">
                        {role.title}
                      </h4>
                      <span className="font-mono text-[11px] text-nord4/50">
                        {role.startDate} – {role.endDate}
                      </span>
                      {role.location && (
                        <span className="font-mono text-[11px] text-nord4/40">
                          {role.location}
                        </span>
                      )}
                    </div>

                    {/* Descriptions */}
                    <ul className="space-y-1.5 mb-4">
                      {role.description.map((line, i) => (
                        <li key={i} className="flex gap-3 text-sm text-nord4/80 leading-relaxed">
                          <span className="font-mono text-nord3 mt-0.5 shrink-0">›</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-2.5 py-1 bg-nord3/25 text-nord4/70 border border-nord3/30 rounded-full font-mono uppercase tracking-tight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Divider between roles */}
                    {idx < selected.roles.length - 1 && (
                      <div className="mt-8 border-t border-nord3/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSection;
