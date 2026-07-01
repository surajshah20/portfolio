"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/content";

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <span className="eyebrow">Journey</span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
        Education & <span className="gradient-text">certifications.</span>
      </h2>

      <div className="relative mt-14 pl-8">
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-cyan-400 via-mist-100/15 to-transparent" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-navy-950 ring-2 ring-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-500">
                {item.date}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-mist-100">{item.title}</h3>
              <p className="font-mono text-xs text-mist-300">{item.org}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
