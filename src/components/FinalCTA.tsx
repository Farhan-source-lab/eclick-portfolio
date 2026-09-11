import { useState, useEffect } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/company';

const TITLES = [
  'Build without limits',
  'Transform what comes next',
  'Design with purpose',
  'Scale your digital vision',
];

export const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Typewriter & Backspacing State
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Type forward character by character
      if (displayText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Pause at full sentence before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Backspace character by character
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, 45);
      } else {
        // Switch to next title once completely backspaced
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = `mailto:${companyData.contacts.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(email)}`;
      }, 600);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 bg-white text-neutral-950 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Full-Width Cinematic Banner Card with Scroll Reveal */}
        <div
          data-reveal="media"
          className="w-full relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-neutral-950 text-white border border-white/15 p-8 sm:p-12 lg:p-14 min-h-[240px] sm:min-h-[260px] flex items-center group"
        >
          
          {/* Vibrant Warm Canyon Background Image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85"
              alt="Warm sandstone canyon background"
              className="w-full h-full object-cover object-right-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 filter brightness-90 contrast-110 motion-reduce:transform-none"
              loading="lazy"
            />
            {/* Dark Vignette & Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/30" />
          </div>

          {/* Banner Content Layout */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
            
            {/* Left Headline & Typewriter Animation */}
            <div className="max-w-2xl text-left space-y-2.5">
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight min-h-[1.25em] flex items-center flex-wrap">
                <span>{displayText}</span>
                <span className="inline-block w-[3px] h-[0.8em] bg-white ml-1.5 animate-pulse align-middle font-mono font-bold">
                  _
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-neutral-200/90 font-normal leading-relaxed">
                Find the right AI, software &amp; digital solutions for your business in minutes.
              </p>
            </div>

            {/* Right Side Glassmorphic Search Widget */}
            <div className="shrink-0 w-full lg:w-auto">
              <div className="p-2 sm:p-2.5 rounded-[24px] bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl flex items-center">
                {submitted ? (
                  <div className="px-8 py-3.5 rounded-2xl bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 w-full">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Redirecting to email...</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                    
                    {/* Clean Input Box (Dot and label removed) */}
                    <div className="relative bg-white/95 backdrop-blur-md rounded-xl sm:rounded-full px-5 py-3.5 flex items-center w-full sm:w-72 shadow-sm">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        className="bg-transparent text-neutral-900 placeholder-neutral-400 text-xs sm:text-sm font-normal focus:outline-none w-full"
                        aria-label="Email Address"
                      />
                    </div>

                    {/* Dark Tactile Search Button */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl sm:rounded-full bg-[#0F172A] hover:bg-black active:scale-95 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shrink-0 group/btn"
                      aria-label="Submit project inquiry"
                    >
                      <span>Find a solution</span>
                      <Search className="w-3.5 h-3.5 text-white group-hover/btn:scale-110 transition-transform" />
                    </button>

                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
