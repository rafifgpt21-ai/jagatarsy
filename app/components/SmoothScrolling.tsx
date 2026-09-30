"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import { useMotionPreference } from "./MotionSettings";

const options: LenisOptions = {
  autoRaf: true,
  lerp: 0.085,
  smoothWheel: true,
  syncTouch: false,
  respectReducedMotion: true,
  stopInertiaOnNavigate: true,
  anchors: false,
};

export function SmoothScrolling({ children }: { children: ReactNode }) {
  const preference = useMotionPreference();
  const scrollOptions = useMemo(() => ({
    ...options,
    lerp: preference === "reduced" ? 1 : options.lerp,
    smoothWheel: preference !== "reduced",
    respectReducedMotion: preference === "system",
  }), [preference]);

  useEffect(() => {
    document.documentElement.dataset.motion = preference;
    return () => { delete document.documentElement.dataset.motion; };
  }, [preference]);

  return <ReactLenis root options={scrollOptions}>{children}</ReactLenis>;
}
