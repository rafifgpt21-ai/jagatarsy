import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/app/components/PageIntro";
import { alumniDestinations } from "@/app/data/education";

export const metadata: Metadata = {
  title: "Alumni & Karya Santri",
  description: "Tujuan studi alumni angkatan 2025 serta karya riset dan literasi santri Pesantren Peradaban Dunia Jagat ‘Arsy.",
};

export default function OutcomesPage() {
  return (
    <>
      <PageIntro title={<>Melanjutkan studi.<br /><em>Membawa bekal pesantren.</em></>} description="Pendidikan di pesantren menjadi bagian dari perjalanan panjang santri. Halaman ini memuat beberapa tujuan studi alumni angkatan 2025 dan contoh karya yang dihasilkan selama belajar di Jagat ‘Arsy." cta="Pelajari Desain Cita-Cita" ctaHref="/pendidikan#cita-cita" />
      <section className="destination-page section wrap" id="tujuan-studi">
        <div className="destination-page-intro"><p className="section-context">Catatan alumni angkatan 2025</p><h2>Dari Jagat ‘Arsy<br /><em>ke perguruan tinggi.</em></h2><p>Data alumni yang dipublikasikan pesantren mencatat kelanjutan studi di perguruan tinggi Indonesia dan luar negeri. Berikut sebagian nama kampus dalam catatan tersebut.</p><a className="text-link" href="https://jagatarsy.sch.id/alumni-page/" target="_blank" rel="noreferrer">Lihat catatan alumni pesantren <span aria-hidden="true">↗</span></a></div>
        <div className="destination-page-list">{alumniDestinations.map((name, index) => <div className="destination-row" key={name}><span>0{index + 1}</span><strong>{name}</strong><span aria-hidden="true">↗</span></div>)}</div>
      </section>
      <section className="alumni-feature" id="cerita">
        <div className="alumni-visual"><Image src="/images/alumni.jpg" alt="Dua alumni Jagat ‘Arsy membaca bersama" fill sizes="(max-width: 760px) 100vw, 45vw" /></div>
        <div className="alumni-copy"><h2>Silaturahmi tetap<br /><em>terjaga setelah lulus.</em></h2><p>Pada 18 Oktober 2025, kegiatan 3 Rasa 1 Cinta Jilid 5 mempertemukan alumni dan keluarga pesantren. Pertemuan tersebut menjadi kesempatan untuk menyambung silaturahmi dan berbagi kabar.</p><Link className="text-link text-link-light" href="/cerita/3-rasa-1-cinta">Baca kegiatan silaturahmi alumni <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="student-work section wrap" id="karya">
        <div className="student-work-heading"><h2>Meneliti dan menulis.<br /><em>Belajar menyampaikan ilmu.</em></h2><p>Santri kelas 9 SMP mempresentasikan penelitian dalam kegiatan RBL. Santri kelas 8 juga menyusun antologi “Guruku; Kisahmu Inspirasiku” untuk memperingati Hari Guru Nasional 2025.</p><p>Karya-karya tersebut memperlihatkan kegiatan belajar: membaca, menyusun gagasan, menulis, dan menyampaikan hasilnya kepada orang lain.</p><Link className="text-link" href="/cerita/antologi-guru">Baca tentang antologi santri <span aria-hidden="true">↗</span></Link></div>
        <Link className="work-image" href="/cerita/antologi-guru"><Image src="/images/antologi-cover.jpg" alt="Sampul antologi Guruku; Kisahmu Inspirasiku karya santri kelas 8" fill sizes="(max-width: 760px) 100vw, 57vw" /><span className="work-image-label">Antologi santri kelas 8 · 2025 <b aria-hidden="true">↗</b></span></Link>
      </section>
      <section className="mini-cta wrap"><div><h2>Kenali bagaimana<br /><em>santri belajar.</em></h2></div><Link className="button" href="/pendidikan#rbl">Pelajari RBL <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
