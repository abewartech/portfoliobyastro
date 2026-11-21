---
title: "Tech Watch — Sabtu, 21 Nov 2026"
publishDate: 2026-11-21 07:21:00
description: "OpenSRE, dua tool clipping AI untuk Shorts, plus tiga paper arXiv soal serving LLM, post-training otonom, dan keamanan agen AI."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. OpenSRE

[OpenSRE](https://github.com/Tracer-Cloud/opensre) adalah agen open-source yang fokus pada keandalan CI/CD. Ia memantau pipeline, mendeteksi kegagalan, dan membantu menjaga proses deploy tetap berjalan — cocok buat yang mengelola banyak repo dan tidak mau pipeline merah luput dari perhatian.

## 2. AutoClip

[AutoClip](https://github.com/zhouxiaoka/autoclip) adalah tool AI open-source yang mengubah video panjang seperti podcast, wawancara, atau rekaman kuliah menjadi klip pendek vertikal. Alurnya sederhana: satu link, sekali klik, langsung dapat potongan siap tayang. Buat yang rutin memproduksi Shorts dari podcast, ini bisa memangkas waktu editing secara signifikan.

## 3. NeonClipping

[NeonClipping](https://github.com/iamajmeena/neonclipping) adalah mesin clipping lokal dan gratis: tempel link, lalu dapat klip 9:16 berkaption dalam waktu sekitar dua menit. Pendekatannya audio-first dan memakai LLM lokal, jadi tidak bergantung pada layanan berbayar dan datanya tetap di mesin sendiri.

## 4. TideCache

Paper [TideCache](https://arxiv.org/abs/2611.26619) membahas serving LLM berbasis arsitektur hybrid — gabungan global-attention dan bounded-state layer — yang kebutuhan cache-nya berbeda-beda tergantung panjang konteks dan tingkat konkurensi. Paper ini mengusulkan manajemen cache transparan dengan streaming per-layer agar serving model open-weight jadi lebih hemat memori. Relevan buat yang self-hosting LLM.

## 5. AutoMaster

[AutoMaster](https://arxiv.org/abs/2611.26510) mengusulkan post-training otonom di mana model yang sama berperan sebagai guru yang lebih baik untuk dirinya sendiri. Ide kuncinya: keberhasilan tugas saja tidak cukup menentukan perilaku apa yang harus diperkuat — trajektori guru yang sukses pun bisa mengandung asumsi tak berdasar, pengulangan yang tidak produktif, atau verifikasi dangkal. Paper ini menarik buat yang mengikuti perkembangan training dan fine-tuning model.

## 6. SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research

Paper [SoK](https://arxiv.org/abs/2611.26601) ini memetakan bagaimana agen berbasis LLM semakin mampu menemukan, memvalidasi, dan menambal kerentanan di software nyata. Buat software engineer, ini dua sisi mata uang: alat bantu keamanan yang makin kuat, sekaligus pengingat bahwa celah di kode sendiri bisa ditemukan dengan cara yang sama.

## 7. ROGUE-AI

[ROGUE-AI](https://arxiv.org/abs/2611.26553) mereplikasi insiden keamanan agen AI — kasus-kasus nyata di mana agen LLM menghapus file atau mengirim pembayaran atas nama penggunanya — lalu mengaudit dan menyelidiki bagaimana insiden itu terjadi. Bacaan penting buat siapa pun yang membangun agen dengan akses ke file, pembayaran, atau sistem produksi.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
