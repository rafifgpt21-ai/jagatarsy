import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { PageIntro } from "@/app/components/PageIntro";

export const metadata: Metadata = {
  title: "Kehidupan Santri & Asrama",
  description: "Mengenal ibadah, belajar, organisasi santri, kegiatan kreatif, serta kehidupan berasrama di Pesantren Peradaban Dunia Jagat ‘Arsy.",
};

const experiences = [
  ["Ibadah dan adab", "Salat berjamaah, pembacaan Al-Qur’an, dan kegiatan kajian menjadi kesempatan untuk membiasakan ibadah serta menghormati guru dan sesama."],
  ["Tanggung jawab bersama", "Menjaga kebersihan, merawat barang pribadi, dan menjalankan amanah organisasi mengajarkan kemandirian serta kepedulian terhadap teman."],
  ["Minat dan kegiatan santri", "Tulisan, presentasi, seni, dan kegiatan yang dikelola santri memberi kesempatan untuk berlatih tampil, bekerja sama, dan menyampaikan gagasan."],
];

export default function KehidupanSantriPage() {
  return (
    <>
      <PageIntro title={<>Mengaji, belajar,<br /><em>dan hidup bersama.</em></>} description="Menjadi santri berarti belajar di kelas sekaligus menjalani kehidupan pesantren. Ibadah, pertemanan, kegiatan bersama, dan tanggung jawab sehari-hari menjadi bagian dari pendidikan." cta="Jadwalkan kunjungan pesantren" ctaHref="/admissions#campus-visit" />
      <section className="life-editorial section wrap" id="boarding">
        <div className="life-editorial-photo"><Image src="/images/student-campus.jpg" alt="Bangunan sekolah dan ruang terbuka di Pesantren Jagat ‘Arsy" fill sizes="(max-width: 760px) 100vw, 58vw" /></div>
        <div className="life-editorial-note"><h2>Kemandirian dimulai<br /><em>dari keseharian.</em></h2><p>Merawat barang pribadi, menjaga kamar, dan berbagi tugas dengan teman merupakan latihan tanggung jawab. Kebiasaan sederhana tersebut menjadi bekal untuk belajar mengatur diri dan menghargai orang lain.</p><p>Calon santri dan keluarga dapat mengenal suasana asrama, kegiatan, serta tata tertib melalui kunjungan dan percakapan dengan pihak pesantren.</p><Link className="text-link" href="/admissions#campus-visit">Kenali kehidupan asrama <span aria-hidden="true">↗</span></Link><span className="editorial-note-mark">J·A</span></div>
      </section>
      <section className="experience-section">
        <div className="wrap"><div className="section-heading section-heading-split"><div><h2>Adab dipelajari<br /><em>dalam kebersamaan.</em></h2></div><p className="heading-aside heading-aside-narrow">Kehidupan pesantren mempertemukan kegiatan ibadah, pelajaran, dan pengalaman mengurus diri serta bekerja bersama.</p></div><div className="experience-grid">{experiences.map(([title, text], index) => <article key={title}><FeatureIcon name={(["book", "leaf", "palette"] as const)[index]} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>
      <section className="section wrap santri-activities" id="kegiatan">
        <div><p className="section-context">Kegiatan santri</p><h2>Berlatih memimpin.<br /><em>Belajar menghargai.</em></h2></div>
        <div><p>Jagat ‘Arsy Student Cabinet (JASCA) memberi kesempatan kepada santri untuk mengelola kegiatan bersama. Dalam dokumentasi pesantren, kegiatan Saturday Night atau Satnight memuat pertunjukan seni, bazar, drama, dan acara yang disusun oleh santri.</p><p>Presentasi di kelas, muhadharah, dan tugas dalam kegiatan ibadah juga menjadi latihan berbicara serta menjalankan amanah. Pramuka, paskibra, pencak silat, dan paduan suara tercantum di antara kegiatan ekstrakurikuler pesantren.</p><Link className="text-link" href="/cerita">Baca kabar dan kegiatan santri <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="campus-gallery section wrap" id="kampus">
        <div className="campus-gallery-copy"><h2>Membaca, berdiskusi,<br /><em>dan berlatih.</em></h2><p>Perpustakaan dan laboratorium komputer mendukung kegiatan belajar santri. Saat berkunjung, keluarga dapat melihat lingkungan sekolah serta menanyakan penggunaan fasilitas dan kegiatan yang berlangsung di dalamnya.</p><Link className="button" href="/admissions#campus-visit">Jadwalkan kunjungan <span aria-hidden="true">↗</span></Link></div>
        <div className="campus-gallery-images"><figure><Image src="/images/library.jpg" alt="Santri membaca di perpustakaan Pesantren Jagat ‘Arsy" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Perpustakaan</figcaption></figure><figure><Image src="/images/computer-lab.jpg" alt="Laboratorium komputer Pesantren Jagat ‘Arsy" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Laboratorium komputer</figcaption></figure></div>
      </section>
      <section className="mini-cta wrap"><div><h2>Bapak dan Ibu<br /><em>dapat bertanya langsung.</em></h2></div><Link className="text-link" href="/admissions#faq">Pertanyaan tentang asrama <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
