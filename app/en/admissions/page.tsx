import type { Metadata } from "next";
import { FeatureIcon } from "@/app/components/ThemeIcon";
import { PageIntro } from "@/app/components/PageIntro";
import { FaqAccordion } from "@/app/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Junior and Senior High Admissions",
  description: "Admissions steps, document preparation, questions about tuition, and campus visits at Jagat ’Arsy World Civilisation Islamic Boarding School in BSD.",
  alternates: { canonical: "/en/admissions", languages: { id: "/admissions", en: "/en/admissions" } },
};

const registrationContact = `https://wa.me/628111543738?text=${encodeURIComponent("Assalamu’alaikum, I would like information about junior or senior high admissions at Jagat ’Arsy for the current application year. Please share the schedule, requirements, and tuition details.")}`;
const visitContact = `https://wa.me/628111543738?text=${encodeURIComponent("Assalamu’alaikum, I would like to arrange a family visit to Jagat ’Arsy Islamic Boarding School. Please let me know the available visiting times.")}`;

const steps = [
  ["01", "Confirm the admissions information", "Choose junior or senior high, then confirm the application year, schedule, and availability with the admissions team."],
  ["02", "Complete the form and prepare documents", "Provide student and parent details using the relevant documents. The admissions team will share form and document instructions."],
  ["03", "Take part in the selection process", "The school’s admissions guide lists academic testing, character observation, and an interview as selection stages."],
  ["04", "Receive the result and complete registration", "Results are shared through official channels. Accepted students follow the instructions and schedule for completing registration."],
] as const;

const information = [
  ["Application schedule", "Confirm the school year, document deadlines, selection dates, and registration schedule for the level you are considering."],
  ["Tuition and fees", "Ask for written details of application, education, boarding, and other fees, together with payment dates, before making a decision."],
  ["Scholarship information", "Ask whether scholarships are available for the application period, along with eligibility, coverage, and how to apply."],
] as const;

const questions = [
  ["Which school levels are offered?", "Jagat ’Arsy offers junior and senior high school education in a boarding setting in BSD, South Tangerang."],
  ["How do we get started with an application?", "Contact the admissions team to confirm the application period and school level. Then follow the team’s instructions for completing the form and submitting documents."],
  ["Which documents should we prepare?", "Prepare a family registration card, birth certificate, most recent report card or grade statement, and a recent photograph. Graduation documents and any additional records depend on the school level and the admissions team’s instructions."],
  ["What are the selection stages?", "The school’s admissions guide describes academic testing, character observation, and an interview. The admissions team will share the schedule and requirements."],
  ["What are the tuition fees, and are scholarships available?", "Fee amounts and scholarship terms are not listed on this page. Ask the admissions team for written details for the intended application period, including what fees cover and payment dates."],
  ["What is Research-Based Learning (RBL)?", "Research-Based Learning is an approach in which students frame questions, gather and review information, write reports, and present their findings."],
  ["How are students supported in planning further study?", "Through Aspirations Planning, senior high students discuss interests, abilities, university courses, and careers. Family perspectives are part of the process."],
  ["What are the rules for family communication and visits?", "Please discuss communication schedules, device use, family visits, and permission to leave campus with the school. Ask for the current guidelines during a visit or before applying."],
  ["How can we learn about student care and health support?", "Families can ask about boarding supervision, support when a student is unwell, specific health needs, and ways to raise concerns. Share your child’s needs early so the school can discuss appropriate support."],
  ["Can prospective students visit too?", "Families can contact the admissions team to request a visit with their child. Confirm the time, number of visitors, and whether the school and boarding areas can be seen before arriving."],
] as const;

export default function AdmissionsPage() {
  return (
    <>
      <PageIntro title={<>Admissions<br /><em>for new students.</em></>} description="Choosing a boarding school is a family decision. Review the application steps, prepare questions about education and boarding, and talk with the admissions team about your child’s needs." cta="Contact admissions" ctaHref={registrationContact} />
      <section className="admissions-open wrap"><div className="admissions-open-copy"><h2>Junior and senior high<br /><em>information for families.</em></h2><p>The admissions team can share the school year, selection dates, requirements, and tuition information. Families are welcome to ask what they need as they consider boarding school.</p><a className="button button-cream" href={registrationContact} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">Request admissions information <span aria-hidden="true">↗</span></a></div><div className="admissions-open-aside"><span className="admissions-aside-note">JUNIOR & SENIOR HIGH<br />BOARDING SCHOOL<br />BSD · SOUTH TANGERANG</span></div></section>
      <section className="process-section section wrap" id="process"><div className="section-heading section-heading-split"><div><h2>Application steps<br /><em>for prospective students.</em></h2></div><p className="heading-aside heading-aside-narrow">The admissions team supports families with documents, selection, and instructions for completing registration.</p></div><div className="process-grid">{steps.map(([number, title, text], index) => <article key={number}><FeatureIcon name={(["message", "clipboard", "compass", "check"] as const)[index]} /><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="requirements-section" id="requirements"><div className="wrap requirements-grid"><div><h2>Prepare documents<br /><em>for the applicant.</em></h2><p>Use information that matches official documents. Final requirements depend on the school level, application stage, and instructions from the admissions team.</p></div><div className="requirements-card"><span className="requirements-card-title">Documents to prepare</span><ul><li>Family registration card and birth certificate</li><li>Most recent report card or semester grade statement</li><li>Recent photograph</li><li>Graduation certificate or letter, if already issued</li><li>Additional documents as requested by the admissions team</li></ul><a className="text-link text-link-light" href={registrationContact} target="_blank" rel="noreferrer">Confirm the document requirements <span aria-hidden="true">↗</span></a></div></div></section>
      <section className="section wrap registration-information" id="fees"><div className="section-heading"><h2>Dates, fees,<br /><em>and family preparation.</em></h2></div><p className="registration-information-note">Application dates and fee amounts are not listed here. Confirm the information for your intended application period with the admissions team.</p><div className="process-grid">{information.map(([title, text], index) => <article key={title}><FeatureIcon name={(["clipboard", "book", "graduation"] as const)[index]} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="visit-section section wrap" id="campus-visit"><div className="visit-card"><h2>Come and visit<br /><em>with your child.</em></h2><p>Explore the school and boarding environment, and talk with the team about education, student activities, and school guidelines. A visit can help families make an informed decision.</p><a className="button" href={visitContact} target="_blank" rel="noreferrer" data-analytics-event="campus_visit_booking">Arrange a campus visit <span aria-hidden="true">↗</span></a></div><div className="visit-info"><span className="visit-info-label">SCHOOL ADDRESS</span><p>Komplek Nusaloka BSD, Sektor 14-6, Jalan Yapen Raya No. 21, Rawa Mekar Jaya, Serpong, South Tangerang.</p><span className="visit-info-label">ADMISSIONS TEAM</span><a href="tel:+628111543738">081-1154-3738</a><a href="mailto:info@jagatarsy.sch.id">info@jagatarsy.sch.id</a></div></section>
      <section className="faq-section" id="faq"><div className="wrap faq-grid"><div><h2>Questions from<br /><em>parents and applicants.</em></h2><p>Here is introductory information about education and admissions. Administrative requirements and school guidelines can be discussed with the school.</p></div><FaqAccordion items={questions} /></div></section>
      <section className="mini-cta wrap"><div><h2>Questions for<br /><em>our admissions team?</em></h2></div><a className="text-link" href={registrationContact} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">Contact admissions <span aria-hidden="true">↗</span></a></section>
    </>
  );
}
