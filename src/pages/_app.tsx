import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fontVariables } from "@/lib/fonts";

/**
 * next/font must run in _app (or a layout) so its generated @font-face CSS
 * lands in the page bundle. Importing it from _document.tsx emits the CSS
 * variable class names but drops the @font-face rules entirely, which is why
 * headings silently fell back to a system serif.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`font-root ${fontVariables}`}>
      <Component {...pageProps} />
    </div>
  );
}
