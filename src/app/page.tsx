import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Music } from "@/components/Music";
import { Obsessions } from "@/components/Obsessions";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <About />
      <Music />
      <Obsessions />
      <Contact />
    </main>
  );
}
