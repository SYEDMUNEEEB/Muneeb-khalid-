import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, SkillItem, CursorState } from '../types';
import { Cpu, Server, Database, Smartphone, Cloud, Code, Globe, FileCode, Zap, Palette, Layout, Terminal, Network, HardDrive, Layers, Box, Flame, CheckCircle2, Shield, GitBranch, Radio, Video, Sparkles, BarChart3, ExternalLink } from 'lucide-react';

interface TechStackProps {
  setCursorState: (state: CursorState) => void;
  onSelectProject: (projectId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Code, Globe, FileCode, Zap, Palette, Layout, Server, Cpu, Terminal, Network,
  Database, HardDrive, Layers, Smartphone, Box, Cloud, ExternalLink, Flame,
  CheckCircle2, Shield, GitBranch, Radio, Video, Sparkles, BarChart3
};

const categories: (SkillCategory | 'All')[] = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Mobile',
  'Infrastructure',
  'Other'
];

export const TechStack: React.FC<TechStackProps> = ({ setCursorState, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [hoveredTech, setHoveredTech] = useState<SkillItem | null>(null);

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technology Ecosystem &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              Core Stack
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 font-light">
            Hover over or select any technology card to view detailed experience levels, real-world deployment contexts, and linked case studies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-[10px] uppercase font-bold tracking-widest font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-md'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
                onMouseEnter={() => setCursorState({ text: cat, variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code;
              const isHovered = hoveredTech?.name === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => {
                    setHoveredTech(skill);
                    setCursorState({ text: skill.name, variant: 'technology', active: true });
                  }}
                  onMouseLeave={() => {
                    setHoveredTech(null);
                    setCursorState({ text: '', variant: 'default', active: false });
                  }}
                  className={`p-5 rounded-md border transition-all cursor-pointer relative overflow-hidden group ${
                    isHovered
                      ? 'border-indigo-500/80 bg-white/[0.05] shadow-lg shadow-indigo-500/10'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-sm bg-white/5 border border-white/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded-sm border border-indigo-800/60 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                    {skill.name}
                  </h3>

                  <div className="text-[10px] font-mono text-white/40 mt-1 uppercase tracking-wider">
                    {skill.experienceLevel}
                  </div>

                  <p className="text-xs text-white/70 mt-3 line-clamp-2 leading-relaxed font-light">
                    <span className="text-white/40 font-medium">Used in:</span> {skill.usedIn}
                  </p>

                  {/* Linked Projects quick tags */}
                  {skill.relatedProjectIds.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-white/40 uppercase">Projects:</span>
                      {skill.relatedProjectIds.map((pId) => (
                        <button
                          key={pId}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(pId);
                          }}
                          className="text-[10px] font-mono text-indigo-300 hover:text-white underline underline-offset-2 uppercase tracking-wider"
                        >
                          {pId === 'talkingbat' ? 'TalkingBat' : pId === 'myislamicspouse' ? 'MyIslamicSpouse' : 'Medicsi'}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
