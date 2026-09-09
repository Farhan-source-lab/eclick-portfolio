import { useState } from 'react';
import { ArrowUpRight, ShieldAlert, Database, DollarSign, ShoppingCart, Layout, Layers } from 'lucide-react';
import { projectsData, type ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const SelectedWork = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Renders a custom, domain-specific visual interactive showcase for each of the 6 projects
  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case 'ai-lead-threat-intelligence':
        return (
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">
                  REAL-TIME THREAT SCORING ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                ACTIVE MONITORING
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">DETECTION PIPELINE</span>
                <div className="text-sm font-mono font-bold text-amber-400">ACTIVE INGESTION</div>
                <span className="text-[10px] text-neutral-400 mt-1 block">Heuristic &amp; Semantic Stream</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">VERIFICATION LOGIC</span>
                <div className="text-sm font-mono font-bold text-emerald-400">DETERMINISTIC</div>
                <span className="text-[10px] text-neutral-400 mt-1 block">Multi-Layer Threat Validation</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 space-y-1">
              <div className="flex items-center justify-between text-neutral-400 text-[10px]">
                <span>LATEST ALERT DISPATCH</span>
                <span>SEC-SIGNAL #884</span>
              </div>
              <p className="text-red-300">Anomalous pattern isolated in prospective lead data flow.</p>
            </div>
          </div>
        );

      case 'data-management-platform':
        return (
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">
                  MULTI-DATABASE SEMANTIC ARCHITECTURE
                </span>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                HIGH-THROUGHPUT ENGINE
              </span>
            </div>

            {/* Simulated Semantic Query Box */}
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-700">
              <span className="text-[10px] font-mono text-neutral-400 block mb-1">SEMANTIC NATURAL QUERY</span>
              <div className="text-xs font-mono text-blue-300 truncate">
                "Query all enterprise accounts with vector similarities &gt; 0.92"
              </div>
            </div>

            {/* Multi-Database Sync Badges */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700">
                <span className="text-neutral-400 block">POSTGRES</span>
                <span className="text-emerald-400 font-semibold">SYNCHRONIZED</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700">
                <span className="text-neutral-400 block">VECTOR STORE</span>
                <span className="text-emerald-400 font-semibold">INDEXED</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700">
                <span className="text-neutral-400 block">WORKSPACES</span>
                <span className="text-blue-400 font-semibold">COLLABORATIVE</span>
              </div>
            </div>
          </div>
        );

      case 'ai-revops-copilot':
        return (
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">
                  REVENUE INTELLIGENCE &amp; INVOICE AI
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                SALESFORCE SYNCED
              </span>
            </div>

            <div className="p-4 rounded-xl bg-neutral-800/70 border border-neutral-700 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-200 font-medium">Invoice Document Ingestion</span>
                <span className="font-mono text-emerald-400 font-semibold">OCR VERIFIED</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1 border-t border-neutral-700/60">
                <span>Multi-Currency Parsing</span>
                <span className="text-neutral-300">Automated Line Item Extraction</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Direct CRM Reconciliation</span>
                <span className="text-neutral-300">Zero Manual Keying</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Ledger Pipeline Status</span>
              <span className="text-emerald-400 font-mono font-semibold">CONTINUOUS DUAL-SYNC</span>
            </div>
          </div>
        );

      case 'ecommerce-automation':
        return (
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">
                  CUSTOMER JOURNEY & CART RECOVERY
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                AUTOMATED WORKFLOW
              </span>
            </div>

            {/* Stepped Workflow Representation */}
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-neutral-300">01. Cart Abandonment Detected</span>
                <span className="text-neutral-400 text-[10px]">T = 0m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-neutral-300">02. Dynamic Contextual Re-Engagement</span>
                <span className="text-blue-400 text-[10px]">T = +15m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-emerald-400">03. Checkout Recovery Loop Completed</span>
                <span className="text-emerald-400 text-[10px]">CONVERTED</span>
              </div>
            </div>
          </div>
        );

      case 'website-ui-design':
        return (
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">
                  EDITORIAL USER INTERFACE SYSTEM
                </span>
              </div>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
                HIGH FIDELITY
              </span>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-700 space-y-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                CORE PHILOSOPHY
              </span>
              <p className="font-serif-display text-lg text-neutral-200 italic font-normal leading-snug">
                "Build long-term partnerships through exceptional service and genuine care."
              </p>
              <div className="flex items-center gap-3 pt-2 text-[10px] font-mono text-neutral-400">
                <span>RESPONSIVE VIEWPORT 390px — 1440px</span>
                <span>•</span>
                <span>EDITORIAL CONTRAST GRID</span>
              </div>
            </div>
          </div>
        );

      case 'social-media-creatives':
        return (
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono tracking-wider text-neutral-300">
                  VISUAL ASSET SUITE & CAROUSEL DECK
                </span>
              </div>
              <span className="text-[10px] font-mono text-violet-400 bg-violet-950 px-2 py-0.5 rounded border border-violet-800">
                MULTI-TOUCHPOINT
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">CAROUSEL</span>
                <span className="font-semibold text-neutral-200 block">Slide Kits</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">REEL COVERS</span>
                <span className="font-semibold text-neutral-200 block">4K Assets</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">BRAND ASSETS</span>
                <span className="font-semibold text-neutral-200 block">Vector Lib</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="selected-work" className="py-28 md:py-36 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-neutral-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
              <span>( SELECTED CASE STUDIES )</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08]">
              Real solutions. <br className="hidden sm:inline" />
              <span className="italic">Proven business impact</span>.
            </h2>
          </div>
          <div className="mt-6 sm:mt-0 text-left sm:text-right">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              DEPLOYED ENTERPRISE CASES
            </span>
            <span className="text-xl sm:text-2xl font-serif-display font-bold text-neutral-900 block mt-1">
              06 / 06 COMPLETE
            </span>
          </div>
        </div>

        {/* Alternating Editorial Project List */}
        <div data-reveal="cards" className="space-y-20 sm:space-y-28">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Specification Column (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif-display text-2xl font-normal text-neutral-400">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60 shadow-2xs">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-3xl sm:text-4xl font-semibold text-neutral-950 tracking-tight leading-snug mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* 3 Core Focus Points from PDF */}
                  <div className="space-y-2 mb-8">
                    {project.focusPoints.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Button to View Deep Breakdown */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-medium tracking-wider uppercase shadow-md shadow-neutral-900/5 hover:shadow-blue-600/20 transition-all active:scale-[0.98]"
                  >
                    <span>View Case Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Handcrafted Visual Console Column (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="p-3 rounded-[28px] bg-white border border-neutral-200/90 shadow-xl shadow-neutral-950/5">
                    {renderProjectVisual(project)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
