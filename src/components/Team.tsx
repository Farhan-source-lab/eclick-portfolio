import { Users, Award } from 'lucide-react';
import { teamData, type TeamMember } from '../data/team';

export const Team = () => {
  const founder = teamData[0]; // Mirza Ahmed Baig
  const execs = teamData.slice(1, 3); // Khaja Nawazuddin, Syed Abdul Baseer
  const directors = teamData.slice(3, 6); // Shaista Sultana, Girumapuram Eeshwar Kumar, Aliyah Maham
  const specialists = teamData.slice(6, 9); // Mansoor Parker, Mohammed Abdul Imtiyaz, MD Khaleemoddin

  const renderMemberCard = (member: TeamMember, isSmall = false) => (
    <div
      key={member.id}
      className={`p-6 sm:p-7 rounded-[24px] bg-white border border-neutral-200/90 border-t-2 border-t-neutral-100 hover:border-t-blue-600 shadow-sm hover:shadow-xl hover:shadow-neutral-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
        isSmall ? 'min-h-[190px]' : 'min-h-[220px]'
      }`}
    >
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100/70 border border-blue-200/80 flex items-center justify-center font-mono text-xs font-bold text-blue-950 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-2xs">
            {member.initials}
          </div>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-200/60">
            {member.department}
          </span>
        </div>

        <h4 className="font-serif-display text-xl font-semibold text-neutral-950 group-hover:text-blue-950 transition-colors">
          {member.name}
        </h4>
        <span className="text-xs font-mono font-medium text-blue-700 block mt-1">
          {member.role}
        </span>

        {member.bio && (
          <p className="text-xs text-neutral-600 font-normal leading-relaxed mt-3 line-clamp-2">
            {member.bio}
          </p>
        )}
      </div>

      <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>ECLICK CORE TEAM</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </div>
    </div>
  );

  return (
    <section id="team" className="py-28 md:py-36 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-neutral-300/70">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-700 text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-blue-700" />
              <span>( LEADERSHIP & EXPERTISE )</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.08]">
              The minds behind <span className="italic">the innovation</span>.
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            09 CROSS-DISCIPLINARY LEADERS
          </div>
        </div>

        {/* 1 + 2 + 3 + 3 Curated Team Hierarchy */}
        <div className="space-y-8">
          
          {/* TIER 1: Founder & CEO Spotlight Card */}
          <div data-reveal="media" className="p-8 sm:p-12 rounded-[32px] bg-neutral-900 text-white border border-neutral-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Founder Identity (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-400 text-[10px] font-mono tracking-widest uppercase">
                  <Award className="w-3 h-3" />
                  <span>FOUNDER & EXECUTIVE LEADERSHIP</span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-5xl font-normal text-white tracking-tight">
                  {founder.name}
                </h3>
                <div className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                  {founder.role}
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-xl pt-2">
                  {founder.bio}
                </p>

                <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
                  <span>SPECIALIZATION: AI STRATEGY &amp; ENTERPRISE SYSTEMS</span>
                  <span>•</span>
                  <span className="text-emerald-400">STATUS: ACTIVE</span>
                </div>
              </div>

              {/* Right Column: Founder Quote (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/80">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  FOUNDING VISION
                </span>
                <blockquote className="font-serif-display text-xl sm:text-2xl text-neutral-100 italic leading-snug">
                  "Innovating business through smart technology by combining AI, software, and creative strategy under one roof."
                </blockquote>
                <div className="mt-4 pt-4 border-t border-neutral-700/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>ECLICK TECH SOLUTIONS</span>
                  <span>HYDERABAD • GLOBAL</span>
                </div>
              </div>

            </div>
          </div>

          {/* TIER 2: Executive Management (2 Wide Cards) */}
          <div data-reveal="cards" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {execs.map((exec) => renderMemberCard(exec, false))}
          </div>

          {/* TIER 3: Strategic Department Directors (3 Columns) */}
          <div data-reveal="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((dir) => renderMemberCard(dir, true))}
          </div>

          {/* TIER 4: Engineering & Commercial Specialists (3 Columns) */}
          <div data-reveal="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((spec) => renderMemberCard(spec, true))}
          </div>

        </div>

      </div>
    </section>
  );
};
