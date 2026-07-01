"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/content";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative rounded-2xl border border-mist-100/10 bg-navy-800/50 p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/30"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${hovered ? "var(--mx,50%) var(--my,50%)" : "50% 50%"}, ${project.accent}22, transparent 70%)`,
        }}
      />

      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: project.accent }}>
            {project.status}
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold text-mist-100">{project.title}</h3>
          <p className="font-mono text-xs text-mist-300">{project.tagline}</p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ background: `${project.accent}1A` }}
        >
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: project.accent }} />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-mist-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-mist-100/10 px-2.5 py-1 font-mono text-[10px] text-mist-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={onOpen}
          className="font-mono text-xs uppercase tracking-wider text-cyan-400 transition hover:text-cyan-300"
        >
          View Case Study →
        </button>
        <div className="flex items-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-mist-300 transition hover:text-mist-100"
            >
              <Github size={16} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-mist-300 transition hover:text-mist-100"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
