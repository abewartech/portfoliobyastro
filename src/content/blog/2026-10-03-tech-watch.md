---
title: "Tech Watch — Sabtu, 3 Okt 2026"
publishDate: 2026-10-03 07:21:00
description: "Caveman pangkas 65% token coding agent, openrig bangun tim AI sendiri, dan tool LLM lokal ds4 dari pembuat Redis."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. caveman — ngomong irit, token hemat 65%

Proyek viral hari ini: [caveman](https://github.com/JuliusBrussee/caveman) adalah skill + proxy untuk coding agent yang memangkas pemakaian token hingga 65% hanya dengan membuat agent "berbicara seperti manusia gua" — instruksi dan output dibuat sependek mungkin tanpa kehilangan makna.

Relevan buat siapa pun yang memakai coding agent setiap hari (Claude Code, Hermes, dsb.): potongan 65% token artinya tagihan API jauh lebih ringan atau kuota free tier bertahan lebih lama. Layak dicoba langsung hari ini.

## 2. Agent-Reach — beri agent "mata" ke seluruh internet

[Agent-Reach](https://github.com/Panniantong/Agent-Reach) memberi AI agent kemampuan membaca dan mencari Twitter, Reddit, YouTube, GitHub, Bilibili, dan XiaoHongShu lewat satu CLI — tanpa biaya API sama sekali.

Berguna untuk riset otomatis: misalnya agent bisa memantau tren, membaca thread Reddit, atau mengecek diskusi GitHub issue tanpa perlu langganan API tiap platform.

## 3. openrig — bangun jaringan agent sendiri

[openrig](https://github.com/mvschwarz/openrig) memungkinkan membangun jaringan agent dari Claude Code, Codex, dan Pi: tim persisten dengan role masing-masing, konteks bersama, dan kepemilikan pekerjaan yang jelas.

Konsepnya mirip mempekerjakan tim kecil: tiap agent punya peran dan ingatan bersama. Menarik untuk dieksplorasi kalau sudah terbiasa menjalankan beberapa agent sekaligus.

## 4. codegraph — knowledge graph kode, 100% lokal

[codegraph](https://github.com/colbymchenry/codegraph) membuat knowledge graph dari codebase yang ter-index otomatis dan sinkron saat kode berubah — terintegrasi dengan Claude Code, Codex, Gemini, Cursor, OpenCode, dan lainnya. Klaimnya: lebih sedikit token, lebih sedikit tool call, semuanya berjalan lokal.

Cocok untuk proyek besar seperti aplikasi internal perusahaan: agent tidak perlu lagi membaca ulang file yang sama berkali-kali.

## 5. mcp-extensions (OpenAI) — plugin ChatGPT yang terasa native

OpenAI merilis [mcp-extensions](https://github.com/openai/mcp-extensions), cara resmi membangun plugin yang terasa seperti fitur kelas satu di dalam ChatGPT.

Kalau punya produk atau API, ini jalur resmi untuk hadir di dalam ChatGPT — patut dipelajari sebelum kompetitor melakukannya.

## 6. jeff — model open 0.8B untuk keputusan milidetik

[jeff](https://github.com/firelex/jeff) adalah model open berukuran 0.8B yang berperan sebagai "System 1": mengambil keputusan antar opsi dalam hitungan milidetik dengan probabilitas terkalibrasi. Satu model dasar bisa di-swap ke domain apa pun.

Use case menarik: routing cepat, klasifikasi, atau keputusan kecil di dalam pipeline agent tanpa harus memanggil LLM besar yang mahal.

## 7. ds4 — LLM lokal dari pembuat Redis

[dwarfstar.sh](https://dwarfstar.sh/) (ds4) adalah tool baru dari pembuat Redis untuk menjalankan LLM secara lokal dengan mudah.

Bagi yang suka self-hosting, ini opsi baru yang patut dicoba — menjalankan model di mesin sendiri berarti tanpa biaya API dan data tidak keluar dari perangkat.

## 8. AutoCompact — kapan coding agent harus memampatkan konteks (paper)

Paper arXiv [AutoCompact](http://arxiv.org/abs/2610.02163v1) mempelajari kapan waktu yang tepat untuk memampatkan konteks pada coding agent bertugas panjang. Seiring agent bekerja, eksplorasi awal menjadi basi — memampatkannya di momen yang tepat menjaga kualitas sekaligus menghemat token.

Topik yang sangat relevan dengan tren optimasi token hari ini (lihat caveman di atas): masa depan coding agent bukan cuma model yang lebih pintar, tapi manajemen konteks yang lebih cerdas.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
