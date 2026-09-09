import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tiltClass: string;
  pinColor: string; // pushpin styling
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Business & Information Audit',
    description: 'We deeply deconstruct the business challenge, institutional knowledge base, workflow bottlenecks, and key commercial objectives.',
    deliverables: ['Stakeholder discovery', 'Operational bottleneck mapping', 'Feasibility roadmap'],
    tiltClass: '-rotate-2 hover:rotate-0',
    pinColor: 'from-amber-400 to-orange-500 shadow-orange-500/30'
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Strategic & System Architecture',
    description: 'Create the right strategic, architectural, and visual direction before writing a single line of production code.',
    deliverables: ['System entity modeling', 'Brand & visual language', 'Interactive prototypes'],
    tiltClass: 'rotate-2 hover:rotate-0',
    pinColor: 'from-blue-400 to-indigo-600 shadow-blue-500/30'
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Engineering & Creative Production',
    description: 'Develop the required digital, AI, software, or creative asset with high engineering rigor and sub-millisecond precision.',
    deliverables: ['Cloud-native microservices', 'Autonomous AI agent pipelines', 'Polished digital assets'],
    tiltClass: '-rotate-1 hover:rotate-0',
    pinColor: 'from-purple-400 to-violet-600 shadow-purple-500/30'
  },
  {
    number: '04',
    title: 'Grow',
    subtitle: 'Deployment & Continuous Support',
    description: 'Support long-term business growth, automated conversion loops, and proactive intelligence to ensure permanent value creation.',
    deliverables: ['Executive KPI dashboards', 'Conversion rate optimization', 'Long-term SLA support'],
    tiltClass: 'rotate-2 hover:rotate-0',
    pinColor: 'from-emerald-400 to-teal-600 shadow-emerald-500/30'
  }
];

export const StoryProcess = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const cards = container.querySelectorAll<HTMLElement>('.process-card');

    const ctx = gsap.context(() => {
      // Animate the curved dashed connecting line with scroll scrubbing
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          end: 'bottom 85%',
          scrub: 0.8
        }
      });

      // Stagger reveal the cards with soft scale and settle
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-notebook-lines border-b border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Editorial Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-5 shadow-2xs">
            <span>( HOW WE WORK )</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.1] mb-5">
            From challenge to <span className="italic">something that works</span>.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            A cohesive visual storytelling framework designed to move projects from ambiguous business friction to resilient, production-ready reality.
          </p>
        </div>

        {/* Dynamic Curved Connecting SVG Path across desktop grid */}
        <div className="relative">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
            viewBox="0 0 1200 850"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 280 140 C 480 140, 520 380, 880 380 C 1040 380, 240 580, 320 620 C 420 660, 680 720, 880 760"
              stroke="#B5AFA2"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Connected Pinned Cards Grid: Alternating across the page */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`process-card relative p-8 sm:p-9 rounded-[24px] bg-[#FFFFFF] border border-neutral-200/90 shadow-lg shadow-neutral-900/4 transition-all duration-300 ${step.tiltClass} ${
                  idx % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                {/* 3D Translucent Pushpin Anchor Element */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-tr ${step.pinColor} border-2 border-white shadow-md flex items-center justify-center`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  </div>
                </div>

                {/* Card Header with Editorial Number */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                  <span className="font-serif-display text-4xl font-normal text-neutral-900 tracking-tight">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mb-2">
                  {step.title}
                </h3>
                <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-4">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-4 border-t border-neutral-100 text-xs text-neutral-700">
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Handwritten Accent Note (Reference 2 & 3) */}
          <div className="mt-20 text-center flex items-center justify-center gap-3">
            <span className="font-handwriting text-2xl sm:text-3xl text-neutral-700 -rotate-3 inline-block">
              ~ Ready to be delivered! ~
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
