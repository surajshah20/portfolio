import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-mist-100/10 bg-navy-950 px-6 py-8 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
        <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-mist-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-mist-400">
          Engineered in <span className="text-cyan-400">Nepal</span> 🇳🇵
        </p>
      </div>
    </footer>
  );
}