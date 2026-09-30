"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heightAnimation = useRef<Animation | null>(null);
  const contentAnimation = useRef<Animation | null>(null);

  useEffect(() => () => {
    heightAnimation.current?.cancel();
    contentAnimation.current?.cancel();
  }, []);

  const toggle = (event: MouseEvent<HTMLElement>) => {
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;
    event.preventDefault();

    // Read the current frame before cancelling, so rapid taps reverse smoothly.
    const expanding = !(details.dataset.expanded === "true" ||
      (details.dataset.expanded === undefined && details.open));
    const wasOpen = details.open;
    const startHeight = details.getBoundingClientRect().height;
    const contentStyle = getComputedStyle(content);
    const startOpacity = wasOpen ? contentStyle.opacity : "0";
    const startTransform = wasOpen ? contentStyle.transform : "translateY(8px)";
    heightAnimation.current?.cancel();
    contentAnimation.current?.cancel();
    heightAnimation.current = null;
    contentAnimation.current = null;
    details.dataset.expanded = String(expanding);

    const preference = document.documentElement.dataset.motion;
    const reduced = preference === "reduced" ||
      (preference !== "full" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (reduced || typeof details.animate !== "function") {
      details.open = expanding;
      details.style.height = "";
      details.style.overflow = "";
      return;
    }

    // Keep native details semantics; defer closing until its height has collapsed.
    details.open = true;
    details.style.height = "auto";
    const fullHeight = details.getBoundingClientRect().height;
    const style = getComputedStyle(details);
    const collapsedHeight = event.currentTarget.getBoundingClientRect().height +
      parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    details.style.height = `${startHeight}px`;
    details.style.overflow = "hidden";

    const easing = "cubic-bezier(.42, 0, .58, 1)";
    const animation = details.animate(
      [{ height: `${startHeight}px` }, { height: `${expanding ? fullHeight : collapsedHeight}px` }],
      { duration: 380, easing },
    );
    heightAnimation.current = animation;
    contentAnimation.current = content.animate(
      [{ opacity: startOpacity, transform: startTransform },
        { opacity: expanding ? 1 : 0, transform: expanding ? "translateY(0)" : "translateY(-6px)" }],
      { duration: 280, easing, fill: "both" },
    );
    animation.onfinish = () => {
      if (heightAnimation.current !== animation) return;
      details.open = expanding;
      details.style.height = "";
      details.style.overflow = "";
      heightAnimation.current = null;
      contentAnimation.current?.cancel();
      contentAnimation.current = null;
    };
  };

  return (
    <details ref={detailsRef}>
      <summary onClick={toggle}>
        {question}
        <span className="faq-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" focusable="false">
            <path d="M5 10H15" />
            <path className="faq-toggle-vertical" d="M10 5V15" />
          </svg>
        </span>
      </summary>
      <div className="faq-answer" ref={contentRef}><p>{answer}</p></div>
    </details>
  );
}

export function FaqAccordion({ items }: { items: ReadonlyArray<readonly [string, string]> }) {
  return <div className="faq-list">{items.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}</div>;
}
