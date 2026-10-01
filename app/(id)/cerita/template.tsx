import type { ReactNode } from "react";

export default function StoryTemplate({ children }: { children: ReactNode }) {
  return <div className="motion-story-page">{children}</div>;
}
