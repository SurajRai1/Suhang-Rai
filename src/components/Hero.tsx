"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Music, Palette, Terminal, Zap } from "lucide-react";

const roles = [
  "Musician",
  "Product Enthusiast",
  "Developer",
  "Artist",
  "CS Student",
  "Jack of All Trades"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950 text-white selection:bg-fuchsia-500/30">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Elements (Representing ADHD/Multiple Interests) */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 text-zinc-800">
        <Music size={48} />
      </motion.div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 right-1/4 text-zinc-800">
        <Code size={48} />
      </motion.div>
      <motion.div animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/3 right-1/3 text-zinc-800">
        <Palette size={48} />
      </motion.div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium"
        >
          <Zap size={14} className="text-fuchsia-400" />
          <span>Curiosity Driven</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&apos;m Suhang Rai. <br />
          <span className="text-zinc-400">I am a </span>
          <br className="md:hidden" />
          <div className="inline-grid [grid-template-areas:'stack']">
            {roles.map((role, idx) => (
              <motion.span
                key={role}
                className="[grid-area:stack] bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent origin-bottom-left"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{
                  opacity: currentRole === idx ? 1 : 0,
                  y: currentRole === idx ? 0 : -50,
                  rotateX: currentRole === idx ? 0 : 90,
                }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Curiosity is my main thing. I love building things—whether it&apos;s music, websites, or apps. Often told I&apos;m a master of none, but frequently proving I&apos;m better than one.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8">
            Explore My Mind
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 hover:bg-white/10 text-white">
            <Terminal className="mr-2 h-4 w-4" />
            View Projects
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </div>
  );
}
