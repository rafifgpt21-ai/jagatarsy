export const educationPillars = [
  { number: "01", title: "Kedalaman spiritual", text: "Salat, dzikir, dan pembiasaan adab menuntun santri menjaga hubungan dengan Allah dan sesama.", icon: "heart" },
  { number: "02", title: "Nalar ilmiah", text: "Membaca, mengamati, dan meneliti melatih santri menyampaikan pendapat dengan alasan dan bukti.", icon: "flask" },
  { number: "03", title: "Pendampingan pribadi", text: "Melalui Desain Cita-Cita, santri mengenali minat, menimbang pilihan studi, dan menyusun langkah belajarnya.", icon: "leaf" },
  { number: "04", title: "Kemandirian & daya cipta", text: "Hidup berasrama dan kegiatan berkarya mengajarkan tanggung jawab, kerja sama, serta keberanian berinisiatif.", icon: "palette" },
  { number: "05", title: "Wawasan global", text: "Bahasa, literasi, dan pengenalan teknologi membantu santri memahami dunia dengan tetap berpegang pada nilai Islam.", icon: "globe" },
] as const;

export const specialTracks = [
  {
    id: "media-kreatif", name: "Media Kreatif", program: "Creative Media Production", art: "media", icon: "palette",
    image: "/images/placeholders/media-kreatif.jpg", imageAlt: "Foto ilustrasi kamera untuk pembelajaran media kreatif", imageSource: "https://www.pexels.com/photo/90946/",
    summary: "Belajar menulis cerita, mengolah gambar dan suara, serta menyampaikan pesan yang bermanfaat dan bertanggung jawab.",
    title: "Berkarya melalui media.", emphasis: "Menjaga adab dalam cerita.",
    purpose: "Minat pada gambar, suara, dan cerita diarahkan menjadi kecakapan berkomunikasi. Santri belajar memilih pesan, menyusun cerita, dan mempertimbangkan pengaruh karyanya bagi orang lain.",
    subjects: [
      ["Naskah dan penceritaan", "Menyusun gagasan, menulis naskah, dan mengenali cara bercerita sesuai pembaca atau penonton."],
      ["Produksi gambar dan suara", "Mempelajari fotografi, pengambilan video, tata suara, serta penyuntingan untuk menyampaikan cerita dengan jelas."],
      ["Literasi dan etika media", "Memahami tanggung jawab atas informasi, menghargai karya orang lain, dan menjaga adab dalam publikasi digital."],
    ],
    practice: "Film pendek, tulisan, rekaman audio, dan karya visual menjadi bentuk latihan untuk menyampaikan gagasan.",
  },
  {
    id: "wirausaha", name: "Wirausaha", program: "Entrepreneurship", art: "enterprise", icon: "compass",
    image: "/images/placeholders/wirausaha.jpg", imageAlt: "Foto ilustrasi kerja sama dalam usaha", imageSource: "https://www.pexels.com/photo/man-and-woman-near-table-3184465/",
    summary: "Mengenali kebutuhan masyarakat, menyusun rencana usaha, dan belajar mengelola keuangan dengan jujur serta amanah.",
    title: "Belajar membangun usaha.", emphasis: "Bekerja dengan amanah.",
    purpose: "Pendidikan wirausaha dimulai dari kepekaan terhadap kebutuhan orang lain. Santri mempelajari bagaimana sebuah gagasan dapat dikerjakan, diperhitungkan, dan dipertanggungjawabkan sebagai usaha yang memberi manfaat.",
    subjects: [
      ["Kebutuhan dan rencana usaha", "Mengamati kebutuhan, mengenali calon pengguna, serta menyusun gagasan produk atau layanan dan rencana pengerjaannya."],
      ["Keuangan dan pemasaran", "Mengenal pencatatan biaya, pendapatan, dan arus kas, serta belajar menawarkan produk dengan informasi yang jujur."],
      ["Etika perniagaan", "Memahami amanah, tanggung jawab, dan prinsip muamalah sebagai dasar hubungan dengan pembeli maupun rekan usaha."],
    ],
    practice: "Rancangan usaha, percobaan produk, pencatatan keuangan sederhana, dan pemaparan gagasan menjadi latihan mengambil keputusan.",
  },
  {
    id: "ulama-peradaban", name: "Ulama Peradaban", program: "Kajian Islam & Turats", art: "study", icon: "book",
    image: "/images/placeholders/ulama-peradaban.jpg", imageAlt: "Foto ilustrasi Al-Qur’an terbuka di atas penyangga kitab", imageSource: "https://www.pexels.com/photo/an-open-koran-book-8164516/",
    summary: "Mendalami bahasa Arab dan khazanah keilmuan Islam, serta belajar menyampaikan ilmu dengan adab dan kepekaan terhadap zaman.",
    title: "Mendalami khazanah Islam.", emphasis: "Mengabdi melalui ilmu.",
    purpose: "Tradisi belajar Islam menuntun santri untuk teliti memahami ilmu dan santun dalam perbedaan. Kajian diarahkan untuk menghubungkan pembacaan khazanah keilmuan dengan pertanyaan serta kebutuhan masyarakat.",
    subjects: [
      ["Bahasa Arab dan kitab", "Mempelajari dasar bahasa Arab sebagai bekal membaca dan memahami khazanah keilmuan Islam."],
      ["Al-Qur’an dan keilmuan Islam", "Mendalami kajian Al-Qur’an, fikih, dan literatur Islam dengan perhatian pada cara memahami sumber dan konteks pembahasannya."],
      ["Dakwah dan dialog", "Berlatih menjelaskan ilmu, menyampaikan nasihat, dan berdialog dengan santun serta mempertimbangkan kemaslahatan."],
    ],
    practice: "Pembacaan kitab, catatan kajian, diskusi, dan latihan penyampaian ilmu menjadi bagian dari pengembangan kecakapan santri.",
  },
] as const;

// Documented destinations of the 2025 cohort; this list is not an acceptance rate.
export const alumniDestinations = [
  "Universitas Indonesia", "Universitas Padjadjaran", "Universitas Brawijaya",
  "National Taiwan University", "HSE University, Moscow", "BINUS University", "UIN Syarif Hidayatullah Jakarta",
];
