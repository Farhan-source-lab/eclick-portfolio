import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!curveRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth scroll-driven parallax: arch gently elevates & settles as user scrolls over hero
      gsap.fromTo(
        curveRef.current,
        {
          y: 28,
          scaleY: 0.88,
        },
        {
          y: 0,
          scaleY: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 95%',
            end: 'top 60%',
            scrub: 1.2,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" ref={containerRef} className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20">
      {/* 1. Upward-Facing Rectangular Arch with Curved Filleted Ends */}
      <div
        ref={curveRef}
        className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px] origin-bottom"
      >
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 block text-white drop-shadow-[0_-14px_28px_rgba(0,0,0,0.24)]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C70,70 120,12 180,12 L1260,12 C1320,12 1370,70 1440,70 L1440,71 L0,71 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. Main About Section Canvas */}
      <section className="relative bg-white py-24 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Editorial Narrative Grid */}
          <div data-reveal="header" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
            
            {/* Left Column: Bold Display Headline */}
            <div className="lg:col-span-7">
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 tracking-tight leading-[1.14]">
                Technology, creativity and business growth, <span className="italic text-neutral-600">working together</span>.
              </h2>
            </div>

            {/* Right Column: Direct, Clean Positioning Statement */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                {companyData.aboutDescription}
              </p>

              <div className="pt-2">
                <a
                  href="#timeline"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-blue-700 tracking-wider uppercase group transition-colors"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* 4 Clean Highlight Cards */}
          <div data-reveal="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {companyData.aboutHighlights.map((highlight, idx) => (
              <div
                key={highlight}
                className="p-7 sm:p-8 rounded-2xl bg-[#FAF9F5] border border-neutral-200/70 flex flex-col justify-between min-h-[180px] sm:min-h-[210px] hover:border-neutral-400 transition-colors duration-300"
              >
                <span className="font-mono text-xs font-medium text-neutral-400 block mb-6">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-display text-lg sm:text-xl font-normal text-neutral-900 leading-snug">
                  {highlight}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
