import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { PageIntro } from "@/app/components/PageIntro";
import { educationPillars } from "@/app/data/education";
import { SpecialTracks } from "@/app/components/SpecialTracks";

export const metadata: Metadata = {
  title: "Pendidikan, RBL & Desain Cita-Cita",
  description: "Pendidikan SMP dan SMA Jagat ‘Arsy memadukan pembinaan adab, Research-Based Learning, dan Desain Cita-Cita untuk mendampingi pilihan belajar santri.",
};

const researchSteps = [
  ["Pertanyaan yang jelas", "Santri berlatih mengamati persoalan, membaca bahan rujukan, dan merumuskan pertanyaan yang dapat diteliti."],
  ["Data yang dapat dijelaskan", "Informasi dikumpulkan dan diolah untuk menyusun laporan. Ketelitian serta kejujuran menjadi bagian dari proses belajar."],
  ["Temuan yang disampaikan", "Santri mempresentasikan penelitian, mendengarkan pertanyaan, dan belajar mempertanggungjawabkan kesimpulannya."],
];

export default function PendidikanPage() {
  return (
    <>
      <PageIntro title={<>Mendalami ilmu.<br /><em>Membiasakan adab.</em></>} description="Pelajaran di kelas, pembinaan spiritual, penelitian, dan kehidupan asrama saling melengkapi. Santri dibimbing untuk berpikir dengan teliti, bertindak dengan tanggung jawab, dan menyiapkan pilihan studinya." cta="Bertanya tentang pendidikan" ctaHref="/admissions#campus-visit" />
      <section className="education-model section wrap" id="model">
        <div className="education-model-heading"><h2>Lima nilai dalam<br /><em>pendidikan santri.</em></h2><p>Nilai pendidikan dipelajari dalam keseharian: saat beribadah, membaca, mengerjakan penelitian, berdiskusi dengan guru, dan hidup bersama teman.</p></div>
        <div className="education-pillars">{educationPillars.map((pillar) => <article key={pillar.number}><FeatureIcon name={pillar.icon} /><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></article>)}</div>
      </section>
      <section className="program-feature" id="rbl">
        <div className="program-photo"><Image src="/images/rbl-santri.jpg" alt="Santri SMP mempresentasikan penelitian dalam kegiatan Research-Based Learning" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="program-copy"><h2>Belajar meneliti<br /><em>sejak SMP.</em></h2><p>Research-Based Learning (RBL) memperkenalkan santri pada proses penelitian: merumuskan pertanyaan, mencari dan mengolah data, menulis laporan, lalu mempresentasikan hasilnya.</p><p>Meneliti juga merupakan latihan sikap. Santri belajar tekun membaca, jujur terhadap data, dan terbuka terhadap pertanyaan maupun masukan dari orang lain.</p><Link className="text-link text-link-light" href="/cerita/research-based-learning">Baca kegiatan riset santri <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="section wrap rbl-process" aria-labelledby="rbl-process-title">
        <div className="section-heading"><h2 id="rbl-process-title">Dari pertanyaan<br /><em>hingga pemaparan.</em></h2></div>
        <div className="process-grid">{researchSteps.map(([title, text], index) => <article key={title}><FeatureIcon name={(["flask", "book", "message"] as const)[index]} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="career-section section wrap" id="cita-cita">
        <div className="career-copy"><p className="section-context">Desain Cita-Cita</p><h2>Mengenali diri.<br /><em>Menimbang pilihan studi.</em></h2><p>Desain Cita-Cita mendampingi santri untuk mengenali minat dan kemampuannya. Pembahasannya mencakup pengelolaan waktu, komunikasi, kerja sama, pemecahan masalah, serta perencanaan pendidikan.</p><p>Pada jenjang SMP, perhatian diberikan pada pembentukan remaja yang positif dan produktif. Pada jenjang SMA, santri menimbang jurusan, perguruan tinggi, dan profesi, dengan melibatkan harapan serta pertimbangan keluarga.</p><Link className="text-link" href="/outcomes">Lihat tujuan studi alumni <span aria-hidden="true">↗</span></Link></div>
        <div className="career-aside"><span className="career-quote" aria-hidden="true">“</span><blockquote>Pilihan studi perlu mempertimbangkan minat, kemampuan, dan manfaat yang ingin diberikan kepada masyarakat.</blockquote><span className="career-quote-caption">DASAR PENDAMPINGAN DESAIN CITA-CITA</span></div>
      </section>
      <section className="special-tracks-section wrap" id="kelas-khusus" aria-labelledby="education-tracks-title">
        <div className="special-tracks-heading">
          <h2 id="education-tracks-title">Mendalami minat.<br /><em>Belajar memberi manfaat.</em></h2>
          <p>Tiga kelas peminatan mempertemukan minat berkarya, kemandirian usaha, dan pendalaman khazanah Islam. Kenali arah pembelajaran dan contoh latihan pada setiap kelas.</p>
        </div>
        <SpecialTracks />
      </section>
      <section className="level-section" id="smp">
        <div className="wrap level-grid">
          <article className="level-card"><span className="level-index">01 / SMP</span><h2>Membangun kebiasaan<br /><em>belajar dan mandiri.</em></h2><p>Pendidikan pada usia SMP membiasakan adab, keteraturan belajar, dan tanggung jawab sehari-hari. Penelitian dan kegiatan bersama membantu santri belajar bertanya serta menyampaikan pendapat.</p><Link className="text-link" href="/admissions">Informasi pendaftaran SMP <span aria-hidden="true">↗</span></Link></article>
          <article className="level-card level-card-dark" id="sma"><span className="level-index">02 / SMA</span><h2>Mendalami minat.<br /><em>Menyiapkan studi lanjut.</em></h2><p>Pada jenjang SMA, santri melanjutkan pembinaan adab dan akademik, mengembangkan karya, serta mempersiapkan pilihan jurusan dan perguruan tinggi melalui Desain Cita-Cita.</p><Link className="text-link text-link-light" href="/admissions">Informasi pendaftaran SMA <span aria-hidden="true">↗</span></Link></article>
        </div>
      </section>
      <section className="mini-cta wrap"><div><h2>Mari membicarakan<br /><em>pendidikan ananda.</em></h2></div><Link className="button" href="/admissions#campus-visit">Jadwalkan kunjungan <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
