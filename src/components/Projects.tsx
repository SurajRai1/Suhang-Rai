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
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Formcreft AI",
    description: "An AI-powered SaaS business for intelligent form generation. Currently in active development and launching soon.",
    tags: ["Next.js", "Supabase", "AI", "SaaS"],
    type: "SaaS Business",
    color: "from-indigo-600 to-violet-900",
    link: "https://formcreft.ai",
    featured: true,
  },
  {
    title: "PolyRhythm AI",
    description: "An AI tool that generates complex polyrhythmic drum patterns for music production.",
    tags: ["Next.js", "Python", "Web Audio API", "AI"],
    type: "Music Tech",
    color: "from-fuchsia-600 to-zinc-900",
  },
  {
    title: "FocusFrame",
    description: "A minimalist productivity dashboard designed specifically for ADHD brains, minimizing visual clutter.",
    tags: ["React Native", "Zustand", "UI/UX"],
    type: "Product",
    color: "from-blue-600 to-zinc-900",
  },
  {
    title: "NeuroGen Art",
    description: "Generative art script creating visuals that react in real-time to MIDI inputs from my keyboard.",
    tags: ["Three.js", "WebGL", "MIDI"],
    type: "Generative Art",
    color: "from-emerald-600 to-zinc-900",
  },
  {
    title: "Suhang OS",
    description: "A web-based operating system UI experiment showcasing complex state management and rich interactions.",
    tags: ["TypeScript", "Framer Motion", "Tailwind"],
    type: "Engineering",
    color: "from-amber-600 to-zinc-900",
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
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
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
              Hover over the highlighted projects to see them come to life in real-time. Where engineering meets art. 
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
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
                className={`relative group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${isHovered ? 'border-zinc-500/50 scale-[1.01]' : 'border-zinc-800/50 hover:border-zinc-700'} ${project.featured ? 'md:col-span-2 min-h-[500px]' : 'min-h-[300px]'}`}
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

                <div className={`relative z-10 p-8 md:p-12 h-full flex flex-col justify-end transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
                  <div className="flex justify-between items-start mb-auto">
                    <Badge variant="secondary" className="bg-black/40 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium">
                      {project.type}
                    </Badge>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-zinc-400 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black hover:bg-zinc-200 rounded-full transition-colors flex items-center justify-center">
                          <ArrowRight size={20} />
                        </a>
                      ) : (
                        <div className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-zinc-400 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 max-w-3xl">
                    <h3 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isHovered ? 'text-white' : 'text-zinc-200'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-sm font-mono text-zinc-300 bg-white/10 backdrop-blur-sm border border-white/5 px-3 py-1.5 rounded-lg transition-colors hover:bg-white/20">
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
