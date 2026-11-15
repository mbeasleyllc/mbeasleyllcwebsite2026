import localFont from "next/font/local";

/**
 * Fonts are self-hosted rather than pulled from Google at build time.
 *
 * `next/font/google` fetches the files during `next build`. In this container
 * that silently produced zero font files (no @font-face, empty
 * .next/static/media), so every heading fell back to a system serif and body
 * copy to Times New Roman. Self-hosting removes the build-time network
 * dependency, makes the build reproducible, and avoids a third-party request
 * on every page load.
 *
 * Files live in src/fonts/ and are the `latin` subsets from Google Fonts.
 */

/* Display face — Fraunces Semibold (static instance, weight 600). */
export const fraunces = localFont({
  src: [{ path: "../fonts/fraunces-latin.woff2", weight: "600", style: "normal" }],
  variable: "--font-display",
  display: "swap",
  fallback: ["ui-serif", "Georgia", "serif"],
});

/* Body face — Plus Jakarta Sans (variable, weight 400–700). */
export const jakarta = localFont({
  src: [{ path: "../fonts/jakarta-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const fontVariables = `${fraunces.variable} ${jakarta.variable}`;
