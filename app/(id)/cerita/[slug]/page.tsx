import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/app/components/PageIntro";
import { stories, type StorySlug } from "@/app/data/stories";

type StoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories[slug as StorySlug];
  if (!story) return { title: "Kabar Pesantren" };
  return { title: story.title, description: story.description };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories[slug as StorySlug];
  if (!story) notFound();

  return (
    <>
      <PageIntro meta={`${story.category} · ${story.date}`} title={story.title} description={story.description} cta="Kembali ke kabar pesantren" ctaHref="/cerita" />
      <article className="story-article wrap">
        <div className="story-article-image"><Image src={story.image} alt={story.alt} fill loading="eager" sizes="(max-width: 760px) 100vw, 90vw" /></div>
        <div className="story-article-body">
          <div className="story-article-aside"><span>JAGAT ‘ARSY</span><span>{story.date}</span></div>
          <div>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="story-source" href={story.source} target="_blank" rel="noreferrer">Baca dokumentasi asli pesantren <span aria-hidden="true">↗</span></a><Link className="text-link" href="/cerita">Baca kabar lainnya <span aria-hidden="true">↗</span></Link></div>
        </div>
      </article>
      <section className="mini-cta wrap"><div><h2>Kenali lingkungan<br /><em>belajar Jagat ‘Arsy.</em></h2></div><Link className="button" href="/admissions#campus-visit">Jadwalkan kunjungan <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
