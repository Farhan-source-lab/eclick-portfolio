import React from 'react';
import { clientsData } from '../data/clients';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 bg-[#F7F7F4] border-b border-neutral-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Minimal Eyebrow & Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-neutral-200/60">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase block mb-2">
              ( CLIENT NETWORK )
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl text-neutral-900 font-normal">
              Trusted by businesses across industries.
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-[11px] font-mono text-neutral-500 tracking-wider uppercase">
            11 KEY ENTERPRISE PARTNERS
          </div>
        </div>

        {/* Logo Wall: Minimal, Crisp, Editorial Presentation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="p-4 rounded-xl border border-neutral-200/80 bg-white/70 hover:bg-white hover:border-neutral-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between min-h-[96px] group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-neutral-400 group-hover:text-blue-700 transition-colors uppercase">
                  CLIENT
                </span>
                <span className="text-neutral-300 text-xs font-mono">+</span>
              </div>
              <div>
                <span className="font-serif-display text-sm sm:text-base font-bold text-neutral-900 tracking-tight block leading-tight group-hover:text-neutral-950">
                  {client.name}
                </span>
                <span className="text-[10px] text-neutral-500 block truncate mt-0.5">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
