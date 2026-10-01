import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import "./studio.css";
import "./motion.css";
import "./theme.css";
import "./hero.css";
import "./home-art.css";
import "./content.css";
import "./special-tracks.css";
import "./brand.css";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { AnalyticsBridge } from "@/app/components/AnalyticsBridge";
import { MotionObserver } from "@/app/components/MotionObserver";
import { SmoothScrolling } from "@/app/components/SmoothScrolling";
import { FloatingScrollbar } from "@/app/components/FloatingScrollbar";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Pesantren Peradaban Dunia Jagat ‘Arsy | Islamic Boarding School SMP-SMA BSD",
    template: "%s | Jagat ‘Arsy",
  },
  description:
    "Islamic boarding school SMP dan SMA di BSD, Tangerang Selatan. Pembinaan adab, Research-Based Learning, dan Desain Cita-Cita mendampingi pendidikan santri.",
  metadataBase: new URL("https://jagatarsy.sch.id"),
  openGraph: {
    title: "Pesantren Peradaban Dunia JAGAT ‘ARSY",
    description:
      "Mendidik jiwa. Menajamkan nalar. Menyiapkan masa depan.",
    locale: "id_ID",
    type: "website",
    images: ["/images/rbl-santri.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${anton.variable} ${interTight.variable}`}>
        <a className="skip-link" href="#konten">
          Lewati ke konten utama
        </a>
        <SmoothScrolling>
          <SiteHeader />
          <AnalyticsBridge />
          <MotionObserver />
          <FloatingScrollbar />
          <main id="konten" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </SmoothScrolling>
      </body>
    </html>
  );
}
