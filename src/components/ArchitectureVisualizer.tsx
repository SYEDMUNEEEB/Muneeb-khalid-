import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Server, Database, Globe, Cpu, Cloud, Layers, ShieldCheck, Zap } from 'lucide-react';

interface NodeInfo {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  techs: string[];
  description: string;
  status: string;
}

const nodes: NodeInfo[] = [
  {
    id: 'frontend',
    label: 'Client / UI Layer',
    sublabel: 'React & Next.js 14',
    icon: Globe,
    techs: ['React.js', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'Server-side rendered and client-hydrated user interfaces built for maximum speed, SEO, and responsive fluid motion.',
    status: 'OPTIMIZED (60 FPS)'
  },
  {
    id: 'api',
    label: 'REST API & Auth',
    sublabel: 'Express Middleware Gateway',
    icon: Server,
    techs: ['Node.js', 'Express.js', 'JWT Auth', 'Express Validator', 'CORS Guard'],
    description: 'High-throughput RESTful routing, payload sanitization, JWT authorization middleware, and service controller architecture.',
    status: 'SUB-100MS LATENCY'
  },
  {
    id: 'db_relational',
    label: 'Relational DB',
    sublabel: 'MySQL Match Engine',
    icon: Database,
    techs: ['MySQL', 'Relational Schemas', 'Foreign Key Constraints', 'ACID Transactions'],
    description: 'Structured data persistence for match outcomes, financial logs, and strict transactional relational entities.',
    status: 'INDEXED & SECURE'
  },
  {
    id: 'db_nosql',
    label: 'Document / Telemetry',
    sublabel: 'MongoDB Spatial Store',
    icon: Layers,
    techs: ['MongoDB Atlas', 'Mongoose Schemas', 'Spatial Indexing', 'Aggregation Pipelines'],
    description: 'Flexible JSON document database handling high-frequency telemetry, pitch coordinates, and user profile documents.',
    status: 'HIGH-CONCURRENCY'
  },
  {
    id: 'cloud',
    label: 'Production Cloud',
    sublabel: 'Nginx + PM2 + Vercel',
    icon: Cloud,
    techs: ['DigitalOcean Droplet', 'PM2 Process Manager', 'Nginx Reverse Proxy', 'Vercel Edge'],
    description: 'Robust production deployment with automated process recovery, SSL encryption, and edge caching.',
    status: 'PRODUCTION READY'
  }
];

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeInfo>(nodes[0]);

  return (
    <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Editorial Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-2">system_architecture.svg</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[9px] font-mono bg-white/5 text-white/80 border border-white/10 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            LIVE PIPELINE VIEW
          </span>
        </div>
      </div>

      {/* Main Schema Nodes */}
      <div className="py-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;
            return (
              <motion.button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-3.5 rounded-md border transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-white/[0.06] border-indigo-500/80 shadow-lg shadow-indigo-500/10'
                    : 'bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-sm ${isSelected ? 'bg-indigo-600 text-white' : 'bg-white/5 text-white/60'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono text-white/40 bg-black/40 px-2 py-0.5 rounded-sm border border-white/5 uppercase">
                    {node.status.split(' ')[0]}
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-bold text-white tracking-tight">{node.label}</h4>
                  <p className="text-[10px] font-mono text-indigo-300 mt-0.5">{node.sublabel}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Node Inspector Panel */}
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-5 p-4 rounded-md bg-black/40 border border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                Node Inspector: {selectedNode.label}
              </span>
            </div>
            <span className="text-[9px] font-mono text-indigo-300 bg-indigo-950/50 px-2.5 py-0.5 rounded-sm border border-indigo-800/50 uppercase tracking-wider self-start sm:self-auto">
              {selectedNode.status}
            </span>
          </div>

          <p className="text-xs text-white/70 mt-3 leading-relaxed font-light">
            {selectedNode.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {selectedNode.techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider rounded-sm text-white/80 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer System Status */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40 relative z-10 uppercase tracking-wider">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          End-To-End Architecture
        </span>
        <span>Muneeb Khalid</span>
      </div>
    </div>
  );
};
