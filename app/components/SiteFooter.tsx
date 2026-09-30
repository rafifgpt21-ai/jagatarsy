import Link from "next/link";
import { MotionToggle } from "./MotionSettings";
import { SmoothAnchor } from "./SmoothAnchor";
import { ThemeIcon } from "./ThemeIcon";

export function SiteFooter() {
  return (
    <footer className="studio-footer">
      <div className="studio-container">
        <div className="studio-footer-top">
          <div>
            <p className="studio-footer-label">Pesantren Peradaban Dunia</p>
            <p>Mendidik jiwa. Menajamkan nalar.<br />Menyiapkan masa depan.</p>
          </div>
          <div className="studio-footer-links">
            <Link href="/tentang">Tentang</Link>
            <Link href="/pendidikan">Pendidikan</Link>
            <Link href="/kelas-khusus">Kelas Peminatan</Link>
            <Link href="/kehidupan-santri">Kehidupan Santri</Link>
            <Link href="/outcomes">Alumni & Karya</Link>
            <Link href="/cerita">Kabar Pesantren</Link>
            <Link href="/admissions">Pendaftaran</Link>
          </div>
          <div className="studio-footer-contact">
            <a href="mailto:info@jagatarsy.sch.id"><ThemeIcon name="mail" />info@jagatarsy.sch.id</a>
            <a href="https://wa.me/628111543738" target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click"><ThemeIcon name="phone" />081-1154-3738 ↗</a>
            <p><ThemeIcon name="map" /><span>Jalan Yapen Raya No. 21,<br />Nusaloka BSD, Serpong,<br />Tangerang Selatan.</span></p>
          </div>
        </div>
        <div className="studio-footer-wordmark" aria-hidden="true">JAGAT ‘ARSY</div>
        <div className="studio-footer-bottom">
          <span>© {new Date().getFullYear()} JAGAT ‘ARSY</span>
          <span>SMP · SMA · PESANTREN BERASRAMA</span>
          <MotionToggle />
          <SmoothAnchor href="#konten">KEMBALI KE ATAS ↑</SmoothAnchor>
        </div>
      </div>
    </footer>
  );
}
