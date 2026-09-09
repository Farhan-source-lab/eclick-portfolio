import { Palette, Video, ArrowUpRight, Play } from 'lucide-react';

export const CreativeVideoSection = () => {
  const creativeServices = [
    {
      title: 'Brand Identity Design',
      description: 'Distinguished logos, typography systems, color guidelines, and comprehensive brand books that command immediate corporate authority.',
      tag: 'Visual Identity'
    },
    {
      title: 'Corporate Design Solutions',
      description: 'Executive visual design for annual reports, investor decks, whitepapers, and high-stakes shareholder presentations.',
      tag: 'Executive Collaterals'
    },
    {
      title: 'Social Media Creatives',
      description: 'Strategic multi-slide carousel designs, reel covers, and unified brand graphics engineered for high retention.',
      tag: 'Digital Assets'
    },
    {
      title: 'Marketing Design',
      description: 'High-conversion sales collaterals, digital campaign assets, trade show installations, and print media kits.',
      tag: 'Conversion Assets'
    }
  ];

  const videoCapabilities = [
    'Promotional Video Editing',
    'Corporate Video Production',
    'Reels & Shorts Editing',
    'Product Showcase Videos',
    'Motion Graphics'
  ];

  return (
    <section className="py-28 md:py-36 bg-white border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div data-reveal="header" className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Palette className="w-3.5 h-3.5" />
            <span>( CREATIVE & CINEMATIC PRODUCTION )</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08] mb-5">
            Strategic design <span className="italic">&amp; motion</span> that command authority.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            We bridge visual design intuition with commercial logic to create cohesive corporate identities and cinematic video productions that build enduring trust.
          </p>
        </div>

        {/* Studio Wall Layout: 4 Creative Solution Panels */}
        <div data-reveal="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {creativeServices.map((svc, idx) => {
            const accents = [
              { border: 'border-t-blue-500', num: 'text-blue-600', tag: 'text-blue-700 bg-blue-50/80 border-blue-200/60' },
              { border: 'border-t-indigo-500', num: 'text-indigo-600', tag: 'text-indigo-700 bg-indigo-50/80 border-indigo-200/60' },
              { border: 'border-t-purple-500', num: 'text-purple-600', tag: 'text-purple-700 bg-purple-50/80 border-purple-200/60' },
              { border: 'border-t-emerald-500', num: 'text-emerald-600', tag: 'text-emerald-700 bg-emerald-50/80 border-emerald-200/60' }
            ];
            const acc = accents[idx % accents.length];

            return (
              <div
                key={svc.title}
                className={`p-7 rounded-[24px] bg-white border border-neutral-200/90 border-t-2 ${acc.border} shadow-sm hover:shadow-xl hover:shadow-neutral-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                    <span className={`font-mono text-xs font-bold ${acc.num}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${acc.tag}`}>
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl font-semibold text-neutral-950 mb-3 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-blue-700 font-medium">
                  <span>View Design Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Video Showcase Frame */}
        <div data-reveal="media" className="relative rounded-[32px] overflow-hidden border border-neutral-800 bg-[#0B0F19] text-white p-8 sm:p-14 shadow-2xl">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-[10px] font-mono tracking-widest uppercase">
                <Video className="w-3 h-3 text-amber-400" />
                <span>VIDEO EDITING & MOTION SUITE</span>
              </div>

              <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-normal leading-tight">
                Cinematic video production tailored for enterprise storytelling.
              </h3>

              <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                From high-stakes commercial reels and corporate profiles to high-tempo social motion graphics, our editors turn raw footage into compelling brand cinema.
              </p>

              {/* 5 Video Capability Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {videoCapabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-neutral-200 font-medium"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-xs tracking-wider uppercase hover:bg-neutral-100 transition-colors"
                >
                  <span>Discuss Video Production</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Media Frame Mockup (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cinematic Video Editing Suite"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Video Meta Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    REC 4K PRORES 422 HQ
                  </span>
                  <span>TIMECODE 00:04:12:18</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
