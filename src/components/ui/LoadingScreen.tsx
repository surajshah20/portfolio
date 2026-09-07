"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Slightly longer timeout so the cool new animation has time to play
    const timer = setTimeout(() => setVisible(false), 1600);
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
          <div className="relative flex items-center justify-center mb-8 h-16 w-16">
            {/* Outer spinning grid box */}
            <motion.div
              className="absolute inset-0 rounded-sm border border-cyan-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner fast-spinning tech accents */}
            <motion.div
              className="absolute inset-2 rounded-sm border-2 border-transparent border-t-cyan-400 border-l-cyan-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Core dot */}
            <motion.div
              className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(92,231,255,0.8)]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="font-display font-bold text-xl tracking-widest text-mist-100">
              SKS<span className="text-cyan-400">.</span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/80 uppercase">
              Initializing Workspace
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}