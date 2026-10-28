---
title: "Tech Watch — Rabu, 28 Oktober 2026"
publishDate: 2026-10-28 07:21:00
description: "OpenBot untuk AI teammates persisten, Ghostty 1.4, Genie 4 dari DeepMind, serta analitik GEO self-hosted untuk memantau trafik AI search."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. OpenBot

OpenBot adalah workspace desktop local-first untuk AI teammates yang persisten. Alih-alih percakapan sekali pakai, OpenBot memberi setiap agen workspace khusus, antrean tugas, berbagi file, kontrol browser, dan kolaborasi antar-agen — dan bisa menjalankan Codex, Claude, maupun Grok. Bagi developer yang sudah bekerja dengan banyak agen coding sekaligus, ini adalah pola kerja yang lebih rapi: tugas tidak hilang saat sesi ditutup, dan setiap agen punya konteksnya sendiri.

[Lihat repositori OpenBot](https://github.com/nightly-labs/openbot)

## 2. Postiz

Postiz memposisikan diri sebagai tool penjadwalan media sosial berbasis agen yang open-source. Untuk pengelola toko online dan situs konten, nilai utamanya adalah kemandirian: penjadwalan dan pengelolaan konten bisa berjalan di server sendiri, tanpa bergantung penuh pada platform SaaS. Ini sejalan dengan pola self-hosting yang sudah terbukti hemat dan fleksibel untuk proyek kecil-menengah.

[Lihat repositori Postiz](https://github.com/gitroomhq/postiz-app)

## 3. Ghostty 1.4

Ghostty, terminal modern yang dikenal cepat dan ringan, merilis versi 1.4. Rilis besar terminal seperti ini jarang terasa sepele: terminal adalah tempat developer menghabiskan sebagian besar harinya, sehingga peningkatan performa, rendering, dan fitur kecil sekalipun langsung terasa di workflow coding harian, baik di macOS maupun Linux.

[Baca catatan rilis Ghostty 1.4](https://ghostty.org/docs/install/release-notes/1-4-0)

## 4. Genie 4

DeepMind memperkenalkan Genie 4, generasi baru model simulasi dunia. Berbeda dengan model bahasa yang bekerja atas teks, model dunia belajar dari lingkungan interaktif — agen bisa berlatih, bereksperimen, dan memahami konsekuensi tindakan di dalam simulasi. Ini adalah arah penting bagi agen masa depan: bukan hanya menjawab, tetapi bertindak dengan pemahaman atas dunia yang dihadapinya.

[Baca pengumuman Genie 4](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)

## 5. LFM3

Liquid AI merilis LFM3, model yang dirancang untuk "setiap modalitas untuk kecerdasan terspesialisasi". Di tengah dominasi model raksasa generalis, LFM3 menawarkan alternatif yang lebih terarah: model yang dioptimalkan untuk tugas spesifik, berpotensi lebih hemat biaya dan lebih cocok untuk deployment on-device atau di infrastruktur sendiri.

[Baca pengumuman LFM3](https://www.liquid.ai/blog/lfm3)

## 6. GEOInflow

GEOInflow adalah analitik web dan AI crawler yang self-hosted, khusus untuk Generative Engine Optimization (GEO). Tool ini melacak pengunjung, rujukan dari AI search, log crawl, cakupan konten, dan konversi. Seiring makin banyak pengguna menemukan konten lewat jawaban AI, bukan lewat hasil pencarian klasik, memantau bagaimana AI crawler dan AI search memperlakukan situs sendiri menjadi kebutuhan baru — dan GEOInflow menawarkannya tanpa mengirim data ke pihak ketiga.

[Lihat repositori GEOInflow](https://github.com/yaojingang/GEOInflow)

## 7. Work Agents (arXiv)

Paper "Work Agents: Systems, Capabilities, and Optimization" menyajikan survei tentang bagaimana agen berevolusi dari sekadar menghasilkan informasi menjadi benar-benar mengeksekusi pekerjaan digital lintas tools, aplikasi, dan workflow. Paper ini memetakan kapabilitas yang dibutuhkan agen kerja dan cara mengoptimasinya — referensi yang berguna saat merancang agen yang tidak hanya pintar menjawab, tetapi andal menyelesaikan tugas dari ujung ke ujung.

[Baca paper di arXiv](https://arxiv.org/abs/2610.35845)

## 8. Reva (arXiv)

Paper "Reva: Real-Time Vulnerability Detection through Contextual Probing of Large Language Models" mengangkat masalah yang makin nyata: agen coding kini menghasilkan kode lebih cepat daripada kemampuan manusia mereview-nya. Reva mengusulkan deteksi kerentanan real-time dengan probing LLM secara kontekstual pada setiap fungsi baru — semacam lini pertahanan pertama sebelum kode sampai ke review manusia. Untuk siapa pun yang memakai agen coding di proyek produksi, pendekatan ini patut diperhatikan.

[Baca paper di arXiv](https://arxiv.org/abs/2610.35829)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
