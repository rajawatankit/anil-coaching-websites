import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061a36",
        ink: "#0b1630",
        gold: "#ffc600",
        leaf: "#07843c",
        crimson: "#c71925",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(255, 198, 0, 0.22)",
        lift: "0 20px 45px rgba(6, 26, 54, 0.16)",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
