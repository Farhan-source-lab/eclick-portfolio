import { ArrowUp, Globe, Mail, Phone } from 'lucide-react';
import { companyData } from '../data/company';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-300/80">
          
          {/* Col 1: Wordmark & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Eclick Tech Solutions"
                className="h-9 w-auto object-contain"
              />
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
              <a href="#services" className="hover:text-neutral-950 transition-colors">
                Our Services
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
              <a
                href={`tel:${companyData.contacts.indiaPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>IND: {companyData.contacts.indiaPhone}</span>
              </a>
              <a
                href={`tel:${companyData.contacts.ksaPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>KSA: {companyData.contacts.ksaPhone}</span>
              </a>
              <a
                href={`mailto:${companyData.contacts.email}`}
                className="flex items-center gap-2 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{companyData.contacts.email}</span>
              </a>
              <a
                href={`https://${companyData.contacts.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-700 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{companyData.contacts.website}</span>
              </a>
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
