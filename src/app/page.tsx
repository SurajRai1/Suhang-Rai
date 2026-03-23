import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Music } from "@/components/Music";
import { Obsessions } from "@/components/Obsessions";
import { Contact } from "@/components/Contact";
import { ParticleTrails } from "@/components/ParticleTrails";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      <ParticleTrails />
      <Hero />
      <About />
      <Projects />
      <Music />
      <Obsessions />
      <Contact />
    </main>
  );
}
