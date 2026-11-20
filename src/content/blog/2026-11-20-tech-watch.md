---
title: "Tech Watch — Jumat, 20 Nov 2026"
publishDate: 2026-11-20 07:21:00
description: "PHP 8.6 rilis, Firecrawl dan Onlook trending di GitHub, plus Gemini 4 Neon memuncaki benchmark coding."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. PHP 8.6 Rilis

PHP 8.6 resmi dirilis dengan sederet fitur baru dan perubahan perilaku. Bagi yang sehari-hari memakai Laravel, ini saat yang tepat untuk membaca catatan rilisnya: cek daftar deprecation dan breaking change kecil sebelum merencanakan upgrade, supaya tidak ada kejutan di production. [php.net](https://www.php.net/releases/8.6/en.php)

## 2. Firecrawl

Firecrawl adalah infrastruktur data open-source untuk agen AI: satu API untuk search dan scraping yang mengagregasi 550+ penyedia data. Proyek TypeScript ini naik 825 bintang dalam sehari. Kalau kamu membangun agen yang butuh riset web atau grounding dari sumber live, Firecrawl patut dicoba sebagai lapisan data. [GitHub](https://github.com/firecrawl/firecrawl)

## 3. Onlook

Onlook adalah developer tool open-source untuk desainer: editor visual yang berjalan di browser dan menghasilkan kode React/Next.js asli, bukan sekadar mockup. Tampil di Launch HN hari ini. Cocok untuk mempercepat iterasi UI tanpa bolak-balik antara Figma dan editor. [GitHub](https://github.com/onlook-dev/onlook)

## 4. NGINX Resmi di GitHub

Repositori resmi NGINX open source kini tersedia di GitHub. Buat yang self-hosting, ini memudahkan untuk memantau rilis, membaca changelog, dan berkontribusi langsung ke proyek yang selama ini jadi tulang punggung banyak deployment web. [GitHub](https://github.com/nginx/nginx)

## 5. Gemini 4 Neon No. 1

Gemini 4 Neon, model terbaru Google, memuncaki Models Engineering Index untuk tugas coding. Benchmark ini mengukur performa model pada pekerjaan engineering nyata, jadi hasilnya relevan buat yang memilih model untuk coding assistant sehari-hari. [Models Engineering Index](https://git-aarvin.github.io/mei/)

## 6. Ruby2Shell: RCE di Rails

Peneliti keamanan menemukan celah pre-auth remote code execution pada instalasi Ruby on Rails stok, yang dijuluki Ruby2Shell. Kalau ada aplikasi Rails yang kamu kelola atau hosting, segera periksa apakah versimu terdampak dan terapkan patch yang tersedia. [VeriLabs](https://verialabs.com/ruby2shell/)

## 7. Cap-and-Track

Paper arXiv ini membahas optimasi dispatch request inferensi LLM di tengah kapasitas server yang terus berubah. Rate dispatch yang tetap cepat menjadi basi saat armada serving berubah ukuran atau panjang output bervariasi. Desain Cap-and-Track menawarkan pendekatan asinkron yang adaptif — bacaan berguna buat yang menjalankan atau merancang layanan LLM sendiri. [arXiv](https://arxiv.org/abs/2611.24891)

## 8. Agentic Harness Engineering

Paper dari kategori cs.SE ini mengusulkan evolusi harness agen yang berpusat pada requirement, eksplisit maupun implisit. Bagi yang membangun AI agent atau tooling di sekitarnya, framework ini memberi cara sistematis untuk mengembangkan dan memvalidasi harness seiring kebutuhan pengguna berubah. [arXiv](https://arxiv.org/abs/2611.24924)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
