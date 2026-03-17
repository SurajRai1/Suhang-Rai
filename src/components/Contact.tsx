"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative border-t border-zinc-900" id="contact">
      {/* Dynamic Background Noise/Gradient */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-fuchsia-400 font-mono tracking-widest text-sm uppercase">Open to Opportunities</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Let&apos;s build <span className="italic text-zinc-500">something</span> wild.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Whether it&apos;s a new app, a crazy audio visualizer, or just a chat about why being a jack of all trades is actually a superpower. 
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-14 text-lg">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-lg text-zinc-300 hover:text-white hover:bg-white/10 group">
            Book a call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Footer/Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Suhang Rai. Master of None.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-fuchsia-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-fuchsia-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-fuchsia-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-fuchsia-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
