"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/app/lib/i18n";

type MotionPreference = "system" | "full" | "reduced";
const key = "jagat-arsy-motion";
const eventName = "jagat-motion-change";
const reducedQuery = "(prefers-reduced-motion: reduce)";
let fallback: MotionPreference = "system";

function subscribe(callback: () => void) {
  const media = window.matchMedia(reducedQuery);
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

function getPreference(): MotionPreference {
  try {
    const stored = localStorage.getItem(key);
    return stored === "full" || stored === "reduced" ? stored : "system";
  } catch {
    return fallback;
  }
}

export function useMotionPreference() {
  return useSyncExternalStore(subscribe, getPreference, () => "system" as MotionPreference);
}

export function MotionToggle({ locale = "id" }: { locale?: Locale }) {
  const isEnglish = locale === "en";
  const preference = useMotionPreference();
  const systemReduced = useSyncExternalStore(subscribe, () => window.matchMedia(reducedQuery).matches, () => false);
  const reduced = preference === "reduced" || (preference === "system" && systemReduced);

  const toggle = () => {
    fallback = reduced ? "full" : "reduced";
    try { localStorage.setItem(key, fallback); } catch { /* The in-memory preference still works. */ }
    window.dispatchEvent(new Event(eventName));
  };

  return (
    <button className="motion-toggle" type="button" onClick={toggle} aria-pressed={!reduced} aria-label={isEnglish ? (reduced ? "Enable animations" : "Reduce motion") : (reduced ? "Aktifkan animasi" : "Kurangi animasi")}>
      <span aria-hidden="true">{reduced ? "\u2733" : "\u25cc"}</span>
      {isEnglish ? (reduced ? "Enable animations" : "Reduce motion") : (reduced ? "Aktifkan animasi" : "Kurangi animasi")}
    </button>
  );
}
