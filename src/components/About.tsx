import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, CheckCircle2, Cpu, Code2, Database, Server, Terminal, ShieldCheck, Zap, Award, Github, Linkedin, Mail } from 'lucide-react';
import { processSteps, personalInfo } from '../data/portfolioData';
import { Avatar } from './Avatar';
import { CursorState } from '../types';

interface AboutProps {
  setCursorState: (state: CursorState) => void;
}

export const About: React.FC<AboutProps> = ({ setCursorState }) => {
  const [activeLifecycleIndex, setActiveLifecycleIndex] = useState(0);

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Executive Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              More than a developer.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
                A product builder.
              </span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-4 font-light">
              I build complete digital products across frontend, backend, databases, APIs, analytics, and cloud deployment.
              My real-world experience ranges from high-throughput sports analytics platforms to healthcare booking systems,
              social platforms, and cross-platform mobile apps.
            </p>
          </div>

          {/* Executive Headshot Portrait Card */}
          <div className="lg:col-span-4">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border border-white/20 shrink-0 bg-black shadow-lg">
                  <Avatar className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-indigo-400 uppercase font-bold tracking-wider mt-0.5">
                    {personalInfo.primaryTitle}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold">
                      EXECUTIVE
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>{personalInfo.email}</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-white font-bold uppercase transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Complete Development Lifecycle */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 mb-16 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Full Development Lifecycle</h3>
              <p className="text-xs text-white/40 mt-1 font-mono">End-to-end engineering ownership from initial concept to production scale.</p>
            </div>
            <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/50 px-3 py-1 rounded-sm border border-indigo-800/60 uppercase tracking-widest self-start sm:self-auto font-bold">
              7-STAGE PIPELINE
            </span>
          </div>

          {/* Horizontal Steps Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 my-6">
            {processSteps.map((step, idx) => {
              const isActive = activeLifecycleIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveLifecycleIndex(idx)}
                  className={`p-3 rounded-md border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                      : 'bg-black/30 border-white/5 text-white/50 hover:border-white/20 hover:text-white'
                  }`}
                  onMouseEnter={() => setCursorState({ text: step.title, variant: 'button', active: true })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-white' : 'text-indigo-400'}`}>
                      {step.number}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </div>
                  <div className="text-xs font-bold mt-1.5 truncate tracking-tight">{step.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <motion.div
            key={activeLifecycleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-md bg-black/40 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-sm border border-indigo-800/60 uppercase tracking-wider">
                STAGE {processSteps[activeLifecycleIndex].number}
              </span>
              <h4 className="text-lg font-bold text-white tracking-tight">{processSteps[activeLifecycleIndex].title}</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4 font-light">
              {processSteps[activeLifecycleIndex].summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-white/5">
              {processSteps[activeLifecycleIndex].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80 bg-white/[0.02] p-2.5 rounded-sm border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section: "I Work Across the Stack" Architecture Diagram */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white tracking-tight">I Work Across the Stack</h3>
            <p className="text-[10px] font-mono text-indigo-400 mt-1 uppercase tracking-widest font-bold">
              Seamless Data Flow From Client Request To Persistent Cloud Infrastructure
            </p>
          </div>

          {/* Stack Diagram Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* User */}
            <div className="p-4 rounded-md bg-black/40 border border-white/10 flex flex-col items-center justify-center text-center">
              <span className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-white flex items-center justify-center font-bold text-xs mb-2">
                USER
              </span>
              <span className="text-xs font-bold text-white">End User Request</span>
              <span className="text-[10px] font-mono text-white/40 mt-1">Browser / Mobile</span>
            </div>

            {/* Frontend */}
            <div className="p-4 rounded-md bg-black/40 border border-indigo-500/40 flex flex-col items-center justify-center text-center shadow-md">
              <Code2 className="w-6 h-6 text-indigo-400 mb-2" />
              <span className="text-xs font-bold text-white">React / Next.js</span>
              <span className="text-[10px] font-mono text-indigo-300 mt-1">Frontend UI Layer</span>
            </div>

            {/* API */}
            <div className="p-4 rounded-md bg-black/40 border border-indigo-500/40 flex flex-col items-center justify-center text-center shadow-md">
              <Server className="w-6 h-6 text-indigo-400 mb-2" />
              <span className="text-xs font-bold text-white">Node / Express</span>
              <span className="text-[10px] font-mono text-indigo-300 mt-1">REST API Gateway</span>
            </div>

            {/* Databases */}
            <div className="p-4 rounded-md bg-black/40 border border-indigo-500/40 flex flex-col items-center justify-center text-center shadow-md">
              <Database className="w-6 h-6 text-indigo-400 mb-2" />
              <span className="text-xs font-bold text-white">MongoDB & MySQL</span>
              <span className="text-[10px] font-mono text-indigo-300 mt-1">Dual Data Engines</span>
            </div>

            {/* Cloud */}
            <div className="p-4 rounded-md bg-black/40 border border-indigo-500/40 flex flex-col items-center justify-center text-center shadow-md">
              <ShieldCheck className="w-6 h-6 text-indigo-400 mb-2" />
              <span className="text-xs font-bold text-white">Cloud & Nginx</span>
              <span className="text-[10px] font-mono text-indigo-300 mt-1">DigitalOcean & Vercel</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
