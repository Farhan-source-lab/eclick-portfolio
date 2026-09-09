import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  pinGradient: string;
  pinGlow: string;
  cardBg: string;
  numberColor: string;
  tagColor: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Business & Information Audit',
    description: 'We deeply deconstruct the business challenge, institutional knowledge base, workflow bottlenecks, and key commercial objectives.',
    deliverables: ['Stakeholder discovery', 'Operational bottleneck mapping', 'Feasibility roadmap'],
    tiltClass: '-rotate-2 hover:rotate-0',
    pinGradient: 'from-amber-400 via-orange-500 to-orange-600',
    pinGlow: 'bg-orange-500/30',
    cardBg: 'bg-[#FFF9F5] border-orange-100/80',
    numberColor: 'text-orange-500',
    tagColor: 'text-orange-700 bg-orange-50 border-orange-200/60'
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Strategic & System Architecture',
    description: 'Create the right strategic, architectural, and visual direction before writing a single line of production code.',
    deliverables: ['System entity modeling', 'Brand & visual language', 'Interactive prototypes'],
    tiltClass: 'rotate-2 hover:rotate-0',
    pinGradient: 'from-blue-400 via-indigo-500 to-indigo-600',
    pinGlow: 'bg-blue-500/30',
    cardBg: 'bg-[#F4F7FF] border-blue-100/80',
    numberColor: 'text-blue-600',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200/60'
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Engineering & Creative Production',
    description: 'Develop the required digital, AI, software, or creative asset with high engineering rigor and sub-millisecond precision.',
    deliverables: ['Cloud-native microservices', 'Autonomous AI agent pipelines', 'Polished digital assets'],
    tiltClass: '-rotate-1.5 hover:rotate-0',
    pinGradient: 'from-purple-400 via-violet-500 to-purple-600',
    pinGlow: 'bg-purple-500/30',
    cardBg: 'bg-[#FAF6FF] border-purple-100/80',
    numberColor: 'text-purple-600',
    tagColor: 'text-purple-700 bg-purple-50 border-purple-200/60'
  },
  {
    number: '04',
    title: 'Grow',
    subtitle: 'Deployment & Continuous Support',
    description: 'Support long-term business growth, automated conversion loops, and proactive intelligence to ensure permanent value creation.',
    deliverables: ['Executive KPI dashboards', 'Conversion rate optimization', 'Long-term SLA support'],
    tiltClass: 'rotate-2 hover:rotate-0',
    pinGradient: 'from-rose-400 via-orange-500 to-amber-500',
    pinGlow: 'bg-orange-500/30',
    cardBg: 'bg-[#FFF8F3] border-orange-100/80',
    numberColor: 'text-orange-600',
    tagColor: 'text-orange-700 bg-orange-50 border-orange-200/60'
  }
];

