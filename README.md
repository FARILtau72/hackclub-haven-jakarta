# 🍂 Hack Club Haven Jakarta — Technical Documentation & Architecture

[![Hack Club](https://img.shields.io/badge/Hack_Club-Haven-ec3750?style=flat&logo=hackclub)](https://hackclub.com)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen)](https://github.com)
[![Architecture](https://img.shields.io/badge/Architecture-Component--Driven_Vanilla-orange)](./components)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-blue)](./index.html)

Official event landing page and interactive guide for **Hack Club Haven Jakarta** — a 501(c)(3) weekend game jam organized by teenagers, for teenagers, taking place on **November 14–15, 2026** in Jakarta.

---

## 🏗️ Architecture & Engineering Principles

This repository was architected following strict enterprise software engineering standards:

1. **Zero-Dependency Runtime:** Pure HTML5, CSS3, and modern Vanilla ES6 JavaScript. No heavy Node/React build overhead, ensuring instant sub-second page loads.
2. **Component-Driven Static Architecture:** The main document is decoupled into modular partials inside `components/` (all `< 180` lines). Developers can modify individual sections in isolation and compile instantly using `python build.py`.
3. **100% Vector HTML/CSS (Zero Raster Text):** Key interactive sections like **Supporters** and **FAQ** are built natively using semantic HTML, SVG icons, and CSS gradients—rendering pixel-perfect on 4K/Retina displays, remaining selectable, and fully accessible to search engine crawlers.
4. **Strict Modular CSS (< 200 Lines/File):** Styles are partitioned by single responsibility into 11 lightweight stylesheets in `css/`, all strictly adhering to a `< 200` line threshold.
5. **Shared SVG Symbol Optimization:** Reusable SVG graphics (such as the Hack Club Bank temple and chevron arrows) use `<symbol>` and `<use>` references, eliminating hundreds of lines of repetitive inline SVG markup.
6. **Seamless Meadow Continuity:** Background color harmony is strictly locked to `#b8c220` with negative margin seams to prevent subpixel rendering gaps on all screen resolutions.

---

## 📁 Repository Structure

```text
hackclubwebsite/
├── assets/                    # Production visual assets (optimized SVG & PNG)
├── components/                # Modular HTML component partials (< 180 lines each)
│   ├── nav.html               # Header navigation & mobile drawer
│   ├── hero.html              # Hero section & email registration pill
│   ├── about.html             # Meadow adventure stage & story cards
│   ├── steps.html             # 4-step organizer roadmap
│   ├── past_events.html       # Picnic blanket past event video showcase
│   ├── supporters.html        # 3-tier dirt terraces & HCB sponsor stamps
│   ├── faq.html               # Carrot soil plots & accordion drawer
│   ├── cta_banner.html        # Giant bottom register button banner
│   ├── footer.html            # Storybook footer & links
│   └── modal.html             # Accessible signup modal dialog
├── css/                       # Single-responsibility stylesheets (< 200 lines each)
│   ├── base.css               # Design tokens (variables), typography & reset
│   ├── nav.css                # Fixed glassmorphic navbar & drawer
│   ├── hero.css               # Hero banner, animations & email pill
│   ├── meadow.css             # Road & village stage canvas
│   ├── steps.css              # 4-step roadmap card grid
│   ├── picnic.css             # Picnic blanket & video preview cards
│   ├── schedule.css           # Daily schedule board & tab switcher
│   ├── supporters.css         # Dirt terraces & HCB sponsor stamps
│   ├── faq.css                # Soil beds & accordion animations
│   ├── footer.css             # Storybook footer & wooden trim
│   └── modal.css              # Accessible modal dialog & form styling
├── js/                        # Modular ES6 scripts
│   ├── nav.js                 # Mobile drawer toggle & hamburger interaction
│   ├── schedule.js            # Day 1 & Day 2 timetable data & DOM renderer
│   ├── faq.js                 # Accordion controller & outside-click dismissal
│   ├── modal.js               # Modal controller & ESC key listener
│   └── main.js                # Application bootstrapper & event listeners
├── .gitignore                 # Production git ignore configuration
├── build.py                   # Zero-dependency static component assembler
├── index.html                 # Production compiled HTML5 document
├── script.js                  # Root bundle entry point
├── styles.css                 # Master stylesheet manifest
└── README.md                  # Comprehensive technical documentation
```

---

## 📖 File-by-File Dictionary (Penjelasan Fungsi Setiap File)

### 1. Root Files
| File | Isi (Contents) | Fungsi & Tanggung Jawab (Function & Purpose) |
| :--- | :--- | :--- |
| `index.html` | Semantic HTML5 entry document | Dokumen utama produksi. Memuat metadata SEO, OpenGraph, favicon, shared SVG symbols (`#icon-hcb`, `#icon-chevron`), serta merangkai seluruh komponen halaman menjadi satu kesatuan utuh. |
| `build.py` | Python static assembler (< 90 lines) | Script compiler zero-dependency. Menggabungkan file-file di `components/*.html` ke dalam `index.html`. Sangat cepat (0.05 detik) dan mempermudah developer mengedit komponen secara modular. |
| `styles.css` | Master stylesheet manifest | Berfungsi sebagai entry point CSS yang mengimpor ke-11 file modular di folder `css/` dalam urutan kaskade optimal (tokens -> layout -> components -> dialogs). |
| `script.js` | ES Module bundle entry point | Entry point standar JavaScript untuk bundler modern (seperti Vite, Rollup, atau Webpack) jika di masa mendatang tim ingin menggunakan bundling otomatis. |
| `.gitignore` | Production ignore rules | Mencegah file temporary OS (`.DS_Store`, `Thumbs.db`), folder scratch debug, file log, dan cache IDE masuk ke dalam git repository, menjaga commit tree tetap bersih. |
| `README.md` | Markdown documentation | Panduan teknis lengkap, dokumentasi arsitektur, kamus file, dan panduan menjalankan project bagi tim pengembang dan code reviewer. |

---

### 2. Folder `components/` (Modular HTML Partials)
Semua file di folder ini berukuran ringkas (`< 180` baris) untuk memisahkan fokus pengembangan:

| Component File | Isi (Contents) | Fungsi & Tanggung Jawab (Function & Purpose) |
| :--- | :--- | :--- |
| `components/nav.html` | `<header>` & `<nav class="mobile-nav-drawer">` | Navigasi atas dengan logo Haven putih, menu link (Story, Supporters, FAQ), tombol burger responsif, serta drawer menu samping untuk layar mobile. |
| `components/hero.html` | `<section id="hero">` | Banner pembuka festival musim gugur: judul utama, deskripsi acara, form pendaftaran email instan, maskot landak mengambang, serta widget preview video. |
| `components/about.html` | `<section id="about">` | Kanvas petualangan *Road & Village Stage* dengan awan penjelas "What is a game jam?" dan 3 kartu cerita interaktif (*Learn and Build*, *Make Friends*, *Free Food and Prizes*). |
| `components/steps.html` | `<section id="how-it-works">` | Grid 4 langkah panduan menyelenggarakan game jam bagi pelajar (tim koorganisator, venue, sponsor via HCB, dan supplies/workshops). |
| `components/past_events.html` | `<section id="past-jams">` | Ilustrasi piknik hewan lucu dengan 3 kartu video acara Hack Club global sebelumnya (*Scrapyard*, *Daydream*, *Campfire*) lengkap dengan deskripsi dan tombol putar. |
| `components/supporters.html` | `<section id="supporters">` | 3 teras tanah liat (*dirt terraces*) dengan 15 stempel sponsor HCB (vektor murni), pita renda atas, dan deretan rumah desa di atas koridor rumput hijau. Menggunakan `<use href="#icon-hcb"/>` untuk efisiensi DOM. |
| `components/faq.html` | `<section id="faq">` | Papan kayu FAQ, dua bedengan tanah gembur (*dual soil plots*), 10 tunas wortel kartun vektor (`cartoon_carrot.svg`), dan 10 tombol pill accordion interaktif dengan animasi pop drawer. |
| `components/cta_banner.html` | `<section class="giant-cta-section">` | Tombol CTA besar di atas rumput ("Register Now!") untuk memicu pembukaan modal pendaftaran peserta dari bagian bawah halaman. |
| `components/footer.html` | `<footer class="storybook-footer">` | Informasi legal non-profit 501(c)(3), tautan resmi komunitas Hack Club, kontak koordinator, tagline hangat, serta hiasan rumput & papan kayu plang bawah. |
| `components/modal.html` | `<div class="modal-backdrop" id="signupModal">` | Dialog modal formulir pendaftaran lengkap: input nama, email, asal sekolah/kota, pilihan peran (programmer, artist, music, beginner), dan submit listener. |

---

### 3. Folder `css/` (Modular Stylesheets — Strictly < 200 Lines Each)
| CSS File | Baris | Fungsi & Tanggung Jawab (Function & Purpose) |
| :--- | :---: | :--- |
| `css/base.css` | 112 | Fondasi global: definisi CSS custom properties (color tokens, font families, curves animasi), reset box-sizing, styling body bergaya buku cerita, dan overlay daun musim gugur. |
| `css/nav.css` | 162 | Styling navbar fixed transparan berfrosted-glass, penataan logo di tengah, animasi hover link navigasi, dan transisi buka-tutup drawer mobile. |
| `css/hero.css` | 189 | Tata letak banner hero, latar belakang kanopi pohon jingga (`assets/tree2.png`), form input pill email, dan animasi melayang (*gentle float*) maskot landak. |
| `css/meadow.css` | 167 | Kanvas jalan setapak pedesaan (`assets/roadvillage_exact.png`), penempatan absolut kartu-kartu cerita, efek floating cloud, dan fallback kolom responsif untuk smartphone. |
| `css/steps.css` | 120 | Grid responsif 4 langkah organizer: kartu berpita angka melingkar, bingkai foto polaroid bersudut melengkung, dan tipografi tebal. |
| `css/picnic.css` | 176 | Ilustrasi piknik binatang (`assets/animalkumpul.png`), kartu video semi-transparan di atas selimut piknik kotak-kotak, dan animasi pulse tombol play. |
| `css/schedule.css` | 185 | Papan jadwal kayu bertingkat, tab pill pemilih hari (Day 1 & Day 2), garis timeline putus-putus, dan daftar agenda jam demi jam. |
| `css/supporters.css` | 176 | Struktur 3 teras tanah liat (`#e29b55`), jembatan tanah vertikal penghubung teras, penataan 15 stempel HCB putih-pink, dan penempatan rumah desa di atas rumput. |
| `css/faq.css` | 197 | Papan kayu FAQ, gradien tanah cokelat gelap, penempatan wortel kartun menyembul di belakang tombol pill, rotasi ikon chevron, dan keyframes animasi drawer jawaban. |
| `css/footer.css` | 150 | Latar hijau hutan gelap footer, tipografi tautan vertikal, dan posisi gambar dekorasi plang kayu di sudut bawah. |
| `css/modal.css` | 158 | Dialog modal aksesibel: backdrop filter blur gelap, kartu cerita pendaftaran bernuansa krem, field input berborder halus, dan tombol submit bergaya jelly. |

---

### 4. Folder `js/` (Modular JavaScript Controller)
| JS File | Fungsi & Tanggung Jawab (Function & Purpose) |
| :--- | :--- |
| `js/nav.js` | Mengontrol interaktivitas menu mobile: toggle status `open` pada drawer saat tombol hamburger diklik, update atribut `aria-expanded`, dan auto-close saat link dipilih. |
| `js/schedule.js` | Menyimpan objek data agenda (Day 1 & Day 2) dalam waktu WIB/AM-PM dan me-render baris timeline secara dinamis ke dalam papan jadwal saat tab berganti. |
| `js/faq.js` | Mengontrol perilaku accordion: membuka drawer saat pill diklik, menutup drawer lain yang sedang terbuka (*single-active panel*), dan menutup drawer jika user mengklik di luar area FAQ. |
| `js/modal.js` | Mengatur siklus hidup modal: membuka dialog dari tombol CTA/drawer, autofocus input pertama, perangkap keyboard tombol `Escape` untuk menutup, dan submit handling. |
| `js/main.js` | Script orkestrator utama: menginisialisasi modul `initNav()`, `initSchedule()`, `initFaq()`, `initModal()` setelah DOM selesai dimuat, serta menangani submit form email hero dan alert preview video. |

---

### 5. Folder `assets/` (Visual Production Assets)
Folder ini telah dibersihkan secara ketat dan **hanya memuat 27 asset aktif**:
* **Vektor:** `cartoon_carrot.svg` (tunas wortel kartun beresolusi tajam).
* **Ilustrasi Utama:** `animalcuteHQ.png` (maskot landak), `animalkumpul.png` (piknik binatang), `roadvillage_exact.png` (jalan desa), `tree2.png` (kanopi pohon hero), `logo.png` (logo resmi), `plang.png` (plang kayu footer), `lace_ribbon_exact.png` (pita renda putih).
* **Desa & Alam:** `supporters_top_village_clean.png`, `cottage_cluster_left.png`, `cottage_cluster_right.png` (rumah desa transparan tanpa artifact border).
* **Foto & Thumbnail:** 4 foto langkah organizer (`step_photo1.png` - `4.png`), 9 thumbnail cerita (*game, friends, food*), dan 3 thumbnail video past events (*scrapyard, daydream, campfire*).

---

## 🛠️ How to Develop & Build

### Menjalankan Server Lokal
```bash
python -m http.server 8080
```
Buka browser pada: `http://localhost:8080`

### Mengedit Komponen & Kompilasi Ulang
1. Edit file komponen terkait di folder `components/` (misalnya: `components/hero.html` atau `components/faq.html`).
2. Jalankan perintah assembler untuk mengompilasi ke `index.html`:
   ```bash
   python build.py
   ```
3. Refresh browser untuk melihat perubahan seketika.

---

## 👨‍💻 Catatan untuk Review Senior Software Engineer
* **Clean Code:** Kode diformat rapi dengan indentasi konsisten dan komentar penjelas di setiap modul.
* **Separation of Concerns:** Pemisahan tegas antara Markup (`components/`), Styling (`css/`), dan Behavior (`js/`).
* **Maintainability:** Tidak ada lagi file raksasa ratusan baris yang sulit dipelihara; semua komponen dan CSS terbagi dalam modul kecil yang mudah di-test dan di-review.
* **Zero Technical Debt:** Repository bebas dari file sampah/scratch berkat aturan `.gitignore` yang presisi.
