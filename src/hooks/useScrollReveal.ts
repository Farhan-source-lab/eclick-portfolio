import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // 1. Reveal Section Headers (Eyebrow -> Headline -> Subtext)
      const headers = document.querySelectorAll<HTMLElement>('[data-reveal="header"]');
      headers.forEach((header) => {
        const children = header.children;
        if (!children.length) return;

        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Staggered Grid Cards (Clients, Capabilities, Highlights, Team, Projects)
      const cardContainers = document.querySelectorAll<HTMLElement>('[data-reveal="cards"]');
      cardContainers.forEach((container) => {
        const cards = container.children;
        if (!cards.length) return;

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 40,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Standalone Media Frames & Visual Blocks
      const mediaBlocks = document.querySelectorAll<HTMLElement>('[data-reveal="media"]');
      mediaBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          {
            opacity: 0,
            y: 45,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};
