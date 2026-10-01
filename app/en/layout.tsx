import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jagat Arsy World Civilisation Islamic Boarding School",
    description: "Educating the soul. Sharpening the mind. Preparing for the future.",
    images: ["/images/rbl-santri.jpg"],
  },
};

export default function EnglishSiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="en" className="site-language-en">
      <a className="skip-link" href="#konten">Skip to main content</a>
      <SiteHeader locale="en" />
      <main id="konten" tabIndex={-1}>{children}</main>
      <SiteFooter locale="en" />
    </div>
  );
}
