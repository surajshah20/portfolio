"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const current = skills.find((s) => s.category === activeCategory)!;

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <span className="eyebrow">Skills</span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
        A toolkit shaped by <span className="gradient-text">shipping real things.</span>
      </h2>

      <div className="mt-12 flex flex-wrap gap-3">
        {skills.map((group) => (
          <button
            key={group.category}
            onClick={() => setActiveCategory(group.category)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              activeCategory === group.category
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                : "border-mist-100/15 text-mist-300 hover:border-mist-100/30"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        {current.items.map((item) => (
          <div key={item.name} className="glass-panel rounded-xl p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm text-mist-100">{item.name}</span>
              <span className="font-mono text-xs text-mist-300">
                {item.note ?? `${item.level}%`}
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-navy-700">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${current.color}, #FF9E5E)` }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
