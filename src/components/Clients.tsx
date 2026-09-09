import { useEffect, useRef } from 'react';
import { clientsData } from '../data/clients';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    <section
      id="clients"
      ref={containerRef}
      className="py-16 md:py-24 bg-[#FBFAF7] border-b border-neutral-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Eyebrow & Headline */}
        <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-neutral-200/70">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase block mb-2 font-medium">
              ( OUR CLIENTS )
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl text-neutral-900 font-normal">
              Trusted by businesses across industries.
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-[11px] font-mono text-neutral-500 tracking-wider uppercase">
            {clientsData.length} ENTERPRISE PARTNERS
          </div>
        </div>

        {/* Pure Logos Grid: No Boxes, No Cards, Sequential 1-by-1 Fade In */}
        <div
          ref={logosRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 items-center justify-items-center"
        >
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="client-logo-unit w-full h-16 sm:h-20 flex items-center justify-center p-2"
              title={client.name}
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className="max-h-9 sm:max-h-11 w-auto max-w-[140px] object-contain select-none opacity-90 transition-opacity duration-300 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


