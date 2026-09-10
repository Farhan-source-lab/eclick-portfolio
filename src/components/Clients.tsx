import { useEffect, useRef } from 'react';
import { clientsData } from '../data/clients';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Optical size presets so each brand logo shares balanced visual weight
const getLogoSizing = (id: string) => {
  switch (id) {
    case 'sas-dental':
      return 'h-14 sm:h-16 max-w-[140px]';
    case 'gdh-academy':
      return 'h-12 sm:h-14 max-w-[140px]';
    case 'dynamic-production':
      return 'h-11 sm:h-13 max-w-[165px]';
    case 'wallcraft-panels':
      return 'h-11 sm:h-13 max-w-[160px]';
    case 'aim-united-global':
      return 'h-12 sm:h-15 max-w-[145px]';
    case 'mace-ai-academy':
      return 'h-11 sm:h-13 max-w-[155px]';
    case 'redesign-dental':
      return 'h-10 sm:h-12 max-w-[160px]';
    case 'amana':
      return 'h-7 sm:h-9 max-w-[140px]';
    case 'boxoo':
      return 'h-9 sm:h-11 max-w-[155px]';
    default:
      return 'h-10 sm:h-12 max-w-[150px]';
  }
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

          {/* Pure Logos Grid: Generous Gap, Perfect Optical Sizing, 1-by-1 Fade In */}
          <div
            ref={logosRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 sm:gap-x-14 md:gap-x-16 gap-y-16 sm:gap-y-20 md:gap-y-24 items-center justify-items-center"
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="client-logo-unit w-full flex items-center justify-center p-2"
                title={client.name}
              >
                <img
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  className={`w-auto object-contain select-none opacity-85 transition-opacity duration-300 hover:opacity-100 ${getLogoSizing(client.id)}`}
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



