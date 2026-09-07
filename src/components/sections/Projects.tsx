"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/content";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase font-bold">
          Featured Work
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-mist-100 leading-tight">
          {projects.length} builds, <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {projects.length} distinct problems solved.
          </span>
        </h2>
      </motion.div>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on large screens */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            <ProjectCard project={project} onOpen={() => setActive(project)} />
          </motion.div>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}