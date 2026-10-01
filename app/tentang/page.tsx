import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/app/components/PageIntro";
import { BrandLogo } from "@/app/components/BrandLogo";

export const metadata: Metadata = {
  title: "Tentang Pesantren",
  description: "Falsafah pendidikan Pesantren Peradaban Dunia Jagat ‘Arsy: adab, tradisi keilmuan Islam, riset, kemandirian, dan kepedulian kepada sesama.",
};

export default function TentangPage() {
  return (
    <>
      <PageIntro title={<>Berilmu, beradab,<br /><em>bermanfaat.</em></>} description="Pesantren Peradaban Dunia Jagat ‘Arsy menyelenggarakan pendidikan SMP dan SMA berasrama. Kami mendampingi santri untuk mendalami ilmu, menjaga adab, dan belajar mengambil tanggung jawab dalam kehidupan." cta="Pelajari pendidikan kami" ctaHref="/pendidikan" />
      <section className="about-feature section wrap" id="filosofi">
        <div className="about-image"><Image src="/images/school-mark.webp" alt="Area hijau dan gerbang di lingkungan Pesantren Jagat ‘Arsy" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className="about-copy">
          <BrandLogo className="about-brand-logo" size={96} alt="" />
          <h2>Ilmu sebagai bekal.<br /><em>Adab sebagai tuntunan.</em></h2>
          <p>Nama “Peradaban Dunia” menyatakan sebuah harapan: santri dapat menggunakan ilmu dan kecakapannya untuk memberi manfaat bagi umat dan masyarakat.</p>
          <p>Visi pesantren menghubungkan kehidupan religius, cara berpikir ilmiah, jiwa wirausaha, wawasan internasional, dan kecintaan terhadap lingkungan. Nilai-nilai tersebut dipelajari melalui pendidikan di kelas sekaligus kebiasaan hidup bersama.</p>
          <Link className="text-link" href="/pendidikan#model">Pelajari nilai pendidikan <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="about-values" id="sejarah">
        <div className="wrap about-values-inner">
          <div><h2>Tradisi pesantren.<br /><em>Semangat keilmuan.</em></h2></div>
          <div className="about-values-copy">
            <p>Pendidikan Jagat ‘Arsy mempertemukan pembinaan moral dan spiritual, tradisi keilmuan Islam, serta pembelajaran sains. Riset melatih ketelitian berpikir; kehidupan asrama mengajarkan kemandirian dan kepedulian; Desain Cita-Cita membantu santri mengenali arah belajarnya.</p>
            <p>Kami memandang orang tua sebagai mitra dalam pendidikan anak. Mengenal kebutuhan dan harapan keluarga menjadi bagian penting dari percakapan tentang masa depan santri.</p>
            <div className="about-facts"><div><strong>RBL</strong><span>Pembelajaran berbasis riset</span></div><div><strong>SMP & SMA</strong><span>Pendidikan berasrama</span></div><div><strong>BSD</strong><span>Tangerang Selatan</span></div></div>
          </div>
        </div>
      </section>
      <section className="section wrap about-location" id="lokasi">
        <div><h2>Pesantren kami<br /><em>di BSD, Tangerang Selatan.</em></h2></div>
        <div><p>Komplek Nusaloka BSD, Sektor 14-6, Jalan Yapen Raya No. 21, Rawa Mekar Jaya, Serpong, Kota Tangerang Selatan, Banten.</p><a className="text-link" href="https://maps.google.com/?q=Pesantren+Jagat+Arsy+BSD" target="_blank" rel="noreferrer">Lihat petunjuk arah <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="mini-cta wrap">
        <div><h2>Kenali pendidikan<br /><em>dan keseharian santri.</em></h2></div>
        <div className="mini-cta-links"><Link className="text-link" href="/pendidikan">Pendidikan & RBL <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/kehidupan-santri">Kehidupan santri <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/admissions#campus-visit">Kunjungan pesantren <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
