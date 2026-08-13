import React from 'react';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { CursorState } from '../types';

interface FooterProps {
  setCursorState: (state: CursorState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCursorState }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white/70 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm overflow-hidden border border-white/20 shrink-0 bg-black">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Muneeb Khalid
              </span>
            </div>

            <p className="text-xs text-white/50 font-mono uppercase tracking-widest">
              Full-Stack Developer • SaaS & Web Application Architect
            </p>

            <blockquote className="text-xs text-indigo-300 font-mono italic border-l-2 border-indigo-500 pl-3 py-0.5">
              "Building useful software, one system at a time."
            </blockquote>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-3 font-bold text-[10px]">
                Navigation
              </span>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-indigo-300 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-indigo-300 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-indigo-300 transition-colors">Featured Projects</a></li>
                <li><a href="#experience" className="hover:text-indigo-300 transition-colors">Experience</a></li>
              </ul>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-3 font-bold text-[10px]">
                Expertise
              </span>
              <ul className="space-y-2">
                <li><a href="#skills" className="hover:text-indigo-300 transition-colors">Tech Stack</a></li>
                <li><a href="#services" className="hover:text-indigo-300 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500 hover:bg-white/10 transition-all text-white/60"
                title="GitHub Profile"
                onMouseEnter={() => setCursorState({ text: 'GITHUB', variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500 hover:bg-white/10 transition-all text-white/60"
                title="LinkedIn Profile"
                onMouseEnter={() => setCursorState({ text: 'LINKEDIN', variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-sm bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500 hover:bg-white/10 transition-all text-white/60"
                title="Direct Email"
                onMouseEnter={() => setCursorState({ text: 'EMAIL', variant: 'button', active: true })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-mono text-white/50 hover:text-indigo-300 transition-colors uppercase tracking-widest cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4 uppercase tracking-wider">
          <div>
            © 2026 Muneeb Khalid. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Express
          </div>
        </div>

      </div>
    </footer>
  );
};
