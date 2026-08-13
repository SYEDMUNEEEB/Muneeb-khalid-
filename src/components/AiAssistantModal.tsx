import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, Bot, User, Code2 } from 'lucide-react';
import { CursorState } from '../types';
import { Avatar } from './Avatar';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const defaultSuggestions = [
  "What is Muneeb's core tech stack?",
  "How did Muneeb build TalkingBat?",
  "Is Muneeb available for SaaS projects?",
  "Can Muneeb build React Native mobile apps?"
];

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, setCursorState }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am Muneeb Khalid's Portfolio AI Assistant. You can ask me anything about Muneeb's full-stack experience, architecture choices, project details (TalkingBat, Medicsi, MyIslamicSpouse), or technical fit for your project!"
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || inputPrompt;
    if (!prompt.trim()) return;

    const userMessage: Message = { role: 'user', content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "Muneeb Khalid specializes in full-stack web applications, Next.js, Node.js, Express, MongoDB, MySQL, and React Native. Feel free to contact him at syedmuneebkhalid5@gmail.com!" }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Network error occurred while reaching the AI assistant. Please contact Muneeb directly at syedmuneebkhalid5@gmail.com!" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#050505] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-black/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-white/20 bg-black shrink-0">
                <Avatar className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 tracking-tight">
                  <span>Muneeb's AI Portfolio Assistant</span>
                  <span className="text-[9px] font-mono bg-indigo-950/80 text-indigo-300 px-2 py-0.5 rounded-sm border border-indigo-800/60 uppercase tracking-widest">
                    GEMINI POWERED
                  </span>
                </h3>
                <p className="text-xs text-white/50 font-light">Instant answers about engineering ability, stack & projects.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={idx}
                  className={`flex gap-3 ${isAssistant ? 'items-start' : 'items-end justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-sm overflow-hidden border border-white/20 shrink-0 mt-1 bg-black">
                      <Avatar alt="Muneeb" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-sm max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-white/[0.03] border border-white/10 text-white/90 font-light'
                        : 'bg-white text-black font-semibold shadow-md'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-sm bg-white/10 text-white border border-white/20 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-950/50 p-3 rounded-sm border border-indigo-800/40 w-fit uppercase tracking-wider">
                <span className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                <span>Analyzing Muneeb's architecture & background...</span>
              </div>
            )}
          </div>

          {/* Suggestion Chips */}
          <div className="p-3 bg-black/60 border-t border-white/5 flex flex-wrap gap-1.5 overflow-x-auto">
            {defaultSuggestions.map((sug, sIdx) => (
              <button
                key={sIdx}
                onClick={() => handleSend(sug)}
                className="text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:text-white px-2.5 py-1 rounded-sm whitespace-nowrap transition-all uppercase tracking-wider cursor-pointer"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-black/80 border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask a question about Muneeb's full-stack experience..."
                className="flex-1 px-4 py-2.5 rounded-sm bg-black border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={loading || !inputPrompt.trim()}
                className="p-2.5 rounded-sm bg-white text-black font-bold disabled:opacity-40 hover:bg-indigo-50 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
