import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Code2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { CursorState } from '../types';

interface ExperienceTimelineProps {
  setCursorState: (state: CursorState) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ setCursorState }) => {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Production Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              Systems Track Record
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 font-light">
            Building software systems with end-to-end responsibility for architecture, database efficiency, REST APIs, and client-side performance.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[29px] sm:-left-[45px] top-2 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-black group-hover:scale-125 transition-all" />

              {/* Experience Card */}
              <div
                className="p-6 sm:p-8 rounded-md border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all shadow-xl"
                onMouseEnter={() => setCursorState({ text: exp.role, variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono font-bold text-indigo-300 uppercase mt-0.5 tracking-wider">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-white/50 bg-black/60 px-3 py-1.5 rounded-sm border border-white/10 uppercase">
                    <span className="flex items-center gap-1.5 text-indigo-300 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-white/60">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="my-4 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mr-2">Primary Focus:</span>
                  {exp.focusAreas.map((focus) => (
                    <span
                      key={focus}
                      className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-0.5 rounded-sm uppercase tracking-wider"
                    >
                      {focus}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
                    Core Technical Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-white/80 bg-black/40 p-2.5 rounded-sm border border-white/5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Major Accomplishments */}
                <div className="p-4 rounded-sm bg-indigo-950/20 border border-indigo-500/30 mb-6">
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-widest">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <span>Major Delivered Milestones</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.majorAccomplishments.map((acc, aIdx) => (
                      <li key={aIdx} className="text-xs text-white/80 flex items-start gap-2 font-light">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-white/70 bg-white/5 px-2.5 py-1 rounded-sm border border-white/10 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
