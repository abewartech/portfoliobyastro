---
title: "Tech Watch — Rabu, 11 Nov 2026"
publishDate: 2026-11-11 07:21:00
description: "MCP resmi Home Assistant, panduan web modern buat coding agent, dan Claude Sheets & Whiteboards."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Home Assistant MCP resmi

Home Assistant akhirnya merilis server MCP resmi di [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp). Artinya agen AI kini bisa mengendalikan perangkat rumah lewat protokol standar yang sama, tanpa jembatan atau integrasi pihak ketiga. Buat yang sudah menjalankan Home Assistant — seperti setup di rumah abe — ini membuka jalan untuk menghubungkan agen seperti Hermes langsung ke lampu, sensor, dan otomatisasi rumah.

## 2. Modern Web Guidance

Google Chrome merilis [modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance), panduan agar coding agent menulis web dengan primitif modern, bukan pola JavaScript era 2019. Ini relevan buat siapa pun yang memakai agen coding untuk proyek web: tanpa panduan seperti ini, agen cenderung menghasilkan kode dengan pola lama yang masih "berfungsi" tapi sudah ketinggalan zaman.

## 3. Claude Sheets & Whiteboards

Claude kini punya [Sheets, Whiteboards, dan Data](https://claude.com/resources/articles/sheets-whiteboards-data) — spreadsheet, papan tulis kolaboratif, dan analisis data langsung di dalam chat. Fitur ini menggeser Claude dari sekadar chatbot menjadi ruang kerja, dan patut dicoba buat pengolahan data ringan tanpa membuka aplikasi lain.

## 4. AlphaProof Code

DeepMind memperkenalkan [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/), sistem AI yang menulis kode dengan pembuktian formal. Kalau terbukti andal, ini langkah baru menuju coding agent yang bukan hanya menghasilkan kode yang "kelihatan benar", tapi kode yang terbukti benar secara matematis.

## 5. Val Town tutup

Platform serverless [Val Town resmi winding down](https://blog.val.town/winding-down). Kabar ini jadi pengingat: layanan kecil yang praktis bisa hilang kapan saja, jadi proyek yang bergantung pada platform semacam ini sebaiknya punya rencana migrasi — atau sejak awal dibangun di atas infrastruktur yang dikendalikan sendiri.

## 6. Coding Agents in KVM

Paper [Coding Agents in KVM](https://arxiv.org/abs/2611.12823) membahas cara menjalankan coding agent dalam VM KVM dengan kontrol pengguna dan resource terbatas. Pendekatan ini cocok buat self-hosting di server sendiri seperti siege: agen tetap bisa bekerja leluasa di dalam VM, sementara data dan infrastruktur di luar tetap aman.

## 7. WorkflowArena

[WorkflowArena](https://arxiv.org/abs/2611.12856) adalah benchmark baru untuk menguji orkestrasi workflow dalam sistem multi-agent berbasis LLM. Seiring makin banyaknya framework agen yang bermunculan, benchmark seperti ini berguna untuk menilai mana yang benar-benar bisa mengeksekusi workflow kompleks, bukan sekadar demo.

## 8. Panduan Inference Engineering

Panduan terbuka [An Open Field Guide to Inference Engineering](https://docs.modelplane.ai/guides/inference-guide) merangkum praktik menjalankan inferensi LLM secara efisien. Bekal yang bagus buat siapa pun yang berencana self-host model di server sendiri, dari pemilihan hardware sampai optimasi serving.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
