---
title: "Tech Watch — Kamis, 19 November 2026"
publishDate: 2026-11-19 07:21:00
description: "RCE kritis di Nginx, Gemini 4 Neon, model open DaisyRose-27B, dan paper yang membuktikan skor benchmark coding belum tentu berarti kerja nyata."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. RCE tanpa auth di Nginx (HTTP/2)

Wiz mengungkap kerentanan remote code execution tanpa autentikasi di Nginx lewat HTTP/2 — kabar buruk buat siapa pun yang self-hosting, karena Nginx ada di balik hampir semua layanan web modern. Kalau kamu menjalankan server sendiri, entah di VPS seperti siege atau di homelab, ini prioritas nomor satu hari ini: cek versi Nginx-mu dan patch segera sebelum ada exploit publik yang beredar luas.

[Baca laporan Wiz](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities)

## 2. Gemini 4 Neon

Google memperkenalkan Gemini 4 Neon, model baru di keluarga Gemini. Detail benchmark lengkapnya masih perlu dicek, tapi peluncuran ini menandakan persaingan model frontier makin ketat — dan buat pengguna sehari-hari, artinya ada lagi opsi model kuat buat coding dan agen AI. Patut dicoba begitu tersedia di AI Studio atau API.

[Pengumuman Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)

## 3. DaisyRose-27B

Radixark merilis DaisyRose-27B, model open berbasis Qwen3 8B yang dilatih dengan reinforcement learning di 1.200 tugas — skornya di Terminal-Bench 4.1 melonjak dari 5,6% ke 12%. Kenaikan dua kali lipat dari RL murni di tugas terminal ini menarik: model open seukuran ini makin layak dipakai sebagai coding agent lokal, tanpa harus bergantung ke API berbayar.

[Baca di Radixark](https://www.radixark.com/blog/daisyrose-27b)

## 4. Microsoft rilis 7 model baru

Di Ignite 2026, Microsoft mengumumkan tujuh model baru dengan positioning harga-performa yang skalabel. Buat developer, ini berarti makin banyak pilihan API LLM murah yang bisa dipakai buat fitur AI di aplikasi — worth dicoba buat membandingkan biaya dan kualitas dengan model yang sudah kamu pakai.

[Pengumuman Microsoft Ignite](https://microsoft.ai/news/microsoft-ignite-2026/)

## 5. LLM-assisted reverse engineering

Artikel praktis tentang memakai LLM untuk membantu reverse engineering binary — mulai dari membaca decompile, melacak alur fungsi, sampai memahami protokol. Buat yang sedang mendalami RE (seperti pekerjaan di libUE4 dan game client), pendekatan ini bisa mempercepat analisis yang biasanya makan waktu berjam-jam membaca assembly mentah.

[Baca artikelnya](https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering)

## 6. Skor benchmark coding ≠ kerja nyata

Paper arXiv terbaru menguji klaim para pembuat coding model: model yang skor benchmark-nya lebih tinggi ternyata belum tentu menyelesaikan lebih banyak pekerjaan nyata. Studi ini memanfaatkan momen langka — embargo ekspor AS pada 12 Juni 2026 — sebagai eksperimen alami. Pesannya jelas buat developer: jangan memilih coding model cuma dari angka benchmark, tapi dari seberapa banyak pekerjaan yang benar-benar selesai di tanganmu.

[Baca paper di arXiv](https://arxiv.org/abs/2611.23216)

## 7. Ambient LLMs

Paper ini menawarkan cara SFT (supervised fine-tuning) yang hemat data lewat temperature matching — teknik yang membuat fine-tuning model bahasa jadi lebih murah dan efisien. Relevan buat siapa pun yang ingin menyesuaikan model kecil untuk kebutuhan spesifik tanpa dataset raksasa.

[Baca paper di arXiv](https://arxiv.org/abs/2611.23229)

## 8. Fine-tuning Gemma 4 di laptop

Peneliti menunjukkan fine-tuning model Gemma 4 Edge untuk kode MATLAB (signal processing) memakai SFT dan QLoRA — dan semuanya jalan di iGPU laptop. Ini bukti lain bahwa fine-tuning lokal makin terjangkau: tidak perlu GPU server mahal untuk menyesuaikan model kecil dengan domain spesifik.

[Baca paper di arXiv](https://arxiv.org/abs/2611.23205)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
