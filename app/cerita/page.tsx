import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/app/components/PageIntro";
import { stories as storyEntries } from "@/app/data/stories";

export const metadata: Metadata = {
  title: "Kabar Pesantren",
  description: "Dokumentasi kajian, penelitian, karya literasi, dan silaturahmi keluarga Pesantren Jagat ‘Arsy.",
};

const stories = Object.entries(storyEntries).map(([slug, story]) => ({ ...story, slug }));

export default function CeritaPage() {
  return (
    <>
      <PageIntro title={<>Catatan dan kabar<br /><em>dari pesantren.</em></>} description="Kabar tentang kajian, kegiatan penelitian, karya santri, serta silaturahmi alumni. Setiap catatan memperlihatkan sebagian dari keseharian keluarga Jagat ‘Arsy." cta="Pelajari pendidikan santri" ctaHref="/pendidikan" />
      <section className="stories-page section wrap" id="berita"><div className="stories-page-grid">{stories.map((story, index) => <article className={`stories-page-card ${index === 0 ? "stories-page-featured" : ""}`} id={index === 1 ? "riset" : index === 2 ? "karya" : undefined} key={story.title}><Link className="stories-page-image" href={`/cerita/${story.slug}`} aria-label={`Baca: ${story.title}`}><Image src={story.image} alt={story.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 68vw" : "(max-width: 760px) 100vw, 34vw"} /><span aria-hidden="true">↗</span></Link><div className="stories-page-copy"><div className="story-meta"><span>{story.category}</span><span>{story.date}</span></div><h2><Link href={`/cerita/${story.slug}`}>{story.title}</Link></h2><p>{story.description}</p><Link className="text-link" href={`/cerita/${story.slug}`}>Baca cerita <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>
      <section className="mini-cta wrap"><div><h2>Kenali pesantren<br /><em>bersama keluarga.</em></h2></div><Link className="button" href="/admissions#campus-visit">Jadwalkan kunjungan <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
