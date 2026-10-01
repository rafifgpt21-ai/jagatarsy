import type { Metadata } from "next";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { PageIntro } from "@/app/components/PageIntro";
import { FaqAccordion } from "@/app/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pendaftaran Santri Baru SMP & SMA",
  description: "Tahapan pendaftaran, persiapan dokumen, pertanyaan biaya pendidikan, dan kunjungan Pesantren Peradaban Dunia Jagat ‘Arsy di BSD.",
};

const registrationContact = `https://wa.me/628111543738?text=${encodeURIComponent("Assalamu’alaikum, saya ingin memperoleh informasi pendaftaran SMP/SMA Jagat ‘Arsy untuk tahun ajaran yang sedang menerima pendaftar. Mohon informasi jadwal, persyaratan, dan rincian biaya pendidikan.")}`;
const visitContact = `https://wa.me/628111543738?text=${encodeURIComponent("Assalamu’alaikum, saya ingin menjadwalkan kunjungan ke Pesantren Jagat ‘Arsy bersama keluarga. Mohon informasi waktu kunjungan yang tersedia.")}`;

const steps = [
  ["01", "Pastikan informasi pendaftaran", "Pilih jenjang SMP atau SMA, lalu pastikan tahun ajaran, jadwal, dan ketersediaan tempat kepada panitia PPDB."],
  ["02", "Isi formulir dan siapkan berkas", "Lengkapi data calon santri serta orang tua sesuai dokumen. Panitia akan memberikan petunjuk formulir dan kelengkapan berkas."],
  ["03", "Ikuti seleksi sesuai jadwal", "Seleksi yang dijelaskan dalam panduan pesantren meliputi tes akademik, observasi karakter, dan wawancara."],
  ["04", "Terima hasil dan daftar ulang", "Hasil seleksi disampaikan melalui saluran resmi. Calon santri yang diterima mengikuti petunjuk dan jadwal daftar ulang."],
];

const information = [
  ["Jadwal pendaftaran", "Pastikan tahun ajaran, batas pengumpulan berkas, tanggal seleksi, dan jadwal daftar ulang yang berlaku untuk jenjang pilihan ananda."],
  ["Rincian biaya pendidikan", "Mintalah rincian tertulis biaya pendaftaran, pendidikan, asrama, serta kebutuhan lain dan jadwal pembayarannya sebelum mengambil keputusan."],
  ["Informasi beasiswa", "Tanyakan ketersediaan beasiswa untuk periode pendaftaran yang dituju, beserta persyaratan, cakupan bantuan, dan proses pengajuannya."],
];

const questions = [
  ["Jenjang apa saja yang diselenggarakan?", "Jagat ‘Arsy menyelenggarakan pendidikan SMP dan SMA dalam lingkungan pesantren berasrama di BSD, Tangerang Selatan."],
  ["Bagaimana memulai pendaftaran?", "Hubungi panitia PPDB untuk memastikan periode dan jenjang pendaftaran. Selanjutnya, ikuti petunjuk pengisian formulir serta pengumpulan berkas yang diberikan panitia."],
  ["Dokumen apa yang perlu dipersiapkan?", "Siapkan kartu keluarga, akta kelahiran, rapor atau surat keterangan nilai terakhir, serta pas foto. Dokumen kelulusan dan berkas tambahan mengikuti ketentuan jenjang serta petunjuk panitia."],
  ["Apa saja tahapan seleksinya?", "Panduan pendaftaran pesantren menjelaskan tes akademik, observasi karakter, dan wawancara. Jadwal serta ketentuan pelaksanaannya disampaikan oleh panitia kepada pendaftar."],
  ["Berapa biaya pendidikan dan apakah ada beasiswa?", "Nominal biaya dan ketentuan beasiswa belum ditampilkan pada halaman ini. Mintalah rincian tertulis kepada panitia untuk periode pendaftaran yang dituju, termasuk biaya yang dicakup dan jadwal pembayaran."],
  ["Apa yang dimaksud dengan RBL?", "Research-Based Learning adalah pembelajaran berbasis penelitian. Santri belajar merumuskan pertanyaan, mengumpulkan dan mengolah informasi, menulis laporan, lalu mempresentasikan hasilnya."],
  ["Bagaimana santri dibantu memilih studi lanjut?", "Melalui Desain Cita-Cita, santri SMA mendiskusikan minat, kemampuan, jurusan, perguruan tinggi, dan profesi. Pertimbangan keluarga menjadi bagian dari proses tersebut."],
  ["Bagaimana aturan komunikasi dan kunjungan keluarga?", "Jadwal komunikasi, penggunaan gawai, kunjungan wali santri, serta izin keluar perlu dibicarakan dengan pihak pesantren. Mintalah penjelasan tata tertib yang berlaku saat kunjungan atau sebelum pendaftaran."],
  ["Bagaimana mengetahui pengasuhan dan layanan kesehatan?", "Saat mengenal pesantren, keluarga dapat meminta penjelasan tentang pendamping asrama, penanganan santri yang sakit, kebutuhan kesehatan khusus, dan saluran penyampaian keluhan. Sampaikan kondisi ananda agar kebutuhan pendampingannya dapat dibicarakan sejak awal."],
  ["Apakah calon santri dapat ikut berkunjung?", "Keluarga dapat menghubungi panitia untuk mengajukan kunjungan bersama ananda. Konfirmasikan waktu, jumlah pengunjung, dan kesempatan melihat sekolah serta asrama sebelum datang."],
] as const;

