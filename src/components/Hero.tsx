import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Galaxy from './Galaxy';

const services = [
  { name: 'AI Services', id: 'ai' },
  { name: 'Digital Marketing', id: 'marketing' },
  { name: 'Graphic Designing', id: 'creative' },
];

export const Hero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Smooth automatic cycling between the 3 core services every 2.6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] text-white">
      {/* 01. Full Interactive Galaxy WebGL Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Galaxy
          starSpeed={0.4}
          density={1.2}
          speed={1.0}
          glowIntensity={0.4}
          twinkleIntensity={0.5}
          rotationSpeed={0.08}
          mouseInteraction={true}
          mouseRepulsion={true}
          repulsionStrength={2.5}
          transparent={true}
        />
      </div>

      {/* Subtle radial depth overlay for contrast and text clarity */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(3,7,18,0.15)_0%,rgba(3,7,18,0.7)_75%,rgba(3,7,18,0.95)_100%)] pointer-events-none" />

      {/* 02. Centered Content Matching PDF */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-28 flex flex-col items-center text-center pointer-events-none select-none">
        
        {/* Main Headline from PDF */}
        <h1
          data-reveal="header"
          className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-8 pointer-events-none"
        >
          Innovating business through <br className="hidden sm:inline" />
          <span className="italic font-light text-neutral-200">smart technology</span>
        </h1>

        {/* Animated Services Text from PDF */}
        <div
          data-reveal="header"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl md:text-3xl font-light text-blue-400 mb-12 tracking-wide pointer-events-none"
        >
          {services.map((svc, idx) => {
            const isActive = activeIdx === idx;
            return (
              <React.Fragment key={svc.id}>
                <motion.span
                  animate={{
                    color: isActive ? '#ffffff' : '#60a5fa',
                    scale: isActive ? 1.05 : 1,
                    textShadow: isActive
                      ? '0 0 24px rgba(96, 165, 250, 0.8), 0 0 10px rgba(59, 130, 246, 0.6)'
                      : '0 0 0px transparent',
                  }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  onClick={() => setActiveIdx(idx)}
                  className="cursor-pointer transition-opacity duration-300 font-medium px-2 py-1 hover:text-white pointer-events-auto"
                >
                  {svc.name}
                </motion.span>

                {idx < services.length - 1 && (
                  <span className="text-white/30 font-light text-base sm:text-xl pointer-events-none">
                    |
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Minimal Centered Link */}
        <div data-reveal="header" className="pointer-events-auto">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
