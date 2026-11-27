---
title: "Tech Watch — Jumat, 27 Nov 2026"
publishDate: 2026-11-27 07:21:00
description: "VIctory bawa GTA VI ke PC, llm.asm jalankan Qwen3 dalam 12 KB assembly, dan Moat jadi alternatif OpenRouter."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. VIctory

Proyek Rust yang mencoba menjalankan GTA VI di PC ini meledak: 13.350 star hanya dalam empat hari sejak dibuat 23 November. Ini bukan emulator biasa — pendekatannya adalah porting, dan fork-fork-nya sudah bermunculan untuk berbagai GPU, dari AMD sampai RX 7900 XTX. Buat yang hobi reverse engineering game, repo ini layak diintip struktur kodenya, meski jelas masih jauh dari bisa dimainkan.

[VIctory di GitHub](https://github.com/Marvisak/VIctory)

## 2. llm.asm

Inferensi Qwen3-0.6B dalam 12 KB, sistem operasi bootable 22 KB, dan trainer Mini-GPT dari nol dalam 32 KB — semuanya ditulis dalam 100% assembly x86-64 NASM murni. Tanpa C, tanpa libc, tanpa dependensi. Proyek ini adalah bukti ekstrem bahwa LLM bisa jalan di lingkungan yang sangat minimal, dan bahan belajar yang bagus buat yang penasaran dengan cara kerja inferensi di level paling bawah.

[llm.asm di GitHub](https://github.com/alesha-pro/llm.asm)

## 3. KuroCat

Kucing desktop 3D/2D open-source yang menemani saat mengetik, sekaligus pendamping coding AI. Dibangun dengan Tauri v2 dan Rust, terhubung lewat MCP ke Claude, Codex, dan DeepSeek, serta berjalan di Windows, Mac, Linux, dan Android. Alternatif Bongo Cat yang gratis — dan kali ini kucingnya bisa bantu coding.

[KuroCat di GitHub](https://github.com/qianyiai/KuroCat)

## 4. Coding Agents Over-Edit

Paper arXiv terbaru yang mengukur seberapa banyak agen coding melakukan edit yang tidak perlu. Patch hasil agen memang lebih besar dari patch developer, tapi ukuran saja tidak menjawab apakah edit tambahannya memang dibutuhkan. Studi ini memperkenalkan metode atribusi untuk memetakan dari mana edit berlebih itu berasal — bacaan wajib buat yang membangun atau memakai agen coding setiap hari.

[How Much Do Coding Agents Over-Edit, and Why? di arXiv](https://arxiv.org/abs/2611.34875)

## 5. AI Made Self-Hosting Fun Again

Tulisan yang merangkum pergeseran menarik: AI membuat self-hosting kembali menyenangkan. Dulu self-hosting identik dengan konfigurasi manual yang melelahkan; sekarang agen AI bisa membantu setup, troubleshooting, dan maintenance server sendiri. Relevan buat siapa pun yang menjalankan homelab atau server pribadi.

[AI made self-hosting fun again](https://janlukas.blog/posts/ai-self-hosting)

## 6. Moat

Pengganti OpenRouter yang muncul di Hacker News: satu API untuk mengakses banyak model LLM dari berbagai penyedia. Buat yang membangun aplikasi di atas LLM dan tidak mau terkunci ke satu vendor atau satu agregator, Moat patut dicoba sebagai alternatif.

[Moat](https://commandcode.ai/moat)

## 7. Google Workspace MCP

Google akan membuat agen AI memakai server MCP miliknya untuk mengakses Workspace. Catatan menariknya: server Gmail-nya belum bisa mengirim email. Ini gambaran awal bagaimana agen AI akan berinteraksi dengan layanan Google ke depannya — dan batasan apa yang masih ada.

[Google Will Make AI Agents Use Its MCP Servers](https://techstackups.com/articles/google-workspace-ai-agents-mcp)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
