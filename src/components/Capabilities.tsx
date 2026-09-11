import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/services';

export const Capabilities = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = servicesData[activeIdx >= 0 ? activeIdx : 0];

  const handleCardClick = (idx: number) => {
    // On mobile screens, toggle the accordion open/close cleanly
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setActiveIdx((prev) => (prev === idx ? -1 : idx));
    } else {
      setActiveIdx(idx);
    }
  };

  const handleMouseEnter = (idx: number) => {
    // Only trigger hover on devices that truly support hover (desktop mouse)
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setActiveIdx(idx);
    }
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-white border-b border-neutral-200/70 relative">
      {/* Anchor alias for backwards compatibility */}
      <span id="capabilities" className="sr-only" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Eyebrow */}
        <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-neutral-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
              <span>( OUR SERVICES )</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08]">
              One partner. <br className="hidden sm:inline" />
              <span className="italic">Integrated services</span>.
            </h2>
          </div>
          <div className="mt-6 sm:mt-0 text-left sm:text-right">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              SERVICES / 06 PILLARS
            </span>
            <span className="text-xl sm:text-2xl font-serif-display font-bold text-neutral-900 block mt-1">
              0{activeIdx >= 0 ? activeIdx + 1 : 1} <span className="text-neutral-400 font-normal text-sm">/ 06</span>
            </span>
          </div>
        </div>

        {/* Layout: Interactive List with Mobile Inline Accordion Expansion + Desktop 2-Column Sticky Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Numbered Interactive List (7 cols on desktop, full width on mobile) */}
          <div data-reveal="cards" className="lg:col-span-7 flex flex-col divide-y divide-neutral-200/80 border-y border-neutral-200/80">
            {servicesData.map((svc, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={svc.id}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  className={`group py-5 sm:py-6 px-3.5 sm:px-5 rounded-2xl cursor-pointer transition-colors duration-200 flex flex-col ${
                    isActive
                      ? 'bg-neutral-50/90 border border-neutral-200/80 shadow-xs'
                      : 'hover:bg-neutral-50/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 w-full">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs sm:text-sm font-semibold transition-colors mt-1 ${
                          isActive ? 'text-blue-700' : 'text-neutral-400 group-hover:text-neutral-700'
                        }`}
                      >
                        {svc.number}
                      </span>
                      <div>
                        <h3
                          className={`font-serif-display text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight transition-colors ${
                            isActive ? 'text-neutral-950' : 'text-neutral-700 group-hover:text-neutral-900'
                          }`}
                        >
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 line-clamp-2 max-w-xl font-normal leading-relaxed">
                          {svc.summary}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 mt-1.5">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? 'bg-neutral-950 text-white border-neutral-950 scale-105'
                            : 'border-neutral-300 text-neutral-400 group-hover:border-neutral-500 group-hover:text-neutral-800'
                        }`}
                      >
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isActive ? 'rotate-90 lg:rotate-0' : 'rotate-0'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Inline Expanded Accordion with Smooth Framer-Motion Height Physics */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`accordion-${svc.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="mt-5 pt-5 border-t border-neutral-200/70 space-y-5">
                          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                            {svc.fullDescription}
                          </p>

                          {/* Key Highlights Checklist */}
                          <div className="space-y-2 pt-3 border-t border-neutral-100">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1.5">
                              KEY HIGHLIGHTS
                            </span>
                            {svc.highlights.map((item) => (
                              <div key={item} className="flex items-center gap-2.5 text-xs text-neutral-700">
                                <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                                  <Check className="w-2.5 h-2.5" />
                                </div>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          {/* Sub-Services Pill Cloud */}
                          <div className="pt-3 border-t border-neutral-100">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-2">
                              SPECIALIZED SUITE
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {svc.subServices.map((sub) => (
                                <span
                                  key={sub.name}
                                  className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[11px] font-medium border border-neutral-200"
                                >
                                  {sub.name}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Mobile Inquire CTA */}
                          <div className="pt-2">
                            <a
                              href="#contact"
                              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-xs font-medium tracking-wider uppercase"
                            >
                              <span>Inquire about {svc.shortTitle}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Sticky Preview Panel (Visible on Desktop lg screens) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-8 sm:p-9 rounded-[28px] bg-white border border-neutral-200/90 shadow-xl shadow-neutral-900/4 space-y-6">
              
              {/* Header with Active Number & Pillar */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-800 uppercase">
                    ACTIVE DOMAIN
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {activeService.number} of 06
                </span>
              </div>

              {/* Title & Full Description */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
                  ENTERPRISE CAPABILITY
                </span>
                <h4 className="font-serif-display text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight leading-snug">
                  {activeService.headline}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal mt-4">
                  {activeService.fullDescription}
                </p>
              </div>

              {/* Key Highlights Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-2">
                  KEY HIGHLIGHTS
                </span>
                {activeService.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Sub-Services Pill Cloud */}
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-3">
                  SPECIALIZED SUITE
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.subServices.map((sub) => (
                    <span
                      key={sub.name}
                      className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[11px] font-medium border border-neutral-200"
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquire CTA inside Preview Panel */}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium tracking-wider uppercase transition-colors"
                >
                  <span>Inquire about {activeService.shortTitle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
