import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white border-b border-neutral-200/60">
      {/* Subtle fine technical grid lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Atmospheric ambient soft radial wash */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Concise Value Statement (7 cols) */}
          <div data-reveal="header" className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Oversized High-Contrast Editorial Serif Headline */}
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.06] mb-6">
              Technology, <span className="italic font-light text-neutral-800">creativity</span> and <span className="italic font-light text-neutral-800">intelligence</span> built around business.
            </h1>

            {/* Short, Punchy, Impressive Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-lg mb-8">
              Engineering intelligent software, autonomous AI systems, and high-impact digital experiences for modern enterprises.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0F172A] hover:bg-blue-600 active:scale-[0.98] text-white font-medium text-xs tracking-wider uppercase shadow-lg shadow-blue-950/10 hover:shadow-blue-600/25 transition-all duration-300 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-neutral-300 hover:border-blue-400 hover:text-blue-700 bg-white hover:bg-blue-50/40 text-neutral-800 font-medium text-xs tracking-wider uppercase shadow-2xs transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600" />
              </a>
            </div>

            {/* Minimalist Horizontal Capability Ticker */}
            <div className="pt-6 border-t border-neutral-200/80 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <span className="text-neutral-900 font-semibold hover:text-blue-600 transition-colors">AI SOLUTIONS</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-semibold hover:text-blue-600 transition-colors">SOFTWARE</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-semibold hover:text-blue-600 transition-colors">DIGITAL MARKETING</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-semibold hover:text-blue-600 transition-colors">TRANSFORMATION</span>
            </div>
          </div>

          {/* Right Column: Architectural Image Frame (5 cols) */}
          <div data-reveal="media" className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Rounded Frame */}
              <div className="relative rounded-[28px] overflow-hidden border border-neutral-200 bg-white p-3 shadow-xl shadow-neutral-950/5">
                <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-neutral-900">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                    alt="Eclick Tech Solutions Editorial Collaboration"
                    className="w-full h-full object-cover contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />

                  {/* Top Glass Floating Status Badge (Static, no pulse) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-mono tracking-wider uppercase shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>CORE ARCHITECTURE</span>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-300 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      01 / 06
                    </div>
                  </div>

                  {/* Bottom Caption within Image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-1.5 text-amber-300 text-[10px] font-mono uppercase tracking-widest mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Enterprise Digital Systems</span>
                    </div>
                    <p className="font-serif-display text-lg text-neutral-100 font-normal leading-snug">
                      Intelligent software and strategic design under one roof.
                    </p>
                  </div>
                </div>

                {/* Minimal Architectural Coordinate Stamp below Frame */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  <span>GLOBAL DEPLOYMENT</span>
                  <span className="text-neutral-900 font-semibold">INDIA • USA • KSA • UAE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
