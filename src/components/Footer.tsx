import { Phone, Mail, Globe, MapPin, ArrowUp } from 'lucide-react';
import { companyData } from '../data/company';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-neutral-900 pt-10 pb-12 font-sans border-t border-neutral-100">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Grid with Scroll Reveal */}
        <div data-reveal="header" className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 pt-2">
          
          {/* Column 1: Brand Logo & Bio & Socials (3 cols) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Eclick Tech Solutions Logo"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-neutral-500 font-normal leading-relaxed max-w-xs">
              Eclick is a modern technology and creative solutions agency helping businesses scale through smart AI, software development, and digital marketing.
            </p>

            {/* Social Media Links (LinkedIn, WhatsApp, Instagram) */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-2.5">
                CONNECT WITH US
              </span>
              <div className="flex items-center gap-2.5 text-neutral-700">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/eclicktechsolutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#0A66C2] hover:text-white transition-all flex items-center justify-center shadow-sm group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919032466511"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp +91 90324 66511"
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center shadow-sm group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-.98 1-1.4 1.04-.38.04-.87.06-2.52-.62-2.1-1.02-3.46-3.23-3.56-3.37-.1-.14-.86-1.15-.86-2.19 0-1.04.54-1.55.74-1.76.2-.21.43-.26.58-.26.15 0 .3 0 .43.01.14.01.32-.05.5.39.19.44.63 1.54.69 1.65.06.11.09.24.02.39-.07.15-.11.24-.22.37-.11.13-.23.28-.33.38-.11.11-.23.23-.1.45.13.22.58.96 1.24 1.55.85.76 1.57.99 1.8.1.22-.11.5-.47.63-.63.14-.17.27-.14.45-.07.19.07 1.2.56 1.4.67.2.1.34.16.39.25.05.1.05.57-.14 1.1" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/eclick.techsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @eclick.techsolutions"
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#E4405F] hover:text-white transition-all flex items-center justify-center shadow-sm group"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns (5 cols total: 3 sub-columns) */}
          <div className="md:col-span-5 grid grid-cols-3 gap-6 text-left">
            
            {/* PRODUCTS */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                PRODUCTS
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-600 font-normal">
                <li>
                  <a href="#services" className="hover:text-neutral-950 transition-colors">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-neutral-950 transition-colors">
                    Software Dev
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-neutral-950 transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-neutral-950 transition-colors">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                COMPANY
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-600 font-normal">
                <li>
                  <a href="#about" className="hover:text-neutral-950 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-neutral-950 transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-neutral-950 transition-colors">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-neutral-950 transition-colors">
                    Leadership
                  </a>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                RESOURCES
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-600 font-normal">
                <li>
                  <a href="#selected-work" className="hover:text-neutral-950 transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#ai-platform" className="hover:text-neutral-950 transition-colors">
                    AI Platform
                  </a>
                </li>
                <li>
                  <a href="#presence" className="hover:text-neutral-950 transition-colors">
                    Global Footprint
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-neutral-950 transition-colors">
                    Industries
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 3: Contact Us List (Exact Reference Image Details) (4 cols) */}
          <div className="md:col-span-4 space-y-3.5 text-left md:pl-4 lg:pl-6 border-t md:border-t-0 md:border-l border-neutral-100 pt-6 md:pt-0">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
              CONTACT US
            </span>

            <div className="space-y-2.5 text-xs text-neutral-700">
              {/* KSA Phone 1 */}
              <a
                href="tel:+966565862042"
                className="flex items-center gap-2.5 hover:text-neutral-950 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{companyData.contacts.ksaPhone1} (KSA)</span>
              </a>

              {/* KSA Phone 2 */}
              <a
                href="tel:+966507701476"
                className="flex items-center gap-2.5 hover:text-neutral-950 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{companyData.contacts.ksaPhone2} (KSA)</span>
              </a>

              {/* India Phone */}
              <a
                href="tel:+919032466511"
                className="flex items-center gap-2.5 hover:text-neutral-950 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{companyData.contacts.indiaPhone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyData.contacts.email}`}
                className="flex items-center gap-2.5 hover:text-neutral-950 transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono truncate">{companyData.contacts.email}</span>
              </a>

              {/* Website */}
              <a
                href={`https://${companyData.contacts.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-neutral-950 transition-colors group"
              >
                <Globe className="w-3.5 h-3.5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{companyData.contacts.website}</span>
              </a>

              {/* Location 1: Al-Khobar */}
              <div className="flex items-center gap-2.5 text-neutral-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Olaya, Al-Khobar, KSA</span>
              </div>

              {/* Location 2: Jeddah */}
              <div className="flex items-center gap-2.5 text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Saari Street, Jeddah, KSA</span>
              </div>

              {/* Location 3: Hyderabad */}
              <div className="flex items-center gap-2.5 text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-normal">
          <div>
            Copyright &copy; {new Date().getFullYear()} Eclick. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-neutral-950 transition-colors">
              Privacy Policy
            </a>
            <span className="text-neutral-300">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-neutral-950 transition-colors"
            >
              <span>Terms of Use</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
