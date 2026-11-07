---
title: "Tech Watch — Sabtu, 7 Nov 2026"
publishDate: 2026-11-07 07:21:00
description: "Auto-Ontology dari NVIDIA, Gemini Omni 1.2 Flash, script klaim Google AI Pro 2 tahun gratis, dan paper soal cognitive debt dari vibe coding."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. NVIDIA Auto-Ontology

NVIDIA merilis [Auto-Ontology](https://github.com/NVIDIA/auto-ontology), framework Python untuk membangun lapisan reasoning berbasis graf semantik di atas data. Idenya sederhana tapi kuat: daripada agen AI menebak-nebak struktur data dari teks mentah, ia bekerja di atas ontologi — entitas dan relasinya dipetakan secara eksplisit, sehingga jawaban dan langkah agen jadi lebih konsisten.

Buat yang sedang membangun agen AI di atas database atau dokumen internal, ini layak dicoba. Pendekatan graph-based reasoning seperti ini membantu agen "paham" konteks data, bukan sekadar mengambil potongan teks yang mirip.

## 2. Google AI Pro 2 Tahun Gratis (Otomatis)

Repo [Google_AI_Pro_2Year_ZeroCost_Auto](https://github.com/worldonlyu/Google_AI_Pro_2Year_ZeroCost_Auto) sedang viral dengan hampir 2.900 star dalam dua hari. Isinya script Python yang mengotomasi proses klaim Google AI Pro gratis selama dua tahun.

Praktisnya, ini cara murah untuk mendapatkan akses ke model-model Google kelas atas beserta kuotanya. Tentu perlu dicek sendiri syarat dan ketentuannya — tapi sebagai tren, ini menunjukkan besarnya permintaan akses LLM premium gratis di kalangan developer.

## 3. Gemini Omni 1.2 Flash

Google memperkenalkan [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/), model multimodal baru untuk developer. Sebagai penerus lini Flash, model ini menangani teks, suara, dan gambar dalam satu model yang sama, dengan latensi rendah khas Flash.

Buat yang membangun aplikasi voice atau multimodal, ini kandidat kuat untuk dicoba — terutama karena Flash selama ini dikenal sebagai sweet spot antara harga dan kecepatan di keluarga Gemini.

## 4. Replit Bangun Ulang Sandbox dengan microVM

Replit menulis ulang mesin sandbox-nya dengan microVM di [artikel ini](https://frontier.replit.com/sandbox-engine-microvms-part-1/). Sandbox adalah tempat kode hasil agen AI dieksekusi — dan Replit memutuskan arsitektur lama sudah tidak cukup untuk beban agen coding modern.

Hasilnya: isolasi lebih kuat antar sesi, startup lebih cepat, dan eksekusi kode agen yang lebih aman. Buat yang membangun atau self-hosting environment eksekusi kode AI, pendekatan microVM ala Firecracker ini patut dipelajari.

## 5. Arsitektur Penyimpanan Git Baru GitHub

GitHub membongkar [arsitektur penyimpanan Git barunya](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) dalam sebuah engineering blog yang cukup dalam. Di skala GitHub, menyimpan jutaan repository Git dengan efisien bukan soal disk saja — melainkan deduplikasi, caching, dan bagaimana objek Git diakses jutaan kali per hari.

Menarik dibaca buat yang self-host Git atau sekadar penasaran bagaimana infrastruktur di balik `git clone` bekerja pada skala raksasa.

## 6. Cognitive Tours (arXiv)

Paper [Cognitive Tours: Making Understanding a Deliverable in AI-Assisted Development](https://arxiv.org/abs/2611.08456) membahas dua bentuk utang baru dari era vibe coding: *cognitive debt* (kita tidak lagi memahami kode yang kita miliki) dan *intent debt* (alasan di balik keputusan desain hilang karena tidak pernah ditulis).

Solusi yang diusulkan: jadikan "pemahaman" sebagai deliverable — agen AI tidak hanya menulis kode, tapi juga menghasilkan tur kognitif yang menjelaskan sistem. Relevan banget buat siapa pun yang sudah membiarkan coding agent menulis sebagian besar codebase-nya.

## 7. Looseleaf

[Looseleaf](https://github.com/kevintngo/looseleaf) adalah 123 komponen React bergaya coretan tangan, dibangun di atas shadcn/ui dan tersedia lewat registry. Estetikanya mengingatkan pada gaya Excalidraw — kasual, manusiawi, dan cocok untuk landing page atau dashboard yang tidak mau terlihat terlalu kaku.

Buat side project React berikutnya, ini cara cepat tampil beda tanpa mendesain komponen dari nol.

## 8. Kiri

[Kiri](https://github.com/libracoder/kiri) adalah runtime container kecil dan cepat yang berjalan di macOS, Windows, dan Linux. Ditulis dengan Rust, ia menawarkan alternatif ringan untuk menjalankan container tanpa daemon berat.

Buat yang self-hosting di server sendiri atau di laptop, runtime sekecil ini menarik — terutama di mesin yang tidak butuh seluruh fitur Docker, tapi tetap ingin isolasi container.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
