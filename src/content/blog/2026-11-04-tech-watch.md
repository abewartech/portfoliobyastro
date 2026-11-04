---
title: "Tech Watch — Rabu, 4 Nov 2026"
publishDate: 2026-11-04 07:21:00
description: "Emulator AWS lokal gratis, framework scraping baru, skill Shorts animasi, plus dua paper agen AI yang wajib dibaca."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Floci

Floci adalah emulator AWS lokal yang gratis — alternatif LocalStack untuk pengembangan dan pengujian tanpa perlu menyentuh cloud sungguhan. Buat abe yang sering main self-hosting dan membangun backend, ini memangkas biaya eksperimen: layanan AWS bisa ditiru di mesin sendiri sebelum deploy.

[Floci di GitHub](https://github.com/floci-io/floci)

## 2. Scrapling

Scrapling adalah framework web scraping Python yang menangani segalanya, dari satu request sederhana sampai crawl skala penuh. Mengingat abe punya beberapa pipeline scraping (termasuk AIS), framework seperti ini layak dievaluasi sebagai pengganti kode scraping ad-hoc yang tersebar.

[Scrapling di GitHub](https://github.com/D4Vinci/Scrapling)

## 3. Teardown

Teardown adalah skill Claude Code yang mengubah mesin apa pun menjadi simulator 3D yang bisa dibongkar pasang. Ini contoh menarik dari tren "skill" agen coding: kemampuan baru cukup ditambahkan sebagai skill, tanpa mengubah modelnya.

[Teardown di GitHub](https://github.com/elvarofficial/teardown)

## 4. Claude Animated Shorts

Skill gratis ini membuat Short animasi viral — karakter 2D di dunia 3D — memakai three.js dan Remotion. Sangat nyambung dengan pipeline Short harian abe: elemen animasi seperti ini bisa jadi pembeda orisinal di tengah klip hasil crop biasa.

[Claude Animated Shorts di GitHub](https://github.com/mromidev/claude-animated-shorts)

## 5. Hex

Hex adalah aplikasi dikte suara lokal untuk Mac, Windows, dan Linux. Karena pemrosesan berjalan di perangkat sendiri, audio tidak dikirim ke cloud — pilihan menarik buat yang peduli privasi tapi ingin menulis lebih cepat.

[Hex di GitHub](https://github.com/anomalyco/hex)

## 6. Pika H3 Flex

Pika Labs membuka inferensi H3 Flex untuk video dan audio generation. Buat yang bereksperimen dengan konten AI, ketersediaan kode inferensi open-source memudahkan self-hosting dan penyesuaian, dibanding hanya memakai API berbayar.

[Pika H3 Flex di GitHub](https://github.com/Pika-Labs/Pika-H3-Flex)

## 7. WebHarbor

Paper arXiv ini mengusulkan cara "mendock" situs web nyata menjadi lingkungan agen GUI yang stabil. Evaluasi agen web selama ini rapuh karena situs live terus berubah; WebHarbor membuat lingkungan yang tetap sama selama evaluasi dan pelatihan.

[WebHarbor di arXiv](https://arxiv.org/abs/2611.03634)

## 8. MCP Tool Poisoning

Studi lintas framework ini mengukur risiko keracunan tool di Model Context Protocol: tool eksternal bisa menyisipkan instruksi berbahaya lewat deskripsi atau skemanya. Wajib dibaca siapa pun yang memasang tool MCP ke agen, karena satu tool beracun bisa membelokkan perilaku agen.

[MCP Tool Poisoning di arXiv](https://arxiv.org/abs/2611.03555)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
