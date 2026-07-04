import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0A",
        graphite: "#141413",
        surface: "#1A1A18",
        stone: "#E7E7E2",
        steel: "#9A9A94",
        neon: "#22E5A0"
      },
      fontFamily: {
        display: ["var(--font-display)", "Syncopate", "sans-serif"],
        body: ["var(--font-body)", "Manrope", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)",
        neon: "0 0 40px -8px rgba(34, 229, 160, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
