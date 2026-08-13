import React from 'react';
import { motion } from 'motion/react';
import { Github, GitBranch, ExternalLink, Code2, Star, GitFork, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { CursorState } from '../types';

interface GitHubActivityProps {
  setCursorState: (state: CursorState) => void;
}

const featuredRepos = [
  {
    name: 'TalkingBat-Analytics',
    description: 'Cricket sports analytics engine with interactive spatial pitch maps, wagon wheels, and video timestamp syncing.',
    language: 'TypeScript / Next.js',
    stars: 'Featured',
    forks: 'Production',
    url: 'https://github.com/SYEDMUNEEEB'
  },
  {
    name: 'MyIslamicSpouse-Backend',
    description: 'Privacy-first matrimonial REST API with JWT authorization, compound MongoDB indexes, and guarded messaging.',
    language: 'Node.js / Express',
    stars: 'Featured',
    forks: 'Production',
    url: 'https://github.com/SYEDMUNEEEB'
  },
  {
    name: 'Medicsi-Hospital-System',
    description: 'Healthcare booking dashboard with doctor shift management, patient health records, and role permission guards.',
    language: 'React / Node.js',
    stars: 'Featured',
    forks: 'Production',
    url: 'https://github.com/SYEDMUNEEEB'
  }
];

export const GitHubActivity: React.FC<GitHubActivityProps> = ({ setCursorState }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Github className="w-3.5 h-3.5 text-indigo-400" />
              <span>Open Source & Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Developer Activity &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
                GitHub Repositories
              </span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mt-3 font-light">
              Explore codebase architectures, open source repositories, and commit history directly on GitHub.
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-bold uppercase tracking-wider text-xs bg-white text-black hover:bg-indigo-50 transition-colors self-start md:self-auto cursor-pointer"
            onMouseEnter={() => setCursorState({ text: 'GITHUB', variant: 'button', active: true })}
            onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
          >
            <Github className="w-4 h-4 text-black" />
            <span>@SYEDMUNEEEB on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all group flex flex-col justify-between"
              onMouseEnter={() => setCursorState({ text: 'REPO', variant: 'button', active: true })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default', active: false })}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-indigo-300 transition-colors">
                    <GitBranch className="w-4 h-4 text-indigo-400" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-4 font-light">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50">
                <span className="flex items-center gap-1 text-indigo-300">
                  <Code2 className="w-3.5 h-3.5" />
                  {repo.language}
                </span>
                <span className="text-[10px] bg-indigo-950/60 px-2 py-0.5 rounded-sm border border-indigo-800/50 text-indigo-300 uppercase tracking-widest font-bold">
                  {repo.stars}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
