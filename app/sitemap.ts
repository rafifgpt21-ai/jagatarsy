import type { MetadataRoute } from "next";

const routes = ["", "/tentang", "/pendidikan", "/kelas-khusus", "/kehidupan-santri", "/outcomes", "/cerita", "/cerita/teras-ngarasy", "/cerita/research-based-learning", "/cerita/antologi-guru", "/cerita/3-rasa-1-cinta", "/admissions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://jagatarsy.sch.id${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.75,
  }));
}
