import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/app/components/PageIntro";
import { stories as storyEntries } from "@/app/data/stories.en";

export const metadata: Metadata = {
  title: "Stories from Jagat ’Arsy",
  description: "Updates on study gatherings, student research, student writing, and alumni at Jagat ’Arsy Islamic Boarding School.",
  alternates: { canonical: "/en/stories", languages: { id: "/cerita", en: "/en/stories" } },
};

const stories = Object.entries(storyEntries).map(([slug, story]) => ({ ...story, slug }));

export default function StoriesPage() {
  return (
    <>
      <PageIntro title={<>Notes and stories<br /><em>from school life.</em></>} description="Read about study gatherings, research projects, student writing, and alumni connections. Each story offers a glimpse into the Jagat ’Arsy community." cta="Explore student education" ctaHref="/en/education" />
      <section className="stories-page section wrap" id="stories"><div className="stories-page-grid">{stories.map((story, index) => <article className={`stories-page-card ${index === 0 ? "stories-page-featured" : ""}`} id={index === 1 ? "research" : index === 2 ? "student-work" : undefined} key={story.title}><Link className="stories-page-image" href={`/en/stories/${story.slug}`} aria-label={`Read: ${story.title}`}><Image src={story.image} alt={story.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 68vw" : "(max-width: 760px) 100vw, 34vw"} /><span aria-hidden="true">↗</span></Link><div className="stories-page-copy"><div className="story-meta"><span>{story.category}</span><span>{story.date}</span></div><h2><Link href={`/en/stories/${story.slug}`}>{story.title}</Link></h2><p>{story.description}</p><Link className="text-link" href={`/en/stories/${story.slug}`}>Read story <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>
      <section className="mini-cta wrap"><div><h2>Get to know the school<br /><em>with your family.</em></h2></div><Link className="button" href="/en/admissions#campus-visit">Arrange a campus visit <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
