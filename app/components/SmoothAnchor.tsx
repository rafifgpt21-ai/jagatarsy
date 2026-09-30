"use client";

import { useLenis } from "lenis/react";
import type { ComponentPropsWithoutRef } from "react";
import { useMotionPreference } from "./MotionSettings";

export function SmoothAnchor({ href, onClick, ...props }: ComponentPropsWithoutRef<"a"> & { href: `#${string}` }) {
  const lenis = useLenis();
  const preference = useMotionPreference();

  return <a {...props} href={href} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(decodeURIComponent(href.slice(1)));
    if (!lenis || !target) return;
    event.preventDefault();
    window.history.pushState(window.history.state, "", href);
    const keyboard = event.detail === 0;
    lenis.scrollTo(target, {
      duration: 1.2, lerp: 0,
      immediate: preference === "reduced" || lenis.prefersReducedMotion,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      onComplete: () => { if (keyboard) target.focus({ preventScroll: true }); },
    });
  }} />;
}
