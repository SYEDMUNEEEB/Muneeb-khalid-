import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, Linkedin, Github, CheckCircle2, AlertCircle, Sparkles, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { Avatar } from './Avatar';
import { ContactSubmission, CursorState } from '../types';

interface ContactSectionProps {
  setCursorState: (state: CursorState) => void;
  preselectedService?: string;
}

const projectTypes = [
  'SaaS Application',
  'Full-Stack Web App',
  'API & Backend Systems',
  'Sports Analytics Platform',
  'Healthcare System',
  'React Native Mobile App',
  'AI Integration / Automation',
  'Performance & Optimization',
  'General Inquiry'
];

const budgetRanges = [
  '$1,000 — $3,000',
  '$3,000 — $7,000',
  '$7,000 — $15,000',
  '$15,000+',
  'Flexible / To Be Discussed'
];

export const ContactSection: React.FC<ContactSectionProps> = ({ setCursorState, preselectedService }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    projectType: preselectedService || 'SaaS Application',
    budgetRange: '$3,000 — $7,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [aiAssessment, setAiAssessment] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your name, email, and project message.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        if (data.aiAssessment) {
          setAiAssessment(data.aiAssessment);
        }

        // Trigger confetti celebration
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMessage(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please email Muneeb directly at syedmuneebkhalid5@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Let's Build Together</span>
              </div>

              {/* Contact Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-md overflow-hidden border border-white/20 shrink-0 bg-black shadow-lg">
                  <Avatar className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-indigo-400 uppercase font-bold tracking-wider">{personalInfo.primaryTitle}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 mt-1 uppercase tracking-widest font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Inquiry Line
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Have a product in mind?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
                  Let's build it.
                </span>
              </h2>

              <p className="text-white/60 text-base leading-relaxed mt-4 font-light">
                Whether you have a complete product specification or just an idea, let's discuss what you're trying to build and find the right technical approach.
              </p>

              {/* Direct Contact Links */}
              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-4 rounded-md bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all text-white group"
                  onMouseEnter={() => setCursorState({ text: 'EMAIL', variant: 'button', active: true })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                >
                  <div className="p-2.5 rounded-sm bg-white/5 text-indigo-400 border border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-md bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all text-white group"
                  onMouseEnter={() => setCursorState({ text: 'LINKEDIN', variant: 'button', active: true })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                >
                  <div className="p-2.5 rounded-sm bg-white/5 text-indigo-400 border border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      linkedin.com/in/muneebkhalid05
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-md bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all text-white group"
                  onMouseEnter={() => setCursorState({ text: 'GITHUB', variant: 'button', active: true })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                >
                  <div className="p-2.5 rounded-sm bg-white/5 text-indigo-400 border border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                      GitHub Repositories
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      github.com/SYEDMUNEEEB
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-md bg-white/[0.02] border border-white/5 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <p className="text-xs text-white/50 font-light">
                100% confidential. I respond to all inquiries within 24 hours with an initial technical assessment.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl relative backdrop-blur-md">
              
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-500/50 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Message Delivered!</h3>
                    <p className="text-sm text-white/70 mt-2 max-w-md mx-auto font-light">
                      Thank you for reaching out. Muneeb Khalid will review your product parameters and reply shortly.
                    </p>
                  </div>

                  {/* AI Assessment Result if available */}
                  {aiAssessment && (
                    <div className="p-5 rounded-md bg-black/40 border border-indigo-500/30 text-left space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-widest">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        AI Assistant Initial Assessment:
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                        {aiAssessment}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setSuccess(false);
                      setAiAssessment(null);
                    }}
                    className="h-10 px-6 rounded-sm text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-sm bg-rose-950/60 border border-rose-800/60 flex items-center gap-3 text-xs text-rose-300 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-black text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-black text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest mb-2">
                      Project Overview & Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build, key features, target audience, and any existing specifications..."
                      className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 py-4 rounded-sm text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-indigo-50 transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                    onMouseEnter={() => setCursorState({ text: 'SUBMIT', variant: 'button', active: true })}
                    onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        PROCESSING SUBMISSION...
                      </span>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
