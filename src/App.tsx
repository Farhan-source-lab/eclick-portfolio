import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useScrollReveal } from './hooks/useScrollReveal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { Capabilities } from './components/Capabilities';
import { SelectedWork } from './components/SelectedWork';
import { SteppedTimeline } from './components/SteppedTimeline';
import { StoryProcess } from './components/StoryProcess';
import { GlobalPresence } from './components/GlobalPresence';
import { MissionVision } from './components/MissionVision';
import { Team } from './components/Team';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Industries } from './components/Industries';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'industries'>('home');
  const lenisRef = useRef<Lenis | null>(null);
  useScrollReveal();

  useEffect(() => {
    // Hash-based routing check
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#industries') {
        setCurrentView('industries');
        window.scrollTo(0, 0);
        lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      } else {
        setCurrentView('home');
        if (hash && hash !== '#') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el && lenisRef.current) {
              lenisRef.current.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
            } else if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 120);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

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
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (view: 'home' | 'industries', targetHash?: string) => {
    setCurrentView(view);

    if (view === 'industries') {
      window.location.hash = '#industries';
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      setTimeout(() => {
        window.scrollTo(0, 0);
        lenisRef.current?.scrollTo(0, { immediate: true, force: true });
        ScrollTrigger.refresh();
      }, 50);
    } else {
      const destination = targetHash && targetHash !== '#' ? targetHash : '';

      if (destination) {
        window.location.hash = destination;
        setTimeout(() => {
          const el = document.querySelector(destination);
          if (el && lenisRef.current) {
            lenisRef.current.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
          } else if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        if (window.location.hash === '#industries') {
          history.pushState(null, '', window.location.pathname);
        }
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { duration: 1.0 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-blue-900 selection:text-white">
      {/* Subtle UI Enhancements */}
      <CustomCursor />
      <ScrollProgress />

      {/* Global Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Narrative Content */}
      <main key={currentView}>
        {currentView === 'industries' ? (
          <Industries onBackToHome={(targetHash) => handleNavigate('home', targetHash)} />
        ) : (
          <>
            {/* 01. High-Contrast Editorial Hero */}
            <Hero />

            {/* 02. About & Ecosystem Positioning */}
            <About />

            {/* 03. Client Trust Strip (11 Authentic Clients) */}
            <Clients />

            {/* 04. Core Capabilities Explorer (Interactive List & Sticky Preview) */}
            <Capabilities />

            {/* 05. Selected Work (6 Case Studies with Domain-Specific Visuals) */}
            <SelectedWork />

            {/* 06. Architectural Stepped Timeline (GSAP Orthogonal Vector Mesh) */}
            <SteppedTimeline />

            {/* 07. How We Work / Connected Process Cards (Notebook Lines & Pushpins) */}
            <StoryProcess />

            {/* 08. Global Footprint (India, USA, KSA, UAE) */}
            <GlobalPresence />

            {/* 09. Mission, Vision & Core Values */}
            <MissionVision />

            {/* 10. Leadership & Cross-Disciplinary Team (1 + 2 + 3 + 3 Hierarchy) */}
            <Team />

            {/* 11. Final Dramatic Contrast CTA */}
            <FinalCTA />
          </>
        )}
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
