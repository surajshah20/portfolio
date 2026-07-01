"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden rounded-full border border-cyan-400 lg:block"
      animate={{
        x: pos.x - (isPointer ? 18 : 8),
        y: pos.y - (isPointer ? 18 : 8),
        width: isPointer ? 36 : 16,
        height: isPointer ? 36 : 16,
        opacity: isPointer ? 0.6 : 0.4,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
    />
  );
}
