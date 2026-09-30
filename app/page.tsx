import Image from "next/image";
import Link from "next/link";
import { educationPillars, alumniDestinations } from "./data/education";
import { FeatureIcon } from "./components/ThemeIcon";
import { HeroArtwork } from "./components/HeroArtwork";
import { HomeArtwork } from "./components/HomeArtwork";
import { SpecialTracks } from "./components/SpecialTracks";

const pillars = educationPillars;
const destinations = alumniDestinations;

const stories = [
  {
    label: "RISET SANTRI / 2025",
    title: "RBL: santri SMP belajar meneliti",
    image: "/images/rbl-santri.jpg",
    alt: "Santri Jagat ‘Arsy mempresentasikan hasil riset",
    href: "/cerita/research-based-learning",
  },
  {
    label: "KARYA SANTRI / 2025",
    title: "Guruku; Kisahmu Inspirasiku",
    image: "/images/antologi-cover.jpg",
    alt: "Sampul buku antologi karya santri Jagat ‘Arsy",
    href: "/cerita/antologi-guru",
  },
  {
    label: "KOMUNITAS / 2025",
    title: "3 Rasa 1 Cinta: silaturahmi alumni",
    image: "/images/community-2025.jpg",
    alt: "Komunitas alumni dan santri Jagat ‘Arsy berkumpul",
    href: "/cerita/3-rasa-1-cinta",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="studio-hero hero-art" aria-labelledby="hero-title">
        <div className="hero-art-shell studio-container">
          <div className="hero-art-meta">
            <span>PESANTREN PERADABAN DUNIA</span>
            <span>SMP & SMA · BSD, TANGERANG SELATAN</span>
          </div>
          <div className="hero-art-canvas">
            <div className="hero-art-copy">
              <div className="hero-art-signature">JAGAT <span>‘ARSY</span></div>
              <h1 id="hero-title">Mendidik jiwa.<br /><em>Menajamkan nalar.</em><br />Menyiapkan<br />masa depan.</h1>
              <p>Pesantren Peradaban Dunia Jagat ‘Arsy menyelenggarakan pendidikan SMP dan SMA berasrama di BSD, Tangerang Selatan. Adab dan keilmuan Islam berjalan bersama budaya riset, kemandirian, dan pendampingan cita-cita santri.</p>
              <div className="hero-art-actions" data-reveal>
                <Link className="studio-pill" href="/admissions#campus-visit" data-analytics-event="campus_visit_booking">Jadwalkan kunjungan <span aria-hidden="true">↗</span></Link>
                <Link className="hero-art-link" href="/pendidikan#rbl">Pelajari pendidikan & RBL <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </div>
      </section>

      <section className="studio-intro home-art-intro" id="tentang" tabIndex={-1}>
        <div className="studio-container">
          <div className="home-intro-heading">
            <h2 data-reveal>Berilmu dan beradab.<br />{" "}<span>Bermanfaat bagi sesama.</span></h2>
            <HomeArtwork kind="growth" />
          </div>
          <div className="studio-intro-bottom" data-reveal>
            <p>“Peradaban Dunia” adalah cita-cita pendidikan kami: membekali santri dengan iman, kecakapan berpikir, dan kepedulian. Dalam pelajaran, ibadah, dan kehidupan asrama, santri belajar menggunakan ilmunya untuk kebaikan bersama.</p>
            <div className="studio-intro-facts" aria-label="Sekilas Jagat ‘Arsy">
              <div><FeatureIcon name="flask" /><strong>RBL</strong><small>PEMBELAJARAN BERBASIS RISET</small></div>
              <div><FeatureIcon name="graduation" /><strong>SMP + SMA</strong><small>DUA JENJANG PENDIDIKAN</small></div>
              <div><FeatureIcon name="map" /><strong>BSD</strong><small>TANGERANG SELATAN</small></div>
            </div>
          </div>
          <Link className="studio-underlink" href="/tentang" data-reveal>Kenali Jagat ‘Arsy <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="studio-black-work home-art-education" id="pendidikan">
        <div className="studio-container">
          <div className="studio-section-lead" data-reveal>
            <h2>Belajar dengan adab.<br />Meneliti dengan tekun.</h2>
            <HomeArtwork kind="books" />
          </div>

          <p className="home-learning-copy" data-reveal>Melalui Research-Based Learning (RBL), santri SMP belajar merumuskan pertanyaan, mengumpulkan data, menulis laporan, dan mempresentasikan hasil penelitian. Proses ini melatih ketelitian, kejujuran, serta kesediaan menerima masukan.</p>

          <div className="studio-work-stage">
            <Link className="studio-work-card studio-work-one" href="/pendidikan#rbl" data-reveal>
              <div className="studio-work-image"><Image src="/images/rbl-group.jpg" alt="Santri mengikuti kegiatan riset bersama pendidik" fill sizes="(max-width: 700px) 100vw, 44vw" /></div>
              <div className="studio-work-caption"><FeatureIcon name="flask" /><span>01 / BUDAYA RISET</span><h3>Research-Based Learning <b aria-hidden="true">↗</b></h3></div>
            </Link>
            <Link className="studio-work-card studio-work-two" href="/pendidikan#cita-cita" data-reveal>
              <div className="studio-work-image"><Image src="/images/student-campus.jpg" alt="Ruang terbuka dan bangunan kampus Jagat ‘Arsy" fill sizes="(max-width: 700px) 100vw, 36vw" /></div>
              <div className="studio-work-caption"><FeatureIcon name="compass" /><span>02 / DESAIN CITA-CITA</span><h3>Mengenali minat dan pilihan studi <b aria-hidden="true">↗</b></h3></div>
            </Link>
            <Link className="studio-work-card studio-work-three" href="/cerita/antologi-guru" data-reveal>
              <div className="studio-work-image"><Image src="/images/antologi-cover.jpg" alt="Sampul antologi Guruku; Kisahmu Inspirasiku karya santri" fill sizes="(max-width: 700px) 100vw, 34vw" /></div>
              <div className="studio-work-caption"><FeatureIcon name="palette" /><span>03 / LITERASI SANTRI</span><h3>Menulis dan menghargai guru <b aria-hidden="true">↗</b></h3></div>
            </Link>
          </div>

          <div className="studio-model" id="model">
            <div className="studio-model-heading" data-reveal>
              <h2>Lima nilai dalam<br />pendidikan santri.</h2>
              <HomeArtwork kind="bloom" />
            </div>
            <div className="studio-model-list">
              {pillars.map((pillar) => (
                <Link href="/pendidikan#model" className="studio-model-row" key={pillar.number} data-reveal>
                  <FeatureIcon name={pillar.icon} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <Link className="studio-underlink studio-underlink-light" href="/pendidikan">Pelajari dasar pendidikan kami <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="special-tracks-section special-tracks-home" id="kelas-khusus" aria-labelledby="home-tracks-title">
        <div className="studio-container">
          <div className="special-tracks-heading">
            <h2 id="home-tracks-title">Tiga kelas peminatan.<br /><em>Ilmu untuk berkarya.</em></h2>
            <p>Minat santri dapat diarahkan melalui media kreatif, wirausaha, dan kajian keilmuan Islam. Setiap arah memadukan kecakapan dengan adab dan tanggung jawab kepada sesama.</p>
          </div>
          <SpecialTracks />
        </div>
      </section>

      <section className="studio-journey home-art-journey" id="jenjang">
        <div className="studio-container">
          <div className="studio-journey-heading" data-reveal>
            <div><h2>SMP dan SMA.<br />Pendampingan bertahap.</h2></div>
            <HomeArtwork kind="steps" />
            <p>Pada jenjang SMP, santri membangun kebiasaan belajar dan mengenali dirinya. Pada jenjang SMA, pendampingan dilanjutkan untuk menimbang minat, jurusan kuliah, dan pilihan profesi.</p>
          </div>
          <div className="studio-journey-grid">
            <Link href="/pendidikan#smp" className="studio-journey-card" data-reveal>
              <div className="studio-journey-image"><Image src="/images/library.jpg" alt="Santri belajar di perpustakaan Jagat ‘Arsy" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
              <span>01 / MEMBANGUN DASAR</span>
              <h3>SMP Jagat ‘Arsy <b aria-hidden="true">↗</b></h3>
              <p>Membiasakan adab, melatih kemandirian, dan memperkenalkan penelitian sejak remaja.</p>
            </Link>
            <Link href="/pendidikan#sma" className="studio-journey-card" data-reveal>
              <div className="studio-journey-image"><Image src="/images/rbl-sidang.jpg" alt="Santri mempresentasikan hasil belajar di hadapan pendamping" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
              <span>02 / MENENTUKAN ARAH</span>
              <h3>SMA Jagat ‘Arsy <b aria-hidden="true">↗</b></h3>
              <p>Mendalami minat, menyusun karya, serta mempersiapkan pilihan studi melalui Desain Cita-Cita.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-life home-art-life" id="kehidupan-santri">
        <div className="home-life-orbit" aria-hidden="true" />
        <HomeArtwork kind="together" />
        <HomeArtwork kind="bloom" className="home-life-flower" />
        <div className="studio-life-photo studio-life-photo-a" aria-hidden="true"><Image src="/images/student-campus.jpg" alt="" fill sizes="33vw" /></div>
        <div className="studio-life-photo studio-life-photo-b" aria-hidden="true"><Image src="/images/rbl-santri.jpg" alt="" fill sizes="27vw" /></div>
        <div className="studio-life-photo studio-life-photo-c" aria-hidden="true"><Image src="/images/library.jpg" alt="" fill sizes="30vw" /></div>
        <div className="studio-life-content" data-reveal>
          <h2>Mengaji, belajar,<br />dan hidup bersama.</h2>
          <p>Kehidupan pesantren mengajarkan tanggung jawab melalui hal sehari-hari: menunaikan ibadah, menjaga kebersihan, menghormati guru, dan bekerja sama dengan teman.</p>
          <Link className="studio-pill studio-pill-light" href="/kehidupan-santri">Lihat kehidupan santri <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="studio-outcomes home-art-outcomes" id="outcomes">
        <div className="studio-container">
          <div className="studio-outcomes-lead" data-reveal>
            <div className="home-outcomes-title">
              <h2>Dari pesantren<br />ke perguruan tinggi.</h2>
              <HomeArtwork kind="orbit" />
            </div>
            <div><p>Catatan alumni angkatan 2025 menunjukkan kelanjutan studi di Indonesia, Taiwan, dan Rusia. Berikut beberapa perguruan tinggi yang tercantum dalam data pesantren.</p><Link className="studio-underlink" href="/outcomes">Lihat jejak alumni <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="studio-outcomes-band" aria-label="Beberapa tujuan studi alumni 2025">
            <span className="studio-outcomes-band-label">TUJUAN STUDI ALUMNI / 2025</span>
            <div className="studio-destination-window">
              <div className="studio-destination-track" aria-hidden="true">
                {[...destinations, ...destinations].map((name, index) => <span key={`${name}-${index}`}>{name}<i>✳</i></span>)}
              </div>
            </div>
            <ul className="visually-hidden">{destinations.map((name) => <li key={name}>{name}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="studio-stories home-art-stories" id="stories">
        <div className="studio-container">
          <div className="studio-stories-lead" data-reveal>
            <div className="home-stories-title"><HomeArtwork kind="stories" /><h2>Kabar dari pesantren.</h2></div>
            <Link className="studio-underlink" href="/cerita">Semua cerita <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="studio-story-grid">
            {stories.map((story) => (
              <article className="studio-story-card" key={story.href} data-reveal>
                <Link href={story.href} className="studio-story-image" aria-label={`Baca: ${story.title}`}><Image src={story.image} alt={story.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></Link>
                <span>{story.label}</span>
                <h3><Link href={story.href}>{story.title} <b aria-hidden="true">↗</b></Link></h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-final-cta home-art-cta" id="admissions">
        <div className="studio-container" data-reveal>
          <div className="home-cta-heading">
            <h2>Mari berkunjung<br />ke Jagat ‘Arsy.</h2>
            <HomeArtwork kind="doorway" />
          </div>
          <div className="studio-final-bottom">
            <p>Bapak dan Ibu dapat mengenal lingkungan pesantren bersama ananda, berbincang tentang pendidikan dan kehidupan asrama, serta menanyakan persiapan menjadi santri.</p>
            <div>
              <Link className="studio-pill studio-pill-light" href="/admissions" data-analytics-event="apply_now_click">Informasi pendaftaran <span aria-hidden="true">↗</span></Link>
              <a className="studio-underlink studio-underlink-light" href="https://wa.me/628111543738" target="_blank" rel="noreferrer" data-analytics-event="campus_visit_booking">Jadwalkan kunjungan ↗</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
