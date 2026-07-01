"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/content";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <span className="eyebrow">Featured Work</span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
        Five builds, <span className="gradient-text">five different problems.</span>
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <ProjectCard project={project} onOpen={() => setActive(project)} />
          </motion.div>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
