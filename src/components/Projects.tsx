"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  type: string;
  color: string;
  link?: string;
  github?: string;
  gridClass: string;
}

const projects: Project[] = [
  {
    title: "Formcreft AI",
    description: "An AI-powered SaaS business for intelligent form generation. Currently in active development and launching soon.",
    tags: ["Next.js", "Supabase", "AI", "SaaS"],
    type: "SaaS Business",
    color: "from-indigo-600 to-violet-900",
    link: "https://formcreft.ai",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "PolyRhythm AI",
    description: "An AI tool that generates complex polyrhythmic drum patterns for music production.",
    tags: ["Python", "Web Audio", "AI"],
    type: "Music Tech",
    color: "from-fuchsia-600 to-zinc-900",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "FocusFrame",
    description: "A minimalist dashboard designed for ADHD brains.",
    tags: ["React Native", "Zustand"],
    type: "Product",
    color: "from-blue-600 to-zinc-900",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "NeuroGen Art",
    description: "Generative art script reacting in real-time to MIDI inputs.",
    tags: ["Three.js", "WebGL"],
    type: "Generative Art",
    color: "from-emerald-600 to-zinc-900",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Suhang OS",
    description: "A web-based operating system UI experiment showcasing complex interactions.",
    tags: ["TypeScript", "Framer Motion"],
    type: "Engineering",
    color: "from-amber-600 to-zinc-900",
    gridClass: "md:col-span-4 md:row-span-1",
  }
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white relative z-10" id="projects">
      {/* Dynamic Background based on hovered project */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-700 ease-in-out" 
           style={{ backgroundColor: hoveredIndex !== null ? 'rgba(20,20,20,0.8)' : 'rgba(9,9,11,1)' }} />
           
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-xl max-w-2xl"
          >
            Hover over the highlighted projects to see them come to life in real-time. A bento collection of ideas and executions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${isHovered ? 'border-zinc-500/50 scale-[1.02] z-20 shadow-2xl' : 'border-zinc-800/50 hover:border-zinc-700 z-10'} ${project.gridClass}`}
              >
                {/* Fallback gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-opacity duration-500 ${isHovered ? 'opacity-40' : ''}`} />
                
                {/* Live Preview (Iframe) effect for featured SaaS or any with link on Hover */}
                <AnimatePresence>
                  {isHovered && project.link && (
                    <motion.div 
                      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 0.6, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      {/* We use an iframe to load up the SaaS live preview instantly visually */}
                      <iframe 
                        src={project.link} 
                        className="w-full h-full scale-[1.2] opacity-80 mix-blend-screen filter saturate-150 contrast-125" 
                        tabIndex={-1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`relative z-10 p-6 md:p-8 h-full flex flex-col justify-between transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="bg-black/40 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                      {project.type}
                    </Badge>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-zinc-400 hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black hover:bg-zinc-200 rounded-full transition-colors flex items-center justify-center">
                          <ArrowRight size={18} />
                        </a>
                      ) : (
                        <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-zinc-400 hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 tracking-tight transition-colors duration-300 ${isHovered ? 'text-white' : 'text-zinc-200'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm md:text-base text-zinc-400 mb-4 leading-relaxed transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-zinc-300 bg-white/10 backdrop-blur-sm border border-white/5 px-2.5 py-1 rounded-lg transition-colors hover:bg-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
