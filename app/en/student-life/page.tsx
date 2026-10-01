import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { PageIntro } from "@/app/components/PageIntro";

export const metadata: Metadata = {
  title: "Student Life and Boarding",
  description: "Explore worship, learning, student organisations, creative activities, and boarding life at Jagat ’Arsy World Civilisation Islamic Boarding School.",
  alternates: { canonical: "/en/student-life", languages: { id: "/kehidupan-santri", en: "/en/student-life" } },
};

const experiences = [
  ["Worship and good conduct", "Congregational prayers, Quran recitation, and study gatherings help students build habits of worship and respect for teachers and one another."],
  ["Shared responsibility", "Keeping spaces clean, caring for personal belongings, and taking on group responsibilities encourage independence and consideration for friends."],
  ["Interests and student activities", "Writing, presentations, the arts, and student-led activities give students ways to practice speaking, working together, and sharing ideas."],
] as const;

export default function StudentLifePage() {
  return (
    <>
      <PageIntro title={<>Worship, learn,<br /><em>and live together.</em></>} description="Being a student at a boarding school means learning in class and taking part in community life. Worship, friendships, shared activities, and everyday responsibilities are all part of education." cta="Arrange a campus visit" ctaHref="/en/admissions#campus-visit" />
      <section className="life-editorial section wrap" id="boarding"><div className="life-editorial-photo"><Image src="/images/student-campus.jpg" alt="School buildings and open space at Jagat ’Arsy" fill sizes="(max-width: 760px) 100vw, 58vw" /></div><div className="life-editorial-note"><h2>Independence begins<br /><em>in everyday life.</em></h2><p>Caring for belongings, keeping a room tidy, and sharing tasks with friends are ways to practice responsibility. These everyday habits help students manage themselves and respect others.</p><p>Prospective students and families can learn about boarding, activities, and school guidelines through a visit and a conversation with the school.</p><Link className="text-link" href="/en/admissions#campus-visit">Explore boarding life <span aria-hidden="true">↗</span></Link><span className="editorial-note-mark">J·A</span></div></section>
      <section className="experience-section"><div className="wrap"><div className="section-heading section-heading-split"><div><h2>Good conduct is learned<br /><em>by living together.</em></h2></div><p className="heading-aside heading-aside-narrow">Boarding life brings worship, lessons, caring for oneself, and working with others into the same daily experience.</p></div><div className="experience-grid">{experiences.map(([title, text], index) => <article key={title}><FeatureIcon name={(["book", "leaf", "palette"] as const)[index]} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section wrap santri-activities" id="activities"><div><p className="section-context">Student activities</p><h2>Practice leadership.<br /><em>Learn consideration.</em></h2></div><div><p>The Jagat ’Arsy Student Cabinet (JASCA) gives students opportunities to organise activities together. School records describe Saturday Night, or Satnight, as an event with performances, a bazaar, drama, and activities planned by students.</p><p>Class presentations, muhadharah (public speaking practice), and responsibilities in worship are also opportunities to speak and serve. Scouting, flag-raising, pencak silat, and choir are listed among the school’s extracurricular activities.</p><Link className="text-link" href="/en/stories">Read student stories and activities <span aria-hidden="true">↗</span></Link></div></section>
      <section className="campus-gallery section wrap" id="campus"><div className="campus-gallery-copy"><h2>Read, discuss,<br /><em>and practice.</em></h2><p>The library and computer lab support students’ learning. During a visit, families can explore the school and ask how these facilities are used.</p><Link className="button" href="/en/admissions#campus-visit">Arrange a campus visit <span aria-hidden="true">↗</span></Link></div><div className="campus-gallery-images"><figure><Image src="/images/library.jpg" alt="Students reading in the Jagat ’Arsy library" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Library</figcaption></figure><figure><Image src="/images/computer-lab.jpg" alt="Computer lab at Jagat ’Arsy" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Computer lab</figcaption></figure></div></section>
      <section className="mini-cta wrap"><div><h2>Talk with us<br /><em>about boarding life.</em></h2></div><Link className="text-link" href="/en/admissions#faq">Questions about boarding <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
