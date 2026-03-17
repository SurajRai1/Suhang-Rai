"use client";

import { motion } from "framer-motion";

export function Music() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative border-t border-zinc-900" id="music">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            Sonic Landscapes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Music is how I debug my brain. Here are my latest releases across all platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Spotify */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:border-green-500/50 transition-colors"
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
            className="w-full bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:border-red-500/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-red-500 flex items-center gap-2">
              YouTube
            </h3>
            <div className="relative w-full overflow-hidden rounded-xl pt-[56.25%]">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MBkI87ah-dk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
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
