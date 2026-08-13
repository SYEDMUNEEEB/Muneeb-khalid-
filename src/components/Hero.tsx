import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Avatar } from './Avatar';
import { ArchitectureVisualizer } from './ArchitectureVisualizer';
import { CursorState } from '../types';

interface HeroProps {
  setCursorState: (state: CursorState) => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setCursorState, onOpenAiAssistant }) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient editorial background glows */}
      <div className="absolute top-[-100px] left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Executive Profile Avatar Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-white/20 p-0.5 bg-gradient-to-br from-indigo-500/30 via-white/10 to-indigo-900/40 shadow-xl group-hover:border-indigo-400 transition-all duration-300">
                  <Avatar className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black/90 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full mb-1 text-[10px] font-bold uppercase tracking-widest text-white/70 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span>{personalInfo.status}</span>
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{personalInfo.name}</span>
                </h2>
                <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider block">
                  {personalInfo.primaryTitle}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] font-bold tracking-tighter mb-6 text-white">
              I build products that turn ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
                scalable software.
              </span>
            </h1>

            {/* Subtitle / Role */}
            <div className="flex items-center gap-2.5 text-xs font-mono mb-6 text-indigo-400 font-bold tracking-wider uppercase">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">
                {personalInfo.primaryTitle}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 font-sans font-medium text-xs tracking-normal uppercase">
                Full-Stack, SaaS & API Architect
              </span>
            </div>

            {/* Supporting Copy */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-[560px] font-light mb-8">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => handleScrollTo('projects')}
                className="h-12 px-8 bg-indigo-600 text-white text-sm font-bold rounded-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
                onMouseEnter={() => setCursorState({ text: 'PROJECTS', variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="h-12 px-8 border border-white/10 text-white text-sm font-bold rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                onMouseEnter={() => setCursorState({ text: 'TALK', variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <span>Let's Work Together</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 shadow-md"
                onMouseEnter={() => setCursorState({ text: 'GITHUB', variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <Download className="w-4 h-4 text-black" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Secondary Prompt AI Link */}
            <div className="flex items-center gap-3 text-xs text-white/50 font-mono">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Evaluate Muneeb's technical fit for your stack?</span>
              <button
                onClick={onOpenAiAssistant}
                className="text-indigo-300 underline underline-offset-4 hover:text-white font-bold cursor-pointer"
              >
                Ask AI Assistant
              </button>
            </div>
          </motion.div>

          {/* Right Architecture Visualizer Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <ArchitectureVisualizer />
          </motion.div>
        </div>

        {/* Hero Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-md border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white font-sans group-hover:text-indigo-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
