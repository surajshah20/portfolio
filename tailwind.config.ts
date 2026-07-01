import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05080F",
          900: "#070C1A",
          800: "#0B1326",
          700: "#101B36",
          600: "#172547",
        },
        cyan: {
          400: "#5CE7FF",
          500: "#34D2F2",
          600: "#1AAFCE",
        },
        gold: {
          400: "#FFC477",
          500: "#FF9E5E",
          600: "#F2793C",
        },
        mist: {
          100: "#EAF2F8",
          200: "#C9D7E5",
          300: "#92A6BC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "summit-glow":
          "radial-gradient(120% 80% at 50% 0%, rgba(52,210,242,0.18) 0%, rgba(5,8,15,0) 60%)",
        "sunrise-ridge":
          "linear-gradient(180deg, rgba(255,158,94,0.12) 0%, rgba(5,8,15,0) 45%)",
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-slower": "float 11s ease-in-out infinite",
        drift: "drift 18s linear infinite",
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
