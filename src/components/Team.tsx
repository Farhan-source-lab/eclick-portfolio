import { Users } from 'lucide-react';
import { UnsplashGrid } from './UnsplashGrid';

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-neutral-300/70">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-blue-700" />
              <span>( LEADERSHIP & EXPERTISE )</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08]">
              The minds behind <span className="italic">the innovation</span>.
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            09 TEAM MEMBERS
          </div>
        </div>

        {/* Temporary Interactive Photo Gallery */}
        <UnsplashGrid />
      </div>
    </section>
  );
};
