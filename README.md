# JAGAT ‘ARSY

Redesain website Pesantren Peradaban Dunia JAGAT ‘ARSY dengan Next.js App Router.

## Jalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Halaman

- `/` — Beranda dan alur pengenalan sekolah
- `/tentang` — Filosofi, perjalanan, dan lokasi
- `/pendidikan` — Model pendidikan, SMP, SMA, RBL, dan Desain Cita-Cita
- `/kelas-khusus` — Media Kreatif, Wirausaha, dan Ulama Peradaban, dengan artwork masing-masing
- `/kehidupan-santri` — Kehidupan asrama, kegiatan, dan lingkungan pesantren
- `/outcomes` — Tujuan studi alumni dan karya santri
- `/cerita` — Berita, riset, dan kegiatan
- `/cerita/[slug]` — Cerita santri, kegiatan, dan alumni
- `/admissions` — Tahapan pendaftaran, persyaratan, FAQ, dan kunjungan pesantren

Panduan suara institusi, sumber fakta, serta batas informasi program tersedia di [docs/panduan-konten.md](docs/panduan-konten.md). Foto ilustrasi tiga kelas disimpan secara lokal; sumber dan petunjuk penggantiannya tersedia di [docs/foto-placeholder.md](docs/foto-placeholder.md).

Tautan konversi mengirim event `jagat:conversion` di browser dan meneruskan event yang sama ke `dataLayer` atau `gtag` bila analytics telah dikonfigurasi. Tambahkan tag pengukuran resmi di deployment untuk menyimpan data analitik.
