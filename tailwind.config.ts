import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "aurora-black": "#0a0a0f",
        "aurora-dark": "#12121a",
        "aurora-card": "rgba(255,255,255,0.04)",
        "aurora-border": "rgba(255,255,255,0.08)",
        "aurora-text": "#f0f0f5",
        "aurora-muted": "#8a8a9a",
        "aurora-cyan": "#00d4ff",
        "aurora-purple": "#a855f7",
        "aurora-magenta": "#ec4899",
        "aurora-gold": "#d4a853",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)",
        "gold-highlight": "linear-gradient(135deg, #d4a853 0%, #f0d890 100%)",
        "dark-gradient":
          "linear-gradient(180deg, rgba(10,10,15,0) 0%, #0a0a0f 100%)",
      },
      animation: {
        "aurora-blob": "aurora-blob 8s ease-in-out infinite",
        "aurora-blob-delay": "aurora-blob 8s ease-in-out 2s infinite",
        "aurora-blob-delay2": "aurora-blob 8s ease-in-out 4s infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "aurora-blob": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            borderRadius: "36% 64% 53% 47% / 53% 36% 64% 47%",
          },
          "25%": {
            transform: "translate(30px, -40px) scale(1.1)",
            borderRadius: "53% 47% 36% 64% / 47% 64% 36% 53%",
          },
          "50%": {
            transform: "translate(-20px, 20px) scale(0.95)",
            borderRadius: "64% 36% 47% 53% / 36% 53% 64% 47%",
          },
          "75%": {
            transform: "translate(10px, 30px) scale(1.05)",
            borderRadius: "47% 53% 64% 36% / 64% 47% 53% 36%",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "aurora": "0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(168,85,247,0.1)",
        "aurora-strong":
          "0 0 60px rgba(0,212,255,0.25), 0 0 120px rgba(168,85,247,0.15)",
        "gold": "0 0 30px rgba(212,168,83,0.2)",
        "card":
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      borderRadius: {
        "aurora-sm": "0.75rem",
        "aurora": "1rem",
        "aurora-lg": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
