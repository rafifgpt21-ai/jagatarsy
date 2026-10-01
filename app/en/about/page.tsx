import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/app/components/PageIntro";
import { BrandLogo } from "@/app/components/BrandLogo";

export const metadata: Metadata = {
  title: "About the School",
  description: "The educational philosophy of Jagat ’Arsy: good conduct, Islamic scholarship, research, independence, and care for others.",
  alternates: { canonical: "/en/about", languages: { id: "/tentang", en: "/en/about" } },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title={<>Knowledgeable, principled,<br /><em>and of service.</em></>} description="Jagat ’Arsy World Civilisation Islamic Boarding School offers junior and senior high school education in a boarding setting. We guide students as they deepen their knowledge, practice good conduct, and take responsibility in daily life." cta="Explore our education" ctaHref="/en/education" />
      <section className="about-feature section wrap" id="philosophy">
        <div className="about-image"><Image src="/images/school-mark.webp" alt="Green grounds and the entrance to Jagat ’Arsy" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className="about-copy"><BrandLogo className="about-brand-logo" size={96} alt="" /><h2>Knowledge for life.<br /><em>Good conduct as a guide.</em></h2><p>&ldquo;World Civilisation&rdquo; expresses our hope that students will use their knowledge and skills to benefit their communities and society.</p><p>Our vision brings together religious life, scientific thinking, entrepreneurship, an international outlook, and care for the environment. Students learn these values in the classroom and through the habits of living together.</p><Link className="text-link" href="/en/education#model">Explore our educational values <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="about-values" id="history"><div className="wrap about-values-inner"><div><h2>Boarding school tradition.<br /><em>A spirit of learning.</em></h2></div><div className="about-values-copy"><p>Education at Jagat ’Arsy brings together moral and spiritual guidance, Islamic scholarship, and science. Research develops careful thinking; boarding life builds independence and care for others; Aspirations Planning helps students understand the direction of their learning.</p><p>We see parents as partners in a child’s education. Understanding each family’s needs and hopes is an important part of conversations about a student’s future.</p><div className="about-facts"><div><strong>RBL</strong><span>Research-based learning</span></div><div><strong>JUNIOR & SENIOR</strong><span>Boarding school</span></div><div><strong>BSD</strong><span>South Tangerang</span></div></div></div></div></section>
      <section className="section wrap about-location" id="location"><div><h2>Our school<br /><em>in BSD, South Tangerang.</em></h2></div><div><p>Komplek Nusaloka BSD, Sektor 14-6, Jalan Yapen Raya No. 21, Rawa Mekar Jaya, Serpong, South Tangerang, Banten.</p><a className="text-link" href="https://maps.google.com/?q=Pesantren+Jagat+Arsy+BSD" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a></div></section>
      <section className="mini-cta wrap"><div><h2>Explore learning<br /><em>and student life.</em></h2></div><div className="mini-cta-links"><Link className="text-link" href="/en/education">Education & RBL <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/en/student-life">Student life <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/en/admissions#campus-visit">Visit the school <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
