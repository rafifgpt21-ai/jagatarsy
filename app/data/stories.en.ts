export const stories = {
  "teras-ngarasy": {
    category: "School study gathering",
    date: "March 1, 2026",
    title: "Teras Ng'Arasy: Ramadan study and spiritual guidance",
    description: "A Ramadan study gathering in Sidrotul Muntaha Hall invited students to stay attentive, renew their intentions, and reflect on trust in God in daily life.",
    image: "/images/terras-ramadan.jpg",
    alt: "Teras Ng'Arasy Ramadan study poster at Jagat 'Arsy",
    source: "https://jagatarsy.sch.id/strategi-pesantren-jagat-arsy-cetak-generasi-waliyullah-di-era-digital-melalui-teras-ngarasy/",
    paragraphs: [
      "As part of the Teras Ng'Arasy Ramadan study series, students gathered in Sidrotul Muntaha Hall for spiritual guidance with the school leadership. Documented in March 2026, the session discussed attention, intention, and how to respond to desires and challenges in life.",
      "Students were invited to consider their habits amid the flow of digital information. Reflections on a calm heart and trust in God served as a reminder that effort can go hand in hand with entrusting the outcome to Allah.",
      "The gathering was also streamed on Facebook and TikTok. The recording shows how the school uses media to share learning and advice with a wider audience.",
    ],
  },
  "research-based-learning": {
    category: "Student research",
    date: "December 2, 2025",
    title: "Research-Based Learning: junior high students present their findings",
    description: "Grade 9 junior high students carried out research and presentations as part of Research-Based Learning at Jagat 'Arsy.",
    image: "/images/rbl-santri.jpg",
    alt: "Junior high students presenting research findings at Jagat 'Arsy",
    source: "https://jagatarsy.sch.id/research-based-learning-rbl-smp-metode-pesantren-jagatarsy-mencetak-generasi-ulul-albab/",
    paragraphs: [
      "Research-Based Learning (RBL) introduces Grade 9 junior high students to the work of research. They develop questions, read relevant information, review their findings, and explain their work in a presentation.",
      "The process calls for care. Students learn to distinguish views from evidence, prepare a clear report, and give reasons for the conclusions they share.",
      "Presentations give students a chance to practice speaking with confidence and listening to others. Questions and feedback from educators help them revisit their research and improve how they communicate what they have learned.",
    ],
  },
  "antologi-guru": {
    category: "Student writing",
    date: "December 1, 2025",
    title: "Guruku; Kisahmu Inspirasiku: an anthology by Grade 8 students",
    description: "Grade 8 students wrote stories about their teachers for National Teachers' Day 2025.",
    image: "/images/antologi-cover.jpg",
    alt: "Cover of Guruku; Kisahmu Inspirasiku, an anthology by Jagat 'Arsy Grade 8 students",
    source: "https://jagatarsy.sch.id/karya-perdana-santri-jagat-arsy-persembahan-spesial-di-hari-guru-nasional/",
    paragraphs: [
      "For National Teachers' Day 2025, Grade 8 students at Jagat 'Arsy Junior High prepared an anthology titled “Guruku; Kisahmu Inspirasiku” (“My Teacher; Your Story Inspires Me”). The book brings together stories about educators drawn from the students' experiences of learning with them.",
      "Everyday memories became the starting point for writing: moments that made students smile, moving experiences, and lessons that stayed with them. Through their stories, students expressed their gratitude to their teachers.",
      "Preparing the anthology was also an exercise in literacy. Students learned to choose experiences, shape sentences, and share their writing with readers. The collective work brought writing skills together with appreciation for educators.",
    ],
  },
  "3-rasa-1-cinta": {
    category: "Alumni gathering",
    date: "November 14, 2025",
    title: "3 Rasa 1 Cinta, Volume 5: a Jagat 'Arsy community gathering",
    description: "A gathering on 18 October 2025 brought alumni, students, and school families together to reconnect.",
    image: "/images/community-2025.jpg",
    alt: "Alumni and students at the Jagat 'Arsy 3 Rasa 1 Cinta gathering",
    source: "https://jagatarsy.sch.id/3-rasa-1-cinta-jilid-5/",
    paragraphs: [
      "Alumni of Jagat 'Arsy World Civilisation Islamic Boarding School held the fifth 3 Rasa 1 Cinta gathering on Saturday, 18 October 2025. The event brought alumni, students, and school families together.",
      "The gathering gave alumni a chance to catch up and remember their time as students. Relationships built at school continue through connections with friends, teachers, and younger students.",
      "The school published a record of the event on 14 November 2025. It is one of the stories from the Jagat 'Arsy community as alumni continue their education and pursue their own paths.",
    ],
  },
} as const;

export type EnglishStorySlug = keyof typeof stories;
