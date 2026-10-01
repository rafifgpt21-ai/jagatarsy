export const educationPillars = [
  { number: "01", title: "Spiritual depth", text: "Prayer, remembrance of God, and the practice of good conduct help students care for their relationship with God and with others.", icon: "heart" },
  { number: "02", title: "Scientific thinking", text: "Reading, observing, and conducting research help students support their views with reasons and evidence.", icon: "flask" },
  { number: "03", title: "Personal guidance", text: "Through Aspirations Planning, students explore their interests, weigh study options, and plan their next steps.", icon: "leaf" },
  { number: "04", title: "Independence and creativity", text: "Boarding life and creative projects teach responsibility, cooperation, and the confidence to take initiative.", icon: "palette" },
  { number: "05", title: "A global outlook", text: "Language, literacy, and technology help students understand the wider world while staying grounded in Islamic values.", icon: "globe" },
] as const;

export const specialTracks = [
  {
    id: "media-kreatif", name: "Creative Media", program: "Creative Media Production", art: "media", icon: "palette",
    image: "/images/placeholders/media-kreatif.jpg", imageAlt: "Illustrative camera image for creative media learning", imageSource: "https://www.pexels.com/photo/90946/",
    summary: "Write stories, work with images and sound, and share messages with purpose and care.",
    title: "Create through media.", emphasis: "Tell stories with care.",
    purpose: "An interest in images, sound, and stories can grow into strong communication skills. Students learn to choose a message, shape a story, and consider how their work may affect others.",
    subjects: [
      ["Writing and storytelling", "Develop ideas, write scripts, and learn to tell stories for different readers and audiences."],
      ["Image and sound production", "Explore photography, video, sound design, and editing to communicate stories clearly."],
      ["Media literacy and ethics", "Take responsibility for information, respect other people's work, and practice good conduct in digital publishing."],
    ],
    practice: "Short films, written work, audio recordings, and visual projects give students ways to share their ideas.",
  },
  {
    id: "wirausaha", name: "Entrepreneurship", program: "Entrepreneurship", art: "enterprise", icon: "compass",
    image: "/images/placeholders/wirausaha.jpg", imageAlt: "Illustrative image of people working together on a business", imageSource: "https://www.pexels.com/photo/man-and-woman-near-table-3184465/",
    summary: "Notice community needs, plan a business, and learn to manage money honestly and responsibly.",
    title: "Learn to build a business.", emphasis: "Work with integrity.",
    purpose: "Entrepreneurship begins with sensitivity to other people's needs. Students learn how an idea can be developed, assessed, and managed as an effort that offers value to others.",
    subjects: [
      ["Needs and business planning", "Observe needs, identify potential customers, and plan a product or service and the work behind it."],
      ["Finance and marketing", "Learn to record costs, revenue, and cash flow, and to describe products honestly."],
      ["Business ethics", "Explore trust, responsibility, and Islamic principles of commerce in relationships with customers and partners."],
    ],
    practice: "Business plans, product trials, simple financial records, and idea presentations help students practice decision-making.",
  },
  {
    id: "ulama-peradaban", name: "Islamic Scholarship", program: "Islamic Studies & Classical Texts", art: "study", icon: "book",
    image: "/images/placeholders/ulama-peradaban.jpg", imageAlt: "Illustrative image of an open Quran on a book stand", imageSource: "https://www.pexels.com/photo/an-open-koran-book-8164516/",
    summary: "Study Arabic and Islamic scholarship, and learn to share knowledge with care and awareness of today's world.",
    title: "Explore Islamic scholarship.", emphasis: "Serve through knowledge.",
    purpose: "The Islamic tradition of learning encourages careful study and respectful engagement with differences. Students connect classical scholarship with questions and needs in their communities.",
    subjects: [
      ["Arabic and classical texts", "Learn foundational Arabic as a starting point for reading and understanding Islamic scholarship."],
      ["The Quran and Islamic studies", "Study the Quran, fiqh, and Islamic literature with attention to sources and context."],
      ["Teaching and dialogue", "Practice explaining ideas, sharing advice, and engaging in thoughtful dialogue with consideration for the public good."],
    ],
    practice: "Reading classical texts, keeping study notes, taking part in discussions, and practicing how to share knowledge all support students' learning.",
  },
] as const;

export const alumniDestinations = [
  "Universitas Indonesia", "Universitas Padjadjaran", "Universitas Brawijaya",
  "National Taiwan University", "HSE University, Moscow", "BINUS University", "UIN Syarif Hidayatullah Jakarta",
];
