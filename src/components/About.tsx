import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-white border-b border-neutral-200/70 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Modern Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 text-blue-900 text-[11px] font-mono tracking-[0.2em] uppercase mb-8 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span>( WHO WE ARE )</span>
        </div>

        {/* Editorial Split Layout */}
        <div data-reveal="header" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Large Display Serif Headline (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-[1.08]">
              Technology, creativity and business growth, <span className="italic text-neutral-800">working together</span>.
            </h2>

            {/* Vibrant Modern Pill Cloud */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 text-blue-950 text-[11px] font-mono font-medium tracking-wider uppercase shadow-2xs">
                AI SOLUTIONS
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200 text-indigo-950 text-[11px] font-mono font-medium tracking-wider uppercase shadow-2xs">
                SOFTWARE ARCHITECTURE
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50/90 border border-sky-200 text-sky-950 text-[11px] font-mono font-medium tracking-wider uppercase shadow-2xs">
                DIGITAL MARKETING
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-200 text-purple-950 text-[11px] font-mono font-medium tracking-wider uppercase shadow-2xs">
                CREATIVE STRATEGY
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200 text-emerald-950 text-[11px] font-mono font-medium tracking-wider uppercase shadow-2xs">
                BUSINESS INTELLIGENCE
              </span>
            </div>
          </div>

          {/* Right Column: Narrative Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            <p className="text-neutral-950 font-medium leading-relaxed">
              {companyData.aboutDescription}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We eliminate the traditional divide between rigorous technology engineering and strategic creative design. By unifying artificial intelligence, software infrastructure, and performance digital marketing under one roof, we empower organizations to innovate without friction.
            </p>

            <div className="pt-4">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-900 tracking-wider uppercase group"
              >
                <span>Inspect How We Architect Value</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Highlight Cards from PDF with Modern Top Accents */}
        <div data-reveal="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.aboutHighlights.map((hl, idx) => {
            const accents = [
              { border: 'border-t-blue-500', num: 'text-blue-600', dot: 'bg-blue-500' },
              { border: 'border-t-indigo-500', num: 'text-indigo-600', dot: 'bg-indigo-500' },
              { border: 'border-t-purple-500', num: 'text-purple-600', dot: 'bg-purple-500' },
              { border: 'border-t-emerald-500', num: 'text-emerald-600', dot: 'bg-emerald-500' }
            ];
            const acc = accents[idx % accents.length];

            return (
              <div
                key={hl}
                className={`p-7 rounded-[24px] bg-white border border-neutral-200/90 border-t-2 ${acc.border} shadow-sm hover:shadow-xl hover:shadow-neutral-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <span className={`font-mono text-xs font-bold ${acc.num} block mb-4`}>
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif-display text-xl font-semibold text-neutral-950 mb-2 leading-snug">
                    {hl}
                  </h3>
                </div>
                <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>CORE PILLAR</span>
                  <span className={`w-2 h-2 rounded-full ${acc.dot}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
