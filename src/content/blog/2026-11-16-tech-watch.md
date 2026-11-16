---
title: "Tech Watch — Senin, 16 Nov 2026"
publishDate: 2026-11-16 07:21:00
description: "Univer, Stitch Skills, Claude-BugHunter, dan Open-Orange — spreadsheet open-source, skill AI, dan jalan keluar dari lock-in Cloudflare."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Univer

[Univer](https://github.com/dream-num/univer) adalah engine spreadsheet open-source yang bisa di-embed langsung ke aplikasi web. Buat abe yang sering membangun dashboard dan tools internal, ini menarik sebagai alternatif Google Sheets yang bisa di-host sendiri dan dikustomisasi penuh — dari formula sampai kolaborasi real-time.

## 2. Stitch Skills

Google merilis [Stitch Skills](https://github.com/google-labs-code/stitch-skills), skill resmi untuk memakai Stitch — AI UI generator — bareng coding agent. Alurnya: desain UI digenerate AI, lalu skill ini membantu agent mengubahnya jadi kode yang rapi. Cocok buat mempercepat pembuatan tampilan di proyek Laravel/React abe.

## 3. Claude-BugHunter

[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) adalah skill Claude Code yang fokus ke satu hal: berburu dan memperbaiki bug. Skill ini membimbing agent menelusuri akar masalah secara sistematis, bukan sekadar menebak-nebak. Mengingat workflow abe makin banyak memakai coding agent, skill seperti ini layak dipasang dan dicoba.

## 4. Open-Orange

[Open-Orange](https://github.com/rivet-dev/open-orange) memungkinkan Cloudflare Workers dan Durable Objects berjalan apa adanya di AWS, GCP, atau server sendiri. Ini kabar baik buat yang ingin lepas dari lock-in vendor: kode Workers yang sudah ditulis tidak perlu diubah, tinggal dipindah ke infrastruktur sendiri.

## 5. FFmpeg GUI Editor

[FFmpeg GUI Editor](https://github.com/DevedevT/FFmpeg-GUI-Editor-Windows) adalah editor video ringan untuk Windows yang memotong video secara lossless — tanpa re-encode, jadi cepat dan kualitas tetap utuh. Buat pipeline YouTube Shorts abe, tool ini bisa mempercepat proses pemotongan klip sebelum diunggah.

## 6. Protomaps

Artikel [Protomaps](https://bruceroettgers.eu/blog/protomaps/) menjelaskan bahwa self-hosting map tiles sekarang sudah murah dan mudah. Kalau suatu saat abe butuh peta di proyek web tanpa bergantung pada tagihan vendor peta komersial, pendekatan ini patut dipertimbangkan.

## 7. Eclipse Mosquitto

[Eclipse Mosquitto](https://github.com/eclipse-mosquitto/mosquitto) adalah broker MQTT open-source yang ringan dan sudah teruji lama. Relevan buat abe karena pipeline AIS di server siege memakai MQTT — Mosquitto bisa jadi alternatif atau pelengkap ringan untuk EMQX yang sudah berjalan.

## 8. Unbundling Multimodal Vision Encoding

Paper arXiv [Unbundling Multimodal Vision Encoding](https://arxiv.org/abs/2611.17334) membahas bagaimana model multimodal seharusnya mengolah input visual: memakai vision encoder bawaan, melatihnya dari nol bersama language model, atau menghilangkannya sama sekali. Bacaan yang bagus buat memahami arsitektur di balik model vision-language modern.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
