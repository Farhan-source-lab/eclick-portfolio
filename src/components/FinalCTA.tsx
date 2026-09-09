import { ArrowRight, Phone } from 'lucide-react';
import { companyData } from '../data/company';

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0B0F19] text-white relative overflow-hidden border-b border-neutral-800">
      {/* Subtle fine technical grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Minimal Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-300 text-[11px] font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LET'S CONNECT</span>
          </div>

          {/* Large Editorial Serif Statement */}
          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.06]">
            Let's build <br />
            <span className="italic text-neutral-300">what comes next</span>.
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            We welcome inquiries, collaborations, and project discussions. Partner with Eclick to transform your technical, digital, and commercial landscape.
          </p>

          {/* Direct Email Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${companyData.contacts.email}?subject=Project%20Inquiry%20-%20Eclick%20Tech%20Solutions`}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-neutral-950 font-semibold text-xs tracking-wider uppercase shadow-xl transition-all duration-200 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${companyData.contacts.indiaPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-neutral-700 hover:border-neutral-500 bg-neutral-900/60 text-neutral-300 font-medium text-xs tracking-wider uppercase transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Direct</span>
            </a>
          </div>

          {/* Verified Contact Numbers Strip */}
          <div className="pt-12 mt-12 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                INDIA HQ
              </span>
              <a
                href={`tel:${companyData.contacts.indiaPhone.replace(/\s+/g, '')}`}
                className="text-sm font-mono font-medium text-neutral-200 hover:text-white transition-colors block"
              >
                {companyData.contacts.indiaPhone}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                KSA REGIONAL HUB
              </span>
              <a
                href={`tel:${companyData.contacts.ksaPhone.replace(/\s+/g, '')}`}
                className="text-sm font-mono font-medium text-neutral-200 hover:text-white transition-colors block"
              >
                {companyData.contacts.ksaPhone}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                PRIMARY EMAIL
              </span>
              <a
                href={`mailto:${companyData.contacts.email}`}
                className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors block truncate"
              >
                {companyData.contacts.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
