"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function FloatingScrollbar() {
  const lenis = useLenis();
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;

    let frame = 0;
    let releaseTimer = 0;
    let pointerId: number | null = null;
    let grabOffset = 0;
    let limit = 0;
    let travel = 0;
    let locked = false;
    const root = document.documentElement;
    const clamp = (value: number, max: number) => Math.max(0, Math.min(max, value));

    const update = () => {
      frame = 0;
      const viewportHeight = root.clientHeight;
      const trackHeight = track.getBoundingClientRect().height;
      limit = Math.max(0, root.scrollHeight - viewportHeight);
      locked = document.body.style.overflow === "hidden" || !!lenis?.isStopped;
      const visible = limit > 1 && !locked;
      track.dataset.scrollable = String(visible);
      track.setAttribute("aria-hidden", String(!visible));
      thumb.tabIndex = visible ? 0 : -1;

      const height = Math.min(trackHeight, Math.max(56, trackHeight * viewportHeight / (limit + viewportHeight)));
      travel = Math.max(0, trackHeight - height);
      const progress = limit ? clamp(window.scrollY / limit, 1) : 0;
      thumb.style.height = `${height}px`;
      thumb.style.transform = `translate3d(0, ${progress * travel}px, 0)`;
      thumb.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const scrollTo = (position: number) => {
      if (locked) return;
      const target = clamp(position, limit);
      // Direct manipulation must follow the finger without smooth-scroll lag.
      if (lenis) lenis.scrollTo(target, { immediate: true });
      else window.scrollTo({ top: target, behavior: "instant" });
      schedule();
    };
    const setNear = (value: boolean) => {
      const active = String(value || pointerId !== null);
      if (track.dataset.active !== active) track.dataset.active = active;
    };
    const proximity = (event: PointerEvent) => {
      if (event.pointerType === "touch" || pointerId !== null) return;
      const bounds = track.getBoundingClientRect();
      setNear(event.clientX >= bounds.right - 48 && event.clientY >= bounds.top && event.clientY <= bounds.bottom);
    };
    const leaveWindow = () => setNear(false);
    const enterThumb = () => {
      window.clearTimeout(releaseTimer);
      setNear(true);
    };
    const leaveThumb = () => {
      if (pointerId === null) setNear(false);
    };
    const pointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || locked || !limit || pointerId !== null) return;
      event.preventDefault();
      window.clearTimeout(releaseTimer);
      pointerId = event.pointerId;
      grabOffset = event.clientY - thumb.getBoundingClientRect().top;
      scrollTo(window.scrollY);
      thumb.setPointerCapture(event.pointerId);
      thumb.focus({ preventScroll: true });
      track.dataset.dragging = "true";
      track.dataset.active = "true";
    };
    const pointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId || !travel) return;
      event.preventDefault();
      const offset = event.clientY - track.getBoundingClientRect().top - grabOffset;
      scrollTo(clamp(offset / travel, 1) * limit);
    };
    const pointerEnd = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      track.dataset.dragging = "false";
      if (thumb.hasPointerCapture(event.pointerId)) thumb.releasePointerCapture(event.pointerId);
      if (event.pointerType === "touch") {
        thumb.blur();
        releaseTimer = window.setTimeout(() => setNear(false), 650);
      } else {
        proximity(event);
      }
    };
    const keyDown = (event: KeyboardEvent) => {
      const step = Math.max(80, root.clientHeight * 0.1);
      const targets: Record<string, number> = {
        ArrowDown: window.scrollY + step,
        ArrowUp: window.scrollY - step,
        PageDown: window.scrollY + root.clientHeight * 0.9,
        PageUp: window.scrollY - root.clientHeight * 0.9,
        Home: 0,
        End: limit,
      };
      if (event.key === " ") {
        event.preventDefault();
        scrollTo(window.scrollY + root.clientHeight * 0.9 * (event.shiftKey ? -1 : 1));
      } else if (event.key in targets) {
        event.preventDefault();
        scrollTo(targets[event.key]);
      }
    };

    // Native scrolling, Lenis, route changes, and image/font layout changes share one update.
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("resize", schedule);
    document.addEventListener("pointermove", proximity, { passive: true });
    document.addEventListener("pointerleave", leaveWindow);
    thumb.addEventListener("pointerenter", enterThumb);
    thumb.addEventListener("pointerleave", leaveThumb);
    thumb.addEventListener("pointerdown", pointerDown);
    thumb.addEventListener("pointermove", pointerMove);
    thumb.addEventListener("pointerup", pointerEnd);
    thumb.addEventListener("pointercancel", pointerEnd);
    thumb.addEventListener("lostpointercapture", pointerEnd);
    thumb.addEventListener("keydown", keyDown);
    const unsubscribe = lenis?.on("scroll", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    resize.observe(track);
    const lock = new MutationObserver(schedule);
    lock.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    lock.observe(root, { attributes: true, attributeFilter: ["class"] });
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(releaseTimer);
      unsubscribe?.();
      resize.disconnect();
      lock.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      document.removeEventListener("pointermove", proximity);
      document.removeEventListener("pointerleave", leaveWindow);
      thumb.removeEventListener("pointerenter", enterThumb);
      thumb.removeEventListener("pointerleave", leaveThumb);
      thumb.removeEventListener("pointerdown", pointerDown);
      thumb.removeEventListener("pointermove", pointerMove);
      thumb.removeEventListener("pointerup", pointerEnd);
      thumb.removeEventListener("pointercancel", pointerEnd);
      thumb.removeEventListener("lostpointercapture", pointerEnd);
      thumb.removeEventListener("keydown", keyDown);
      if (pointerId !== null && thumb.hasPointerCapture(pointerId)) thumb.releasePointerCapture(pointerId);
      delete track.dataset.active;
      delete track.dataset.dragging;
    };
  }, [lenis, pathname]);

  return (
    <div className="floating-scrollbar" ref={trackRef} aria-hidden="true">
      <div
        className="floating-scrollbar-thumb"
        ref={thumbRef}
        role="scrollbar"
        aria-label={isEnglish ? "Scroll page" : "Geser halaman"}
        aria-controls="konten"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        tabIndex={-1}
        data-lenis-prevent-touch
      >
        <span aria-hidden="true" />
      </div>
    </div>
  );
}
