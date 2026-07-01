"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Top nav */}
      <header
        className={`fixed top-0 z-50 w-full transition-all ${
          scrolled ? "bg-navy-950/80 backdrop-blur-lg border-b border-mist-100/10" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-sm font-semibold tracking-wide text-mist-100">
            SKS<span className="text-cyan-400">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`transition hover:text-cyan-400 ${
                    active === s.id ? "text-cyan-400" : "text-mist-300"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume/Suraj-Kumar-Sah-Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2 text-xs font-mono uppercase tracking-wider text-cyan-400 transition hover:bg-cyan-400/10"
          >
            <Download size={14} /> Resume
          </a>
        </nav>
      </header>

      {/* Floating side scrollspy (desktop only) */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group relative flex items-center justify-end">
            <span className="pointer-events-none mr-3 whitespace-nowrap rounded bg-navy-800 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-mist-200 opacity-0 transition group-hover:opacity-100">
              {s.label}
            </span>
            <motion.span
              animate={{
                scale: active === s.id ? 1.3 : 1,
                backgroundColor: active === s.id ? "#5CE7FF" : "rgba(234,242,248,0.25)",
              }}
              className="h-2 w-2 rounded-full"
            />
          </a>
        ))}
      </div>
    </>
  );
}
