import React from 'react';
import { ArrowUp, Globe, Mail, Phone } from 'lucide-react';
import { companyData } from '../data/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#F5F4EE] text-neutral-900 border-t border-neutral-300/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-300/80">
          
          {/* Col 1: Wordmark & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <span className="font-serif-display text-2xl font-bold tracking-tight text-neutral-950">
                =CLICK
              </span>
              <span className="ml-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-neutral-500 border-l border-neutral-300 pl-2">
                Tech Solutions
              </span>
            </div>
            <p className="text-xs text-neutral-600 font-normal leading-relaxed max-w-sm">
              Innovating business through smart technology. AI services, software development, result-driven digital marketing, and strategic graphic design.
            </p>
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest pt-2">
              LOCATIONS: INDIA • USA • KSA • UAE
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-2 text-xs text-neutral-600">
              <a href="#about" className="hover:text-neutral-950 transition-colors">
                About Eclick
              </a>
              <a href="#architecture" className="hover:text-neutral-950 transition-colors">
                Architectural Timeline
              </a>
              <a href="#process" className="hover:text-neutral-950 transition-colors">
                How We Work
              </a>
              <a href="#capabilities" className="hover:text-neutral-950 transition-colors">
                Core Capabilities
              </a>
              <a href="#ai-platform" className="hover:text-neutral-950 transition-colors">
                AI Architecture
              </a>
              <a href="#selected-work" className="hover:text-neutral-950 transition-colors">
                Selected Work
              </a>
              <a href="#team" className="hover:text-neutral-950 transition-colors">
                Leadership Team
              </a>
            </div>
          </div>

          {/* Col 3: Verified Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              VERIFIED CONTACTS
            </span>
            <div className="space-y-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>IND: {companyData.contacts.indiaPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>KSA: {companyData.contacts.ksaPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{companyData.contacts.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{companyData.contacts.website}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Eclick Tech Solutions. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-neutral-950 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
