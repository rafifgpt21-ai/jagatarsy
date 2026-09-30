# Foto ilustrasi kelas peminatan

Foto berikut adalah placeholder, bukan dokumentasi santri, pengajar, kegiatan, atau fasilitas Jagat ‘Arsy. Keterangan **Foto ilustrasi** tampil pada halaman `/kelas-khusus`, disertai tautan sumber. Gambar diunduh ke `public/images/placeholders/` agar tampilan tidak bergantung pada server foto pihak ketiga.

| Kelas | Berkas | Sumber |
| --- | --- | --- |
| Media Kreatif | `media-kreatif.jpg` | [Foto kamera, Pexels #90946](https://www.pexels.com/photo/90946/) |
| Wirausaha | `wirausaha.jpg` | [Foto kerja sama usaha, Pexels #3184465](https://www.pexels.com/photo/man-and-woman-near-table-3184465/) |
| Ulama Peradaban | `ulama-peradaban.jpg` | [Al-Qur’an terbuka, Alena Darmel, Pexels #8164516](https://www.pexels.com/photo/an-open-koran-book-8164516/) |

Referensi penggunaan: [Lisensi Pexels](https://www.pexels.com/license/). Foto tidak digunakan untuk mengisyaratkan dukungan orang dalam gambar terhadap pesantren.

## Mengganti dengan foto asli

1. Pilih dokumentasi yang memperlihatkan kegiatan relevan dan memiliki izin publikasi.
2. Simpan foto baru di `public/images/`, kemudian ubah `image`, `imageAlt`, dan `imageSource` pada `specialTracks` di `app/data/education.ts`.
3. Pada `app/kelas-khusus/page.tsx`, ganti keterangan “Foto ilustrasi · Pexels” dengan keterangan kegiatan dan sumber dokumentasi yang sebenarnya. Jangan mengganti keterangan sebelum foto asli tersedia.

Artwork kamera, toko, dan kitab terpisah dari foto, sehingga dapat tetap dipertahankan saat dokumentasi asli tersedia.
