---
title: "Tech Watch — Minggu, 25 Okt 2026"
publishDate: 2026-10-25 07:21:00
description: "Runtime agen AI yang aman dari NVIDIA, toolkit agen resmi AWS, skill anti desain AI slop, agen cindy, hatchzip hemat disk, varian HTTP2Shell, dan dua paper soal routing tiket IT & thought pruning."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Edisi Minggu ini condong ke ekosistem agen AI: runtime yang aman, toolkit resmi, sampai skill desain — ditambah satu peringatan keamanan untuk stack Node dan dua paper yang nyambung langsung ke kerjaan sehari-hari.

## 1. NVIDIA/OpenShell — runtime aman & privat untuk agen AI

[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) — runtime yang dirancang supaya agen AI otonom bisa berjalan dengan aman dan privat. Bagi yang sudah menjalankan agen-agen sendiri (termasuk di atas fleet Ollama self-host), ini patut dievaluasi sebagai lapisan eksekusi: agen yang bisa mengeksekusi tool butuh sandbox yang jelas batasnya, bukan sekadar prompt yang "dipercaya".

## 2. aws/agent-toolkit-for-aws — toolkit agen resmi AWS

[aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) — kumpulan MCP server, skill, dan plugin resmi dari AWS untuk membantu agen AI membangun di atas AWS. Kalau ada pekerjaan yang menyentuh infrastruktur AWS, toolkit resmi seperti ini menghemat waktu dibanding merakit MCP server sendiri — dan cenderung lebih terawat.

## 3. Nutlope/hallmark — skill anti desain "AI slop"

[Nutlope/hallmark](https://github.com/Nutlope/hallmark) — skill desain untuk Claude Code, Cursor, dan Codex yang melawan hasil desain generik khas AI. Output agen sering "terasa AI" karena pola yang itu-itu saja; skill seperti ini memberi guardrail desain yang bisa langsung dipakai di workflow coding agent sehari-hari.

## 4. makecindy/cindy — agen AI open-source yang langsung jalan

[makecindy/cindy](https://github.com/makecindy/cindy) — agen AI open-source yang diklaim bekerja out of the box, tanpa setup berlapis. Menarik sebagai bahan banding: seberapa jauh agen general-purpose bisa dipakai tanpa konfigurasi, dan bagian mana yang tetap perlu dioprek manual.

## 5. xevrion/hatchzip — ekstrak arsip raksasa tanpa ruang ganda

[xevrion/hatchzip](https://github.com/xevrion/hatchzip) — tool Rust untuk mengekstrak arsip besar (ZIP, 7z, tar, split archive) di tempat: arsip menyusut selagi file keluar, jadi hanya butuh ruang untuk hasil akhirnya. Di VM dengan disk terbatas, ini praktis — tidak perlu lagi menyiapkan ruang kosong dua kali ukuran arsip.

## 6. Node2Shell berevolusi jadi HTTP2Shell

[Node2Shell evolves to HTTP2Shell](https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497) — varian baru dari kerentanan Node2Shell yang blast radius-nya mencakup banyak library HTTP dan aplikasi. Buat yang memelihara stack Node.js, ini alasan untuk segera memeriksa dependensi HTTP yang dipakai dan memastikan patch sudah diterapkan.

## 7. Paper: Cost-Aware Abstention untuk klasifikasi tiket IT

[Cost-Aware Abstention for LLM-Based IT Ticket Classification](http://arxiv.org/abs/2610.31657v1) — paper ini menilai kapan routing tiket otomatis sebaiknya "menyerah" ke manusia, dengan perhitungan biaya: salah routing bisa lebih mahal daripada triase manual. Idenya nyambung langsung ke alur support seperti SOS SMILE — otomasi yang baik tahu batasnya, bukan memaksakan jawaban.

## 8. Paper: Direct Pass@k Optimization for Thought Pruning

[Direct Pass@k Optimization for Thought Pruning](http://arxiv.org/abs/2610.31667v1) — metode mengoptimalkan pemangkasan penalaran (thought pruning) dengan menyeimbangkan kualitas dan diversitas jawaban pada test-time reasoning. Untuk inferensi model di perangkat sendiri, teknik seperti ini berarti token lebih hemat tanpa mengorbankan variasi solusi — relevan buat efisiensi fleet Ollama.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
