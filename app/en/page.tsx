import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { educationPillars, alumniDestinations } from "@/app/data/education.en";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { HeroArtwork } from "@/app/components/HeroArtwork";
import { BrandLogo } from "@/app/components/BrandLogo";
import { HomeArtwork } from "@/app/components/HomeArtwork";
import { SpecialTracks } from "@/app/components/SpecialTracks";

export const metadata: Metadata = {
  title: "Islamic Boarding School for Junior and Senior High School",
  description: "Jagat ’Arsy is a junior and senior high school boarding school in BSD, South Tangerang, combining Islamic values, research-based learning, independence, and personal guidance.",
  alternates: { canonical: "/en", languages: { id: "/", en: "/en" } },
  openGraph: { locale: "en_US", title: "Jagat ’Arsy World Civilisation Islamic Boarding School", description: "Educating the soul. Sharpening the mind. Preparing for the future." },
};

const stories = [
  { label: "STUDENT RESEARCH / 2025", title: "Research-Based Learning: junior high students conduct research", image: "/images/rbl-santri.jpg", alt: "Jagat ’Arsy junior high students presenting their research", href: "/en/stories/research-based-learning" },
  { label: "STUDENT WRITING / 2025", title: "Guruku; Kisahmu Inspirasiku", image: "/images/antologi-cover.jpg", alt: "Cover of an anthology written by Jagat ’Arsy students", href: "/en/stories/antologi-guru" },
  { label: "COMMUNITY / 2025", title: "3 Rasa 1 Cinta: an alumni gathering", image: "/images/community-2025.jpg", alt: "Jagat ’Arsy alumni and students gathered together", href: "/en/stories/3-rasa-1-cinta" },
];

