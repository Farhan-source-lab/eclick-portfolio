import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { companyData } from '../data/company';

interface NavbarProps {
  currentView?: 'home' | 'industries';
  onNavigate?: (view: 'home' | 'industries', targetHash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', view: 'home' as const },
    { label: 'Industries', href: '#industries', view: 'industries' as const },
    { label: 'Services', href: '#services', view: 'home' as const },
    { label: 'Projects', href: '#selected-work', view: 'home' as const },
    { label: 'Clients', href: '#clients', view: 'home' as const },
    { label: 'Team', href: '#team', view: 'home' as const },
  ];

  // Custom smooth easing: fast initial movement, smooth deceleration, soft final settle
  const premiumEase = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="fixed top-5 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
      {/* Floating Independent Rounded-Rectangle Header */}
      <motion.header
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : {
                scaleX: 0,
                opacity: 0,
              }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                scaleX: 1,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.65,
          ease: premiumEase,
        }}
        style={{
          transformOrigin: '50% 50%',
        }}
        className={`pointer-events-auto relative w-full max-w-[940px] rounded-[20px] sm:rounded-[22px] transition-[padding,background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? 'py-2 px-4 sm:px-6 bg-[#FFFFFF] border border-neutral-900/[0.09] shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)]'
            : 'py-2.5 px-4 sm:px-6 bg-[#FFFFFF]/98 border border-neutral-900/[0.06] shadow-[0_10px_28px_-4px_rgba(0,0,0,0.05),0_2px_8px_-2px_rgba(0,0,0,0.02)]'
        }`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* PHASE 2: Brand Wordmark (Appears after container expands) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: shouldReduceMotion ? 0 : 0.26,
              ease: premiumEase,
            }}
            className="flex items-center shrink-0"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('home', '');
              }}
              className="group flex items-center py-1"
              aria-label="Eclick Tech Solutions Home"
            >
              <img
                src="/logo.svg"
                alt="Eclick Tech Solutions"
                className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </a>
          </motion.div>

          {/* PHASE 3: Center Navigation Links with Subtle Stagger (Desktop) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-medium text-neutral-600 tracking-wide">
            {navLinks.map((link, idx) => {
              const isActive = link.view === 'industries' && currentView === 'industries';

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.view === 'industries') {
                      onNavigate?.('industries');
                    } else {
                      onNavigate?.('home', link.href);
                    }
                  }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : 0.34 + idx * 0.04,
                    ease: premiumEase,
                  }}
                  className={`relative py-1 transition-colors group ${
                    isActive ? 'text-neutral-950 font-semibold' : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Micro-interaction: subtle indicator line expanding left-to-right */}
                  <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-950 transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left'
                  }`} />
                </motion.a>
              );
            })}
          </nav>

          {/* PHASE 4: Primary CTA & Mobile Hamburger (Appears Last) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.38,
              delay: shouldReduceMotion ? 0 : 0.48,
              ease: premiumEase,
            }}
            className="flex items-center gap-2.5 shrink-0"
          >
            {/* Primary Action Button - Premium Rounded Rectangle */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('home', '#contact');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border border-neutral-200/80 bg-neutral-50/80 text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation Panel: Smoothly emerges directly from floating header */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -6, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -6, scale: 0.98 }
              }
              transition={{ duration: 0.24, ease: premiumEase }}
              className="absolute top-full left-0 right-0 mt-2 p-5 bg-[#FFFFFF] rounded-[18px] border border-neutral-900/[0.08] shadow-[0_16px_36px_-6px_rgba(0,0,0,0.12),0_4px_12px_-2px_rgba(0,0,0,0.04)] flex flex-col gap-4 md:hidden z-50 pointer-events-auto"
            >
              <div className="flex flex-col gap-1 divide-y divide-neutral-100">
                {navLinks.map((link) => {
                  const isMobileActive = link.view === 'industries' && currentView === 'industries';

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        if (link.view === 'industries') {
                          onNavigate?.('industries');
                        } else {
                          onNavigate?.('home', link.href);
                        }
                      }}
                      className={`py-2.5 px-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        isMobileActive
                          ? 'bg-blue-50 text-blue-900 font-semibold'
                          : 'text-neutral-800 hover:text-blue-900 hover:bg-neutral-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isMobileActive ? 'text-blue-700' : 'text-neutral-400'}`} />
                    </a>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigate?.('home', '#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#1E293B] transition-colors"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                  <a
                    href={`tel:${companyData.contacts.indiaPhone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1 hover:text-neutral-900"
                  >
                    <Phone className="w-3 h-3 text-blue-700" />
                    <span>IND Phone</span>
                  </a>
                  <a
                    href={`mailto:${companyData.contacts.email}`}
                    className="flex items-center gap-1 hover:text-neutral-900"
                  >
                    <Mail className="w-3 h-3 text-blue-700" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};
