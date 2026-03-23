"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Music, Palette, Terminal, Zap, Flame } from "lucide-react";

const roles = [
  "Musician",
  "Product Enthusiast",
  "AI Synthesizer",
  "Artist",
  "Digital Creator",
  "Jack of All Trades"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [chaosMode, setChaosMode] = useState(false);

  useEffect(() => {
    // Faster text rotation in chaos mode
    const speed = chaosMode ? 600 : 2000;
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, speed);
    return () => clearInterval(interval);
  }, [chaosMode]);

  return (
    <motion.div 
      animate={chaosMode ? { filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${chaosMode ? 'bg-black text-red-100' : 'bg-zinc-950 text-white selection:bg-fuchsia-500/30'}`}
    >
      
      {/* Background gradients */}
      <motion.div 
        animate={chaosMode ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] ${chaosMode ? 'bg-red-600/40' : 'bg-fuchsia-600/20'} blur-[80px] md:blur-[120px] rounded-full pointer-events-none transition-colors`} 
      />
      <motion.div 
        animate={chaosMode ? { scale: [1, 2, 1], rotate: [0, 180, 360] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`absolute top-1/2 left-1/2 translate-x-1/4 -translate-y-1/4 w-[250px] md:w-[600px] h-[250px] md:h-[600px] ${chaosMode ? 'bg-orange-600/40' : 'bg-blue-600/20'} blur-[80px] md:blur-[120px] rounded-full pointer-events-none transition-colors`} 
      />

      {/* Floating Elements */}
      <motion.div 
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileDrag={{ scale: 1.2, rotate: 90 }}
        animate={{ 
          y: chaosMode ? [-50, 50, -50] : [0, -20, 0], 
          x: chaosMode ? [-50, 50, -50] : [0, 0, 0],
          rotate: chaosMode ? [0, 180, 360] : [0, 5, 0] 
        }} 
        transition={{ duration: chaosMode ? 0.5 : 4, repeat: Infinity, ease: chaosMode ? "linear" : "easeInOut" }} 
        className={`hidden md:block absolute top-1/4 left-1/4 cursor-grab active:cursor-grabbing ${chaosMode ? 'text-red-500' : 'text-zinc-800'}`}
      >
        <Music size={64} />
      </motion.div>

      <motion.div 
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ 
          y: chaosMode ? [50, -50, 50] : [0, 20, 0], 
          x: chaosMode ? [50, -50, 50] : [0, 0, 0],
          rotate: chaosMode ? [0, -180, -360] : [0, -10, 0] 
        }} 
        transition={{ duration: chaosMode ? 0.7 : 5, repeat: Infinity, ease: chaosMode ? "linear" : "easeInOut", delay: chaosMode ? 0 : 1 }} 
        className={`hidden md:block absolute bottom-1/4 right-1/4 cursor-grab active:cursor-grabbing ${chaosMode ? 'text-orange-500' : 'text-zinc-800'}`}
      >
        <Code size={64} />
      </motion.div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.button
          onClick={() => setChaosMode(!chaosMode)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-sm font-bold shadow-xl transition-all ${chaosMode ? 'bg-red-500/20 text-red-400 border-red-500/50 hover:bg-red-500/30' : 'bg-white/5 hover:bg-white/10'}`}
        >
          {chaosMode ? <Flame size={16} className="animate-pulse" /> : <Zap size={16} className="text-fuchsia-400" />}
          <span>{chaosMode ? "TURN IT OFF" : "Curiosity Driven"}</span>
        </motion.button>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          animate={chaosMode ? { x: [-2, 2, -2], y: [1, -1, 1] } : {}}
          transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
        >
          Hi, I&apos;m Suhang Rai. <br />
          <span className="text-zinc-400">I am a </span>
          <br className="md:hidden" />
          <div className="inline-grid [grid-template-areas:'stack']">
            {roles.map((role, idx) => (
              <motion.span
                key={role}
                className={`[grid-area:stack] bg-clip-text text-transparent origin-bottom-left ${chaosMode ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-fuchsia-400 to-blue-400'}`}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{
                  opacity: currentRole === idx ? 1 : 0,
                  y: currentRole === idx ? 0 : (chaosMode ? -100 : -50),
                  rotateX: currentRole === idx ? 0 : 90,
                }}
                transition={{ duration: chaosMode ? 0.2 : 0.5, ease: "circOut" }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          animate={chaosMode ? { fontStyle: "italic", color: "#f87171" } : {}}
        >
          I don&apos;t just write code—I direct AI to build my wildest ideas at the speed of thought. Combining music, design, and brutal efficiency to create things that shouldn&apos;t exist yet. Often told I&apos;m a master of none, but constantly proving I&apos;m better than one.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 px-4"
        >
          <Button onClick={() => {
            const section = document.getElementById("projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }} size="lg" className={`w-full sm:w-auto ${chaosMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-zinc-200'} rounded-full px-8 transition-colors`}>
            View Selected Works
          </Button>
          <Button onClick={() => {
            const section = document.getElementById("music");
            section?.scrollIntoView({ behavior: "smooth" });
          }} size="lg" variant="outline" className={`w-full sm:w-auto rounded-full px-8 border-white/20 hover:bg-white/10 transition-colors ${chaosMode ? 'text-red-300' : 'text-white'}`}>
            <Music className="mr-2 h-4 w-4" />
            Listen to Music
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center"
        animate={{ y: chaosMode ? [0, 50, 0] : [0, 10, 0] }}
        transition={{ duration: chaosMode ? 0.5 : 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-bold">{chaosMode ? "SCROLL FAST" : "Scroll"}</span>
        <ArrowDown size={16} />
      </motion.div>
    </motion.div>
  );
}
