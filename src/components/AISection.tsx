import React, { useState } from 'react';
import { Cpu, Bot, Cog, Database, ShieldCheck, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

interface AIServiceNode {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: React.ElementType;
}

const aiNodes: AIServiceNode[] = [
  {
    id: 'gen-ai',
    name: 'Gen AI Service',
    code: 'AI-01',
    tagline: 'Generative Models & Multimodal Assistants',
    description: 'Bespoke generative models and multi-modal assistants integrated directly into enterprise software to accelerate content, code, and operational throughput.',
    capabilities: ['Custom Foundation Models', 'Retrieval-Augmented Generation (RAG)', 'Context-Aware Co-Pilots', 'Enterprise Guardrails'],
    icon: Sparkles
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI Service',
    code: 'AI-02',
    tagline: 'Autonomous Multi-Agent Systems',
    description: 'Goal-oriented AI agents capable of planning, executing complex multi-step tasks, calling APIs, and coordinating autonomously across business software.',
    capabilities: ['Autonomous Workflow Agents', 'API & Tool Orchestration', 'Multi-Agent Coordination', 'Self-Correcting Reasoning'],
    icon: Bot
  },
  {
    id: 'ai-automations',
    name: 'AI Automations',
    code: 'AI-03',
    tagline: 'End-to-End Process Automation',
    description: 'Connecting intelligence to daily business operations to eliminate manual data entry, optimize document processing, and trigger instant workflows.',
    capabilities: ['Intelligent Document Processing', 'Zero-Touch Workflows', 'CRM & ERP Synchronization', 'Exception Handling'],
    icon: Cog
  },
  {
    id: 'custom-ai',
    name: 'Custom AI Service',
    code: 'AI-04',
    tagline: 'Domain-Specific Architecture',
    description: 'Tailored artificial intelligence models trained and fine-tuned specifically on your proprietary institutional knowledge and industry datasets.',
    capabilities: ['Proprietary Model Fine-Tuning', 'Custom Vector Embeddings', 'Data Pipeline Structuring', 'On-Premise / Hybrid Deployment'],
    icon: Database
  },
  {
    id: 'enterprise-ai',
    name: 'Enterprise AI Solutions',
    code: 'AI-05',
    tagline: 'Scalable Enterprise Infrastructure',
    description: 'Secure, compliance-aligned AI systems engineered for large-scale enterprise environments with role-based access control and strict data governance.',
    capabilities: ['Enterprise Security & SOC2 Compliance', 'Audit Logging & Observability', 'Role-Based Permissions', 'High-Availability Clusters'],
    icon: ShieldCheck
  },
  {
    id: 'ai-analytics',
    name: 'AI Analytics & Intelligence',
    code: 'AI-06',
    tagline: 'Predictive & Prescriptive Data Engines',
    description: 'Deep analytical intelligence engines that transform raw operational metrics into predictive forecasts, risk indicators, and automated executive insights.',
    capabilities: ['Predictive Demand Modeling', 'Anomaly & Fraud Detection', 'Automated Executive Briefings', 'Behavioral Pattern Analysis'],
    icon: BarChart3
  }
];

export const AISection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('agentic-ai');
  const activeNode = aiNodes.find((n) => n.id === selectedId) || aiNodes[0];

  return (
    <section id="ai-platform" className="py-28 md:py-36 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Dark Subtle Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-[11px] font-mono tracking-[0.2em] uppercase mb-5">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI SERVICES & ARCHITECTURE</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.08] mb-6">
            AI built for <br />
            <span className="italic text-neutral-300">real business work</span>.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            We engineer resilient, production-ready artificial intelligence systems that automate complex decisions, eliminate manual operations, and unlock high-leverage data intelligence.
          </p>
        </div>

        {/* Central System Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Central Node Grid: 6 Services around Core (7 cols) */}
          <div className="lg:col-span-7 relative p-6 sm:p-8 rounded-[28px] border border-neutral-800 bg-[#0F1422]/70 backdrop-blur-md">
            
            {/* Core Engine Hub Badge in Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                <span className="font-mono text-xs text-neutral-300 tracking-wider uppercase font-semibold">
                  ECLICK NEURAL DISPATCH ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">
                ACTIVE CLUSTER: 6/6 NODES LIVE
              </span>
            </div>

            {/* 6 AI Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {aiNodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedId === node.id;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedId(node.id)}
                    className={`p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between min-h-[120px] ${
                      isSelected
                        ? 'bg-blue-900/30 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                        : 'bg-neutral-900/50 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`p-2 rounded-xl ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] tracking-widest text-neutral-500">
                        {node.code}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block mt-3">
                        {node.name}
                      </span>
                      <span className="text-[11px] text-neutral-400 block line-clamp-1 mt-0.5">
                        {node.tagline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right: Selected Node Deep-Dive Console (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-9 rounded-[28px] border border-neutral-800 bg-[#0F1422] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-[11px] font-mono text-blue-400 font-semibold tracking-widest uppercase">
                  {activeNode.code} SPECIFICATION
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded">
                  PRODUCTION READY
                </span>
              </div>

              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-medium mb-2">
                  {activeNode.name}
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                  {activeNode.tagline}
                </p>
                <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              {/* Core Capabilities Checklist */}
              <div className="pt-4 border-t border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                  INTEGRATED ARCHITECTURES
                </span>
                <div className="space-y-2">
                  {activeNode.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Deploy {activeNode.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
