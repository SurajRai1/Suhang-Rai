"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  type: string;
  color: string;
  link?: string;
  github?: string;
}

// Dummy data highlighting the mixed-discipline approach
const projects: Project[] = [
  {
    title: "Formcreft AI",
    description: "An AI-powered SaaS business for intelligent form generation. Currently in active development and launching soon.",
    tags: ["Next.js", "Supabase", "AI", "SaaS"],
    type: "SaaS Business",
    color: "from-indigo-500/20 to-zinc-900/50",
    link: "https://vercel.com/suraj-rais-projects/formcreft.ai/4vgBUMgwcuQxRnFxU4Jb5LvHsQd7",
  },
  {
    title: "PolyRhythm AI",
    description: "An AI tool that generates complex polyrhythmic drum patterns for music production.",
    tags: ["Next.js", "Python", "Web Audio API", "AI"],
    type: "Music Tech",
    color: "from-fuchsia-500/20 to-zinc-900/50",
  },
  {
    title: "FocusFrame",
    description: "A minimalist productivity dashboard designed specifically for ADHD brains, minimizing visual clutter.",
    tags: ["React native", "Zustand", "UI/UX"],
    type: "Product",
    color: "from-blue-500/20 to-zinc-900/50",
  },
  {
    title: "NeuroGen Art",
    description: "Generative art script creating visuals that react in real-time to MIDI inputs from my keyboard.",
    tags: ["Three.js", "WebGL", "MIDI"],
    type: "Generative Art",
    color: "from-emerald-500/20 to-zinc-900/50",
  },
  {
    title: "Suhang OS",
    description: "A web-based operating system UI experiment showcasing complex state management and rich interactions.",
    tags: ["TypeScript", "Framer Motion", "Tailwind"],
    type: "Engineering",
    color: "from-amber-500/20 to-zinc-900/50",
  }
];

export function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Selected Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg max-w-xl"
            >
              A collection of projects where code meets creativity. 
              Music, design, and engineering colliding in one place.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-2 font-medium">
              View Github Profile <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className={`h-full bg-gradient-to-br ${project.color} border-zinc-800 transition-all duration-300 hover:border-zinc-600 overflow-hidden`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-zinc-300 border-none">
                      {project.type}
                    </Badge>
                    <div className="flex gap-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <ExternalLink size={20} className="hover:text-white transition-colors" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-100 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-zinc-500 bg-black/30 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
