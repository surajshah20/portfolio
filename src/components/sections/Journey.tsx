"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/content";

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase font-bold">
          Journey
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-mist-100 leading-tight">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience.</span>
        </h2>
      </motion.div>

      <div className="relative mt-16 pl-6 sm:pl-8">
        {/* Thicker, glowing timeline line */}
        <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-900/40 to-transparent rounded-full" />

        <div className="space-y-16">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Glowing Node */}
              <span className="absolute -left-[33px] sm:-left-[37px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-navy-950 ring-4 ring-navy-950 z-10">
                <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(92,231,255,0.8)]" />
              </span>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                  {item.date}
                </span>
                <span className="hidden sm:block h-px w-8 bg-mist-100/10" />
                <p className="font-mono text-xs sm:text-sm text-mist-300 font-semibold uppercase tracking-wider">{item.org}</p>
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-mist-100">{item.title}</h3>
              
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-mist-300 bg-navy-900/30 border border-mist-100/5 p-4 rounded-xl backdrop-blur-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}