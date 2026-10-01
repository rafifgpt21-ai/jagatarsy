import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { PageIntro } from "@/app/components/PageIntro";
import { educationPillars } from "@/app/data/education.en";
import { SpecialTracks } from "@/app/components/SpecialTracks";

export const metadata: Metadata = {
  title: "Education, RBL & Aspirations Planning",
  description: "Jagat ’Arsy combines guidance in good conduct, Research-Based Learning, and Aspirations Planning for junior and senior high school students.",
  alternates: { canonical: "/en/education", languages: { id: "/pendidikan", en: "/en/education" } },
};

const researchSteps = [
  ["A clear question", "Students learn to observe an issue, read relevant sources, and frame a question that can be researched."],
  ["Evidence that can be explained", "They gather and review information to prepare a report. Care and honesty are part of the process."],
  ["Findings shared with others", "Students present their work, listen to questions, and learn to support their conclusions."],
] as const;

export default function EducationPage() {
  return (
    <>
      <PageIntro title={<>Deepen knowledge.<br /><em>Practice good conduct.</em></>} description="Classroom learning, spiritual guidance, research, and boarding life support one another. Students are guided to think carefully, act responsibly, and prepare for future study." cta="Ask about education" ctaHref="/en/admissions#campus-visit" />
      <section className="education-model section wrap" id="model"><div className="education-model-heading"><h2>Five values in<br /><em>student education.</em></h2><p>Students learn these values in everyday life: through worship, reading, research, conversations with teachers, and living with peers.</p></div><div className="education-pillars">{educationPillars.map((pillar) => <article key={pillar.number}><FeatureIcon name={pillar.icon} /><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></article>)}</div></section>
      <section className="program-feature" id="rbl"><div className="program-photo"><Image src="/images/rbl-santri.jpg" alt="Junior high students presenting research for Research-Based Learning" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="program-copy"><h2>Learn to research<br /><em>from junior high.</em></h2><p>Research-Based Learning (RBL) introduces students to a research process: frame a question, find and review information, write a report, and present their findings.</p><p>Research also helps students practice an approach to learning. They read with care, report evidence honestly, and stay open to questions and feedback.</p><Link className="text-link text-link-light" href="/en/stories/research-based-learning">Read about student research <span aria-hidden="true">↗</span></Link></div></section>
      <section className="section wrap rbl-process" aria-labelledby="rbl-process-title"><div className="section-heading"><h2 id="rbl-process-title">From a question<br /><em>to a presentation.</em></h2></div><div className="process-grid">{researchSteps.map(([title, text], index) => <article key={title}><FeatureIcon name={(["flask", "book", "message"] as const)[index]} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="career-section section wrap" id="aspirations"><div className="career-copy"><p className="section-context">Aspirations Planning</p><h2>Understand yourself.<br /><em>Consider study options.</em></h2><p>Aspirations Planning helps students explore their interests and abilities. Conversations can include time management, communication, teamwork, problem-solving, and education planning.</p><p>In junior high, students focus on becoming positive and productive young people. In senior high, they consider university courses and careers together with their families’ hopes and perspectives.</p><Link className="text-link" href="/en/outcomes">See alumni study destinations <span aria-hidden="true">↗</span></Link></div><div className="career-aside"><span className="career-quote" aria-hidden="true">&ldquo;</span><blockquote>Study choices can take into account interests, abilities, and the contribution a student hopes to make to society.</blockquote><span className="career-quote-caption">ASPIRATIONS PLANNING APPROACH</span></div></section>
      <section className="special-tracks-section wrap" id="tracks" aria-labelledby="education-tracks-title"><div className="special-tracks-heading"><h2 id="education-tracks-title">Explore interests.<br /><em>Learn to contribute.</em></h2><p>Three special tracks bring together creative work, entrepreneurship, and Islamic scholarship. Explore the learning focus and example activities in each track.</p></div><SpecialTracks locale="en" /></section>
      <section className="level-section" id="junior-high"><div className="wrap level-grid"><article className="level-card"><span className="level-index">01 / JUNIOR HIGH</span><h2>Build habits for<br /><em>learning and independence.</em></h2><p>Junior high education develops good conduct, steady learning habits, and day-to-day responsibility. Research and group activities help students learn to ask questions and share their views.</p><Link className="text-link" href="/en/admissions">Junior high admissions <span aria-hidden="true">↗</span></Link></article><article className="level-card level-card-dark" id="senior-high"><span className="level-index">02 / SENIOR HIGH</span><h2>Explore interests.<br /><em>Prepare for further study.</em></h2><p>At senior high school, students continue academic and character development, create projects, and consider university courses through Aspirations Planning.</p><Link className="text-link text-link-light" href="/en/admissions">Senior high admissions <span aria-hidden="true">↗</span></Link></article></div></section>
      <section className="mini-cta wrap"><div><h2>Let’s talk about<br /><em>your child’s education.</em></h2></div><Link className="button" href="/en/admissions#campus-visit">Arrange a campus visit <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