export default function AdmissionsPage() {
  return (
    <>
      <PageIntro title={<>Pendaftaran<br /><em>santri baru.</em></>} description="Memilih pesantren memerlukan pertimbangan bersama keluarga. Pelajari tahapan pendaftaran, siapkan pertanyaan tentang pendidikan dan asrama, lalu bicarakan kebutuhan ananda dengan panitia PPDB." cta="Hubungi panitia PPDB" ctaHref={registrationContact} />
      <section className="admissions-open wrap">
        <div className="admissions-open-copy"><h2>Informasi SMP dan SMA<br /><em>untuk keluarga.</em></h2><p>Panitia PPDB dapat memberikan keterangan tahun ajaran, jadwal seleksi, persyaratan, dan biaya pendidikan. Bapak dan Ibu dipersilakan menanyakan hal yang diperlukan untuk mempersiapkan ananda menjadi santri.</p><a className="button button-cream" href={registrationContact} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">Minta informasi pendaftaran <span aria-hidden="true">↗</span></a></div>
        <div className="admissions-open-aside"><span className="admissions-aside-note">SMP & SMA<br />Pesantren berasrama<br />BSD · Tangerang Selatan</span></div>
      </section>
      <section className="process-section section wrap" id="proses">
        <div className="section-heading section-heading-split"><div><h2>Tahapan pendaftaran<br /><em>calon santri.</em></h2></div><p className="heading-aside heading-aside-narrow">Panitia mendampingi pendaftar mulai dari kelengkapan data, seleksi, hingga petunjuk daftar ulang.</p></div>
        <div className="process-grid">{steps.map(([number, title, text], index) => <article key={number}><FeatureIcon name={(["message", "clipboard", "compass", "check"] as const)[index]} /><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="requirements-section" id="persyaratan">
        <div className="wrap requirements-grid"><div><h2>Persiapkan berkas<br /><em>calon santri.</em></h2><p>Gunakan data yang sesuai dengan dokumen resmi. Kelengkapan akhir mengikuti jenjang, tahap pendaftaran, dan petunjuk panitia PPDB.</p></div><div className="requirements-card"><span className="requirements-card-title">Berkas untuk dipersiapkan</span><ul><li>Kartu keluarga dan akta kelahiran</li><li>Rapor atau surat keterangan nilai semester terakhir</li><li>Pas foto terbaru</li><li>Ijazah atau surat kelulusan sesuai jenjang, bila sudah terbit</li><li>Berkas tambahan sesuai petunjuk panitia</li></ul><a className="text-link text-link-light" href={registrationContact} target="_blank" rel="noreferrer">Konfirmasikan kelengkapan berkas <span aria-hidden="true">↗</span></a></div></div>
      </section>
      <section className="section wrap registration-information" id="biaya">
        <div className="section-heading"><h2>Jadwal, biaya,<br /><em>dan persiapan keluarga.</em></h2></div>
        <p className="registration-information-note">Tanggal dan nominal biaya belum dicantumkan di halaman ini. Pastikan informasi untuk periode pendaftaran yang dituju melalui panitia PPDB.</p>
        <div className="process-grid">{information.map(([title, text], index) => <article key={title}><FeatureIcon name={(["clipboard", "book", "graduation"] as const)[index]} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="visit-section section wrap" id="campus-visit">
        <div className="visit-card"><h2>Mari berkunjung<br /><em>bersama ananda.</em></h2><p>Kenali lingkungan sekolah dan asrama, serta bicarakan pendidikan, kegiatan santri, dan tata tertib dengan pihak pesantren. Kunjungan dapat membantu keluarga mempersiapkan pilihan dengan lebih tenang.</p><a className="button" href={visitContact} target="_blank" rel="noreferrer" data-analytics-event="campus_visit_booking">Jadwalkan kunjungan pesantren <span aria-hidden="true">↗</span></a></div>
        <div className="visit-info"><span className="visit-info-label">ALAMAT PESANTREN</span><p>Komplek Nusaloka BSD, Sektor 14-6, Jalan Yapen Raya No. 21, Rawa Mekar Jaya, Serpong, Tangerang Selatan.</p><span className="visit-info-label">PANITIA PPDB</span><a href="tel:+628111543738">081-1154-3738</a><a href="mailto:info@jagatarsy.sch.id">info@jagatarsy.sch.id</a></div>
      </section>
      <section className="faq-section" id="faq">
        <div className="wrap faq-grid"><div><h2>Pertanyaan<br /><em>orang tua dan calon santri.</em></h2><p>Berikut penjelasan awal tentang pendidikan dan pendaftaran. Ketentuan administrasi serta tata tertib dapat dibicarakan langsung dengan pihak pesantren.</p></div><FaqAccordion items={questions} /></div>
      </section>
      <section className="mini-cta wrap"><div><h2>Ada yang ingin<br /><em>Bapak dan Ibu tanyakan?</em></h2></div><a className="text-link" href={registrationContact} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">Hubungi panitia PPDB <span aria-hidden="true">↗</span></a></section>
    </>
  );
}
