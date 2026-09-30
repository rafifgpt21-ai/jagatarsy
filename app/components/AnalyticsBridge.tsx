"use client";

import { useEffect } from "react";

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (command: "event", name: string, parameters?: Record<string, unknown>) => void;
};

export function AnalyticsBridge() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLElement>("[data-analytics-event]");
      const eventName = link?.dataset.analyticsEvent;
      if (!link || !eventName) return;

      const details = { event: eventName, link_url: link.getAttribute("href") ?? "" };
      window.dispatchEvent(new CustomEvent("jagat:conversion", { detail: details }));

      const trackingWindow = window as TrackingWindow;
      trackingWindow.dataLayer?.push(details);
      trackingWindow.gtag?.("event", eventName, { link_url: details.link_url });
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
