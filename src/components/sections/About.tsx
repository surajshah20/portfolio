"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const FloatingLaptop = dynamic(() => import("@/components/3d/FloatingLaptop"), {
  ssr: false,
});

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 overflow-hidden">
      <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase font-bold">
              About
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-mist-100 leading-tight">
              Architecture first.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Details always.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mt-6 text-mist-300 text-base sm:text-lg leading-relaxed">
              I am a Full-Stack Software Engineer based in Kathmandu, Nepal, with a BSc (Hons) in Computer Systems Engineering. Creator of BlushBook, a live commercial web-to-print SaaS with 30+ print orders fulfilled, and DevGuard AI, an LLM-assisted security code-review agent.
            </p>
            <p className="mt-4 text-mist-300 text-base sm:text-lg leading-relaxed">
              I focus on deterministic AST static analysis, complex client-side canvas state with Konva.js and Zustand, and resilient REST API design backed by PostgreSQL. Available for full-time junior software engineering roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {[
              { label: "Print Orders", value: "30+" },
              { label: "Projects Shipped", value: "6" },
              { label: "Core Stack", value: "React · Node · PG" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-mist-100/10 bg-navy-900/40 backdrop-blur-sm px-4 py-4 transition hover:border-cyan-400/40">
                <div className="font-display text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="mt-1 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-mist-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 h-64 sm:h-80 md:h-96 md:order-2 w-full relative -mx-4 sm:mx-0"
        >
          <FloatingLaptop />
        </motion.div>
      </div>
    </section>
  );
}
