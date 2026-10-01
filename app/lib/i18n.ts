export type Locale = "id" | "en";

const indonesianToEnglish: Record<string, string> = {
  "/": "/en",
  "/tentang": "/en/about",
  "/pendidikan": "/en/education",
  "/kelas-khusus": "/en/special-tracks",
  "/kehidupan-santri": "/en/student-life",
  "/outcomes": "/en/outcomes",
  "/cerita": "/en/stories",
  "/admissions": "/en/admissions",
};

const englishToIndonesian: Record<string, string> = Object.fromEntries(
  Object.entries(indonesianToEnglish).map(([indonesian, english]) => [english, indonesian]),
);

const indonesianToEnglishFragments: Record<string, Record<string, string>> = {
  "/": { tentang: "about", pendidikan: "education", "kelas-khusus": "special-tracks", jenjang: "school-levels", "kehidupan-santri": "student-life" },
  "/tentang": { filosofi: "philosophy", sejarah: "history", lokasi: "location" },
  "/pendidikan": { "cita-cita": "aspirations", "kelas-khusus": "tracks", smp: "junior-high", sma: "senior-high" },
  "/kehidupan-santri": { kegiatan: "activities", kampus: "campus" },
  "/outcomes": { "tujuan-studi": "study-destinations", cerita: "community", karya: "student-work" },
  "/cerita": { berita: "stories", riset: "research", karya: "student-work" },
  "/admissions": { proses: "process", persyaratan: "requirements", biaya: "fees" },
};

export function localizedPath(pathname: string, locale: Locale): string {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (locale === "en") {
    if (path === "/en" || path.startsWith("/en/")) return path;
    if (path.startsWith("/cerita/")) return `/en/stories/${path.slice("/cerita/".length)}`;
    return indonesianToEnglish[path] ?? "/en";
  }

  if (path === "/en") return "/";
  if (path.startsWith("/en/stories/")) return `/cerita/${path.slice("/en/stories/".length)}`;
  if (path === "/en/stories") return "/cerita";
  return englishToIndonesian[path] ?? "/";
}

export function localizedFragment(pathname: string, fragment: string, locale: Locale): string {
  const path = pathname.replace(/\/+$/, "") || "/";
  const indonesianPath = path.startsWith("/en") ? localizedPath(path, "id") : path;
  const fragments = indonesianToEnglishFragments[indonesianPath];
  if (!fragments) return fragment;

  if (locale === "en") return fragments[fragment] ?? fragment;
  const englishToIndonesianFragment = Object.fromEntries(
    Object.entries(fragments).map(([indonesian, english]) => [english, indonesian]),
  );
  return englishToIndonesianFragment[fragment] ?? fragment;
}
