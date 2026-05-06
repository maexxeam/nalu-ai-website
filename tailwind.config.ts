import type { Config } from "tailwindcss";
import sharedTokens from "./lib/design-tokens.theme";

// Pull in shared brand colors, semantic UI tokens, font sizes and
// brand shadows from shared/design-tokens.json — generated into
// lib/design-tokens.theme.ts. Anything Website-specific (Next/font
// CSS variables, animations, prose width) lives below.
const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      ...(sharedTokens ?? {}),
      // Override font families: the website plugs in Next.js fonts as
      // CSS variables, while sharedTokens.fontFamily ships plain font
      // names for the Tool. Both are valid; Website wins on its own turf.
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      // Body type runs slightly larger on the marketing site (14px) than
      // in the Tool (13px). Display sizes come from sharedTokens.
      fontSize: {
        ...(sharedTokens.fontSize ?? {}),
        body: ["14px", { lineHeight: "22px", fontWeight: "400" }],
        small: ["12px", { lineHeight: "18px", fontWeight: "400" }],
      },
      maxWidth: {
        prose: "800px",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
