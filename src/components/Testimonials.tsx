import React from 'react';
import { MessageSquare, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-black/60 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
          <span>Client Reviews & Endorsements</span>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-xl mx-auto uppercase tracking-wider">
          Client feedback coming soon.
        </p>
      </div>
    </section>
  );
};
