import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return;
    document.body.classList.add('overflow-hidden');

    const handlePopState = () => {
      onClose();
    };

    window.history.pushState({ modalOpen: true, type: 'project' }, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('popstate', handlePopState);
    };
  }, [project, onClose]);

  const handleClose = () => {
    onClose();
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white border border-neutral-200/90 shadow-2xl p-6 sm:p-10 text-neutral-900">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Eyebrow & Number */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            CASE STUDY {project.number}
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-neutral-950 mb-4 leading-snug">
          {project.title}
        </h2>

        {/* Summary */}
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
          {project.summary}
        </p>

        {/* Focus Points Badges */}
        <div className="mb-8">
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-2">
            CORE PILLARS FROM SPECIFICATION
          </span>
          <div className="flex flex-wrap gap-2">
            {project.focusPoints.map((point) => (
              <span
                key={point}
                className="px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-xs font-medium text-blue-950 shadow-2xs"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Scope & Key Capabilities */}
        <div className="space-y-3 pt-6 border-t border-neutral-200 mb-8">
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
            KEY CAPABILITIES & DEPLOYMENT SCOPE
          </span>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/60 text-xs font-mono text-blue-950 mb-4">
            SCOPE: {project.scope}
          </div>

          <div className="space-y-2.5">
            {project.keyCapabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5 text-xs text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
          <a
            href="#contact"
            onClick={handleClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-medium tracking-wider uppercase shadow-md transition-colors"
          >
            <span>Request Similar Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={handleClose}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
