"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const current = skills.find((s) => s.category === activeCategory)!;

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase font-bold">
          Technical Arsenal
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-mist-100 leading-tight max-w-3xl">
          A toolkit shaped by rigorous testing and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">shipping real things.</span>
        </h2>
      </motion.div>

      {/* Category Navigation - Scrollable on very small screens */}
      <div className="mt-12 flex flex-wrap gap-3 overflow-x-auto pb-4 hide-scrollbar">
        {skills.map((group) => (
          <button
            key={group.category}
            onClick={() => setActiveCategory(group.category)}
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === group.category
                ? "border-cyan-400 bg-cyan-400 text-navy-950 shadow-[0_0_15px_rgba(92,231,255,0.3)]"
                : "border-mist-100/15 bg-navy-900/30 text-mist-300 hover:border-mist-100/40 hover:bg-navy-800"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        {current.items.map((item, index) => (
          <motion.div 
            key={item.name} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-mist-100/10 bg-navy-900/40 backdrop-blur-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-lg font-bold text-mist-100">{item.name}</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-mist-400">
                {item.note ?? `${item.level}%`}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-navy-950 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="h-full rounded-full relative"
                style={{ background: `linear-gradient(90deg, ${current.color}88, ${current.color})` }}
              >
                {/* Optional subtle gleam effect on the bar */}
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}