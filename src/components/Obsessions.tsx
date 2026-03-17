"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Activity, Beaker, Brain, Flame } from "lucide-react";

// Replacing traditional projects with what you're obsessing over RIGHT NOW
const obsessions = [
  {
    title: "Audio Visualization",
    description: "Trying to figure out how to make CSS react perfectly to lower bass frequencies without destroying browser performance.",
    icon: <Activity className="text-fuchsia-400" size={24} />,
    status: "Hyper-focusing",
    color: "from-fuchsia-500/10 to-transparent",
  },
  {
    title: "Neuro-Spicy Productivity",
    description: "Building a dashboard that doesn't feel like a spreadsheet. Something that adapts to my chaotic workflow instead of forcing me into a box.",
    icon: <Brain className="text-blue-400" size={24} />,
    status: "Designing",
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "The Next EP",
    description: "Experimenting with weird granular synthesis and field recordings I took in the rain.",
    icon: <Flame className="text-amber-400" size={24} />,
    status: "Producing",
    color: "from-amber-500/10 to-transparent",
  },
];

export function Obsessions() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900" id="obsessions">
      
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-mono uppercase tracking-widest text-zinc-400"
          >
            <Beaker size={14} className="text-emerald-400" />
            <span>The Lab</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Current Obsessions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl"
          >
            I don&apos;t do standard &quot;projects&quot; anymore. Here is what is keeping me awake at 3 AM right now.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {obsessions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`h-full bg-gradient-to-br ${item.color} bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700 transition-all`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-black/40 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 bg-black/30 px-2 py-1 rounded">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
