import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, Code2 } from 'lucide-react';
import { CursorState } from '../types';
import { Avatar } from './Avatar';

interface NavbarProps {
  setCursorState: (state: CursorState) => void;
  onOpenAiAssistant: () => void;
}

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ setCursorState, onOpenAiAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-md transition-all duration-300 ${
          isScrolled
            ? 'glass-card border border-white/10 shadow-2xl shadow-black/80 py-3 px-6 bg-black/40 backdrop-blur-md'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Editorial Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
            onMouseEnter={() => setCursorState({ text: 'HOME', variant: 'button', active: true })}
            onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
          >
            <div className="w-8 h-8 rounded-sm overflow-hidden border border-white/20 transition-transform group-hover:scale-105 shadow-md bg-black shrink-0">
              <Avatar className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight uppercase text-white group-hover:text-indigo-300 transition-colors">
                Muneeb Khalid
              </span>
              <span className="text-[9px] text-white/40 font-mono tracking-[0.2em] uppercase">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Editorial Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 transition-colors hover:text-white ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                  onMouseEnter={() => setCursorState({ text: '', variant: 'button', active: true })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="editorialActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Editorial Actions */}
          <div className="flex items-center gap-3">
            {/* AI Assistant Trigger */}
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-semibold bg-indigo-950/40 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-900/40 transition-all shadow-sm group"
              title="Ask AI about Muneeb"
              onMouseEnter={() => setCursorState({ text: 'AI CHAT', variant: 'button', active: true })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>

            {/* Let's Talk CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-indigo-50 transition-colors shadow-md"
              onMouseEnter={() => setCursorState({ text: 'TALK', variant: 'button', active: true })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm bg-white/5 border border-white/10 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-4 top-20 z-50 glass-card p-6 rounded-2xl border border-white/10 shadow-2xl bg-[#0b0f17]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAiAssistant();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ask AI Assistant About Muneeb</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
