import React from 'react';
import { Eye, MessageSquare, TrendingUp, Search, FileText, BarChart, ShieldCheck, Share2, Target, ArrowRight } from 'lucide-react';

export const MarketingSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      phase: 'Visibility',
      headline: 'Architecting High-Authority Search & Presence',
      description: 'Ensuring your corporate brand captures qualified, high-intent interest at the exact moment prospects seek solutions.',
      services: [
        {
          name: 'Search Engine Optimization (SEO)',
          details: 'Technical site architecture, semantic entity optimization, and Core Web Vitals performance for sustainable organic ranking.',
          icon: Search
        },
        {
          name: 'Website Analytics',
          details: 'Deep server-side tracking, user drop-off mapping, and conversion event intelligence grounded in verified behavioral data.',
          icon: BarChart
        }
      ],
      icon: Eye,
      accent: 'from-blue-600 to-indigo-600'
    },
    {
      step: '02',
      phase: 'Engagement',
      headline: 'Cultivating Thought Leadership & Trust',
      description: 'Translating corporate capabilities into compelling editorial narratives and active social community engagement.',
      services: [
        {
          name: 'Content Marketing & Branding',
          details: 'Strategic whitepapers, executive thought leadership, and brand messaging frameworks that build decisive authority.',
          icon: FileText
        },
        {
          name: 'Social Media Marketing (SMM)',
          details: 'Multi-platform content distribution, B2B LinkedIn frameworks, and active community cultivation.',
          icon: Share2
        }
      ],
      icon: MessageSquare,
      accent: 'from-indigo-600 to-violet-600'
    },
    {
      step: '03',
      phase: 'Leads',
      headline: 'Converting Attention into Commercial Pipelines',
      description: 'Precision performance advertising and proactive corporate reputation protection that produce tangible enterprise value.',
      services: [
        {
          name: 'Lead Generation Campaigns',
          details: 'Full-funnel performance advertising, high-conversion landing page architecture, and automated qualification workflows.',
          icon: Target
        },
        {
          name: 'Online Reputation Management (ORM)',
          details: 'Continuous brand sentiment monitoring, crisis communication frameworks, and search curation to protect corporate identity.',
          icon: ShieldCheck
        }
      ],
      icon: TrendingUp,
      accent: 'from-violet-600 to-blue-700'
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div data-reveal="header" className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <span>( DIGITAL MARKETING ENGINE )</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08] mb-5">
            Visibility <span className="italic">to</span> Engagement <span className="italic">to</span> Leads.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            A continuous commercial pipeline engineered to transform market obscurity into authoritative search dominance and qualified enterprise revenue.
          </p>
        </div>

        {/* 3-Pillar Narrative Columns */}
        <div data-reveal="cards" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="p-8 sm:p-9 rounded-[28px] bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pillar Top Badge */}
                  <div className="flex items-center justify-between pb-5 border-b border-neutral-100 mb-6">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                      PHASE {pillar.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800">
                      <PillarIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                    STRATEGIC OBJECTIVE
                  </span>
                  <h3 className="font-serif-display text-2xl font-semibold text-neutral-900 mb-3 leading-snug">
                    {pillar.phase}
                  </h3>
                  <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* 2 Core Services for this phase */}
                  <div className="space-y-4 pt-6 border-t border-neutral-100">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      DELIVERY PROTOCOLS
                    </span>
                    {pillar.services.map((svc) => {
                      const SvcIcon = svc.icon;
                      return (
                        <div key={svc.name} className="p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/60">
                          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 mb-1">
                            <SvcIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span>{svc.name}</span>
                          </div>
                          <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">
                            {svc.details}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-neutral-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-blue-700 transition-colors group"
                  >
                    <span>Activate {pillar.phase} System</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
