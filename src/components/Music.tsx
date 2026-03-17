"use client";

import { motion } from "framer-motion";

export function Music() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative border-t border-zinc-900" id="music">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            The Story Behind The Sound
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic"
          >
            &quot;This song was written back when I had my first break up. I had the lyrics all along but never the instruments or professional gadgets to bring it to life.<br/><br/>
            With the melody stuck in my head, I finally produced it—a song dedicated to myself about unconditional love. Oh, and it&apos;s a song I wrote for Selena Gomez.&quot;
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          
          {/* Spotify */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:border-green-500/50 transition-colors shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
              Spotify
            </h3>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/6ql4KI0ui7lZyhZov9fXgh?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              allowFullScreen={false} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="border-none"
            ></iframe>
          </motion.div>

          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:border-red-500/50 transition-colors shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-red-500 flex items-center gap-2">
              YouTube
            </h3>
            <div className="relative w-full overflow-hidden rounded-xl pt-[56.25%] mb-2">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MBkI87ah-dk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Added extra height buffer to make cards align nicely on desktop */}
            <div className="hidden lg:block h-[140px]" /> 
          </motion.div>

          {/* Amazon Music */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:border-blue-400/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
              Amazon Music
            </h3>
             <iframe 
                id='AmazonMusicEmbedB0GPY2V8FR' 
                src='https://music.amazon.com/embed/B0GPY2V8FR/?id=z33CHseOSK&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' 
                width='100%' 
                height='352px' 
                frameBorder='0' 
                style={{ borderRadius: "12px", maxWidth: "100%" }}
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