export const StoryProcess = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
  const pinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomAnchorRef = useRef<HTMLDivElement | null>(null);
  const maskSegmentRefs = useRef<(SVGPathElement | null)[]>([]);

  // 4 discrete curve segments connecting Pin 0 -> Pin 1 -> Pin 2 -> Pin 3 -> Bottom Anchor
  const [segments, setSegments] = useState<string[]>([
    'M 260 20 C 500 80, 720 200, 740 320',
    'M 740 320 C 760 440, 240 540, 260 660',
    'M 260 660 C 280 780, 720 880, 740 1000',
    'M 740 1000 C 750 1080, 520 1140, 500 1190'
  ]);

  // Dynamically calculate accurate coordinates for each of the 4 segments based on live pin positions
  const updateConnectorCurve = () => {
    const wrapper = cardsWrapperRef.current;
    if (!wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();

    const points: { x: number; y: number }[] = [];

    // Pushpins 1 - 4
    pinRefs.current.forEach((pin) => {
      if (pin) {
        const rect = pin.getBoundingClientRect();
        points.push({
          x: rect.left + rect.width / 2 - wrapperRect.left,
          y: rect.top + rect.height / 2 - wrapperRect.top
        });
      }
    });

    // Final bottom delivery note anchor
    if (bottomAnchorRef.current) {
      const rect = bottomAnchorRef.current.getBoundingClientRect();
      points.push({
        x: rect.left + 24 - wrapperRect.left,
        y: rect.top + 24 - wrapperRect.top
      });
    }

    if (points.length < 2) return;

    const newSegments: string[] = [];
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;

      const cp1x = (p0.x + dx * 0.5).toFixed(1);
      const cp1y = (p0.y + dy * 0.15).toFixed(1);
      const cp2x = (p0.x + dx * 0.5).toFixed(1);
      const cp2y = (p1.y - dy * 0.15).toFixed(1);

      newSegments.push(
        `M ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`
      );
    }

    setSegments(newSegments);
  };

  useLayoutEffect(() => {
    const timer = setTimeout(updateConnectorCurve, 60);

    const handleResize = () => {
      updateConnectorCurve();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // GSAP ScrollTrigger animation:
  // 1. Cards strictly fade in via opacity (no y-translation, no scale - 0 height jump)
  // 2. Line segments arrive at pins ONLY after the target card has fully faded in
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('.process-card');
    const bottomNode = bottomAnchorRef.current;

    const ctx = gsap.context(() => {
      // 1. Cards FADE IN ONLY (strictly opacity, preserving exact natural card height)
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Bottom delivery note fade in
      if (bottomNode) {
        gsap.fromTo(
          bottomNode,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottomNode,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // 2. SVG Line Segments:
      // Each segment draws towards target card ONLY, and completes AFTER the target card has faded in.
      // Target card fades in at 'top 82%'.
      // Segment draws as user scrolls from source 'top 45%' to target 'top 65%'.
      // Therefore, target card is already 100% visible and stationary when the line arrives at its pin!
      maskSegmentRefs.current.forEach((maskPath, idx) => {
        if (!maskPath) return;

        const length = maskPath.getTotalLength();
        maskPath.style.strokeDasharray = `${length}`;
        maskPath.style.strokeDashoffset = `${length}`;

        const sourceCard = cards[idx];
        const targetNode = idx < 3 ? cards[idx + 1] : bottomNode;

        if (sourceCard && targetNode) {
          gsap.to(maskPath, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sourceCard,
              start: 'top 45%',
              endTrigger: targetNode,
              end: 'top 65%',
              scrub: 0.6
            }
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, [segments]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-notebook-lines border-b border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Editorial Eyebrow & Headline */}
        <div data-reveal="header" className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
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

        {/* Connected Cards Flow: 1 in a row alternating Left & Right */}
        <div ref={cardsWrapperRef} className="relative">
          
          {/* Prominent Dark Dashed SVG Connector Lines (Segmented Sequence) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block"
            fill="none"
          >
            <defs>
              {segments.map((d, i) => (
                <mask key={`mask-${i}`} id={`story-curve-mask-${i}`}>
                  <path
                    ref={(el) => {
                      maskSegmentRefs.current[i] = el;
                    }}
                    d={d}
                    stroke="#FFFFFF"
                    strokeWidth="16"
                    strokeLinecap="round"
                    fill="none"
                  />
                </mask>
              ))}
            </defs>

            {/* Clearly visible dark slate dashed line segments */}
            {segments.map((d, i) => (
              <path
                key={`seg-${i}`}
                d={d}
                stroke="#334155"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                mask={`url(#story-curve-mask-${i})`}
              />
            ))}
          </svg>

          {/* Cards Stack: Exactly 1 card per row, alternating Left and Right */}
          <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-28 relative z-10">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`w-full flex ${
                    isLeft
                      ? 'justify-start md:pl-2 lg:pl-10'
                      : 'justify-end md:pr-2 lg:pr-10'
                  }`}
                >
                  <div
                    className={`process-card relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl ${step.tiltClass}`}
                  >
                    {/* 3D Translucent Pushpin Anchor Element */}
                    <div
                      ref={(el) => {
                        pinRefs.current[idx] = el;
                      }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
                    >
                      {/* Atmospheric colored glow on paper */}
                      <div
                        className={`absolute w-10 h-10 rounded-full blur-md opacity-70 ${step.pinGlow}`}
                      />
                      {/* Realistic 3D Translucent Pin Head */}
                      <div
                        className={`relative w-7 h-7 rounded-full bg-gradient-to-br ${step.pinGradient} border-2 border-white/95 shadow-md flex items-center justify-center backdrop-blur-xs`}
                      >
                        {/* Specular White Highlight */}
                        <div className="w-2 h-2 rounded-full bg-white/85 shadow-2xs -translate-x-0.5 -translate-y-0.5" />
                        {/* Needle Shadow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neutral-900/40 rounded-full blur-[0.5px]" />
                      </div>
                    </div>

                    {/* Outer Card with Crisp White Frame */}
                    <div className="p-2 sm:p-2.5 rounded-[28px] bg-white border border-neutral-200/90 shadow-xl shadow-neutral-900/5 hover:shadow-2xl hover:shadow-neutral-900/10 transition-shadow duration-300">
                      {/* Inner Tinted Container matching Reference Image */}
                      <div className={`p-6 sm:p-8 rounded-[22px] ${step.cardBg} border`}>
                        {/* Header: Serif Number + Phase Badge */}
                        <div className="flex items-start justify-between pb-3.5 border-b border-neutral-200/50 mb-5">
                          <span
                            className={`font-serif-display text-4xl sm:text-5xl font-medium tracking-tight leading-none ${step.numberColor}`}
                          >
                            {step.number}
                          </span>
                          <span
                            className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${step.tagColor}`}
                          >
                            PHASE 0{idx + 1}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight mb-1.5">
                          {step.title}
                        </h3>
                        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-4">
                          {step.subtitle}
                        </div>

                        {/* Factual Description */}
                        <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="space-y-2.5 pt-4 border-t border-neutral-200/60 text-xs sm:text-sm text-neutral-700">
                          {step.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-neutral-600 shrink-0" />
                              <span className="font-medium text-neutral-800">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Editorial Delivery Note Anchor (Reference 2 / Skale style) */}
          <div className="mt-20 md:mt-24 flex items-center justify-center md:justify-end md:pr-14 relative z-10">
            <div
              ref={bottomAnchorRef}
              className="relative inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-neutral-200/90 shadow-lg shadow-neutral-900/5 -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              {/* Eclick Monogram Badge */}
              <div className="w-10 h-10 rounded-full bg-neutral-950 border-2 border-white shadow-md text-white font-serif-display text-sm font-semibold flex items-center justify-center shrink-0">
                ET
              </div>
              <div className="text-left">
                <span className="font-handwriting text-2xl sm:text-3xl text-neutral-900 block leading-tight">
                  ~ Ready to be delivered! ~
                </span>
                <span className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase block">
                  Your full-stack transformation partner
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

