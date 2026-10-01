import Link from "next/link";
import { MotionToggle } from "./MotionSettings";
import { SmoothAnchor } from "./SmoothAnchor";
import { ThemeIcon } from "./ThemeIcon";
import { BrandLogo } from "./BrandLogo";
import type { Locale } from "@/app/lib/i18n";

const footerLinks = {
  id: [
    ["Tentang", "/tentang"],
    ["Pendidikan", "/pendidikan"],
    ["Kelas Peminatan", "/kelas-khusus"],
    ["Kehidupan Santri", "/kehidupan-santri"],
    ["Alumni & Karya", "/outcomes"],
    ["Kabar Pesantren", "/cerita"],
    ["Pendaftaran", "/admissions"],
  ],
  en: [
    ["About", "/en/about"],
    ["Education", "/en/education"],
    ["Special Tracks", "/en/special-tracks"],
    ["Student Life", "/en/student-life"],
    ["Alumni & Student Work", "/en/outcomes"],
    ["Stories", "/en/stories"],
    ["Admissions", "/en/admissions"],
  ],
} as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";
  return (
    <footer className="studio-footer">
      <div className="studio-container">
        <div className="studio-footer-top">
          <div className="studio-footer-brand">
            <Link href={isEnglish ? "/en" : "/"} className="footer-brand-link" aria-label={isEnglish ? "Jagat ’Arsy, return to home" : "Jagat ’Arsy, kembali ke beranda"}>
              <BrandLogo tone="white" size={88} alt="" />
            </Link>
            <div>
              <p className="studio-footer-label">{isEnglish ? "World Civilisation Islamic Boarding School" : "Pesantren Peradaban Dunia"}</p>
              <p>{isEnglish ? <>Educating the soul. Sharpening the mind.<br />Preparing for the future.</> : <>Mendidik jiwa. Menajamkan nalar.<br />Menyiapkan masa depan.</>}</p>
            </div>
          </div>
          <div className="studio-footer-links">
            {footerLinks[locale].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
          <div className="studio-footer-contact">
            <a href="mailto:info@jagatarsy.sch.id"><ThemeIcon name="mail" />info@jagatarsy.sch.id</a>
            <a href="https://wa.me/628111543738" target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click"><ThemeIcon name="phone" />081-1154-3738 ↗</a>
            <p><ThemeIcon name="map" /><span>Jalan Yapen Raya No. 21,<br />Nusaloka BSD, Serpong,<br />{isEnglish ? "South Tangerang." : "Tangerang Selatan."}</span></p>
          </div>
        </div>
        <div className="studio-footer-wordmark" aria-hidden="true">JAGAT ’ARSY</div>
        <div className="studio-footer-bottom">
          <span>© {new Date().getFullYear()} JAGAT ’ARSY</span>
          <span>{isEnglish ? "JUNIOR HIGH · SENIOR HIGH · BOARDING SCHOOL" : "SMP · SMA · PESANTREN BERASRAMA"}</span>
          <MotionToggle locale={locale} />
          <SmoothAnchor href="#konten">{isEnglish ? "BACK TO TOP ↑" : "KEMBALI KE ATAS ↑"}</SmoothAnchor>
        </div>
      </div>
    </footer>
  );
}
