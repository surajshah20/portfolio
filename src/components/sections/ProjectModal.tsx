"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/content";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/80 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 text-mist-300 transition hover:text-mist-100"
            >
              <X size={20} />
            </button>

            <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: project.accent }}>
              {project.status}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-mist-100">{project.title}</h3>
            <p className="font-mono text-xs text-mist-300">{project.tagline}</p>

            <p className="mt-5 text-sm leading-relaxed text-mist-300">{project.description}</p>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-cyan-400">
              Key Features
            </h4>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-mist-200">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-cyan-400">
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-mist-100/10 px-3 py-1 font-mono text-[11px] text-mist-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-mist-100/15 px-4 py-2 font-mono text-xs uppercase tracking-wider text-mist-200 transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  <Github size={14} /> Code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/40 px-4 py-2 font-mono text-xs uppercase tracking-wider text-cyan-400 transition hover:bg-cyan-400/20"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
