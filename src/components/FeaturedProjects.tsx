import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Sparkles, Layers, Cpu, CheckCircle2, FileText } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, CursorState } from '../types';

interface FeaturedProjectsProps {
  setCursorState: (state: CursorState) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ setCursorState, onOpenCaseStudy }) => {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Production Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Things I've Built.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              Real engineering solutions.
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-3 font-light">
            Real products. Real systems. Real engineering problems. Every platform featured here represents production software delivered from concept to cloud deployment.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all group overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image / Visualization Preview */}
                  <div className={`lg:col-span-6 flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-md overflow-hidden border border-white/10 group-hover:border-indigo-500/50 transition-all aspect-video bg-black/60 shadow-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      
                      {/* Floating Category Pill */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-indigo-300 border border-indigo-500/40 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {/* Architecture Quick Pipeline Preview */}
                      <div className="absolute bottom-4 inset-x-4 z-10 p-3 rounded-md bg-black/80 border border-white/10 backdrop-blur-md">
                        <span className="text-[9px] font-mono text-white/40 block mb-0.5 uppercase tracking-wider">
                          Architecture Pipeline:
                        </span>
                        <div className="text-[11px] font-mono text-indigo-300 truncate">
                          {project.architecture.join(' → ')}
                        </div>
                      </div>
                    </div>

                    {/* Impact Metric Bar */}
                    <div className="mt-4 p-4 rounded-md bg-black/40 border border-white/5 flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider block">
                          Measured Impact
                        </span>
                        <p className="text-xs text-white/70 mt-0.5 leading-relaxed font-light">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info & Technical Details */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-white/40">PROJECT 0{index + 1}</span>
                        <span className="text-[9px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-sm border border-indigo-800/60 uppercase tracking-widest font-bold">
                          PRODUCTION DEPLOYED
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm text-white/70 leading-relaxed mt-3 font-light">
                        {project.description}
                      </p>

                      {/* Key Features List */}
                      <div className="mt-5 space-y-2">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-bold">
                          Key Capabilities:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.slice(0, 4).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-white/80 bg-black/30 p-2 rounded-sm border border-white/5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/80 rounded-sm uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="h-10 px-5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        onMouseEnter={() => setCursorState({ text: 'CASE STUDY', variant: 'button', active: true })}
                        onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                      >
                        <FileText className="w-4 h-4 text-black" />
                        <span>View Architecture & Case Study</span>
                      </button>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 px-4 border border-white/10 text-white text-xs font-bold rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5"
                          onMouseEnter={() => setCursorState({ text: 'DEMO', variant: 'button', active: true })}
                          onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 border border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-colors flex items-center justify-center"
                          title="View Repository"
                          onMouseEnter={() => setCursorState({ text: 'CODE', variant: 'button', active: true })}
                          onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
