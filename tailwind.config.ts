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
        graphite: "#151514",
        surface: "#1A1A18",
        stone: "#E7E7E2",
        steel: "#9A9A94"
      },
      fontFamily: {
        display: ["var(--font-display)", "Syncopate", "sans-serif"],
        body: ["var(--font-body)", "Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
