---
title: "Tech Watch — Selasa, 3 Nov 2026"
publishDate: 2026-11-03 07:21:00
description: "Agent Desktop dari Vercel, nanochat ala Karpathy, Worktrunk untuk agen AI paralel, dan audit privasi Android NOIR jadi sorotan pagi ini."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Agent Desktop

Vercel merilis Agent Desktop, sebuah CLI computer-use untuk agen AI — agen yang tidak hanya menulis kode, tapi bisa mengoperasikan komputer. Buat abe yang sudah menjalankan banyak otomasi berbasis agen, ini membuka kemungkinan workflow baru: agen yang mengklik, mengetik, dan memverifikasi hasil kerjanya sendiri di desktop, bukan sekadar lewat terminal.

[Agent Desktop di GitHub](https://github.com/vercel-labs/agent-desktop)

## 2. nanochat

Dari Andrej Karpathy, nanochat diklaim sebagai "ChatGPT terbaik yang bisa dibeli $100". Proyek ini ringan dan transparan, sehingga cocok sebagai bahan belajar cara kerja LLM end-to-end — dari training sampai inference — tanpa perlu infrastruktur raksasa. Buat yang penasaran dengan dapur pacu LLM, ini titik masuk yang paling masuk akal.

[nanochat di GitHub](https://github.com/karpathy/nanochat)

## 3. Worktrunk

Worktrunk adalah CLI manajemen git worktree yang dirancang khusus untuk workflow agen AI paralel. Setiap agen bisa bekerja di worktree-nya sendiri tanpa tabrakan branch atau working tree yang kotor. Ini relevan banget buat abe yang sering menjalankan beberapa agen sekaligus di repo yang sama.

[Worktrunk di GitHub](https://github.com/max-sixty/worktrunk)

## 4. Paperclip

Paperclip adalah aplikasi open-source untuk mengelola agen AI di tempat kerja — dari penugasan sampai kolaborasi tim. Ketika jumlah agen yang berjalan makin banyak, yang dibutuhkan bukan lagi sekadar prompt yang bagus, tapi manajemen: siapa mengerjakan apa, statusnya, dan hasilnya. Paperclip mencoba menjawab kebutuhan itu.

[Paperclip di GitHub](https://github.com/paperclipai/paperclip)

## 5. NOIR

NOIR adalah tool audit privasi Android yang berjalan lewat adb: ia memindai izin aplikasi, endpoint pelaporan, dan aliran data, lalu memberi rekomendasi perbaikan yang bisa dibatalkan. Mengingat kerjaan abe yang kental dengan Android, emulator, dan adb, tool ini langsung bisa dipakai untuk memeriksa APK — apa saja yang dikirim aplikasi ke server, dan ke mana.

[NOIR di GitHub](https://github.com/Verlintas/NOIR)

## 6. Stack-diagram

Stack-diagram adalah skill agen yang mengubah deskripsi stack dalam satu kalimat menjadi diagram arsitektur lengkap dengan logo resmi. Dokumentasi arsitektur yang biasanya malas dibuat jadi bisa digenerate otomatis — berguna buat proposal, README proyek, maupun sekadar memetakan sistem yang sudah terlanjur kompleks.

[Stack-diagram di GitHub](https://github.com/caru-ini/stack-diagram)

## 7. LongCat-2.5

LongCat-2.5 adalah model baru dengan multimodalitas native yang dirancang untuk tugas-tugas agen. Di tengah maraknya model open-source untuk agentic workflow, LongCat-2.5 patut dicoba sebagai alternatif — terutama untuk tugas yang menggabungkan teks, gambar, dan aksi.

[LongCat-2.5](https://longcat.ai/blog/longcat-2.5/)

## 8. LLM di Kode PHP Legacy (arXiv)

Sebuah studi arXiv meneliti kenapa modernisasi dengan LLM justru bisa memecahkan kode yang tadinya berjalan baik. Temuannya relevan buat maintenance proyek PHP/Laravel lama: LLM cenderung "memperbaiki" hal yang tidak rusak, dan tanpa pengujian regresi yang ketat, modernisasi bisa berubah menjadi sumber bug baru. Pelajaran praktisnya: setiap refactor berbantuan AI wajib ditemani test yang membuktikan perilaku lama tetap terjaga.

[Paper di arXiv](https://arxiv.org/abs/2610.40269)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
