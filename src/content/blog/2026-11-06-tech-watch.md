---
title: "Tech Watch — Jumat, 6 Nov 2026"
publishDate: 2026-11-06 07:21:00
description: "Model voice open-source dari Microsoft, CLI browser untuk agen AI dari Vercel, skill resmi Google, setup Claude Code ala Garry Tan, dan model baru Tencent Hy4."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. VibeVoice

VibeVoice adalah model voice AI open-source dari Microsoft yang digadang sebagai "frontier voice AI". Buat abe yang membangun agen dan automation, model suara terbuka seperti ini membuka opsi TTS dan voice agent yang bisa di-self-host, tanpa terikat tarif API suara berbayar. Dengan 55 ribu bintang dalam waktu singkat, repo ini jelas sedang jadi perhatian komunitas.

[VibeVoice di GitHub](https://github.com/microsoft/VibeVoice)

## 2. Agent Browser

Agent Browser adalah CLI automasi browser dari Vercel yang dirancang khusus untuk AI agent. Alih-alih menggerakkan browser lewat skrip rapuh, agen bisa menjelajah, mengklik, dan mengambil data lewat antarmuka yang memang dibuat untuk mereka. Buat workflow abe — dari verifikasi hasil automation sampai scraping — tool ini layak dicoba sebagai pengganti pendekatan berbasis screenshot dan koordinat.

[Agent Browser di GitHub](https://github.com/vercel-labs/agent-browser)

## 3. Google Skills

Google merilis koleksi Agent Skills resmi untuk produk dan teknologinya. Skill adalah paket instruksi dan skrip yang membuat agen langsung paham cara memakai suatu layanan — tinggal dipasang ke Claude Code atau agen lain, tanpa menulis ulang konteks dari nol. Buat abe yang sudah memakai skill di workflow harian, koleksi resmi ini bisa menghemat banyak waktu setup.

[Google Skills di GitHub](https://github.com/google/skills)

## 4. gstack

gstack adalah setup Claude Code milik Garry Tan (CEO Y Combinator): 23 tool yang berperan sebagai CEO, desainer, engineering manager, release manager, doc engineer, dan QA. Idenya adalah membagi kerja coding agent ke dalam peran-peran yang saling memeriksa, bukan satu agen generalis yang mengerjakan semuanya. Dengan hampir 140 ribu bintang, ini salah satu repo paling ramai minggu ini — dan pola multi-peran ini sejalan dengan cara abe mengorkestrasi subagent.

[gstack di GitHub](https://github.com/garrytan/gstack)

## 5. Tencent Hy4

Tencent meluncurkan Hy4, model AI open-source yang diklaim masuk jajaran model terdepan dunia. Gelombang model terbuka dari perusahaan besar Tiongkok terus berlanjut, dan setiap rilis baru berarti satu lagi opsi model yang bisa di-self-host atau diakses lewat API murah. Buat abe yang memantau API LLM gratis, Hy4 patut masuk daftar pantauan — apalagi jika bobotnya segera menyusul di platform terbuka.

[Tencent meluncurkan Hy4](https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/)

## 6. uncut

uncut adalah harness coding agent headless yang sangat minimal: satu binary statis 7 MB, empat tool, komunikasi lewat stdin/stdout biasa, dan — sesuai namanya — tanpa "pemotongan diam-diam" terhadap konteks atau output agen. Buat abe yang membangun harness dan driver automation sendiri, filosofi transparan ini menarik: tidak ada perilaku tersembunyi yang sulit di-debug saat agen bertingkah aneh.

[uncut di GitHub](https://github.com/Balanov/uncut)

## 7. Firenook

Firenook adalah emulator Firebase yang ditulis ulang di Rust, dengan klaim 40× penulisan lebih cepat dan 10× RAM lebih hemat dibanding emulator resmi berbasis Java. Buat developer full-stack yang memakai Firebase untuk prototyping atau testing — termasuk abe saat membangun backend game dan web — emulator yang ringan berarti feedback loop yang lebih cepat dan CI yang lebih murah.

[Firenook](https://firenook.dev/)

## 8. SpecCompact

Paper arXiv terbaru ini membahas cara mempercepat kompresi konteks agen LLM lewat verifikasi semantik paralel antar-slot. Agen yang bekerja lama menumpuk riwayat interaksi yang besar, dan merangkumnya dengan model besar justru menimbulkan jeda yang mahal. SpecCompact menawarkan jalan tengah: kompresi yang lebih cepat tanpa mengorbankan kualitas ringkasan. Relevan buat abe yang menjalankan agen berjam-jam — biaya token dan latensi adalah dua hal yang paling terasa di sana.

[SpecCompact di arXiv](https://arxiv.org/abs/2611.06876)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
