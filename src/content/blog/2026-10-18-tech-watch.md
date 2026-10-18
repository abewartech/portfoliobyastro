---
title: "Tech Watch — Minggu, 18 Okt 2026"
publishDate: 2026-10-18 07:21:00
description: "Orca buat armada coding agent, Claude Code & opencode trending, git-ai, ai-memory, solid-glass, open-claude-ui, dan benchmark FDE-Gym."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Orca — Jalankan Armada Coding Agent dengan Langganan Sendiri

[stablyai/orca](https://github.com/stablyai/orca) adalah platform buat menjalankan sekumpulan (fleet) coding agent — misalnya Grok Bot atau Claude Code — memakai langganan yang kamu miliki sendiri. Tersedia dalam versi desktop, mobile, dan remote runtime, jadi kamu bisa memantau pekerjaan agent dari mana saja. Relevan buat yang sudah pakai workflow multi-agent: satu dashboard untuk mengoordinasikan banyak agent sekaligus tanpa membayar per-token ke penyedia baru.

## 2. Claude Code — Repo Resmi Tool Coding Agentic Anthropic

[anthropics/claude-code](https://github.com/anthropics/claude-code) kembali trending seiring dirilisnya direktori plugin dan skill resmi dari Anthropic. Tool ini hidup di terminal, memahami codebase, dan mengeksekusi tugas rutin lewat bahasa natural — dari git workflow sampai menjelaskan kode kompleks. Kalau kamu sudah terbiasa dengan Hermes, Claude Code adalah pembanding utama yang patut dipahami karena ekosistem plugin-nya kini dibuka resmi.

## 3. opencode — Coding Agent Open-Source yang Self-Host

[anomalyco/opencode](https://github.com/anomalyco/opencode) adalah alternatif open-source untuk coding agent seperti Claude Code: gratis dan bisa di-self-host di server sendiri. Dengan server baru (cwp-host-01) yang sudah jalan, ini kandidat menarik buat dieksplor — agent coding yang berjalan 24/7 di infrastruktur sendiri, tanpa biaya langganan tambahan.

## 4. git-ai — Git yang Dirancang Ulang untuk AI Agent

[feder-cr/git-ai](https://github.com/feder-cr/git-ai) (ditulis dalam Go) bereksperimen dengan pertanyaan provokatif: bagaimana kalau version control dirancang dari nol untuk AI agent, bukan untuk manusia? Proyek ini terinspirasi artikel engineering Anthropic soal "redesigning source control". Buat full-stack engineer yang mengelola banyak repo dan branch lewat agent, konsep branch/merge/commit yang "agent-native" bisa mengubah cara kita berkolaborasi dengan AI dalam pengembangan.

## 5. ai-memory — Memori Jangka Panjang buat Coding Agent

[akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) menawarkan solusi memori jangka panjang untuk CLI coding agent sekaligus memfasilitasi handoff antar vendor — misalnya pindah dari Claude ke Codex tanpa kehilangan konteks sesi. Masalah klasik agent adalah "lupa" di tengah sesi panjang; proyek ini mencoba menstandarkan cara agent menyimpan dan memulihkan konteks. Relevan kalau kamu ingin Hermes mengingat konteks kerja antar sesi.

## 6. solid-glass — Design System Khusus Aplikasi AI

[deeplethe/solid-glass](https://github.com/deeplethe/solid-glass) adalah design system berbasis React/TypeScript dan Tailwind yang dirancang khusus untuk aplikasi AI — tema, komponen chat UI, dan elemen khas aplikasi LLM. Dengan 1.698 stars dalam hitungan hari, komunitas jelas lapar akan komponen UI siap pakai buat produk AI. Berguna sebagai referensi cepat saat membangun antarmuka chat untuk produk digital atau dashboard internal.

## 7. open-claude-ui — Reverse-Engineering UI Desktop Claude dalam React

[Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) adalah proyek yang membongkar dan merekonstruksi antarmuka desktop resmi Claude dengan fidelitas tinggi: 30 komponen React independen dan 8 algoritma "fisika interaksi" hard-core, lengkap dengan manual analisis reverse-engineering 3000+ baris. Buat developer React, ini adalah studi kasus kelas atas soal bagaimana UI premium dibangun — dari motion physics sampai komponen yang reusable.

## 8. FDE-Gym — Benchmark AI Agent untuk Delivery Proyek Nyata (arXiv)

Paper [FDE-Gym: The Last Mile of AI Delivery](https://arxiv.org/abs/2610.22350) memperkenalkan benchmark 95 tugas delivery end-to-end dari 20 skenario pelanggan di 18 sektor. Berbeda dari benchmark coding biasa, agent di sini harus mengklarifikasi requirement yang ambigu, berinteraksi dengan stakeholder, dan bekerja di sistem yang menyerupai produksi — persis seperti pekerjaan forward-deployed engineer. Hasilnya mengecewakan: konfigurasi model terbaik hanya menyelesaikan 14 dari 95 tugas. Buat yang penasaran seberapa jauh agent bisa menggantikan pekerjaan delivery nyata, ini bacaan wajib; kodenya terbuka di GitHub.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
