---
title: "Tech Watch — Senin, 2 Nov 2026"
publishDate: 2026-11-02 07:21:00
description: "FreeToken untuk model besar lokal, Handy untuk speech-to-text offline, AiSOC untuk SOC AI self-host, plus tutorial agen AI dan paper safety multi-turn."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. FreeToken

FreeToken membawa serving model skala datacenter ke desktop: model-model besar bisa dijalankan secara lokal dengan cepat dan efisien. Bagi abe yang gemar berburu API LLM gratis, ini jalur menarik untuk memangkas ketergantungan pada API berbayar — selama hardware desktop memadai, inferensi bisa jalan sendiri tanpa antrean rate limit provider.

[FreeToken di GitHub](https://github.com/FlashML-org/FreeToken)

## 2. Handy

Handy adalah aplikasi speech-to-text open-source gratis yang bekerja sepenuhnya offline. Tidak ada audio yang dikirim ke server, jadi cocok untuk dikte saat coding, mencatat ide, atau mentranskrip rekaman tanpa khawatir privasi.

[Handy di GitHub](https://github.com/cjpais/Handy)

## 3. AI Engineering Hub

Repo tutorial mendalam tentang LLM, RAG, dan aplikasi agen AI di dunia nyata ini sudah mengumpulkan puluhan ribu star. Materinya cocok sebagai referensi saat abe membangun agen atau fitur RAG untuk proyek full-stack, karena contohnya berangkat dari kasus nyata, bukan sekadar teori.

[AI Engineering Hub di GitHub](https://github.com/patchy631/ai-engineering-hub)

## 4. AiSOC

AiSOC adalah Security Operations Center berbasis AI yang open-source dan bisa di-self-host tanpa API key sama sekali. Ia menggabungkan alert fusion, triase agen LLM, investigasi berbasis MITRE ATT&CK, dan ledger keputusan yang bisa diputar ulang untuk setiap langkah agen — kombinasi yang menarik untuk mengamankan server sendiri seperti siege, dengan jejak audit yang transparan.

[AiSOC di GitHub](https://github.com/beenuar/AiSOC)

## 5. Craft Anything

Craft Anything berjanji membantu memahami cara kerja software apa pun, lalu membuat versimu sendiri. Buat abe yang sering membedah aplikasi dan layanan, tool semacam ini bisa mempercepat riset: dari memahami arsitektur kompetitor sampai memprototipe alternatifnya.

[Craft Anything di GitHub](https://github.com/storytold/craft-anything)

## 6. MiniCPM-OCR

MiniCPM-OCR dari OpenBMB adalah model OCR yang cepat dan akurat, plus fitur penilaian kebenaran hasil OCR-nya sendiri. Kemampuan menilai kepercayaan hasil ini penting saat OCR dipakai di pipeline otomatis — hasil yang meragukan bisa ditandai, bukan diam-diam lolos ke tahap berikutnya.

[MiniCPM-OCR di GitHub](https://github.com/OpenBMB/MiniCPM-OCR)

## 7. pixelfx

pixelfx mengumpulkan 244 efek pixel art, masing-masing hanya sepotong kode kecil, plus skill Claude Code untuk membuat efek sendiri. Buat proyek game dan visual, koleksi ini bisa jadi sumber inspirasi cepat — efek tinggal dicomot, dimodifikasi, dan dipakai.

[pixelfx di GitHub](https://github.com/patch-gg/pixelfx)

## 8. ShallowDefend (arXiv)

Paper ini membahas cara memanfaatkan safety alignment yang dangkal untuk membangun defender multi-turn: serangan yang didistribusikan ke banyak giliran percakapan masih sering lolos dari alignment biasa, dan ShallowDefend menawarkan pendekatan untuk menutup celah itu. Relevan buat siapa pun yang membangun agen percakapan yang berhadapan langsung dengan pengguna.

[ShallowDefend di arXiv](http://arxiv.org/abs/2610.40627v1)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
