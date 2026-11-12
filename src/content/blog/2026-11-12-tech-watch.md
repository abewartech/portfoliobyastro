---
title: "Tech Watch — Kamis, 12 Nov 2026"
publishDate: 2026-11-12 07:21:00
description: "Codex Security dari OpenAI, quantizer lokal Huawei MACaQ, dan emulator AWS open-source."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Codex Security

OpenAI merilis [codex-security](https://github.com/openai/codex-security), CLI dan SDK TypeScript untuk menemukan, memvalidasi, dan memperbaiki kerentanan keamanan di dalam kode. Berbeda dengan scanner statis biasa, alat ini dirancang untuk dipakai di dalam workflow agen coding — jadi agen bisa memeriksa hasil kerjanya sendiri sebelum kode dikirim. Buat full-stack developer yang sudah memakai agen coding setiap hari, ini lapisan pengaman yang murah: jalankan di CI atau sebelum push, dan biarkan agen yang menambal temuan yang terkonfirmasi.

## 2. Audit Hemat Token

Repo [sponsors/shadcn](https://github.com/sponsors/shadcn) mempopulerkan pola yang makin umum di tim yang memakai agen coding: model paling mumpuni dipakai untuk mengaudit codebase dan menulis rencana kerja yang rapi, lalu model yang lebih murah mengeksekusi rencana itu langkah demi langkah. Hasilnya, biaya token turun drastis tanpa mengorbankan kualitas perencanaan. Pola ini layak diadopsi di proyek Laravel atau React mana pun — audit sekali dengan model besar, eksekusi dengan model kecil.

## 3. Huawei MACaQ

Huawei membuka sumber [MACaQ](https://github.com/huawei-csl/MACaQ), quantizer internal mereka untuk inferensi lokal. Kuantisasi adalah kunci agar model bahasa bisa jalan di perangkat sendiri dengan memori terbatas, dan MACaQ menambah satu lagi pilihan open-source di ranah ini. Buat yang menjalankan model lokal — entah di server sendiri atau di laptop — alat seperti ini menentukan apakah sebuah model bisa dipakai praktis atau hanya jadi pajangan di disk.

## 4. Gemini Decisions API

Google memperkenalkan [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/), API baru untuk keputusan AI terstruktur di dalam aplikasi. Alih-alih mem-parsing teks bebas dari model, API ini mengembalikan keputusan dalam format yang bisa langsung dipakai kode. Ini menarik buat fitur rekomendasi atau logika bisnis yang butuh jawaban deterministik dari model — misalnya menentukan langkah berikutnya dalam sebuah workflow, atau memilih opsi terbaik dari sekumpulan data.

## 5. AWS Emulator

[aws-emulator](https://github.com/aws/aws-emulator) adalah emulator AWS open-source yang memungkinkan pengujian layanan cloud secara lokal, tanpa biaya dan tanpa akun. Buat developer yang membangun aplikasi di atas layanan AWS, ini mempercepat loop pengembangan: jalankan tes integrasi di mesin sendiri, tanpa menunggu deploy atau khawatir tagihan. Cocok juga untuk CI, di mana layanan tiruan lokal jauh lebih cepat dan stabil daripada memanggil cloud sungguhan.

## 6. ReTrace

Paper [ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows](https://arxiv.org/abs/2611.14492) meneliti cara menyuling agen yang memakai tool menjadi workflow tanpa planner. Agen LLM biasanya memanggil model di setiap langkah untuk memutuskan aksi berikutnya — mahal dan lambat untuk proses yang berulang. ReTrace mengubah perilaku agen yang sudah terbukti menjadi workflow tetap, sehingga otomasi SOP yang sama berulang kali bisa jalan lebih cepat dan murah. Relevan buat siapa pun yang membangun otomasi berbasis agen untuk tugas rutin.

## 7. Kunci GitHub Actions

Artikel [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/) menjelaskan cara mengunci workflow GitHub Actions ke commit SHA tertentu, bukan ke tag yang bisa bergerak. Tag seperti `v4` bisa dipindah oleh pemilik action ke kode yang berbeda — termasuk kode berbahaya — tanpa peringatan. Mengunci ke SHA menghilangkan risiko itu. Ini praktik keamanan CI yang sederhana tapi sering diabaikan, dan layak diterapkan di semua repo yang memakai Actions dari pihak ketiga.

## 8. Atuin Threads

[Atuin Threads](https://blog.atuin.sh/threads-agent-sessions/) menyinkronkan semua sesi agen AI antar mesin. Sesi kerja agen — konteks, riwayat perintah, dan state percakapan — tidak lagi terjebak di satu laptop; pindah ke server atau mesin lain dan lanjutkan dari tempat terakhir. Buat yang bekerja di beberapa mesin, seperti laptop dan server, ini menghilangkan gesekan kecil yang selama ini memaksa memulai ulang sesi dari nol.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
