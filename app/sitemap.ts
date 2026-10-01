import type { MetadataRoute } from "next";

const localizedRoutes = [
  ["", "/en"],
  ["/tentang", "/en/about"],
  ["/pendidikan", "/en/education"],
  ["/kelas-khusus", "/en/special-tracks"],
  ["/kehidupan-santri", "/en/student-life"],
  ["/outcomes", "/en/outcomes"],
  ["/cerita", "/en/stories"],
  ["/cerita/teras-ngarasy", "/en/stories/teras-ngarasy"],
  ["/cerita/research-based-learning", "/en/stories/research-based-learning"],
  ["/cerita/antologi-guru", "/en/stories/antologi-guru"],
  ["/cerita/3-rasa-1-cinta", "/en/stories/3-rasa-1-cinta"],
  ["/admissions", "/en/admissions"],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedRoutes.flatMap(([indonesian, english], index) => {
    const indonesianUrl = `https://jagatarsy.sch.id${indonesian}`;
    const englishUrl = `https://jagatarsy.sch.id${english}`;
    const alternates = { languages: { id: indonesianUrl, en: englishUrl } };
    const common = {
      lastModified: new Date(),
      changeFrequency: index === 0 ? "weekly" as const : "monthly" as const,
      priority: index === 0 ? 1 : 0.75,
      alternates,
    };

    return [{ url: indonesianUrl, ...common }, { url: englishUrl, ...common }];
  });
}
