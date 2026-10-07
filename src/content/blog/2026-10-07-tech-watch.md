---
title: "Tech Watch — Rabu, 7 Okt 2026"
publishDate: 2026-10-07 07:21:00
description: "Backburner (LLM 27B via iPhone), SDK gadget open-source Meta, memory agent leviathan, dan 5 temuan menarik lainnya hari ini."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Ringkasan tren teknologi hari ini: repo open-source paling bersinar di GitHub plus dua paper AI terbaru yang layak dilirik.

## 1. backburner — iPhone bantu Mac jalanin model 27B

Repo [StayLameBro/backburner](https://github.com/StayLameBro/backburner) menawarkan ide yang cukup gila tapi masuk akal: iPhone-mu membantu Mac menjalankan model 27B. Prompt dibaca lebih cepat dan konteks yang didukung lebih besar, semuanya lewat kabel USB-C.

Buat yang sering eksperimen dengan LLM lokal tapi terbentur VRAM, ini pendekatan yang layak dicoba — memanfaatkan chip Neural Engine di iPhone sebagai akselerator pendamping. Tren "LLM lokal gratis" makin matang, dan proyek semacam ini menurunkan barrier entry-nya lagi.

## 2. muse-gadget-sdk — SDK open-source dari Meta

Meta merilis [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk), SDK open-source untuk membangun "gadget" di asisten AI mereka, Muse. Ini sinyal bahwa Meta serius membangun ekosistem developer di sekitar asisten AI-nya, mirip pola yang dulu dipakai untuk plugin ChatGPT.

Kalau kamu main di ranah integrasi AI ke produk, pantau repo ini — siapa cepat bikin gadget berguna, dia yang dapat traksi.

## 3. leviathan — deep memory untuk AI agent dalam satu binary

[elstongun/leviathan](https://github.com/elstongun/leviathan) adalah "deep memory" untuk agent di atas dataset besar: JSONL, JSON, CSV/TSV, sampai SQLite — semuanya dikemas dalam satu binary statis tanpa dependensi.

Memory management adalah salah satu masalah paling nyata saat membangun agent yang bekerja dengan data besar. Solusi single-binary seperti ini menarik untuk di-self-host: gampang deploy, gampang dioprek, dan tidak mengikat ke vendor tertentu.

## 4. replica-skill — 11 skill Claude gratis untuk clone aplikasi

[Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) berisi sebelas skill Claude gratis berlisensi MIT yang bisa meng-clone aplikasi apa pun: reverse-engineer, rebuild, uji bug, lalu perbaiki hal yang dibenci user-nya.

Tren "agent skills" makin panas — skill yang bagus bisa mengubah coding agent generik jadi spesialis. Koleksi gratis seperti ini adalah shortcut yang bagus buat bereksperimen.

## 5. whirl — aplikasi chat AI yang niat

[whirlchat/whirl](https://github.com/whirlchat/whirl) memposisikan diri sebagai aplikasi chat AI yang "sweats the details": semua model top, memori yang beneran, dokumen yang hidup, dan tool sendiri.

Pasar chat client AI makin ramai, tapi pendekatan open-source dengan fokus ke detail UX seperti ini patut dilirik — apalagi kalau kamu tidak mau terkunci di satu provider model.

## 6. skills — koleksi skill dari Matt Pocock

Matt Pocock (edukator TypeScript yang cukup dikenal) merilis [mattpocock/skills](https://github.com/mattpocock/skills): kumpulan skill engineering langsung dari folder `.agents` miliknya.

Skill yang dipakai praktisi nyata biasanya lebih "battle-tested" dibanding contoh generik. Buat yang pakai coding agent sehari-hari, repo ini bisa jadi sumber inspirasi workflow.

## 7. MemPilot — kurasi memori multimodal on-demand untuk LLM agent

Paper [MemPilot](http://arxiv.org/abs/2610.06830v1) (arXiv, 5 Okt 2026) mengusulkan orkestrasi kurasi memori multimodal secara on-demand untuk LLM agent. Idenya: agent tidak perlu membawa seluruh riwayat konteks ke mana-mana — memori dikurasi sesuai kebutuhan saat itu juga.

Ini sejalan dengan arah riset agent memory secara umum: konteks yang ramping tapi relevan mengalahkan konteks raksasa yang berisik. Relevan banget kalau kamu membangun agent yang harus ingat banyak hal dalam sesi panjang.

## 8. Paradee — TTS Kokoro-82M didistilasi jadi 8M parameter

Paper [Paradee](http://arxiv.org/abs/2610.06817v1) (arXiv, 5 Okt 2026) mendistilasi model text-to-speech Kokoro-82M menjadi model satu suara berukuran hanya 8M parameter.

Tren distilasi model kecil makin kencang: model yang dulu butuh GPU sekarang bisa jalan di perangkat kecil. Buat proyek yang butuh TTS offline — misal voice assistant atau narasi konten otomatis — model sekecil ini membuka banyak kemungkinan deployment murah.

---

Kalau hari ini cuma sempat coba satu: **backburner** kalau penasaran inference LLM lokal gratis, atau **replica-skill** kalau mau eksperimen dengan agent skill baru.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
