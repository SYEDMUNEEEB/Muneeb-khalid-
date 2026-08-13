import React from 'react';
import { motion } from 'motion/react';
import { Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';
import { CursorState } from '../types';

interface DevelopmentProcessProps {
  setCursorState: (state: CursorState) => void;
}

export const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({ setCursorState }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Engineering Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How I Build Software.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              Structured Execution.
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 font-light">
            A disciplined 7-step engineering methodology ensuring product stability, clean architecture, and rapid deployment cycles.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all group flex flex-col justify-between"
              onMouseEnter={() => setCursorState({ text: step.title, variant: 'button', active: true })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-mono font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-2.5 py-0.5 rounded-sm">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mt-2 font-light">
                  {step.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-[11px] font-mono text-white/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
