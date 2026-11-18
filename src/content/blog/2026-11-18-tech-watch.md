---
title: "Tech Watch — Rabu, 18 Nov 2026"
publishDate: 2026-11-18 07:21:00
description: "Skill riset agen AI, LLM 64M yang dilatih 2 jam, optimasi serving LLM lokal, dan paper arsitektur LM serta keamanan MCP."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. last30days-skill

Skill agen AI yang meriset topik apa pun selama 30 hari terakhir dari Reddit, X, YouTube, Hacker News, sampai Polymarket, lalu menyusunnya jadi laporan yang terstruktur. Buat yang membangun agen riset — atau sekadar mau ringkasan cepat soal topik yang sedang ramai — skill ini menghemat waktu karena seluruh pipeline pencarian dan sintesisnya sudah jadi satu paket.

[last30days-skill di GitHub](https://github.com/mvanhorn/last30days-skill)

## 2. MiniMind

Latih LLM 64M parameter dari nol hanya dalam waktu sekitar 2 jam. Proyek ini membuktikan bahwa eksperimen training model bahasa tidak selalu butuh klaster GPU raksasa: dengan model sekecil ini, alur pretraining, arsitektur transformer, dan evaluasi bisa dipelajari end-to-end di perangkat biasa. Cocok buat yang penasaran dengan cara kerja LLM di balik layar.

[MiniMind di GitHub](https://github.com/jingyaogong/minimind)

## 3. inference-optimisation-skill

Skill agen untuk mempercepat serving LLM lokal lewat hill-climbing: mengutak-atik decode, speculative decoding, prefill, KV cache, waktu startup, sampai time-to-first-token di hardware apa pun. Buat yang menjalankan model lokal di server sendiri, skill ini bisa jadi shortcut untuk menemukan konfigurasi serving tercepat tanpa trial-and-error manual.

[inference-optimisation-skill di GitHub](https://github.com/sybil-solutions/inference-optimisation-skill)

## 4. PyBot

Chatbot yang ditulis sepenuhnya dalam Python murni oleh segerombolan agen — tanpa bobot, tanpa training, hanya aturan. Ini eksperimen menarik dari Hugging Face soal sejauh mana agen AI bisa berkolaborasi menulis program yang utuh, dan hasilnya bisa dibaca langsung sebagai contoh arsitektur multi-agen yang praktis.

[PyBot di GitHub](https://github.com/huggingface/pybot)

## 5. tiny-voca

Model text-to-speech dua suara dengan hanya 4,5 juta parameter, dilatih dari nol. Ukurannya yang sangat kecil membuatnya ringan untuk di-self-host, misalnya sebagai suara narasi untuk konten video atau asisten lokal. Di era model TTS yang makin besar, proyek ini menunjukkan bahwa suara yang layak masih bisa dicapai dengan model mungil.

[tiny-voca di GitHub](https://github.com/n4ze3m/tiny-voca)

## 6. rust-anything

Tulis ulang aplikasimu ke Rust sepotong demi sepotong, dengan tiap langkah dicek perilakunya tetap sama dengan kode aslinya. Pendekatan bertahap ini menurunkan risiko migrasi besar-besaran: CLI, HTTP server, dan komponen lain bisa dipindahkan satu per satu sambil tetap yakin tidak ada perilaku yang berubah diam-diam. Relevan buat proyek backend yang butuh performa Rust tanpa rewrite sekaligus.

[rust-anything di GitHub](https://github.com/erkamyaman/rust-anything)

## 7. Latent Lattice Language Models

Paper terbaru yang mengusulkan arsitektur model bahasa baru: menambah komputasi per token lewat koneksi laten yang lebih kaya, bukan sekadar menumpuk layer lebih dalam atau langkah penalaran laten. Idenya, aliran informasi antar layer yang lebih baik bisa memberi kemampuan lebih dengan biaya komputasi yang sebanding — arah riset yang patut diikuti buat yang memantau evolusi arsitektur LLM.

[Latent Lattice Language Models di arXiv](https://arxiv.org/abs/2611.21608)

## 8. When Tool Names Are Not Identities

Paper yang mengukur fenomena provider misbinding pada agen berbasis MCP: agen bisa salah memanggil tool karena nama tool disalahartikan antar provider. Bagi siapa pun yang membangun agen dengan banyak tool dari sumber berbeda, ini peringatan keamanan yang nyata — nama tool saja bukan identitas yang cukup, dan desain sistem tool perlu mempertimbangkan kebingungan semacam ini.

[When Tool Names Are Not Identities di arXiv](https://arxiv.org/abs/2611.21577)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
