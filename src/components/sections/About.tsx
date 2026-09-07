"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/data/content";

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
            {/* Note: I removed profile.summary here to avoid repeating the exact same text from the Hero section */}
            <p className="mt-6 text-mist-300 text-base sm:text-lg leading-relaxed">
              I am a final-year BSc IT student based in Kathmandu, Nepal. I specialize in building robust backend architecture and dialing in the precise frontend details that most developers overlook. 
            </p>
            <p className="mt-4 text-mist-300 text-base sm:text-lg leading-relaxed">
              I care about secure authentication, APIs that are actually pleasant to consume, and interfaces that don't feel like off-the-shelf templates.
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
              { label: "Years Building", value: "3+" },
              { label: "Projects Shipped", value: "5" },
              { label: "Stack Focus", value: "MERN + PG" },
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
          {/* w-full and negative margins on mobile ensure the 3D canvas scales correctly without causing page scroll issues */}
          <FloatingLaptop />
        </motion.div>
      </div>
    </section>
  );
}