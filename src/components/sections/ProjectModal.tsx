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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/80 backdrop-blur-md px-4 sm:px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-mist-100/10 bg-navy-900/95 p-6 sm:p-10 shadow-2xl backdrop-blur-xl custom-scrollbar"
          >
            {/* Dynamic Accent Top Border */}
            <div 
              className="absolute top-0 left-0 right-0 h-1.5 opacity-80"
              style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
            />

            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/50 text-mist-300 transition-all hover:bg-mist-100/10 hover:text-mist-100"
            >
              <X size={18} />
            </button>

            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: project.accent }}>
              {project.status}
            </span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-mist-100">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-sm text-mist-300">{project.tagline}</p>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-mist-200">
              {project.description}
            </p>

            <div className="mt-8">
              <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-mist-400 border-b border-mist-100/10 pb-2">
                Key Features
              </h4>
              <ul className="mt-4 space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm sm:text-base text-mist-200 leading-relaxed">
                    <span 
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full shadow-sm" 
                      style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}80` }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-mist-400 border-b border-mist-100/10 pb-2">
                Tech Stack
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-mist-100/10 bg-navy-950/50 px-3 py-1.5 font-mono text-[10px] sm:text-xs font-semibold text-mist-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-mist-100/10">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl py-3 px-6 font-mono text-xs font-bold uppercase tracking-widest text-navy-950 transition-all hover:shadow-lg"
                  style={{ background: project.accent, boxShadow: `0 0 15px ${project.accent}33` }}
                >
                  <ExternalLink size={16} className="transition-transform group-hover:scale-110" /> 
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-mist-100/20 bg-navy-950/50 py-3 px-6 font-mono text-xs font-bold uppercase tracking-widest text-mist-200 transition-all hover:border-mist-100/40 hover:bg-navy-900"
                >
                  <Github size={16} className="transition-transform group-hover:scale-110" /> 
                  Repository
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}