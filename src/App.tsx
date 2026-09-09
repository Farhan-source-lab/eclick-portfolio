import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useScrollReveal } from './hooks/useScrollReveal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { SteppedTimeline } from './components/SteppedTimeline';
import { StoryProcess } from './components/StoryProcess';
import { Capabilities } from './components/Capabilities';
import { AISection } from './components/AISection';
import { MarketingSection } from './components/MarketingSection';
import { CreativeVideoSection } from './components/CreativeVideoSection';
import { SelectedWork } from './components/SelectedWork';
import { GlobalPresence } from './components/GlobalPresence';
import { MissionVision } from './components/MissionVision';
import { Team } from './components/Team';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  useScrollReveal();

  useEffect(() => {
    // Initialize Lenis for smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP's ticker & ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-blue-900 selection:text-white">
      {/* Subtle UI Enhancements */}
      <CustomCursor />
      <ScrollProgress />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Narrative Sections */}
      <main>
        {/* 01. High-Contrast Editorial Hero */}
        <Hero />

        {/* 02. Client Trust Strip (11 Authentic Clients) */}
        <Clients />

        {/* 03. About & Ecosystem Positioning */}
        <About />

        {/* 04. Architectural Stepped Timeline (GSAP Orthogonal Vector Mesh) */}
        <SteppedTimeline />

        {/* 05. How We Work / Connected Process Cards (Notebook Lines & Pushpins) */}
        <StoryProcess />

        {/* 06. Core Capabilities Explorer (Interactive List & Sticky Preview) */}
        <Capabilities />

        {/* 07. AI Immersive Architecture (Obsidian Dark Navy System Console) */}
        <AISection />

        {/* 08. Digital Marketing Pipeline (Visibility -> Engagement -> Leads) */}
        <MarketingSection />

        {/* 09. Creative & Cinematic Video Suite */}
        <CreativeVideoSection />

        {/* 10. Selected Work (6 Case Studies with Domain-Specific Visuals) */}
        <SelectedWork />

        {/* 11. Global Footprint (India, USA, KSA, UAE) */}
        <GlobalPresence />

        {/* 12. Mission, Vision & Core Values */}
        <MissionVision />

        {/* 13. Leadership & Cross-Disciplinary Team (1 + 2 + 3 + 3 Hierarchy) */}
        <Team />

        {/* 14. Final Dramatic Contrast CTA */}
        <FinalCTA />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
