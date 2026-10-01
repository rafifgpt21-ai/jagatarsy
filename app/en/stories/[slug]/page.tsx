import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/app/components/PageIntro";
import { stories, type EnglishStorySlug } from "@/app/data/stories.en";

type StoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories[slug as EnglishStorySlug];
  if (!story) return { title: "Stories from Jagat ’Arsy" };
  return {
    title: story.title,
    description: story.description,
    alternates: { canonical: `/en/stories/${slug}`, languages: { id: `/cerita/${slug}`, en: `/en/stories/${slug}` } },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories[slug as EnglishStorySlug];
  if (!story) notFound();

  return (
    <>
      <PageIntro meta={`${story.category} · ${story.date}`} title={story.title} description={story.description} cta="Back to all stories" ctaHref="/en/stories" />
      <article className="story-article wrap"><div className="story-article-image"><Image src={story.image} alt={story.alt} fill loading="eager" sizes="(max-width: 760px) 100vw, 90vw" /></div><div className="story-article-body"><div className="story-article-aside"><span>JAGAT ’ARSY</span><span>{story.date}</span></div><div>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="story-source" href={story.source} target="_blank" rel="noreferrer">Read the original school article <span aria-hidden="true">↗</span></a><Link className="text-link" href="/en/stories">Read more stories <span aria-hidden="true">↗</span></Link></div></div></article>
      <section className="mini-cta wrap"><div><h2>Explore learning<br /><em>at Jagat ’Arsy.</em></h2></div><Link className="button" href="/en/admissions#campus-visit">Arrange a campus visit <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
