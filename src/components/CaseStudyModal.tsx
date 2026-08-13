import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Github, CheckCircle2, AlertTriangle, Layers, Server, Database, Cloud, ShieldCheck, Sparkles, Code } from 'lucide-react';
import { Project, CursorState } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, setCursorState }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#050505] border border-white/10 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 p-6 bg-[#050505]/95 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
            <div>
              <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-3 py-1 rounded-sm uppercase tracking-widest">
                {project.category} Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-sm bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-indigo-500 transition-all cursor-pointer"
              onMouseEnter={() => setCursorState({ text: 'CLOSE', variant: 'button', active: true })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
            
            {/* Overview Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-md bg-white/[0.02] border border-white/10">
              <div className="md:col-span-8">
                <h3 className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest mb-2 font-bold">
                  Project Summary
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                <span className="text-[10px] font-mono text-white/40 uppercase mb-2">Primary Tech Stack:</span>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-[9px] font-mono bg-indigo-950/60 text-indigo-300 px-2 py-0.5 rounded-sm border border-indigo-800/50 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="p-6 rounded-md bg-white/[0.02] border border-rose-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                  <h3 className="text-base font-bold text-white tracking-tight">The Challenge</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-md bg-white/[0.02] border border-indigo-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-white tracking-tight">The Technical Solution</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* System Architecture */}
            <div className="p-6 rounded-md bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">Technical Architecture</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-sm bg-black/60 border border-white/10">
                  <Code className="w-5 h-5 text-indigo-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white block uppercase">Frontend</span>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                    {caseStudy.architectureDetails.frontend}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-black/60 border border-white/10">
                  <Server className="w-5 h-5 text-indigo-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white block uppercase">Backend</span>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                    {caseStudy.architectureDetails.backend}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-black/60 border border-white/10">
                  <Database className="w-5 h-5 text-indigo-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white block uppercase">Database</span>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                    {caseStudy.architectureDetails.database}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-black/60 border border-white/10">
                  <Cloud className="w-5 h-5 text-indigo-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white block uppercase">Infrastructure</span>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                    {caseStudy.architectureDetails.infrastructure}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features & Engineering Challenges */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  Implemented Key Features
                </h3>
                <div className="space-y-2.5">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-sm bg-white/[0.02] border border-white/10 text-xs text-white/80 font-light">
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Challenges */}
              <div>
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 tracking-tight">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Real Engineering Problems Solved
                </h3>
                <div className="space-y-3">
                  {caseStudy.technicalChallenges.map((tc, idx) => (
                    <div key={idx} className="p-4 rounded-sm bg-white/[0.02] border border-white/10 space-y-2 font-mono">
                      <div className="text-xs text-rose-300">
                        Problem: {tc.problem}
                      </div>
                      <div className="text-xs text-indigo-300">
                        Resolution: {tc.resolution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Measured Outcomes */}
            <div className="p-6 rounded-md bg-indigo-950/20 border border-indigo-500/30">
              <h3 className="text-base font-bold text-indigo-300 mb-3 flex items-center gap-2 tracking-tight">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                Delivered Outcomes
              </h3>
              <ul className="space-y-2">
                {caseStudy.outcomes.map((outcome, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80 font-light">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#050505] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-sm text-xs font-mono text-white/70 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition-all uppercase tracking-wider cursor-pointer"
            >
              Close Case Study
            </button>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono text-white/80 bg-white/5 border border-white/10 hover:border-white/30 transition-all uppercase tracking-wider"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-indigo-50 transition-colors shadow-md"
                >
                  <span>Launch Live Platform</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
