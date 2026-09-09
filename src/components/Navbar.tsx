import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { companyData } from '../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Process', href: '#process' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'AI Platform', href: '#ai-platform' },
    { label: 'Work', href: '#selected-work' },
    { label: 'Clients', href: '#clients' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-neutral-200/70 shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="group flex items-center gap-2.5">
            <div className="flex items-center">
              <span className="font-serif-display text-2xl font-bold tracking-tight text-neutral-950 group-hover:text-blue-900 transition-colors">
                =CLICK
              </span>
              <span className="ml-2 hidden sm:inline-block text-[10px] tracking-[0.2em] font-semibold uppercase text-neutral-500 border-l border-neutral-300 pl-2">
                Tech Solutions
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-neutral-600 tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rd-underline text-neutral-700 hover:text-neutral-950 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium tracking-wider uppercase transition-all duration-200 hover:shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full border border-neutral-200 bg-white/80 text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-neutral-200/80 pb-5">
            <div className="flex items-center">
              <span className="font-serif-display text-2xl font-bold tracking-tight text-neutral-950">
                =CLICK
              </span>
              <span className="ml-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-neutral-500 border-l border-neutral-300 pl-2">
                Tech Solutions
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Staggered Visual Rhythm */}
          <div className="py-8 flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.25em] font-semibold text-neutral-400 uppercase">
              Directory
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-display text-3xl sm:text-4xl text-neutral-900 hover:text-blue-700 transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-neutral-400 group-hover:text-blue-600">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Contact & Global Presence Footer in Mobile Menu */}
          <div className="border-t border-neutral-200/80 pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600">
              <a
                href={`tel:${companyData.contacts.indiaPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-neutral-800 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>IND: {companyData.contacts.indiaPhone}</span>
              </a>
              <a
                href={`mailto:${companyData.contacts.email}`}
                className="flex items-center gap-2 text-neutral-800 font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                <span>{companyData.contacts.email}</span>
              </a>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 tracking-wider">
              <span>GLOBAL PRESENCE: INDIA • USA • KSA • UAE</span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 rounded-full bg-neutral-900 text-white font-sans text-xs font-medium"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
