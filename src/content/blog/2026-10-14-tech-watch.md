---
title: "Tech Watch — Rabu, 14 Okt 2026"
publishDate: 2026-10-14 07:21:00
description: "Vercel Skills merapikan agent skills, Talorys jadi asisten AI self-hosted di Cloudflare, plus ESP32 iPhone Agent dan xtool."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Vercel Skills

Vercel merilis tool open-source untuk mengelola agent skills lewat `npx skills`. Buat yang sudah memakai AI coding agent seperti Claude Code atau Cursor, skills adalah cara membungkus instruksi, contoh, dan konvensi proyek jadi paket yang reusable — dan tool ini membuat proses membuat, membagikan, dan memakai skills tersebut jauh lebih rapi.

Relevan buat abe karena workflow agent-mu makin banyak mengandalkan skills; punya tooling standar untuk mengelolanya berarti skills antar proyek bisa konsisten dan mudah dibagikan.

[github.com/vercel-labs/skills](https://github.com/vercel-labs/skills)

## 2. Talorys

Talorys adalah asisten AI pribadi yang berjalan di akun Cloudflare-mu sendiri. Fiturnya lengkap: chat, memori, tugas, catatan, dan reminder terjadwal — semuanya di-deploy dengan satu perintah `npx create-talorys@latest`. Dirancang ramah free-tier dan single-user, jadi tidak perlu server sendiri.

Ini menarik buat abe yang suka self-hosting: asisten AI pribadi tanpa biaya server tambahan, dengan data tetap di akun Cloudflare sendiri.

[github.com/rociiu/talorys](https://github.com/rociiu/talorys)

## 3. ESP32 iPhone Agent

Proyek ini memungkinkan model AI memakai iPhone beneran bermodal ESP32 seharga 7 dolar. AirPlay berperan sebagai "mata" (model melihat layar), sementara USB HID menjadi "tangan" (model mengetuk dan mengetik). Tanpa Mac, tanpa akun developer, tanpa jailbreak — cukup model vision apa pun yang kompatibel dengan API OpenAI.

Eksperimen murah yang membuka pintu automasi perangkat fisik dan pengujian aplikasi iOS lewat agen AI.

[github.com/onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent)

## 4. xtool

xtool adalah pengganti Xcode lintas platform: build dan deploy aplikasi iOS pakai SwiftPM dari Linux, Windows, maupun macOS. Bagi developer yang tidak selalu berada di depan Mac — atau yang ingin menjalankan build iOS di CI Linux — ini menghilangkan salah satu ketergantungan terbesar ekosistem Apple.

Buat abe yang berkutat di Flutter dan distribusi iOS, xtool layak dipantau sebagai alternatif toolchain build.

[github.com/xtool-org/xtool](https://github.com/xtool-org/xtool)

## 5. Mailcheap

Mailcheap adalah newsletter self-hosted di atas Amazon SES, dengan biaya sekitar 0,10 dolar per 1.000 email. Dibanding Mailchimp dan sejenisnya yang mengenakan biaya bulanan per subscriber, pendekatan ini jauh lebih murah untuk daftar email kecil-menengah.

Cocok buat abe yang menjalankan toko produk digital dan blog: pengumuman produk atau artikel baru bisa dikirim lewat newsletter sendiri tanpa biaya langganan mahal.

[github.com/marclou/mailcheap](https://github.com/marclou/mailcheap)

## 6. Diagram Design

Diagram Design adalah skill diagram editorial untuk Claude Code, Codex, GitHub Copilot, Cursor, dan coding agent lainnya. Menyediakan 44 tipe diagram yang dirender jadi HTML mandiri — berguna saat meminta agent membuatkan diagram arsitektur, alur, atau visualisasi untuk dokumentasi.

Dokumentasi proyek abe bisa naik kelas: diagram yang biasanya dibuat manual kini bisa digenerate agent dengan hasil yang konsisten dan siap tempel.

[github.com/cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

## 7. Parsimony

Parsimony adalah benchmark open-source yang mengukur seberapa sedikit kode yang diubah tiap AI coding agent untuk menyelesaikan tugas yang sama. Di tengah tren agent yang gemar menulis ulang setengah codebase, metrik "perubahan minimal" ini jadi cara praktis menilai mana agent yang paling hemat dan presisi.

Relevan buat abe yang memakai agent untuk coding harian: agent yang mengubah sedikit kode biasanya lebih mudah direview dan lebih aman di-merge.

[parsimony.lasu.dev](https://parsimony.lasu.dev/)

## 8. New Term Radar

New Term Radar adalah radar harian untuk istilah AI baru: nama model, produk, dan repo baru yang ditangkap dari X, Hugging Face, GitHub, dan sitemap — sebelum masuk keyword tools. Di dunia AI yang penamaannya berubah tiap minggu, tool ini membantu tetap mengikuti kosakata terbaru tanpa harus memantau semua feed manual.

Cocok buat rutinitas Tech Watch: istilah yang muncul di sini sering menjadi tren beberapa hari kemudian.

[github.com/zhuyansen/new-term-radar](https://github.com/zhuyansen/new-term-radar)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
