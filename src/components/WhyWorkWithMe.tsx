import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lightbulb, Award, GitMerge, Sparkles, CheckCircle2 } from 'lucide-react';
import { advantagesData } from '../data/portfolioData';
import { CursorState } from '../types';

interface WhyWorkWithMeProps {
  setCursorState: (state: CursorState) => void;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Lightbulb, Award, GitMerge, Sparkles
};

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ setCursorState }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Engineering Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Work With Me.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              Concrete Advantages.
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 font-light">
            No empty claims or generic template promises. Here is why founders and engineering teams choose to collaborate with me.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {advantagesData.map((adv, idx) => {
            const Icon = iconMap[adv.iconName] || ShieldCheck;

            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all group flex flex-col justify-between"
                onMouseEnter={() => setCursorState({ text: adv.title, variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <div>
                  <div className="p-3 rounded-sm bg-white/5 border border-white/10 text-indigo-400 w-fit group-hover:bg-indigo-600 group-hover:text-white transition-all mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed mt-2 font-light">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>VERIFIED ADVANTAGE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
