import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-mist-100/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-mist-300">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-mist-300">Made with passion in Nepal 🇳🇵</p>
      </div>
    </footer>
  );
}