export default function EnglishHomePage() {
  return (
    <>
      <section className="studio-hero hero-art" aria-labelledby="hero-title">
        <div className="hero-art-shell studio-container">
          <div className="hero-art-meta"><span>WORLD CIVILISATION ISLAMIC BOARDING SCHOOL</span><span>JUNIOR & SENIOR HIGH · BSD, SOUTH TANGERANG</span></div>
          <div className="hero-art-canvas">
            <div className="hero-art-copy">
              <div className="hero-art-signature">JAGAT <span>’ARSY</span></div>
              <h1 id="hero-title">Educating the soul.<br /><em>Sharpening the mind.</em><br />Preparing for<br />the future.</h1>
              <p>Jagat ’Arsy is a junior and senior high school boarding school in BSD, South Tangerang. Islamic values and scholarship go hand in hand with a culture of research, independence, and guidance as students plan their future.</p>
              <div className="hero-art-actions" data-reveal>
                <Link className="studio-pill" href="/en/admissions#campus-visit" data-analytics-event="campus_visit_booking">Arrange a campus visit <span aria-hidden="true">↗</span></Link>
                <Link className="hero-art-link" href="/en/education#rbl">Explore our education & RBL <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <HeroArtwork locale="en" />
          </div>
        </div>
      </section>

      <section className="studio-intro home-art-intro" id="about" tabIndex={-1}>
        <div className="studio-container">
          <div className="home-intro-heading"><h2 data-reveal>Knowledge and good conduct.<br /><span>Put to work for others.</span></h2><HomeArtwork kind="growth" /></div>
          <div className="studio-intro-bottom" data-reveal>
            <p>&ldquo;World Civilisation&rdquo; is our educational aspiration: to equip students with faith, thoughtful judgement, and care for others. Through lessons, worship, and boarding life, students learn to use their knowledge for the common good.</p>
            <div className="studio-intro-facts" aria-label="Jagat ’Arsy at a glance">
              <div><FeatureIcon name="flask" /><strong>RBL</strong><small>RESEARCH-BASED LEARNING</small></div>
              <div><FeatureIcon name="graduation" /><strong>JUNIOR + SENIOR</strong><small>TWO SCHOOL LEVELS</small></div>
              <div><FeatureIcon name="map" /><strong>BSD</strong><small>SOUTH TANGERANG</small></div>
            </div>
          </div>
          <Link className="studio-underlink" href="/en/about" data-reveal>Get to know Jagat ’Arsy <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="studio-black-work home-art-education" id="education">
        <div className="studio-container">
          <div className="studio-section-lead" data-reveal><h2>Learn with care.<br />Research with focus.</h2><HomeArtwork kind="books" /></div>
          <p className="home-learning-copy" data-reveal>Through Research-Based Learning (RBL), junior high students learn to frame questions, gather information, write reports, and present their findings. The process encourages care, honesty, and openness to feedback.</p>
          <div className="studio-work-stage">
            <Link className="studio-work-card studio-work-one" href="/en/education#rbl" data-reveal>
              <div className="studio-work-image"><Image src="/images/rbl-group.jpg" alt="Students taking part in a research activity with an educator" fill sizes="(max-width: 700px) 100vw, 44vw" /></div>
              <div className="studio-work-caption"><FeatureIcon name="flask" /><span>01 / RESEARCH CULTURE</span><h3>Research-Based Learning <b aria-hidden="true">↗</b></h3></div>
            </Link>
            <Link className="studio-work-card studio-work-two" href="/en/education#aspirations" data-reveal>
              <div className="studio-work-image"><Image src="/images/student-campus.jpg" alt="Campus buildings and open space at Jagat ’Arsy" fill sizes="(max-width: 700px) 100vw, 36vw" /></div>
              <div className="studio-work-caption"><FeatureIcon name="compass" /><span>02 / ASPIRATIONS PLANNING</span><h3>Explore interests and study options <b aria-hidden="true">↗</b></h3></div>
            </Link>
            <Link className="studio-work-card studio-work-three" href="/en/stories/antologi-guru" data-reveal>
              <div className="studio-work-image"><Image src="/images/antologi-cover.jpg" alt="Cover of a student anthology about teachers" fill sizes="(max-width: 700px) 100vw, 34vw" /></div>
              <div className="studio-work-caption"><FeatureIcon name="palette" /><span>03 / STUDENT LITERACY</span><h3>Writing and appreciating teachers <b aria-hidden="true">↗</b></h3></div>
            </Link>
          </div>

          <div className="studio-model" id="model">
            <div className="studio-model-heading" data-reveal><h2>Five values in<br />student education.</h2><HomeArtwork kind="bloom" /></div>
            <div className="studio-model-list">
              {educationPillars.map((pillar) => <Link href="/en/education#model" className="studio-model-row" key={pillar.number} data-reveal><FeatureIcon name={pillar.icon} /><h3>{pillar.title}</h3><p>{pillar.text}</p><span aria-hidden="true">↗</span></Link>)}
            </div>
            <Link className="studio-underlink studio-underlink-light" href="/en/education">Explore our approach to education <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="special-tracks-section special-tracks-home" id="special-tracks">
        <div className="studio-container"><div className="special-tracks-heading"><h2>Three special tracks.<br /><em>Knowledge into practice.</em></h2><p>Students can explore creative media, entrepreneurship, and Islamic scholarship. Each track combines practical skills with good conduct and responsibility to others.</p></div><SpecialTracks locale="en" /></div>
      </section>

      <section className="studio-journey home-art-journey" id="school-levels">
        <div className="studio-container">
          <div className="studio-journey-heading" data-reveal><div><h2>Junior and senior high.<br />Guidance at each stage.</h2></div><HomeArtwork kind="steps" /><p>In junior high, students build learning habits and get to know themselves. In senior high, they continue exploring interests, university courses, and career options.</p></div>
          <div className="studio-journey-grid">
            <Link href="/en/education#junior-high" className="studio-journey-card" data-reveal><div className="studio-journey-image"><Image src="/images/library.jpg" alt="Students studying in the Jagat ’Arsy library" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><span>01 / BUILDING FOUNDATIONS</span><h3>Jagat ’Arsy Junior High <b aria-hidden="true">↗</b></h3><p>Build good conduct, develop independence, and discover research as a learning practice.</p></Link>
            <Link href="/en/education#senior-high" className="studio-journey-card" data-reveal><div className="studio-journey-image"><Image src="/images/rbl-sidang.jpg" alt="A student presenting learning to an educator" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><span>02 / CHOOSING A DIRECTION</span><h3>Jagat ’Arsy Senior High <b aria-hidden="true">↗</b></h3><p>Explore interests, create work, and consider further study through Aspirations Planning.</p></Link>
          </div>
        </div>
      </section>

      <section className="studio-life home-art-life" id="student-life">
        <div className="home-life-orbit" aria-hidden="true" /><HomeArtwork kind="together" /><HomeArtwork kind="bloom" className="home-life-flower" />
        <div className="studio-life-photo studio-life-photo-a" aria-hidden="true"><Image src="/images/student-campus.jpg" alt="" fill sizes="33vw" /></div>
        <div className="studio-life-photo studio-life-photo-b" aria-hidden="true"><Image src="/images/rbl-santri.jpg" alt="" fill sizes="27vw" /></div>
        <div className="studio-life-photo studio-life-photo-c" aria-hidden="true"><Image src="/images/library.jpg" alt="" fill sizes="30vw" /></div>
        <div className="studio-life-content" data-reveal><h2>Worship, learn,<br />and live together.</h2><p>Boarding life teaches responsibility through daily routines: worshipping, caring for shared spaces, respecting teachers, and working with friends.</p><Link className="studio-pill studio-pill-light" href="/en/student-life">Explore student life <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="studio-outcomes home-art-outcomes" id="outcomes">
        <div className="studio-container">
          <div className="studio-outcomes-lead" data-reveal><div className="home-outcomes-title"><h2>From boarding school<br />to university.</h2><HomeArtwork kind="orbit" /></div><div><p>Records for the 2025 alumni cohort show further study in Indonesia, Taiwan, and Russia. Here are some of the universities listed in the school’s records.</p><Link className="studio-underlink" href="/en/outcomes">Explore alumni pathways <span aria-hidden="true">↗</span></Link></div></div>
          <div className="studio-outcomes-band" aria-label="Some university destinations of the 2025 alumni cohort"><span className="studio-outcomes-band-label">ALUMNI STUDY DESTINATIONS / 2025</span><div className="studio-destination-window"><div className="studio-destination-track" aria-hidden="true">{[...alumniDestinations, ...alumniDestinations].map((name, index) => <span key={`${name}-${index}`}>{name}<i>✳</i></span>)}</div></div><ul className="visually-hidden">{alumniDestinations.map((name) => <li key={name}>{name}</li>)}</ul></div>
        </div>
      </section>

      <section className="studio-stories home-art-stories" id="stories">
        <div className="studio-container"><div className="studio-stories-lead" data-reveal><div className="home-stories-title"><HomeArtwork kind="stories" /><h2>Stories from Jagat ’Arsy.</h2></div><Link className="studio-underlink" href="/en/stories">All stories <span aria-hidden="true">↗</span></Link></div>
          <div className="studio-story-grid">{stories.map((story) => <article className="studio-story-card" key={story.href} data-reveal><Link href={story.href} className="studio-story-image" aria-label={`Read: ${story.title}`}><Image src={story.image} alt={story.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></Link><span>{story.label}</span><h3><Link href={story.href}>{story.title} <b aria-hidden="true">↗</b></Link></h3></article>)}</div>
        </div>
      </section>

      <section className="studio-final-cta home-art-cta" id="admissions">
        <div className="studio-container" data-reveal><div className="home-cta-heading"><h2>Visit Jagat<br /><em>’Arsy.</em></h2><BrandLogo tone="navy" className="home-cta-logo" size={300} alt="" /></div><div className="studio-final-bottom"><p>Families can explore the school and boarding environment, talk about education and student life, and ask what to prepare before applying.</p><div><Link className="studio-pill studio-pill-light" href="/en/admissions" data-analytics-event="apply_now_click">Admissions information <span aria-hidden="true">↗</span></Link><Link className="studio-underlink studio-underlink-light" href="/en/admissions#campus-visit" data-analytics-event="campus_visit_booking">Arrange a campus visit ↗</Link></div></div></div>
      </section>
    </>
  );
}
