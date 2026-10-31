---
title: "Tech Watch — Sabtu, 31 Okt 2026"
publishDate: 2026-10-31 07:21:00
description: "Agent Skills resmi Anthropic, headless browser Lightpanda untuk AI, perisai anti-reverse-engineering BLA, dan peringatan backdoor di ekstensi Claude Code palsu."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Agent Skills (Anthropic)

Anthropic membuka repositori publik berisi Agent Skills — kumpulan skill yang bisa dipakai agen coding untuk bekerja lebih konsisten. Bagi abe yang sehari-hari memakai agen coding, ini penting karena skill yang terstandarisasi berarti workflow yang sama bisa dipakai lintas tool, bukan lagi sekadar prompt yang ditempel manual tiap proyek. Layak dicoba sebagai acuan saat menyusun skill sendiri.

Sumber: [anthropics/skills](https://github.com/anthropics/skills)

## 2. Lightpanda

Lightpanda adalah headless browser yang dirancang khusus untuk AI dan automation, ditulis dengan Zig sehingga ringan dan cepat. Berbeda dengan browser automation konvensional yang berat, Lightpanda cocok untuk scraping, pengujian, dan tugas agen yang butuh menjelajah web dalam skala besar tanpa beban Chromium penuh.

Sumber: [lightpanda-io/browser](https://github.com/lightpanda-io/browser)

## 3. BLA (Blind LLM Agents)

BLA adalah perisai pertahanan yang melindungi biner, aplikasi Electron, bundle JavaScript, Python, dan WebAssembly dari agen AI yang mencoba melakukan reverse-engineering. Tekniknya bekerja lewat tiga tahap: meracuni, menguras, dan membuat agen berhalusinasi. Relevan buat abe yang membangun aplikasi dan peduli keamanan kode dari analisis otomatis.

Sumber: [qybaihe/bla](https://github.com/qybaihe/bla)

## 4. unslop

unslop adalah skill Claude yang mengubah antarmuka hasil vibecoding — yang biasanya terasa generik dan "AI banget" — menjadi antarmuka yang benar-benar didesain. Buat abe yang membangun web app dengan bantuan AI, skill seperti ini bisa menghemat waktu revisi desain dan menaikkan kualitas tampilan produk.

Sumber: [heydamir/unslop](https://github.com/heydamir/unslop)

## 5. Mika

Mika adalah agen AI on-device untuk Android yang mengoperasikan aplikasi dan menjelajah web langsung dari HP untuk menyelesaikan tugas pengguna. Pendekatan on-device menarik karena mengurangi ketergantungan pada server, sekaligus relevan dengan latar belakang abe di pengembangan Android dan otomasi HP.

Sumber: [wangzan101/Mika](https://github.com/wangzan101/Mika)

## 6. Zero-Breach-Toolkit

Zero-Breach-Toolkit adalah toolkit gratis dan offline untuk memeriksa jejak spyware tentara bayaran yang dikenal, bekerja di Windows, macOS, Linux, HP Android, dan backup iPhone. Karena berjalan offline, alat ini bisa dipakai untuk audit keamanan perangkat tanpa mengirim data ke pihak ketiga.

Sumber: [interplains/Zero-Breach-Toolkit](https://github.com/interplains/Zero-Breach-Toolkit)

## 7. Backdoor di Ekstensi Claude Code

Laporan keamanan menemukan ekstensi Claude Code palsu di Cursor Marketplace yang mengandung backdoor. Ini pengingat penting: ekstensi editor punya akses luas ke kode dan kredensial, jadi selalu periksa penerbit dan ulasan sebelum memasang, dan audit ekstensi yang sudah terpasang secara berkala.

Sumber: [Phorion — Backdoor in Claude Code for VS Code extension](https://phorion.io/blog/offical-claude-code-vsx-compromise/)

## 8. VeriCUA

Paper VeriCUA membahas verifikasi sebagai eksplorasi agen untuk computer-using agents: bagaimana menilai secara andal apakah agen benar-benar menyelesaikan tugas di desktop, mobile, dan web. Topik ini penting untuk kurasi data, evaluasi, dan reinforcement learning agen — dan relevan dengan pekerjaan otomasi abe, di mana bukti penyelesaian tugas harus bisa diverifikasi, bukan sekadar diklaim.

Sumber: [VeriCUA di arXiv](http://arxiv.org/abs/2610.40578v1)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
