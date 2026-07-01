"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
        >
          <svg width="120" height="80" viewBox="0 0 120 80" className="mb-6">
            <motion.path
              d="M0 70 L25 30 L40 50 L60 15 L80 45 L95 25 L120 70 Z"
              fill="none"
              stroke="#5CE7FF"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
            <motion.circle
              cx="60"
              cy="15"
              r="3"
              fill="#FFC477"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ delay: 0.9, duration: 0.8 }}
            />
          </svg>
          <span className="font-mono text-xs tracking-[0.3em] text-mist-300 uppercase">
            Loading the summit
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
