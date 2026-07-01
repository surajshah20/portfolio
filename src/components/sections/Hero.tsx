"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { profile } from "@/data/content";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-navy-950" />,
});

const contactLinks = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone" },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Soft gradient so 2D text stays legible over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow mb-4"
        >
          {profile.location}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-3xl sm:text-5xl font-semibold tracking-tight gradient-text max-w-3xl"
        >
          {profile.role}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 max-w-xl text-mist-300 text-sm sm:text-base"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-8 flex items-center gap-4"
        >
          {contactLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-mist-100/15 bg-navy-900/60 backdrop-blur transition hover:border-cyan-400/60 hover:shadow-[0_0_18px_rgba(92,231,255,0.35)]"
            >
              <Icon size={18} className="text-mist-200 transition group-hover:text-cyan-400" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-2 text-mist-300"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase">
            {profile.tagline}
          </span>
          <ArrowDown size={16} className="animate-float-slow text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
