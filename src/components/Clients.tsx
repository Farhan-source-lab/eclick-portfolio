import { useEffect, useRef } from 'react';
import { clientsData } from '../data/clients';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getSpecificScaling = (id: string) => {
  if (['aim-united-global', 'dynamic-production', 'gdh-academy', 'sas-dental'].includes(id)) {
    return 'scale-[1.38] sm:scale-[1.48]';
  }
  return '';
};

export const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logosRef.current) return;

    const items = logosRef.current.querySelectorAll('.client-logo-unit');
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
            markers: false,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="clients" ref={containerRef} className="relative z-10">
      
      {/* 1. Top Rectangular Stage Divider with Curved Filleted Ends */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 block text-[#F3EFE6]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C60,0 80,60 140,60 L1300,60 C1360,60 1380,0 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. Main Section Canvas: Warm Gallery Stone (#F3EFE6) with Generous Spacing */}
      <section className="bg-[#F3EFE6] py-20 sm:py-28 md:py-36 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Minimal, High-End Title */}
          <div className="text-center mb-16 sm:mb-24 md:mb-28">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.38em] text-neutral-500 font-semibold">
              TRUSTED BY
            </h2>
          </div>

          {/* Pure Logos Grid: Uniform Sizing Across All Brand Logos */}
          <div
            ref={logosRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 sm:gap-x-14 md:gap-x-16 gap-y-14 sm:gap-y-18 md:gap-y-20 items-center justify-items-center"
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="client-logo-unit h-16 sm:h-20 w-full flex items-center justify-center p-2"
                title={client.name}
              >
                <img
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  className={`h-12 sm:h-16 w-auto max-w-[160px] sm:max-w-[185px] object-contain select-none opacity-85 transition-all duration-300 hover:opacity-100 ${getSpecificScaling(client.id)}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom Rectangular Stage Divider with Curved Filleted Ends */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mt-[1px] bg-[#F3EFE6]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 block text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C60,60 80,0 140,0 L1300,0 C1360,0 1380,60 1440,60 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </div>
  );
};
