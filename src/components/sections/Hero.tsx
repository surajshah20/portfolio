"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
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
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-navy-950 flex items-center">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Soft gradient for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10 lg:bg-gradient-to-r lg:from-navy-950 lg:via-navy-950/80 lg:to-transparent" />

      {/* Main Grid Container - Fully Responsive */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-28 pb-16 lg:py-20">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 lg:mb-6"
          >
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-cyan-400 uppercase font-bold">
              {profile.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6"
          >
            {profile.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-mist-300 text-base sm:text-lg leading-relaxed max-w-lg mb-8 lg:mb-10"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto"
          >
            {/* Primary CTA - Full width on mobile, inline on tablet+ */}
            <a
              href="#projects"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold text-navy-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(92,231,255,0.4)]"
            >
              Explore selected work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {contactLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="group relative flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-mist-100/15 bg-navy-900/60 backdrop-blur transition hover:border-cyan-400/60 hover:shadow-[0_0_18px_rgba(92,231,255,0.25)]"
                >
                  <Icon size={20} className="text-mist-200 transition group-hover:text-cyan-400 sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Profile Image - Scalable & Mobile First */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center lg:justify-end relative w-full order-1 lg:order-2"
        >
          {/* Responsive container: max-w ensures it doesn't break small screens, aspect ratio maintains shape */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[4/5] rounded-[2rem] border border-mist-100/10 bg-navy-900/40 backdrop-blur-sm overflow-hidden p-2.5 sm:p-3 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-50" />
            
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-navy-800">
              <Image 
                src="/profile-placeholder.png" 
                alt={profile.name}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              
              {/* Location Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium text-mist-100 uppercase tracking-wider">
                  Based in Nepal
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}