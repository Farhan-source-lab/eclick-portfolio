import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { companyData } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#FBFAF7] border-b border-neutral-200/60">
      {/* Subtle fine technical grid lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Minimal Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-300 bg-white/90 text-neutral-800 text-[11px] font-medium tracking-[0.2em] uppercase mb-8 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700 animate-pulse" />
              <span>{companyData.eyebrow}</span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500 font-mono text-[10px]">EST. 2026</span>
            </div>

            {/* Oversized High-Contrast Editorial Serif Headline */}
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08] mb-8">
              Technology, <span className="italic font-light text-neutral-800">creativity</span> and <span className="italic font-light text-neutral-800">intelligence</span> built around business.
            </h1>

            {/* Factual Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mb-10">
              {companyData.aboutDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-14">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-xs tracking-wider uppercase shadow-md transition-all duration-200 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white/80 hover:bg-white text-neutral-800 font-medium text-xs tracking-wider uppercase transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            {/* Minimalist Horizontal Capability Ticker */}
            <div className="pt-6 border-t border-neutral-200/80 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <span className="text-neutral-900 font-semibold">AI SOLUTIONS</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-semibold">SOFTWARE</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-semibold">DIGITAL MARKETING</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-semibold">TRANSFORMATION</span>
            </div>
          </div>

          {/* Right Column: Architectural Image Frame & Minimalist Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Rounded Frame */}
              <div className="relative rounded-[28px] overflow-hidden border border-neutral-200 bg-white p-3 shadow-xl shadow-neutral-950/5">
                <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-neutral-900">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                    alt="Eclick Tech Solutions Editorial Collaboration"
                    className="w-full h-full object-cover grayscale contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                  {/* Top Glass Floating Status Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>ECLICK CORE ARCHITECTURE</span>
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

              {/* Floating Architectural Annotation Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-lg max-w-[210px]">
                <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  SYSTEM STATUS
                </div>
                <div className="text-xs font-semibold text-neutral-950 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  99.98% Model Fidelity
                </div>
                <div className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  Autonomous agents & RAG pipelines active
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
