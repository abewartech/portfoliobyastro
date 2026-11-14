---
title: "Tech Watch — Sabtu, 14 Nov 2026"
publishDate: 2026-11-14 07:21:00
description: "Panel server PHP open-source, peta live aktivitas Claude Code, demo chat DeepSeek, dan riset memori coding agent."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. ServerOS Panel

[ServerOS Panel](https://github.com/serveroshq/panel) adalah panel open-source berbasis PHP untuk mengelola server Linux yang sudah kamu miliki — satu tempat untuk menjalankan dan memantau server sendiri. Buat abe yang sudah terbiasa self-hosting di VPS, ini menarik karena stack-nya PHP, bahasa yang sudah dikuasai, sehingga kalau ada yang kurang pas, kodenya bisa dibaca dan diubah sendiri tanpa belajar stack baru. Panel semacam ini menghemat waktu dibanding mengurus semuanya lewat SSH manual, terutama saat jumlah server dan layanan bertambah.

## 2. lot-map

[lot-map](https://github.com/alexeyw/lot-map) menampilkan peta live di samping chat yang menunjukkan apa yang sedang dilakukan Claude Code: tool call, langkah model, hook, skill, dan subagent menyala saat terjadi. Semua berjalan lokal. Buat yang memakai agen coding setiap hari, visibilitas seperti ini berguna — bukan cuma melihat hasil akhir, tapi memahami alur kerja agen: di mana ia menghabiskan waktu, kapan ia memanggil subagent, dan skill apa yang aktif. Cocok dipasang sebagai alat bantu saat men-debug perilaku agen yang terasa lambat atau berputar-putar.

## 3. DeepSeek Chat Demo

[DeepSeek Chat Demo](https://github.com/deepseek-ai/chat-demo) adalah demo chat resmi dari DeepSeek, ditulis dengan TypeScript. Nilai terbesarnya bukan sebagai aplikasi jadi, melainkan sebagai referensi: bagaimana membangun UI chat LLM yang rapi — streaming, riwayat percakapan, dan integrasi API — dengan pola yang sudah teruji oleh pembuat modelnya sendiri. Buat abe yang membangun produk web, repo ini bisa jadi titik awal yang bagus kalau suatu saat perlu menambahkan fitur chat AI ke aplikasi sendiri.

## 4. tailcat

[tailcat](https://github.com/tailscale/tailcat) adalah netcat yang berjalan di atas jaringan Tailscale — tanpa perlu control plane Tailscale. Dengan kata lain, kamu bisa membuka koneksi TCP antar perangkat yang sudah terhubung lewat Tailscale, layaknya `nc` biasa, tapi lewat tunnel yang sudah terenkripsi. Abe sudah memakai Tailscale untuk menjangkau HP dan server, jadi alat sekecil ini praktis untuk debug cepat: mengetes apakah sebuah port merespons, mem-forward koneksi, atau sekadar memastikan dua perangkat bisa saling bicara lewat tailnet.

## 5. Chrome DevTools MCP

[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) adalah server MCP resmi dari tim Chrome yang memberi coding agent kemampuan mengendalikan browser: membuka halaman, menginspeksi DOM, melihat error console, sampai menjalankan DevTools langsung. Ini jembatan yang selama ini kurang: agen coding biasanya hanya membaca file, padahal banyak bug web baru terlihat saat halaman benar-benar dijalankan di browser. Dengan MCP ini, agen bisa memverifikasi hasil kerjanya sendiri di browser — menutup loop antara "kode selesai ditulis" dan "tampilan benar-benar jalan".

## 6. CoReMem

Paper [CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation](https://arxiv.org/abs/2611.17316) membahas masalah yang akrab bagi siapa pun yang memakai coding agent di repo yang sama berulang kali: agen membawa memori dari tugas sebelumnya, tapi memilih memori apa yang disimpan — sebelum tugas berikutnya diketahui — adalah tebak-tebakan antara manfaat di masa depan dan biaya penyimpanan. Paper ini mengusulkan cara menilai memori secara prospektif dengan memperhitungkan biayanya. Relevan buat abe yang menjalankan agen di banyak repo: memori agen yang cerdas bisa menghemat token dan konteks, asalkan yang disimpan memang yang berguna.

## 7. LLM Agents Debugging Databases

Paper [Where LLM Agents Get Stuck Debugging Databases: Access More Than Reasoning](https://arxiv.org/abs/2611.17304) melaporkan observasi lapangan: saat Claude Code diminta men-debug database dari data runtime yang live, yang bikin ia mentok ternyata bukan kemampuan penalaran, melainkan akses — cara ia mengakses dan menjelajahi data yang sedang berjalan. Ini temuan praktis buat developer yang memakai agen untuk pekerjaan operasional: memberi agen akses yang tepat (query, log, metrik) lebih menentukan daripada sekadar model yang lebih pintar. Kalau kamu menyiapkan agen untuk tugas DevOps atau debug produksi, rancang dulu jalur akses datanya.

## 8. Patterns for CI/CD Workflows

Paper [Patterns for Designing CI/CD Workflows](https://arxiv.org/abs/2611.17276) mengumpulkan praktik dan anti-praktik perancangan pipeline CI/CD dari studi empiris, buku praktisi, dan katalog "smell" — lalu menyusunnya jadi pola yang bisa dipakai. Pipeline CI/CD gampang dibuat tapi susah dirawat: job yang rapuh, dependensi antar-workflow yang tidak jelas, dan waktu build yang membengkak adalah keluhan umum. Katalog pola ini memberi bahasa bersama untuk merancang pipeline yang lebih mudah dipelihara, berguna saat meninjau ulang workflow GitHub Actions di proyek sendiri.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
