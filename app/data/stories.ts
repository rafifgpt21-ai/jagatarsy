export const stories = {
  "teras-ngarasy": {
    category: "Kajian pesantren",
    date: "1 Maret 2026",
    title: "Teras Ng’Arasy: kajian Ramadan dan pembinaan jiwa",
    description: "Kajian Ramadan di Aula Sidrotul Muntaha mengajak santri menjaga perhatian, memperbaiki niat, dan memahami tawakal dalam keseharian.",
    image: "/images/terras-ramadan.jpg",
    alt: "Poster Kajian Ramadan Teras Ng’Arasy di Pesantren Jagat ‘Arsy",
    source: "https://jagatarsy.sch.id/strategi-pesantren-jagat-arsy-cetak-generasi-waliyullah-di-era-digital-melalui-teras-ngarasy/",
    paragraphs: [
      "Dalam rangkaian Kajian Ramadan Teras Ng’Arasy, santri berkumpul di Aula Sidrotul Muntaha untuk mengikuti pembinaan spiritual bersama pimpinan pesantren. Kajian yang didokumentasikan pada Maret 2026 ini membicarakan perhatian, niat, serta sikap menghadapi keinginan dan ujian dalam kehidupan.",
      "Santri diajak mempertimbangkan kebiasaan di tengah arus informasi digital. Pembahasan tentang ketenangan hati dan tawakal mengingatkan bahwa ikhtiar perlu disertai kesadaran untuk menyerahkan hasil kepada Allah.",
      "Selain berlangsung secara tatap muka, kajian disiarkan melalui Facebook dan TikTok. Dokumentasi tersebut memperlihatkan cara pesantren menggunakan media untuk memperluas penyampaian ilmu dan nasihat.",
    ],
  },
  "research-based-learning": {
    category: "Riset santri",
    date: "2 Desember 2025",
    title: "RBL: santri SMP belajar meneliti dan memaparkan temuan",
    description: "Santri kelas 9 SMP menjalani penelitian dan presentasi dalam kegiatan Research-Based Learning di Jagat ‘Arsy.",
    image: "/images/rbl-santri.jpg",
    alt: "Santri SMP mempresentasikan hasil penelitian di Pesantren Jagat ‘Arsy",
    source: "https://jagatarsy.sch.id/research-based-learning-rbl-smp-metode-pesantren-jagatarsy-mencetak-generasi-ulul-albab/",
    paragraphs: [
      "Kegiatan Research-Based Learning (RBL) memperkenalkan santri kelas 9 SMP pada pekerjaan penelitian. Mereka menyusun pertanyaan, membaca informasi yang berkaitan, mengolah temuan, dan menjelaskan hasilnya dalam presentasi.",
      "Proses tersebut memerlukan ketelitian. Santri belajar membedakan pendapat dan bukti, menyusun laporan yang dapat dipahami, serta memberikan alasan atas kesimpulan yang disampaikan.",
      "Presentasi menjadi kesempatan untuk melatih keberanian berbicara sekaligus mendengarkan. Pertanyaan dan masukan dari pendamping membantu santri melihat kembali penelitiannya dan memperbaiki cara menyampaikan ilmu.",
    ],
  },
  "antologi-guru": {
    category: "Literasi santri",
    date: "1 Desember 2025",
    title: "Guruku; Kisahmu Inspirasiku: antologi santri kelas 8",
    description: "Santri kelas 8 menulis kisah tentang para guru sebagai persembahan pada Hari Guru Nasional 2025.",
    image: "/images/antologi-cover.jpg",
    alt: "Sampul antologi Guruku; Kisahmu Inspirasiku karya santri kelas 8 Jagat ‘Arsy",
    source: "https://jagatarsy.sch.id/karya-perdana-santri-jagat-arsy-persembahan-spesial-di-hari-guru-nasional/",
    paragraphs: [
      "Pada Hari Guru Nasional 2025, santri kelas 8 SMP Jagat ‘Arsy menyusun antologi berjudul “Guruku; Kisahmu Inspirasiku”. Buku ini menghimpun cerita tentang para pendidik dari pengalaman santri selama belajar bersama mereka.",
      "Kenangan sehari-hari menjadi bahan tulisan: peristiwa yang mengundang senyum, pengalaman yang mengharukan, dan pelajaran yang membekas. Melalui cerita, santri menyampaikan rasa terima kasih kepada guru.",
      "Penyusunan antologi juga menjadi latihan literasi. Santri belajar memilih pengalaman, merangkai kalimat, dan membagikan tulisan kepada pembaca. Karya bersama ini mempertemukan keterampilan menulis dengan penghargaan kepada pendidik.",
    ],
  },
  "3-rasa-1-cinta": {
    category: "Silaturahmi alumni",
    date: "14 November 2025",
    title: "3 Rasa 1 Cinta Jilid 5: silaturahmi keluarga Jagat ‘Arsy",
    description: "Pertemuan pada 18 Oktober 2025 menyambung silaturahmi alumni, santri, dan keluarga pesantren.",
    image: "/images/community-2025.jpg",
    alt: "Alumni dan santri berkumpul dalam kegiatan 3 Rasa 1 Cinta Jagat ‘Arsy",
    source: "https://jagatarsy.sch.id/3-rasa-1-cinta-jilid-5/",
    paragraphs: [
      "Alumni Pesantren Peradaban Dunia Jagat ‘Arsy menyelenggarakan 3 Rasa 1 Cinta Jilid 5 pada Sabtu, 18 Oktober 2025. Kegiatan ini mempertemukan alumni, santri, dan keluarga pesantren.",
      "Pertemuan alumni menjadi kesempatan untuk bertukar kabar dan mengenang masa belajar. Hubungan yang dibangun selama menjadi santri diteruskan melalui silaturahmi dengan teman, guru, dan adik kelas.",
      "Dokumentasi kegiatan ini dipublikasikan pesantren pada 14 November 2025. Catatan tersebut menjadi bagian dari kabar keluarga Jagat ‘Arsy setelah para santri menempuh pendidikan lanjutan dan menjalani kesibukan masing-masing.",
    ],
  },
} as const;

export type StorySlug = keyof typeof stories;
