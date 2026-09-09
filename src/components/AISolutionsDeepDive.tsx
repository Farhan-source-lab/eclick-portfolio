import React, { useState } from 'react';
import { Cpu, Bot, Workflow, Layers, ShieldCheck, BarChart3, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/services';

export const AISolutionsDeepDive: React.FC = () => {
  const aiService = servicesData.find((s) => s.id === 'ai-solutions');
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);

  if (!aiService) return null;

  const currentSub = aiService.subServices[selectedSubIndex];

  const icons = [Cpu, Bot, Workflow, Layers, ShieldCheck, BarChart3];

  return (
    <section id="ai-solutions" className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-blue-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              Specialized Practice
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
            AI Built for Real Business Workflows
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From autonomous multi-agent pipelines to private enterprise generative models, we engineer intelligent systems that solve operational bottlenecks with measurable business impact.
          </p>
        </div>

        {/* 6 AI Capabilities List & Interactive Architecture Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 6 AI Capabilities Selector */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {aiService.subServices.map((item, idx) => {
              const Icon = icons[idx % icons.length];
              const isSelected = idx === selectedSubIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSubIndex(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {item.tagline}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      isSelected
                        ? 'text-blue-400 bg-blue-950/80'
                        : 'text-slate-500'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Technical Detail Box */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                MODULE ARCHITECTURE // 0{selectedSubIndex + 1}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                ACTIVE PIPELINE
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              {currentSub.name}
            </h3>
            <div className="text-xs font-medium text-blue-400 mb-6 font-mono">
              {currentSub.tagline}
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {currentSub.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Architectural Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSub.capabilities.map((cap, cidx) => (
                  <div
                    key={cidx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300"
                  >
                    <div className="w-4 h-4 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Ready for deployment & testing
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Deploy with Eclick</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
