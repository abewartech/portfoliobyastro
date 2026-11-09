---
title: "Tech Watch — Senin, 9 Nov 2026"
publishDate: 2026-11-09 07:21:00
description: "DeepSeek 284B jalan tanpa GPU, agen AI yang mengoperasikan HP, design system Meta yang siap agen, dan Outlook mulai menolak email tanpa DMARC."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Pinky: Agen AI yang Mengoperasikan HP Kamu

[Pinky](https://github.com/DIYgod/pinky) memungkinkan agen AI menggunakan ponselmu — tapi dengan kamu tetap dalam loop. Setiap langkah penting meminta persetujuanmu dulu, jadi otomasi berjalan tanpa melepas kendali sepenuhnya.

Ini menarik karena otomasi mobile selama ini identik dengan skrip kaku atau akses penuh yang berisiko. Pendekatan "human in the loop" seperti ini bisa jadi pola yang aman untuk tugas-tugas harian di HP, dari membalas pesan sampai mengoperasikan aplikasi.

## 2. Cinecode: Agen AI Bikin Film Utuh dari Kode

[Cinecode](https://github.com/sarpstar/cinecode) adalah agen coding yang memproduksi film pendek sampai video YouTube panjang: ia menulis naskah, membangun setiap frame lewat kode, merancang suara, lalu menyerahkan file MP4 yang sudah jadi.

Konsepnya menunjukkan sejauh mana agen AI bisa merangkai pipeline kreatif end-to-end — bukan sekadar menulis satu fungsi, tapi mengelola seluruh proses produksi. Buat yang bereksperimen dengan konten video atau generative media, repo ini layak diintip.

## 3. Llama-modchip: DeepSeek 284B di RAM 64GB Tanpa GPU

[Llama-modchip](https://github.com/synchopate/llama-modchip) mengklaim bisa menjalankan DeepSeek 284B di mesin dengan RAM 64GB — tanpa kartu grafis sama sekali. Ini kabar besar buat self-hosting model besar: tidak lagi butuh GPU mahal untuk mencoba model kelas frontier secara lokal.

Tentu kecepatan inferensi jadi pertanyaan, tapi buat eksperimen, riset, atau tugas batch yang tidak butuh respons instan, pendekatan ini membuka pintu yang sebelumnya tertutup bagi banyak developer.

## 4. Astryx: Design System Open-Source dari Meta

Meta merilis [Astryx](https://github.com/meta/astryx), design system open-source yang sepenuhnya bisa dikustom — dan dirancang "agent ready", alias siap dipakai bersama agen AI dalam membangun UI.

Di era ketika agen coding makin sering menulis komponen antarmuka, design system yang dirancang dengan agen dalam pikiran bisa jadi pembeda: token, pola, dan struktur yang konsisten membuat hasil kerja agen lebih rapi dan mudah diprediksi.

## 5. Claude Quickstarts: Contoh Aplikasi Siap Jalan dengan Claude API

[Claude Quickstarts](https://github.com/anthropics/claude-quickstarts) adalah koleksi proyek contoh dari Anthropic untuk membantu developer cepat membangun aplikasi deployable dengan Claude API.

Buat yang ingin mulai mengintegrasikan Claude ke produk sendiri — bukan sekadar memanggil API dari skrip — repo ini memberi titik awal yang sudah berbentuk aplikasi utuh, bukan potongan contoh yang harus disambung sendiri.

## 6. NVKE: Kubernetes GPU NVIDIA untuk Bare Metal

[NVIDIA Kubernetes Engine (NVKE)](https://github.com/dsx-ai-factory/nvke) adalah management plane untuk menjalankan GPU Kubernetes di bare metal. Kalau kamu mengelola server sendiri dengan GPU, NVKE menyederhanakan orkestrasi beban AI tanpa harus memakai cloud terkelola.

Relevan buat yang membangun infrastruktur AI sendiri — seperti menjalankan model di server rumah atau VPS — dan ingin manajemen klaster yang lebih rapi daripada konfigurasi manual.

## 7. Memori Agen Butuh Momen OpenTelemetry-nya

Artikel [Agent memory needs its OpenTelemetry moment](https://www.lorekit.io/blog/open-agent-memory-format) berargumen bahwa ekosistem agen AI butuh standar terbuka untuk format memori — seperti OpenTelemetry untuk observabilitas.

Tanpa standar, memori agen terjebak di masing-masing alat dan tidak bisa berpindah. Kalau kamu membangun agen yang harus mengingat konteks antar sesi atau antar alat, gagasan format terbuka ini patut diikuti perkembangannya.

## 8. Outlook Diam-Diam Menolak Email Tanpa DMARC

Laporan dari [MailRoute](https://mailroute.net/blog/outlook-rejecting-email-without-dmarc) menemukan Outlook.com mulai menolak email dari domain yang tidak punya DMARC. Ini bukan lagi sekadar rekomendasi — kebijakan penyedia email besar makin ketat soal autentikasi pengirim.

Kalau kamu mengelola domain dan mengirim email — newsletter, notifikasi aplikasi, atau email transaksional — cek konfigurasi SPF, DKIM, dan DMARC domainmu hari ini sebelum email penting mental di spam atau ditolak.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
