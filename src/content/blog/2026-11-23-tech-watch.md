---
title: "Tech Watch — Senin, 23 Nov 2026"
publishDate: 2026-11-23 07:21:00
description: "Percepat Python/Node dengan coding agent, AFFiNE self-host, dan panduan Local AI dengan Inkling 2 Mini."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. fast-anything

Repo baru ini (1.883 bintang dalam dua hari) menawarkan pendekatan pragmatis untuk performa: jangan rewrite seluruh aplikasi ke Rust, tapi profiling dulu aplikasi Python, Node, atau Ruby kamu, lalu port hanya 5% fungsi yang lambat — dibantu coding agent — dan buktikan perilakunya tetap sama. Tersedia sebagai plugin Claude Code/Codex dan server MCP, jadi cocok buat yang sudah pakai AI coding agent sehari-hari.

[EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything)

## 2. AFFiNE

AFFiNE kembali trending sebagai knowledge base generasi baru yang menggabungkan dokumen, whiteboard, dan database dalam satu kanvas. Berbeda dari Notion, AFFiNE open-source, privacy-first, dan bisa di-self-host — menarik buat yang mau catatan dan perencanaan proyek tetap di server sendiri.

[toeverything/AFFiNE](https://github.com/toeverything/AFFiNE)

## 3. app-store-compliance

Buat yang merilis aplikasi mobile (termasuk via React Native), repo ini mendokumentasikan 124 pola penolakan App Store dan Google Play beserta cara memperbaikinya, lengkap dengan pengecekan privacy manifest dan data safety. Ada juga 112 tenggat regulasi yang dilacak (EU AI Act, DSA, COPPA, aturan usia) plus skill untuk AI coding agent.

[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)

## 4. Panduan Local AI dengan Inkling, Qwen, dan Unsloth

Panduan pemula yang praktis: bangun "ChatGPT pribadi" gratis di rumah memakai Unsloth Desktop dan model open-weight seperti Qwen3.8-27B atau Inkling 2 Mini (rilis 17 November 2026, 26,4B parameter, Apache 2.0, konteks 1 juta token). Setup-nya sekitar 10–15 menit, dan ada fitur LAN sharing supaya satu rumah bisa memakai model yang sama tanpa langganan cloud.

[A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth)

## 5. Localcode

Agentic coding dengan model lokal, khusus Mac Apple Silicon. Localcode membaca dan mengedit file proyek, menjalankan test, build, dan Git sendiri, dengan 12 model pilihan (Gemma 4, Qwen 3.8, Inkling 2 Mini, dan lainnya) plus optimasi seperti speculative drafting dan prompt cache. Semua inferensi lokal; jaringan hanya dipakai untuk unduh model, web search, dan MCP server.

[mjwsolo/localcode](https://github.com/mjwsolo/localcode)

## 6. The Geometry of Lies

Paper arXiv ini meneliti cara mendeteksi kebohongan pada LLM lewat arah geometris di ruang representasi — label-free, dari role-play jujur vs menipu — dan mengujinya di skala 70B, termasuk kebohongan tentang pengetahuan. Hasilnya relevan buat siapa pun yang membangun agen AI yang harus bisa dipercaya jawabannya.

[The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in Large Language Models](https://arxiv.org/abs/2611.26545)

## 7. GEOHunter

Seiring mesin generatif (ChatGPT, Perplexity, dan sejenisnya) menjadi pintu masuk informasi, muncul industri baru: Generative Engine Optimization (GEO) — layanan yang menjual visibilitas di jawaban AI. Paper ini memetakan jaringan GEO di lapangan, bagaimana artikel promosi disebar lewat situs user-generated content untuk memengaruhi rekomendasi mesin generatif. Bacaan penting buat pemilik website dan toko online.

[GEOHunter: Mapping a Generative Engine Optimization Network in the Wild](https://arxiv.org/abs/2611.26564)

## 8. Peringatan Keamanan GL.iNet

GL.iNet mengonfirmasi pada 20 November 2026 bahwa celah di layanan cloud remote management mereka dieksploitasi untuk memasang malware di sejumlah router dan perangkat KVM. Jalur serangannya sudah diblokir, tapi perangkat yang sudah terinfeksi tidak sembuh sendiri. Cek proses `crond -i /tmp/.log` di router kamu (via LuCI Status → Processes atau `ps | grep tmp` lewat SSH) dan pasang firmware keamanan stabil yang dijadwalkan 22 November 2026.

[GL.iNet Security Notice 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
