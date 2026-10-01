import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/app/components/PageIntro";
import { alumniDestinations } from "@/app/data/education.en";

export const metadata: Metadata = {
  title: "Alumni and Student Work",
  description: "Some university destinations of the 2025 alumni cohort and examples of research and writing created by Jagat ’Arsy students.",
  alternates: { canonical: "/en/outcomes", languages: { id: "/outcomes", en: "/en/outcomes" } },
};

export default function OutcomesPage() {
  return (
    <>
      <PageIntro title={<>Continue your studies.<br /><em>Carry your learning forward.</em></>} description="A student’s education at boarding school is one part of a longer journey. This page lists some university destinations for the 2025 alumni cohort and examples of work created while studying at Jagat ’Arsy." cta="Explore Aspirations Planning" ctaHref="/en/education#aspirations" />
      <section className="destination-page section wrap" id="study-destinations"><div className="destination-page-intro"><p className="section-context">Notes on the 2025 alumni cohort</p><h2>From Jagat ’Arsy<br /><em>to university.</em></h2><p>Published school records show alumni continuing their studies at universities in Indonesia and abroad. Here are some institutions listed in those records.</p><a className="text-link" href="https://jagatarsy.sch.id/alumni-page/" target="_blank" rel="noreferrer">View the school’s alumni records <span aria-hidden="true">↗</span></a></div><div className="destination-page-list">{alumniDestinations.map((name, index) => <div className="destination-row" key={name}><span>0{index + 1}</span><strong>{name}</strong><span aria-hidden="true">↗</span></div>)}</div></section>
      <section className="alumni-feature" id="community"><div className="alumni-visual"><Image src="/images/alumni.jpg" alt="Two Jagat ’Arsy alumni reading together" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="alumni-copy"><h2>Connections continue<br /><em>after graduation.</em></h2><p>On 18 October 2025, the fifth 3 Rasa 1 Cinta gathering brought alumni and school families together. It was an opportunity to reconnect and share news.</p><Link className="text-link text-link-light" href="/en/stories/3-rasa-1-cinta">Read about the alumni gathering <span aria-hidden="true">↗</span></Link></div></section>
      <section className="student-work section wrap" id="student-work"><div className="student-work-heading"><h2>Research and writing.<br /><em>Sharing what we learn.</em></h2><p>Grade 9 junior high students presented their research through RBL. Grade 8 students also prepared the anthology &ldquo;Guruku; Kisahmu Inspirasiku&rdquo; for National Teachers’ Day 2025.</p><p>These projects show some parts of learning: reading, developing ideas, writing, and sharing work with others.</p><Link className="text-link" href="/en/stories/antologi-guru">Read about the student anthology <span aria-hidden="true">↗</span></Link></div><Link className="work-image" href="/en/stories/antologi-guru"><Image src="/images/antologi-cover.jpg" alt="Cover of the Grade 8 anthology Guruku; Kisahmu Inspirasiku" fill sizes="(max-width: 760px) 100vw, 57vw" /><span className="work-image-label">Grade 8 anthology · 2025 <b aria-hidden="true">↗</b></span></Link></section>
      <section className="mini-cta wrap"><div><h2>Explore how<br /><em>students learn.</em></h2></div><Link className="button" href="/en/education#rbl">Explore RBL <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
