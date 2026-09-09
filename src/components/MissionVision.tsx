import { Target, Compass, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/company';

export const MissionVision = () => {
  return (
    <section className="py-28 md:py-36 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div data-reveal="header" className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <span>( PURPOSE & PRINCIPLES )</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08] mb-5">
            Mission, Vision <span className="italic">&amp; Values</span>.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            The foundational ethos that informs every AI architecture, design decision, and client relationship we undertake.
          </p>
        </div>

        {/* 3 Large Editorial Columns */}
        <div data-reveal="cards" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Our Mission */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100 mb-6">
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  PILLAR 01
                </span>
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                OUR COMMITMENT
              </span>
              <h3 className="font-serif-display text-3xl font-semibold text-neutral-950 mb-4">
                Our Mission
              </h3>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                {companyData.mission}
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              DRIVING ENTERPRISE VALUE
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100 mb-6">
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  PILLAR 02
                </span>
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                OUR HORIZON
              </span>
              <h3 className="font-serif-display text-3xl font-semibold text-neutral-950 mb-4">
                Our Vision
              </h3>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                {companyData.vision}
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              TECHNOLOGY &amp; CREATIVITY COMBINED
            </div>
          </div>

          {/* Card 3: Core Values */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100 mb-6">
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  PILLAR 03
                </span>
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                OUR DNA
              </span>
              <h3 className="font-serif-display text-3xl font-semibold text-neutral-950 mb-4">
                Core Values
              </h3>
              <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-6">
                {companyData.coreValuesDescription}
              </p>

              {/* 6 Core Values List */}
              <div className="space-y-2 pt-4 border-t border-neutral-100">
                {companyData.coreValues.map((val) => (
                  <div key={val.title} className="flex items-center gap-2 text-xs text-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold">{val.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-8 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              CLIENT-FOCUSED INTEGRITY
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
