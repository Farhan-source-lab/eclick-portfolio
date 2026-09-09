import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';

export const About = () => {
  const tags = ['AI SOLUTIONS', 'SOFTWARE ARCHITECTURE', 'DIGITAL MARKETING', 'CREATIVE STRATEGY', 'BUSINESS INTELLIGENCE'];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#FBFAF7] border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Minimal Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-8 shadow-2xs">
          <span>( WHO WE ARE )</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Large Display Serif Headline (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-tight leading-[1.08]">
              Technology, creativity and business growth, <span className="italic">working together</span>.
            </h2>

            {/* Pill Cloud */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-[11px] font-mono font-medium tracking-wider uppercase shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            <p className="text-neutral-900 font-medium leading-relaxed">
              {companyData.aboutDescription}
            </p>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
              We eliminate the traditional divide between rigorous technology engineering and strategic creative design. By unifying artificial intelligence, software infrastructure, and performance digital marketing under one roof, we empower organizations to innovate without friction.
            </p>

            <div className="pt-4">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-blue-700 tracking-wider uppercase group"
              >
                <span>Inspect How We Architect Value</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Highlight Cards from PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.aboutHighlights.map((hl, idx) => (
            <div
              key={hl}
              className="p-7 rounded-[24px] bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-neutral-400 group-hover:text-blue-600 transition-colors block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-display text-xl font-semibold text-neutral-900 mb-2 leading-snug">
                  {hl}
                </h3>
              </div>
              <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>CORE PILLAR</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
