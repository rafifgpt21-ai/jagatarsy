import type { SVGProps } from "react";

const paths = {
  sparkles: "m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z M20 2v4 M18 4h4",
  book: "M12 5v15 M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1V5Z",
  flask: "M9 3h6 M10 3v7L5 19c-.6 1 .1 2 1.3 2h11.4c1.2 0 1.9-1 1.3-2l-5-9V3 M8 14h8 M10 17h.01 M14 18h.01",
  home: "m3 10 9-7 9 7 M5 9v12h14V9 M9 21v-7h6v7",
  globe: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M3 12h18 M12 3c-4 5-4 13 0 18 4-5 4-13 0-18Z",
  graduation: "m2 9 10-5 10 5-10 5L2 9Z M6 11v6c4 3 8 3 12 0v-6 M22 9v8",
  leaf: "M20 3c-10 0-16 3-16 10a7 7 0 0 0 7 7c7 0 9-7 9-17Z M3 21 15 9 M9 15v-4 M9 15h4",
  heart: "M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 6l-1-1.2a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z",
  palette: "M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.8 1.8 0 0 1 1-3.3h3a3 3 0 0 0 3-3c0-5-4-8-9-8Z M7 10h.01 M10 7h.01 M15 7h.01 M18 10h.01",
  compass: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z m-5-4-3 5-5 3 3-5 5-3Z",
  message: "M21 11a8 8 0 0 1-8 8H7l-4 3V7a4 4 0 0 1 4-4h6a8 8 0 0 1 8 8Z M7 8h10 M7 12h7",
  clipboard: "M9 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3 M9 2h6v5H9V2Z M8 12h8 M8 16h5",
  check: "M21 12a9 9 0 1 1-5-8 M8 12l3 3L21 5",
  map: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  mail: "M3 5h18v14H3V5Z m0 1 9 7 9-7",
  phone: "M7 3H3c0 10 8 18 18 18v-4l-5-2-2 3a15 15 0 0 1-8-8l3-2-2-5Z",
  arrow: "M6 18 18 6 M6 6h12v12",
  menu: "M4 8h16 M4 16h16",
  close: "m6 6 12 12 M6 18 18 6",
  school: "m3 10 9-7 9 7 M5 10v11h14V10 M9 21v-6h6v6 M9 10h.01 M15 10h.01",
} as const;

export type ThemeIconName = keyof typeof paths;

export function ThemeIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: ThemeIconName }) {
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}><path d={paths[name]} /></svg>;
}

export function FeatureIcon({ name }: { name: ThemeIconName }) {
  return <ThemeIcon name={name} className="theme-feature-icon" />;
}
