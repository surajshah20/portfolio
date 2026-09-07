"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
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

  // 3D Tilt calculations
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Mouse position for the radial gradient glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    // Tilt logic
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    
    // Gradient glow logic
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  // Create a dynamic background string using framer-motion's template
  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${project.accent}15, transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex flex-col h-full rounded-2xl border border-mist-100/10 bg-navy-900/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-400/10 cursor-pointer"
      onClick={onOpen}
    >
      {/* Dynamic Hover Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: project.accent }}>
            {project.status}
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-mist-100">{project.title}</h3>
          <p className="mt-1 font-mono text-xs text-mist-300">{project.tagline}</p>
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl shadow-inner transition-transform group-hover:scale-110"
          style={{ background: `${project.accent}1A`, border: `1px solid ${project.accent}33` }}
        >
          <div className="h-3 w-3 rounded-full animate-pulse" style={{ background: project.accent, boxShadow: `0 0 10px ${project.accent}` }} />
        </div>
      </div>

      <p className="mt-6 text-sm sm:text-base leading-relaxed text-mist-300 flex-grow">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-mist-100/10 bg-navy-950/50 px-3 py-1 font-mono text-[10px] sm:text-xs text-mist-200 transition-colors group-hover:border-mist-100/20"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-full border border-mist-100/10 bg-navy-950/50 px-3 py-1 font-mono text-[10px] sm:text-xs text-mist-400">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between pt-4 border-t border-mist-100/10">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 transition-transform group-hover:translate-x-1">
          View Details →
        </span>
        <div className="flex items-center gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()} // Prevent opening modal when clicking link
              className="text-mist-300 transition hover:text-mist-100 hover:scale-110"
            >
              <Github size={18} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="text-mist-300 transition hover:text-mist-100 hover:scale-110"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}