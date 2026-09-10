import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ShieldAlert, Database, DollarSign, ShoppingCart, Layout, Layers, Sparkles } from 'lucide-react';
import { projectsData, type ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

export const SelectedWork = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !cardsContainer) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length <= 1) return;

    const mm = gsap.matchMedia();

    // Desktop: Dedicated GSAP Pinned Stage
    mm.add('(min-width: 1024px)', () => {
      // Set initial positions: Card 0 is active at 0px, all subsequent cards start below viewport
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, scale: 1, zIndex: 10 });
        } else {
          gsap.set(card, { y: '105vh', scale: 1, zIndex: 10 + i });
        }
      });

      // Master scrubbing timeline pinned to the viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: `+=${(cards.length - 1) * 700}`,
          scrub: 0.6,
          anticipatePin: 1
        }
      });

      // Sequence each card sliding up and stacking over the previous ones
      for (let i = 1; i < cards.length; i++) {
        const currentCard = cards[i];
        const targetY = i * 16; // Sleek stacked lip

        // 1. Scale down and subtly dim all previous cards in the stack
        for (let prev = 0; prev < i; prev++) {
          const depth = i - prev;
          const targetScale = Math.max(0.90, 1 - depth * 0.025);
          const targetOpacity = Math.max(0.65, 1 - depth * 0.07);

          tl.to(
            cards[prev],
            {
              scale: targetScale,
              opacity: targetOpacity,
              duration: 0.8,
              ease: 'power1.inOut'
            },
            `card-${i}`
          );
        }

        // 2. Slide the current card up into its stacked position
        tl.to(
          currentCard,
          {
            y: targetY,
            duration: 1,
            ease: 'power2.out'
          },
          `card-${i}`
        );
      }
    });

    // Mobile: Clean state reset so native CSS sticky stack performs without lag
    mm.add('(max-width: 1023px)', () => {
      cards.forEach((card) => {
        gsap.set(card, { clearProps: 'all' });
      });
    });

    return () => mm.revert();
  }, []);

  // Renders a custom, domain-specific visual interactive showcase for each of the 6 projects
  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case 'ai-lead-threat-intelligence':
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                  THREAT SCORING PIPELINE
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                ACTIVE MONITORING
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-400 block mb-1">DETECTION INGESTION</span>
                <div className="text-xs font-mono font-bold text-amber-400">STREAMING HEURISTIC</div>
                <span className="text-[10px] text-neutral-400 mt-1 block">Sub-50ms latency filter</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-400 block mb-1">VERIFICATION LOGIC</span>
                <div className="text-xs font-mono font-bold text-emerald-400">DETERMINISTIC</div>
                <span className="text-[10px] text-neutral-400 mt-1 block">Multi-layer threat scoring</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-[11px] font-mono text-neutral-300 space-y-1">
              <div className="flex items-center justify-between text-neutral-400 text-[10px]">
                <span>LATEST ALERT DISPATCH</span>
                <span className="text-emerald-400">SIGNAL #884 VERIFIED</span>
              </div>
              <p className="text-neutral-300 text-xs">High-confidence lead pattern authenticated across global CRM.</p>
            </div>
          </div>
        );

      case 'data-management-platform':
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-sky-400" />
                <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                  MULTI-DATABASE SEMANTIC ARCHITECTURE
                </span>
              </div>
              <span className="text-[10px] font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/80">
                HIGH-THROUGHPUT
              </span>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
              <span className="text-[9px] font-mono text-neutral-400 block mb-1">NATURAL LANGUAGE QUERY</span>
              <div className="text-xs font-mono text-sky-300 truncate">
                "Query all enterprise accounts with vector similarities &gt; 0.92"
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-400 block text-[9px]">POSTGRES</span>
                <span className="text-emerald-400 font-semibold">SYNCHED</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-400 block text-[9px]">VECTOR STORE</span>
                <span className="text-emerald-400 font-semibold">INDEXED</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-400 block text-[9px]">WORKSPACES</span>
                <span className="text-sky-400 font-semibold">SHARED</span>
              </div>
            </div>
          </div>
        );

      case 'ai-revops-copilot':
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                  REVENUE INTELLIGENCE &amp; INVOICE AI
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                SALESFORCE SYNCED
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-200 font-medium">Invoice Document Extraction</span>
                <span className="font-mono text-emerald-400 text-[10px] font-semibold">OCR 99.8%</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                <span>Multi-Currency Parsing</span>
                <span className="text-neutral-200">USD • EUR • SAR • AED</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-400 text-[11px]">Ledger Reconciliation</span>
              <span className="text-emerald-400 font-mono text-[11px] font-semibold">ZERO DISCREPANCIES</span>
            </div>
          </div>
        );

      case 'ecommerce-automation':
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                  COMMERCE CONVERSION PIPELINE
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/80">
                LIFECYCLE ENGINE
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-300 text-[11px]">01. Abandoned Cart Signal</span>
                <span className="text-neutral-400 text-[9px]">T = 0m</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-300 text-[11px]">02. Contextual Dynamic Re-Engagement</span>
                <span className="text-blue-400 text-[9px]">T = +15m</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-emerald-400 text-[11px]">03. Checkout Recovery Converted</span>
                <span className="text-emerald-400 text-[9px]">RECOVERED</span>
              </div>
            </div>
          </div>
        );

      case 'website-ui-design':
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-indigo-400" />
                <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                  EDITORIAL USER INTERFACE SYSTEM
                </span>
              </div>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/80">
                HIGH FIDELITY
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-2">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">
                CORE VALUE PROPOSITION
              </span>
              <p className="font-serif-display text-base text-neutral-100 italic font-normal leading-snug">
                "Build long-term partnerships through exceptional service and genuine care."
              </p>
              <div className="flex items-center gap-2 pt-1 text-[9px] font-mono text-neutral-400">
                <span>RESPONSIVE VIEWPORT 390px — 1440px</span>
                <span>•</span>
                <span>FLUID TYPOGRAPHY</span>
              </div>
            </div>
          </div>
        );

      case 'social-media-creatives':
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-400" />
                <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                  BRAND ASSET SUITE &amp; CONTENT DECK
                </span>
              </div>
              <span className="text-[10px] font-mono text-violet-400 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/80">
                MULTI-CHANNEL
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-400 block mb-0.5">CAROUSEL</span>
                <span className="font-medium text-neutral-200 text-[11px] block">Slide Kits</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-400 block mb-0.5">REEL COVERS</span>
                <span className="font-medium text-neutral-200 text-[11px] block">4K Assets</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-400 block mb-0.5">BRAND DECK</span>
                <span className="font-medium text-neutral-200 text-[11px] block">Vector Lib</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} id="selected-work" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-20 lg:pb-16 bg-[#FBFBFB] border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 lg:mb-10 pb-4 border-b border-neutral-300/70">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-800 text-[10px] font-mono tracking-[0.2em] uppercase mb-2 shadow-2xs">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>( SELECTED CASE STUDIES )</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-950 font-normal tracking-tight leading-tight">
              Real solutions. <span className="italic">Proven business impact</span>.
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block">
              DEPLOYED ENTERPRISE CASES
            </span>
            <span className="text-base sm:text-lg font-serif-display font-bold text-neutral-900 block">
              06 / 06 COMPLETE
            </span>
          </div>
        </div>

        {/* Stacked Card Deck Stage */}
        <div ref={cardsContainerRef} className="relative w-full flex flex-col gap-6 lg:block lg:min-h-[480px]">
          {projectsData.map((project, idx) => {
            const mobileTopOffset = 72 + idx * 8; // Subtle 8px mobile stacked lip

            return (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                style={{
                  // Applied for mobile sticky stacking; desktop uses GSAP transforms
                  ['--mobile-top' as any]: `${mobileTopOffset}px`
                }}
                className="w-full sticky top-[var(--mobile-top,76px)] lg:top-0 lg:absolute lg:inset-x-0 will-change-transform origin-top"
              >
                {/* Physical Card Body */}
                <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-950/8 overflow-hidden p-5 sm:p-7 lg:p-8">
                  
                  {/* Card Header Tab */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/70">
                        CASE {project.number} / 06
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>PRODUCTION DEPLOYED</span>
                    </div>
                  </div>

                  {/* Card Main Grid (Story & Specs on Left, Interactive Visual on Right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    
                    {/* Left Details Column (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-950 tracking-tight leading-snug mb-2.5">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mb-4">
                          {project.summary}
                        </p>

                        {/* Deliverable focus points */}
                        <div className="space-y-1.5 mb-5">
                          {project.focusPoints.map((point) => (
                            <div key={point} className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Modal Trigger Action */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-medium tracking-wider uppercase shadow-md shadow-neutral-900/5 hover:shadow-blue-600/20 transition-all active:scale-[0.98] cursor-pointer"
                        >
                          <span>View Case Breakdown</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Visual Console Column (6 cols) */}
                    <div className="lg:col-span-6">
                      <div className="p-2 sm:p-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
                        {renderProjectVisual(project)}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
