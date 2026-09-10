import React, { useLayoutEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { industriesData } from '../data/industries';

interface IndustriesProps {
  onBackToHome?: (targetHash?: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onBackToHome }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FCFAF6] min-h-screen text-[#111111]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-8">
          <a
            href="#"
            onClick={(e) => {
              if (onBackToHome) {
                e.preventDefault();
                onBackToHome();
              }
            }}
            className="hover:text-neutral-950 transition-colors underline underline-offset-4"
          >
            Home
          </a>
          <span>&gt;</span>
          <span className="text-neutral-900 font-medium">Industries</span>
        </nav>

        {/* Section Tag & Heading */}
        <div className="mb-16 pb-12 border-b border-neutral-300/80">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-amber-900/80 block mb-3 font-semibold">
            INDUSTRIES
          </span>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08] mb-6">
            Sectors we work in
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-3xl">
            The same capabilities play out differently in a factory, a hospital or a hotel. We bring the sector context that helps each system fit how the business actually operates.
          </p>
        </div>

        {/* 8 Sector Rows */}
        <div className="divide-y divide-neutral-200/90 border-b border-neutral-200/90">
          {industriesData.map((sector) => (
            <div
              key={sector.id}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline group"
            >
              {/* Sector Name (4 cols) */}
              <div className="lg:col-span-4">
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-neutral-950 tracking-tight group-hover:text-amber-900 transition-colors">
                  {sector.name}
                </h2>
              </div>

              {/* Sector Description (8 cols) */}
              <div className="lg:col-span-8">
                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Actions */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-200/80">
          <a
            href="#"
            onClick={(e) => {
              if (onBackToHome) {
                e.preventDefault();
                onBackToHome();
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Portfolio</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onBackToHome) {
                onBackToHome('#contact');
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-neutral-800 text-white text-xs font-medium tracking-wider uppercase transition-all shadow-md active:scale-95"
          >
            <span>Discuss Your Industry Sector</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
