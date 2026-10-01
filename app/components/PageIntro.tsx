import Link from "next/link";
import type { ReactNode } from "react";

type PageIntroProps = {
  meta?: string;
  title: ReactNode;
  description: string;
  cta?: string;
  ctaHref?: string;
};

export function PageIntro({ meta, title, description, cta, ctaHref }: PageIntroProps) {
  const isExternal = ctaHref?.startsWith("http");
  return (
    <section className="page-intro wrap">
      <h1>{title}</h1>
      {meta ? <p className="page-intro-meta">{meta}</p> : null}
      <div className="page-intro-bottom">
        <p>{description}</p>
        {cta && ctaHref ? isExternal ? <a className="text-link" href={ctaHref} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">{cta}<span aria-hidden="true">↗</span></a> : <Link className="text-link" href={ctaHref}>{cta}<span aria-hidden="true">↗</span></Link> : null}
      </div>
    </section>
  );
}
