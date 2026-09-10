import { Globe, Phone, MapPin, Clock } from 'lucide-react';
import { companyData } from '../data/company';

export const GlobalPresence = () => {
  return (
    <section className="py-28 md:py-36 bg-white border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-neutral-300/70">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span>( GLOBAL FOOTPRINT )</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08]">
              Operating across <span className="italic">four key markets</span>.
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            SYNCHRONIZED OPERATIONS
          </div>
        </div>

        {/* 4 Location Editorial Cards */}
        <div data-reveal="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {companyData.locations.map((loc) => (
            <div
              key={loc.code}
              className="p-7 rounded-[24px] bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">
                    {loc.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                <h3 className="font-serif-display text-2xl font-semibold text-neutral-900 mb-1">
                  {loc.country}
                </h3>
                <p className="text-xs text-neutral-500 font-medium mb-6">
                  {loc.role}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-neutral-100 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{loc.timezone}</span>
                  </div>
                  {loc.phone && (
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 text-neutral-800 hover:text-blue-700 transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{loc.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-100 text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>REGIONAL DEPLOYMENT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Connectivity Banner */}
        <div className="p-6 sm:p-8 rounded-[24px] bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              SEAMLESS CROSS-BORDER EXECUTION
            </span>
            <p className="font-serif-display text-lg sm:text-xl text-neutral-100 font-normal">
              Built across markets. Connected by technology.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-neutral-900 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-100 transition-colors shrink-0"
          >
            <span>Connect with Global Team</span>
          </a>
        </div>

      </div>
    </section>
  );
};
