"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target?.closest?.("a, button, input, textarea"));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden rounded-full border border-cyan-400/50 lg:block mix-blend-screen"
        animate={{
          x: pos.x - (isPointer ? 20 : 12),
          y: pos.y - (isPointer ? 20 : 12),
          width: isPointer ? 40 : 24,
          height: isPointer ? 40 : 24,
          opacity: isVisible ? (isPointer ? 0.8 : 0.3) : 0,
          scale: isPointer ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden rounded-full bg-cyan-400 lg:block mix-blend-screen shadow-[0_0_8px_rgba(92,231,255,0.8)]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          width: 6,
          height: 6,
          opacity: isVisible ? (isPointer ? 0 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 20 }}
      />
    </>
  );
}
