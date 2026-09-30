"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMotionPreference } from "./MotionSettings";

gsap.registerPlugin(ScrollTrigger, SplitText);

const imageFrames = [
  ".studio-work-image", ".studio-journey-image", ".studio-story-image",
  ".about-image", ".program-photo", ".life-editorial-photo",
  ".campus-gallery-images figure", ".alumni-visual", ".work-image",
  ".stories-page-image", ".story-article-image",
].join(", ");

const staggerGroups = [
  ".studio-journey-grid", ".studio-story-grid", ".studio-intro-facts",
  ".education-pillars", ".experience-grid", ".process-grid", ".level-grid",
].join(", ");

export function MotionObserver() {
  const pathname = usePathname();
  const preference = useMotionPreference();
  const progressRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis((scroll) => {
    ScrollTrigger.update();
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${scroll.progress})`;
  });

  useEffect(() => {
    let cancelled = false;
    let media: ReturnType<typeof gsap.matchMedia> | undefined;
    let refreshFrame = 0;
    const main = document.getElementById("konten");
    if (!main) return;

    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        lenis?.resize();
        ScrollTrigger.refresh();
      });
    };

    const initialize = () => {
      if (cancelled) return;
      // Respect Next's native route and history scroll restoration.
      lenis?.resize();
      lenis?.scrollTo(lenis.actualScroll, { immediate: true });

      media = gsap.matchMedia();
      const revealedHeadings = new WeakSet<HTMLElement>();
      media.add({
        motion: preference === "full" ? "all" : preference === "reduced" ? "not all" : "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 981px)",
        pointer: "(hover: hover) and (pointer: fine)",
      }, (context) => {
        const { motion, desktop, pointer } = context.conditions!;
        if (!motion) return;
        document.documentElement.classList.add("motion-enhanced");
        const splits: SplitText[] = [];
        const listeners: (() => void)[] = [];

        gsap.fromTo(main.querySelector(".motion-page"), { opacity: 0.7 }, {
          opacity: 1, duration: 0.65, ease: "power2.out",
        });

        // Mask rendered lines and re-split when fonts or widths change.
        main.querySelectorAll<HTMLElement>("h1:not(.studio-hero-wordmark), h2").forEach((heading) => {
          // Keep interactive titles as one focusable link, never cloned across lines.
          if (heading.querySelector("a, button")) {
            gsap.fromTo(heading, { y: 24, opacity: 0 }, {
              y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: heading, start: "top 91%", once: true },
            });
            return;
          }
          const accessibleLabel = heading.innerText.replace(/\s+/g, " ").trim();
          splits.push(SplitText.create(heading, {
            type: "lines", mask: "lines", linesClass: "motion-line", autoSplit: true,
            onSplit: (self) => {
              heading.setAttribute("aria-label", accessibleLabel);
              // Clip only during the reveal; completed text must retain its descenders.
              const releaseMasks = () => {
                gsap.set(self.masks, { overflow: "visible" });
              };
              if (revealedHeadings.has(heading)) {
                releaseMasks();
                return gsap.set(self.lines, { yPercent: 0, autoAlpha: 1, rotation: 0 });
              }
              return gsap.fromTo(self.lines,
                { yPercent: 110, autoAlpha: 0.15, rotation: desktop ? 2 : 0 },
                {
                  yPercent: 0, autoAlpha: 1, rotation: 0,
                  duration: 1.05, stagger: 0.1, ease: "power4.out",
                  onComplete: () => {
                    revealedHeadings.add(heading);
                    releaseMasks();
                  },
                  scrollTrigger: { trigger: heading, start: "top 91%", once: true },
                },
              );
            },
          }));
        });

        const wordmark = main.querySelector<HTMLElement>(".studio-hero-wordmark");
        if (wordmark) {
          const split = SplitText.create(wordmark, { type: "chars", charsClass: "motion-char" });
          splits.push(split);
          gsap.fromTo(split.chars, { yPercent: 110, rotation: 6, autoAlpha: 0 }, {
            yPercent: 0, rotation: 0, autoAlpha: 1, duration: 1.2, stagger: 0.045, ease: "power4.out",
          });
          if (desktop) gsap.to(wordmark, {
            yPercent: -18, opacity: 0.35, ease: "none",
            scrollTrigger: { trigger: ".studio-wordmark-panel", start: "top top", end: "bottom top", scrub: true },
          });
        }

        const sculpture = main.querySelector<SVGSVGElement>(".hero-art-sculpture");
        if (sculpture) {
          gsap.fromTo(sculpture.querySelectorAll(".hero-art-piece"), {
            scale: 0.82, autoAlpha: 0, transformOrigin: "50% 50%",
          }, {
            scale: 1, autoAlpha: 1, duration: 1.15, stagger: 0.09, ease: "power3.out",
          });
          if (desktop) gsap.fromTo(sculpture, { yPercent: 4 }, {
            yPercent: -6, ease: "none",
            scrollTrigger: { trigger: sculpture.parentElement, start: "top bottom", end: "bottom top", scrub: 1.1 },
          });
        }

        // Each paper sculpture assembles on entry, with a separate scroll layer.
        main.querySelectorAll<HTMLElement>(".home-artwork").forEach((artwork) => {
          const svg = artwork.querySelector("svg");
          gsap.fromTo(artwork.querySelectorAll(".home-art-piece"), {
            y: 24, scale: 0.88, autoAlpha: 0, transformOrigin: "50% 50%",
          }, {
            y: 0, scale: 1, autoAlpha: 1, duration: 1.05, stagger: 0.08, ease: "power3.out",
            scrollTrigger: { trigger: artwork, start: "top 94%", once: true },
          });
          if (desktop && svg) gsap.fromTo(svg, { y: 14 }, {
            y: -14, ease: "none",
            scrollTrigger: { trigger: artwork, start: "top bottom", end: "bottom top", scrub: 1.2 },
          });
        });

        // Animate copy and cards without also moving an ancestor around headings.
        const candidates = new Set<HTMLElement>(main.querySelectorAll<HTMLElement>([
          "[data-reveal]", "section p",
          ".studio-hero-meta", ".studio-hero-media-bottom", ".page-intro-bottom",
          ".education-pillars article", ".experience-grid article", ".process-grid article",
          ".level-card", ".destination-row", ".stories-page-copy", ".faq-list details",
        ].join(", ")));
        const revealTargets = [...candidates].filter((element) => {
          if (element.matches("h1, h2") || element.querySelector("h1, h2")) return false;
          let parent = element.parentElement;
          while (parent && parent !== main) {
            if (candidates.has(parent) && !parent.querySelector("h1, h2")) return false;
            parent = parent.parentElement;
          }
          return true;
        });
        revealTargets.forEach((element) => {
          const group = element.parentElement?.closest(staggerGroups);
          const order = group ? [...group.children].indexOf(element) : 0;
          gsap.fromTo(element, { y: desktop ? 48 : 24, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.95, ease: "power3.out",
            delay: Math.max(0, Math.min(order, 3)) * 0.09,
            scrollTrigger: {
              trigger: element, start: "top 93%", once: true,
              onEnter: () => element.classList.add("is-visible"),
            },
          });
        });

        // The curtain reveal belongs to the frame; parallax belongs to the photo.
        main.querySelectorAll<HTMLElement>(`${imageFrames}, .studio-hero-photo`).forEach((frame) => {
          gsap.fromTo(frame, { clipPath: "inset(0% 0% 100% 0%)" }, {
            clipPath: "inset(0% 0% 0% 0%)", duration: 1.25, ease: "power3.inOut",
            onComplete: () => { gsap.set(frame, { clearProps: "clipPath" }); },
            scrollTrigger: { trigger: frame, start: "top 94%", once: true },
          });
          const image = frame.querySelector("img");
          if (image && desktop) gsap.fromTo(image, { yPercent: -6, scale: 1.15 }, {
            yPercent: 6, scale: 1.15, ease: "none",
            scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
        });

        // Three depths in the boarding collage, controlled by scroll rather than autoplay.
        if (desktop) main.querySelectorAll<HTMLElement>(".studio-life-photo").forEach((photo, index) => {
          gsap.fromTo(photo, { y: [75, -40, 60][index], rotation: [-6, 5, -3][index] }, {
            y: [-85, 65, -65][index], rotation: [2, -3, 3][index], ease: "none",
            scrollTrigger: { trigger: ".studio-life", start: "top bottom", end: "bottom top", scrub: 1.1 },
          });
        });

        main.querySelectorAll<HTMLElement>(".studio-model-row").forEach((row, index) => {
          gsap.fromTo([...row.children], { y: 22, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.06, ease: "power3.out", delay: index * 0.025,
            scrollTrigger: {
              trigger: row, start: "top 92%", once: true,
              onEnter: () => row.classList.add("is-visible"),
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".studio-intro-facts > div, .about-facts > div").forEach((fact, index) => {
          gsap.fromTo(fact, { y: 28, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, duration: 0.8, delay: index * 0.1, ease: "power3.out",
            scrollTrigger: { trigger: fact.parentElement, start: "top 90%", once: true },
          });
        });

        const footerMark = document.querySelector(".studio-footer-wordmark");
        if (footerMark) {
          const split = SplitText.create(footerMark, { type: "chars", aria: "none" });
          splits.push(split);
          gsap.fromTo(split.chars, { yPercent: 105, rotation: 4 }, {
            yPercent: 0, rotation: 0, duration: 1.2, stagger: 0.04, ease: "power4.out",
            scrollTrigger: { trigger: footerMark, start: "top 95%", once: true },
          });
        }
        gsap.fromTo(".studio-footer-top > div", { y: 35, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: ".studio-footer", start: "top 90%", once: true },
        });

        // Keyboard focus reveals its content immediately, including a masked photo.
        const focusTargets = [
          ...revealTargets,
          ...main.querySelectorAll<HTMLElement>("h2:has(a), h2:has(button)"),
          ...document.querySelectorAll<HTMLElement>(".studio-footer-top > div"),
        ];
        const revealFocus = (event: FocusEvent) => {
          if (!(event.target instanceof HTMLElement)) return;
          const target = event.target;
          focusTargets.filter((element) => element.contains(target)).forEach((element) => {
            gsap.killTweensOf(element, "opacity,y");
            gsap.set(element, { opacity: 1, y: 0 });
          });
          const frame = target.closest(imageFrames) ?? target.querySelector(imageFrames);
          if (frame) {
            gsap.killTweensOf(frame, "clipPath");
            gsap.set(frame, { clipPath: "inset(0%)" });
          }
        };
        document.addEventListener("focusin", revealFocus);
        listeners.push(() => document.removeEventListener("focusin", revealFocus));

        // A subtle pointer pull on buttons, disabled on touch screens.
        if (pointer) document.querySelectorAll<HTMLElement>(".studio-pill, .button, .studio-menu-button").forEach((button) => {
          const x = gsap.quickTo(button, "x", { duration: 0.5, ease: "power3.out" });
          const y = gsap.quickTo(button, "y", { duration: 0.5, ease: "power3.out" });
          const move = (event: PointerEvent) => {
            const bounds = button.getBoundingClientRect();
            x((event.clientX - bounds.left - bounds.width / 2) * 0.16);
            y((event.clientY - bounds.top - bounds.height / 2) * 0.2);
          };
          const leave = () => { x(0); y(0); };
          button.addEventListener("pointermove", move);
          button.addEventListener("pointerleave", leave);
          button.addEventListener("blur", leave);
          listeners.push(() => {
            button.removeEventListener("pointermove", move);
            button.removeEventListener("pointerleave", leave);
            button.removeEventListener("blur", leave);
          });
        });

        refresh();
        return () => {
          listeners.forEach((dispose) => dispose());
          splits.forEach((split) => split.revert());
          document.documentElement.classList.remove("motion-enhanced");
        };
      });
      refresh();
    };

    void document.fonts.ready.then(initialize);
    const images = [...main.querySelectorAll("img")];
    images.forEach((image) => image.addEventListener("load", refresh));
    return () => {
      cancelled = true;
      cancelAnimationFrame(refreshFrame);
      images.forEach((image) => image.removeEventListener("load", refresh));
      media?.revert();
    };
  }, [pathname, lenis, preference]);

  return <div className="motion-progress" aria-hidden="true"><div ref={progressRef} /></div>;
}
