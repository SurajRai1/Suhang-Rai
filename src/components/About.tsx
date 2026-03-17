"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Music, Palette, Cpu, Lightbulb, Keyboard } from "lucide-react";

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900" id="about">
      {/* Dynamic Background Noise/Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] lg:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[100px] lg:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Curiosity Canvas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl"
          >
            My mind runs at 100mph. Instead of fighting it, I weaponize my ADHD to learn everything. I don&apos;t just code; I create, compose, and conceptualize.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[250px]">
          
          {/* Developer / CS Student Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-1"
          >
            <Card className="h-full bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden group">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                    <Code2 size={24} />
                  </div>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">AI Synthesizer</Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">AI-Driven Creation</h3>
                  <p className="text-zinc-400">Why write boilerplate when you can prompt architecture? I use AI to rapidly prototype, build, and deploy full-stack applications at the speed of thought.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Musician Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 group perspective-1000"
          >
            <Card className="h-full bg-gradient-to-b from-fuchsia-900/40 to-zinc-900/50 border-zinc-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="bg-fuchsia-500/20 p-3 rounded-lg text-fuchsia-400 w-fit">
                  <Music size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">The Musician</h3>
                  <p className="text-zinc-400 mb-6">Creating melodies, soundscapes, and feeling the rhythm. Music is how I debug my brain.</p>
                  
                  {/* Fake Audio visualizer */}
                  <div className="flex items-end gap-1 h-12">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: ["20%", "100%", "30%", "80%", "20%"] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-full bg-fuchsia-500/50 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Enthusiast Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1"
          >
            <Card className="h-full bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div className="bg-amber-500/20 p-3 rounded-lg text-amber-400 w-fit">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Product Visionary</h3>
                  <p className="text-zinc-400 text-sm">Identifying user needs, wireframing, and turning chaos into structured, beautiful products.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Artist/Design Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1"
          >
            <Card className="h-full bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden group">
              <CardContent className="p-8 h-full flex flex-col justify-between relative">
                 <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Palette size={120} />
                 </div>
                <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400 w-fit relative z-10">
                  <Palette size={24} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">The Artist</h3>
                  <p className="text-zinc-400 text-sm">Design systems, micro-interactions, and aesthetics. Making things functional isn&apos;t enough; they must be beautiful.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
