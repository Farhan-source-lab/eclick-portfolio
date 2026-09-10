import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  id: string;
  stepNumber: string;
  code: string;
  label: string;
  headline: string;
  description: string;
  deliverable: string;
  indentClass: string; // desktop stepped offset
  linkUrl: string;
}

const milestones: Milestone[] = [
  {
    id: 'anchor-0',
    stepNumber: '00',
    code: 'INIT / AUDIT',
    label: 'ARCHITECTURAL INCEPTION',
    headline: 'Deconstruct the Business Challenge & Information Architecture',
    description:
      'We begin by analyzing institutional datasets, workflow bottlenecks, and strategic growth friction points to formulate a rigorous technical blueprint.',
    deliverable: 'Technical Audit & Feasibility Scope',
    indentClass: 'lg:ml-0',
    linkUrl: '#capabilities'
  },
  {
    id: 'step-1',
    stepNumber: '01',
    code: 'SYS / ARCH',
    label: 'AI & SYSTEM ENGINEERING',
    headline: 'Autonomous Agent Pipelines & Cloud Microservices',
    description:
      'Engineering custom LLM fine-tuning, retrieval-augmented generation (RAG), and cloud-native backend APIs engineered for enterprise throughput.',
    deliverable: 'Agentic Workflows & Multi-DB Architecture',
    indentClass: 'lg:ml-[10%] xl:ml-[12%]',
    linkUrl: '#ai-platform'
  },
  {
    id: 'step-2',
    stepNumber: '02',
    code: 'DES / SPEC',
    label: 'STRATEGIC BRAND & UI ARCHITECTURE',
    headline: 'High-Impact Visual Systems & Digital Interface Design',
    description:
      'Bridging design intuition with corporate authority to construct unified design systems, brand guidelines, and high-conversion web interfaces.',
    deliverable: 'Design Tokens, UI Prototypes & Assets',
    indentClass: 'lg:ml-[20%] xl:ml-[24%]',
    linkUrl: '#selected-work'
  },
  {
    id: 'step-3',
    stepNumber: '03',
    code: 'MKT / ACQ',
    label: 'PERFORMANCE MARKETING & PIPELINE',
    headline: 'Search Authority, Brand Positioning & Qualified Lead Ingestion',
    description:
      'Deploying algorithmic SEO, multi-channel performance advertising, and reputation management to build continuous enterprise conversion funnels.',
    deliverable: 'Full-Funnel Conversion Infrastructure',
    indentClass: 'lg:ml-[30%] xl:ml-[36%]',
    linkUrl: '#capabilities'
  },
  {
    id: 'step-4',
    stepNumber: '04',
    code: 'OPS / SCALE',
    label: 'CONTINUOUS OPTIMIZATION & GROWTH',
    headline: 'Enduring Technical Partnership & Real-Time Business Intelligence',
    description:
      'Executive KPI command centers, continuous pipeline monitoring, and proactive model retraining to ensure permanent competitive advantage.',
    deliverable: 'Executive Intelligence & 24/7 SLA Support',
    indentClass: 'lg:ml-[40%] xl:ml-[48%]',
    linkUrl: '#contact'
  }
];

