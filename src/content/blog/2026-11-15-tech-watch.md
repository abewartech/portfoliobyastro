---
title: "Tech Watch — Minggu, 15 Nov 2026"
publishDate: 2026-11-15 07:21:00
description: "Plannotator buat mengawasi AI coding agent, protokol AG-UI, orkestrasi LoopForge, dan DeepSeek V3 dalam 200 baris JAX."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Plannotator

Semakin banyak coding agent yang jalan bareng, semakin susah memantau apa yang mereka kerjakan. [Plannotator](https://github.com/backnotprop/plannotator) adalah workspace open-source yang dirancang untuk itu: membentuk rencana, memberi anotasi, me-review kode hasil agent, dan membagikan hasilnya ke tim. Cocok buat siapa pun yang sudah menjadikan AI coding agent bagian dari alur kerja harian, tapi tetap mau memegang kendali atas kualitas akhirnya.

## 2. AG-UI

[AG-UI](https://github.com/ag-ui-protocol/ag-ui) adalah protokol open-source yang membawa AI agent ke dalam aplikasi frontend. Selama ini agent biasanya hidup di terminal atau chat, sementara aplikasi web jalan sendiri. Dengan AG-UI, agent bisa berinteraksi langsung dengan UI — menampilkan progres, meminta konfirmasi, dan memperbarui tampilan secara real-time. Buat developer React, ini membuka pola baru: aplikasi yang bukan cuma memakai AI di belakang layar, tapi berkolaborasi dengan agent di depan layar.

## 3. LoopForge

[LoopForge](https://github.com/Tencent/LoopForge) dari Tencent adalah orkestrasi self-hosted untuk delivery coding agent. Ia mengatur CodeBuddy, Codex, dan Claude Code lewat script, dengan human-in-the-loop di titik-titik penting. Buat yang sudah self-hosting dan ingin menstandarkan cara agent-agent ini bekerja di tim atau di server sendiri, LoopForge layak dicoba.

## 4. DeepSeek V3 in ~200 lines JAX

[DeepSeek V3 in ~200 lines of pure JAX](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) adalah implementasi minimal dari salah satu model MoE paling berpengaruh saat ini. Dua ratus baris kode saja sudah cukup untuk menunjukkan inti arsitekturnya — bahan belajar yang sangat bagus buat yang penasaran bagaimana Mixture-of-Experts bekerja di balik layar, tanpa harus menyelam ke codebase raksasa.

## 5. islandcn

[islandcn](https://github.com/opencoredev/islandcn) menghadirkan komponen Dynamic Island ala iOS ke React, dan bisa di-install lewat shadcn. Buat yang suka bereksperimen dengan UI yang playful — notifikasi mengambang, status pill yang hidup — ini komponen ringan yang bisa langsung dipasang di proyek React yang sudah memakai shadcn/ui.

## 6. HolyArrs

[HolyArrs](https://github.com/HolyArrs/HolyArrs) adalah satu aplikasi self-hosted untuk mengelola film, serial TV, dan musik. Alih-alih memasang tiga layanan terpisah, HolyArrs menggabungkannya dalam satu tempat. Buat yang sudah punya media server di rumah, ini alternatif all-in-one yang patut dilirik.

## 7. PyPI Redesigned Pages

PyPI meluncurkan [tampilan baru halaman proyek](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) dengan sinyal keamanan yang lebih jelas. Detail seperti siapa maintainer-nya, riwayat rilis, dan indikator keamanan kini lebih mudah dibaca sebelum memutuskan install sebuah paket. Perubahan kecil, tapi penting buat kebiasaan supply-chain security sehari-hari.

## 8. AgentSSL

Paper [AgentSSL](https://arxiv.org/abs/2611.17323) meneliti satu pertanyaan praktis: bisakah agen machine learning engineering memanfaatkan data tak berlabel? Selama ini agen MLE sangat bergantung pada data berlabel yang mahal. Kalau pendekatan ini berhasil, biaya membangun pipeline ML otomatis bisa turun drastis — relevan buat siapa pun yang mengotomasi eksperimen ML.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
