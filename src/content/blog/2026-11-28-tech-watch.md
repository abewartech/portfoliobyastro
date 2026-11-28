---
title: "Tech Watch — Sabtu, 28 Nov 2026"
publishDate: 2026-11-28 07:21:00
description: "opengame bawa agen AI ke dunia game, skill Convex ketahuan kirim data diam-diam, dan skimmer kartu kredit via WebRTC muncul jelang Black Friday."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. opengame

[opengame](https://github.com/nexu-io/opengame) menyebut dirinya "Unity & Unreal untuk AI agents": sebuah platform untuk membangun dan me-remix lebih dari 100 game viral bersama 20+ coding agent seperti Claude Code, Codex, dan DeepSeek. Buat developer yang sudah memakai agen coding untuk web, ini menarik karena pola yang sama — agen menulis kode, manusia mengarahkan — kini merambah ke pengembangan game. Kalau selama ini bikin game terasa berat karena harus menguasai engine, opengame mencoba menurunkan hambatan itu dengan membiarkan agen yang menangani sebagian besar pekerjaan teknis.

## 2. deslop-please

[deslop-please](https://github.com/deterministic-machines/deslop-please) adalah perkakas baru dengan misi sederhana: mengembalikan kewarasan kode. Seiring makin banyaknya kode yang ditulis agen AI, hasilnya sering bertele-tele, berulang, atau sekadar "slop" yang lolos review. Tool ini menyasar masalah itu — merapikan output agen coding supaya tetap enak dibaca dan dirawat manusia. Relevan buat siapa pun yang sudah membiarkan agen menulis sebagian besar kodenya.

## 3. Prospero

[Prospero](https://github.com/skeeto/prospero) adalah harness coding AI yang native dan bebas bloat, dibangun dengan ImGui. Di tengah banyaknya tool AI coding yang makin berat dan penuh fitur, Prospero mengambil arah sebaliknya: ramping, cepat, dan langsung ke inti. Buat yang suka tool minimalis dan tidak mau menunggu loading lama, ini layak dilirik.

## 4. Convex Skills Bocorkan Data

Sebuah isu di repositori Convex mengungkap bahwa [skill Convex](https://github.com/convex/convex-backend-skill/issues/64) diam-diam mengirim ide aplikasi pengguna ke server remote tanpa pemberitahuan. Ini pengingat penting di era "agent skills": memasang skill pihak ketiga ke agen coding sama saja dengan memberi akses ke apa yang sedang dikerjakan. Sebelum memasang skill apa pun, ada baiknya memeriksa dulu apa yang sebenarnya dikirim keluar.

## 5. Skimmer Kartu via WebRTC

Menjelang Black Friday, [skrip pencuri kartu kredit yang memakai WebRTC](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ditemukan di situs belanja populer. Tekniknya memanfaatkan WebRTC untuk menyembunyikan eksfiltrasi data, sehingga lebih sulit terdeteksi dibanding skimmer klasik. Buat yang mengelola toko online — atau sekadar berbelanja online minggu ini — ini peringatan untuk memeriksa keamanan checkout dan waspada terhadap anomali di halaman pembayaran.

## 6. DeepCrossAttention

Google memperkenalkan [DeepCrossAttention](https://research.google/blog/supercharging-transformer-residual-connections/), koneksi residual baru untuk arsitektur Transformer yang diklaim mencapai kualitas model setara dengan kecepatan sampai 3x lebih cepat. Kalau terbukti di skala produksi, ini bisa menurunkan biaya training dan inference model besar secara signifikan — kabar baik buat siapa pun yang menjalankan atau men-deploy LLM sendiri.

## 7. Mixture-of-Loops Transformer

Paper arXiv [Mixture-of-Loops Transformer](https://arxiv.org/abs/2611.34923) mengusulkan arsitektur transformer yang memakai ulang layer bersama lewat loop campuran, untuk mendorong batas efisiensi dan ekspresivitas. Looped transformer sudah lama dikenal bisa menambah kapasitas tanpa menambah parameter, tapi dengan biaya efisiensi; pendekatan mixture-of-loops ini mencoba merapikan trade-off tersebut dengan memikirkan ulang mekanisme yang menghubungkan loop yang berdekatan.

## 8. Monitor AI Bisa Terkecoh

Paper arXiv [Attack Policy Selection can Mislead Monitor Evaluators](https://arxiv.org/abs/2611.34934) menunjukkan bahwa evaluasi monitor keamanan agen AI — classifier yang menandai perilaku berbahaya — bisa menyesatkan kalau kebijakan serangan yang dipakai sebagai proksi dipilih sembarangan. Temuan ini penting karena makin banyak sistem agen yang mengandalkan monitor otomatis sebagai lapisan keamanan: kalau cara mengujinya saja sudah bias, rasa aman yang didapat bisa palsu.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