export const SteppedTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const maskPathRef = useRef<SVGPathElement | null>(null);
  const visiblePathRef = useRef<SVGPathElement | null>(null);
  const [svgPathD, setSvgPathD] = useState<string>('');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updatePath = () => {
      // Only compute orthogonal stepped path on desktop (lg: >= 1024px)
      if (window.innerWidth < 1024) {
        setSvgPathD('');
        return;
      }

      const anchors = section.querySelectorAll<HTMLElement>('[data-cut-anchor="true"]');
      if (anchors.length < 2) return;

      const secRect = section.getBoundingClientRect();
      const points: Array<{ x: number; y: number }> = [];

      anchors.forEach((el) => {
        const r = el.getBoundingClientRect();
        points.push({
          x: r.left - secRect.left + r.width / 2,
          y: r.top - secRect.top + r.height / 2
        });
      });

      // Generate 90-degree orthogonal stepped path
      // from (prev.x, prev.y) -> vertical down to (prev.x, curr.y) -> horizontal to (curr.x, curr.y)
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        d += ` L ${prev.x} ${curr.y} L ${curr.x} ${curr.y}`;
      }

      setSvgPathD(d);
    };

    // Initial calculation with double RAF to ensure layout & fonts settle
    requestAnimationFrame(() => {
      updatePath();
      requestAnimationFrame(updatePath);
    });

    const ro = new ResizeObserver(() => {
      updatePath();
      ScrollTrigger.refresh();
    });
    ro.observe(section);

    window.addEventListener('resize', updatePath);
    window.addEventListener('load', updatePath);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updatePath);
      window.removeEventListener('load', updatePath);
    };
  }, []);

  // Set up GSAP ScrollTrigger for the mask reveal & node illumination
  useEffect(() => {
    const section = sectionRef.current;
    const maskPath = maskPathRef.current;
    if (!section || !maskPath || !svgPathD) return;

    const totalLen = maskPath.getTotalLength();
    if (totalLen <= 0) return;

    maskPath.style.strokeDasharray = `${totalLen}`;
    maskPath.style.strokeDashoffset = `${totalLen}`;

    const nodes = section.querySelectorAll<HTMLElement>('.cut-node');
    const cards = section.querySelectorAll<HTMLElement>('.milestone-card');

    const ctx = gsap.context(() => {
      // Scrub the mask offset as user scrolls through the timeline section
      gsap.to(maskPath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 85%',
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            // Illuminate nodes progressively
            nodes.forEach((node, idx) => {
              const threshold = (idx + 0.1) / nodes.length;
              if (progress >= threshold) {
                node.classList.add('is-lit');
                if (cards[idx]) {
                  cards[idx].classList.remove('opacity-40', 'translate-y-2');
                  cards[idx].classList.add('opacity-100', 'translate-y-0');
                }
              } else {
                node.classList.remove('is-lit');
                if (cards[idx]) {
                  cards[idx].classList.add('opacity-40', 'translate-y-2');
                  cards[idx].classList.remove('opacity-100', 'translate-y-0');
                }
              }
            });
          }
        }
      });
    }, section);

    return () => ctx.revert();
  }, [svgPathD]);

  // Mobile-only node illumination (screens < 1024px, zero impact on desktop)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add('(max-width: 1023px)', () => {
      const nodes = section.querySelectorAll<HTMLElement>('.cut-node');
      const cards = section.querySelectorAll<HTMLElement>('.milestone-card');

      cards.forEach((card, idx) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 75%',
          end: 'bottom 20%',
          onEnter: () => {
            nodes[idx]?.classList.add('is-lit');
          },
          onLeaveBack: () => {
            nodes[idx]?.classList.remove('is-lit');
          }
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-white border-b border-neutral-200/70 overflow-hidden"
    >
      {/* Subtle fine technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      {/* SVG Orthogonal Vector Line Overlay with Masking Technique */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="timeline-mask">
            <path
              ref={maskPathRef}
              d={svgPathD}
              fill="none"
              stroke="#ffffff"
              strokeWidth="48"
              strokeLinecap="square"
            />
          </mask>
        </defs>

        {/* Masked Group revealing the dashed graphite/silver vector line */}
        <g mask="url(#timeline-mask)">
          <path
            ref={visiblePathRef}
            d={svgPathD}
            fill="none"
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="16 6 2 6"
          />
        </g>
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        
        {/* Section Header: Architectural Cross-Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-neutral-300/70">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300/80 bg-slate-100 text-slate-700 text-[10px] font-mono tracking-[0.25em] uppercase mb-4 shadow-2xs">
              <span>PRZEKRÓJ E—01 / CROSS-SECTION A—A</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 tracking-tight leading-tight">
              Architectural delivery from inception to continuous scale.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              COORDINATES: HYD • NYC • RUH • DXB
            </span>
            <span className="text-[11px] font-mono text-slate-600 font-medium block mt-1">
              SCROLL-DRIVEN ORTHOGONAL MESH
            </span>
          </div>
        </div>

        {/* Stepped Milestones Container */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {milestones.map((milestone, idx) => (
            <div
              key={milestone.id}
              className={`flex items-start gap-5 sm:gap-8 ${milestone.indentClass} transition-all duration-500`}
            >
              {/* Diamond Cut-Node (9–10px square rotated 45°) */}
              <div
                data-cut-anchor="true"
                className="relative shrink-0 mt-3 flex items-center justify-center w-7 h-7"
              >
                <div className="cut-node w-2.5 h-2.5 bg-slate-300 border border-slate-400 rotate-45 scale-90 opacity-90 lg:bg-slate-200 lg:scale-75 lg:opacity-40 shadow-xs" />
                {/* Mobile continuous vertical line */}
                {idx < milestones.length - 1 && (
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-px h-16 sm:h-20 bg-slate-300 lg:hidden" />
                )}
              </div>

              {/* Milestone Card Content */}
              <div className="milestone-card opacity-100 translate-y-0 lg:opacity-40 lg:translate-y-2 transition-all duration-500 w-full max-w-xl xl:max-w-2xl p-6 sm:p-7 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-slate-300 group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-300/80">
                      STEP {milestone.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {milestone.code}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                    {milestone.label}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-neutral-900 leading-snug mb-3 group-hover:text-neutral-950">
                  {milestone.headline}
                </h3>

                <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-5">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100 text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <span>Deliverable:</span>
                    <span className="text-neutral-900 font-semibold">{milestone.deliverable}</span>
                  </div>

                  <a
                    href={milestone.linkUrl}
                    className="rd-underline inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
                  >
                    <span>Inspect Capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
