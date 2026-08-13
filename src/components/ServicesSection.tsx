import React from 'react';
import { motion } from 'motion/react';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { CursorState } from '../types';

interface ServicesSectionProps {
  setCursorState: (state: CursorState) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ setCursorState, onSelectServiceForContact }) => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Wrench className="w-3.5 h-3.5 text-indigo-400" />
            <span>Services & Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How I Can Help.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              Tailored Engineering Solutions.
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 font-light">
            Whether you need a full SaaS application from scratch, a high-throughput REST backend, or performance optimization for an existing codebase.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all group flex flex-col justify-between"
              onMouseEnter={() => setCursorState({ text: service.title, variant: 'button', active: true })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono font-bold text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-sm border border-indigo-800/60 uppercase tracking-widest">
                    SERVICE {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mt-2 font-light">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-bold">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for & CTA button */}
              <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
                <div className="p-2.5 rounded-sm bg-black/40 border border-white/5 text-[11px] text-white/60 font-mono">
                  <span className="font-semibold text-white">Best for:</span> {service.idealFor}
                </div>

                <button
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="w-full h-10 flex items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-indigo-50 transition-colors cursor-pointer shadow-md"
                >
                  <span>Select For Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
