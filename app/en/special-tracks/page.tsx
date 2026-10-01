import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/app/components/PageIntro";
import { HomeArtwork } from "@/app/components/HomeArtwork";
import { SpecialTracks } from "@/app/components/SpecialTracks";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { specialTracks } from "@/app/data/education.en";

export const metadata: Metadata = {
  title: "Three Special Tracks",
  description: "Explore Creative Media, Entrepreneurship, and Islamic Scholarship: communicate with care, work with integrity, and deepen Islamic learning.",
  alternates: { canonical: "/en/special-tracks", languages: { id: "/kelas-khusus", en: "/en/special-tracks" } },
};

export default function SpecialTracksPage() {
  return (
    <>
      <PageIntro title={<>Explore your interests.<br /><em>Grow with good conduct.</em></>} description="Creative Media, Entrepreneurship, and Islamic Scholarship offer three areas of focus. Students develop skills alongside responsibility: for the stories they share, the work they lead, and the knowledge they teach." cta="Ask about the tracks" ctaHref="/en/admissions#campus-visit" />
      <section className="special-tracks-section special-tracks-directory wrap" aria-label="Choose a special track"><SpecialTracks localLinks locale="en" /></section>
      <div className="track-details wrap">
        {specialTracks.map((track, index) => (
          <section className={`track-detail track-${track.art}`} id={track.id} key={track.id} aria-labelledby={`${track.id}-title`}>
            <div className="track-detail-heading"><div><p className="track-detail-program"><FeatureIcon name={track.icon} /><span>0{index + 1} / {track.program}</span></p><h2 id={`${track.id}-title`}>{track.name}</h2><p className="track-detail-intent">{track.title}<br /><em>{track.emphasis}</em></p></div><div className="track-detail-art"><HomeArtwork kind={track.art} /></div></div>
            <div className="track-detail-body"><div className="track-detail-copy"><p className="track-purpose">{track.purpose}</p><h3>Learning focus</h3><ul className="track-subjects">{track.subjects.map(([title, description], subjectIndex) => <li key={title}><span aria-hidden="true">0{subjectIndex + 1}</span><div><h4>{title}</h4><p>{description}</p></div></li>)}</ul></div>
              <div className="track-detail-aside"><figure className="track-photo"><div className="track-photo-frame"><Image src={track.image} alt={track.imageAlt} fill sizes="(max-width: 760px) 100vw, 40vw" /></div><figcaption>Illustrative photo · <a href={track.imageSource} target="_blank" rel="noreferrer">Pexels ↗</a></figcaption></figure><div className="track-practice"><h3>Example activities</h3><p>{track.practice}</p></div></div>
            </div>
          </section>
        ))}
      </div>
      <section className="mini-cta wrap track-inquiry"><div><h2>Let’s discuss<br /><em>your child’s interests.</em></h2><p>Contact admissions to confirm which tracks, school levels, dates, and requirements are available for the application period.</p></div><Link className="button" href="/en/admissions#campus-visit">Ask about the tracks <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
