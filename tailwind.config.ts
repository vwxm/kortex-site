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
        ink: "#08080B",
        surface: "#101016",
        stone: "#E7E8EE",
        steel: "#9AA0AE",
        accent: "#2E4BD8",
        "accent-hi": "#4C6BF0"
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(46, 75, 216, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
