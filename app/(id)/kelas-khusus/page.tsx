import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/app/components/PageIntro";
import { HomeArtwork } from "@/app/components/HomeArtwork";
import { SpecialTracks } from "@/app/components/SpecialTracks";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { specialTracks } from "@/app/data/education";

export const metadata: Metadata = {
  title: "Tiga Kelas Peminatan",
  description: "Kenali arah pembelajaran Media Kreatif, Wirausaha, dan Ulama Peradaban: berkarya melalui media, bekerja dengan amanah, dan mendalami khazanah Islam.",
};

export default function SpecialTracksPage() {
  return (
    <>
      <PageIntro title={<>Mendalami minat.<br /><em>Menjaga adab.</em></>} description="Media Kreatif, Wirausaha, dan Ulama Peradaban menawarkan tiga arah peminatan. Kecakapan dipelajari bersama tanggung jawab: atas cerita yang disampaikan, usaha yang dijalankan, dan ilmu yang diajarkan." cta="Bertanya tentang kelas" ctaHref="/admissions#campus-visit" />
      <section className="special-tracks-section special-tracks-directory wrap" aria-label="Pilih kelas peminatan">
        <SpecialTracks localLinks />
      </section>
      <div className="track-details wrap">
        {specialTracks.map((track, index) => (
          <section className={`track-detail track-${track.art}`} id={track.id} key={track.id} aria-labelledby={`${track.id}-title`}>
            <div className="track-detail-heading">
              <div>
                <p className="track-detail-program"><FeatureIcon name={track.icon} /><span>0{index + 1} / {track.program}</span></p>
                <h2 id={`${track.id}-title`}>{track.name}</h2>
                <p className="track-detail-intent">{track.title}<br /><em>{track.emphasis}</em></p>
              </div>
              <div className="track-detail-art"><HomeArtwork kind={track.art} /></div>
            </div>
            <div className="track-detail-body">
              <div className="track-detail-copy">
                <p className="track-purpose">{track.purpose}</p>
                <h3>Arah pembelajaran</h3>
                <ul className="track-subjects">
                  {track.subjects.map(([title, description], subjectIndex) => (
                    <li key={title}><span aria-hidden="true">0{subjectIndex + 1}</span><div><h4>{title}</h4><p>{description}</p></div></li>
                  ))}
                </ul>
              </div>
              <div className="track-detail-aside">
                <figure className="track-photo">
                  <div className="track-photo-frame"><Image src={track.image} alt={track.imageAlt} fill sizes="(max-width: 760px) 100vw, 40vw" /></div>
                  <figcaption>Foto ilustrasi · <a href={track.imageSource} target="_blank" rel="noreferrer">Pexels ↗</a></figcaption>
                </figure>
                <div className="track-practice"><h3>Contoh latihan</h3><p>{track.practice}</p></div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section className="mini-cta wrap track-inquiry">
        <div><h2>Mari membicarakan<br /><em>minat ananda.</em></h2><p>Hubungi panitia PPDB untuk memastikan pilihan kelas, jenjang, jadwal, serta ketentuan pada periode pendaftaran yang dituju.</p></div>
        <Link className="button" href="/admissions#campus-visit">Bertanya tentang kelas <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
