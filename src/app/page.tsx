import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Music } from "@/components/Music";
import { Obsessions } from "@/components/Obsessions";
import { Contact } from "@/components/Contact";
import { ParticleTrails } from "@/components/ParticleTrails";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-fuchsia-500/30">
      <ParticleTrails />
      <Hero />
      <About />
      <Music />
      <Obsessions />
      <Contact />
    </main>
  );
}
