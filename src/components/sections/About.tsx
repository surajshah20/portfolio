"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/data/content";

const FloatingLaptop = dynamic(() => import("@/components/3d/FloatingLaptop"), {
  ssr: false,
});

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <span className="eyebrow">About</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
            Built in the foothills,
            <br />
            <span className="gradient-text">coding toward the summit.</span>
          </h2>
          <p className="mt-6 text-mist-300 leading-relaxed">{profile.summary}</p>
          <p className="mt-4 text-mist-300 leading-relaxed">
            I'm based in {profile.location} 🇳🇵 — a final-year BSc IT student split between
            backend architecture and the small frontend details most people skip. I care about
            authentication done right, APIs that are pleasant to consume, and interfaces that
            don't feel templated.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: "Years Building", value: "3+" },
              { label: "Projects Shipped", value: "5" },
              { label: "Stack", value: "MERN + PG" },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel rounded-xl px-4 py-3">
                <div className="font-display text-xl text-cyan-400">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-mist-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 h-72 sm:h-96 md:order-2"
        >
          <FloatingLaptop />
        </motion.div>
      </div>
    </section>
  );
}
