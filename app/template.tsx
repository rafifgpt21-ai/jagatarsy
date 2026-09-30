import type { ReactNode } from "react";

// Remount each page so text masks never interfere with React's reconciliation.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="motion-page">{children}</div>;
}
