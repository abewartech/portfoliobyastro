---
title: "Tech Watch — Selasa, 29 Sep 2026"
publishDate: 2026-09-29 07:21:00
description: "Claude Sonnet 5.5 rilis, VoiceStudio trending 44k stars, router model untuk coding agent, Strata bawa 125B MoE ke GPU 8GB, skill deploy otomatis untuk agent, dan CEO MongoDB pindah ke Meta."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Intisari harian dari GitHub trending, rilis open-source, dan berita industri — disaring untuk full-stack developer.

## 1. Claude Sonnet 5.5 rilis — 30% lebih cepat, lebih murah per task

Anthropic merilis model kedua dari keluarga Claude 5.5: output 30% lebih cepat dari Sonnet 5, harga token sama ($2/$10 per juta), tapi butuh token jauh lebih sedikit sehingga cost per task turun sampai 30%. Skor 70.6% di Terminal-Bench 4.0 — mengalahkan Sonnet 5 (10.3%) bahkan Opus 5.5 (66.4%). Model ID: `claude-sonnet-5-5`, tersedia di AWS, Google Cloud, dan Azure. Haiku 5.5 menyusul beberapa minggu lagi.

[Pengumuman resmi Anthropic](https://www.anthropic.com/claude-sonnet-5-5)

## 2. VoiceStudio — alternatif ElevenLabs yang 100% lokal

Repo trending #1 hari ini dengan 44 ribu stars: voice cloning, voice design, video dubbing, dictation, transkripsi, dan pembuatan audiobook dalam 646 bahasa — semua berjalan lokal di mesin sendiri. Kalau sering bikin konten audio atau butuh TTS tanpa biaya API, ini wajib dicoba.

[github.com/debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

## 3. magpie — satu tempat untuk semua model coding agent

"Every agent's model. One place." Jalankan Codex di atas DeepSeek, Claude Code di atas Kimi, langsung dari menu bar. Cocok buat yang eksperimen dengan model-model murah/gratis sebagai backend coding agent.

[github.com/yetone/magpie](https://github.com/yetone/magpie)

## 4. jevgrep — cari kode dengan bertanya

CLI untuk coding agent: temukan file dan konteks sumber yang relevan cukup dengan menanyakan "kode ini ngapain". Praktis untuk navigasi codebase besar bareng agent.

[github.com/dzhng/jevgrep](https://github.com/dzhng/jevgrep)

## 5. Strata — model 125B MoE di GPU 8GB

Qwen3.8-Flash-Next (125B MoE) jalan di NVIDIA 8GB+ dengan one-click install untuk Windows/Linux. Menyediakan API kompatibel OpenAI/Anthropic di localhost, plus input gambar opsional. Menarik buat eksperimen model besar secara self-hosted.

[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)

## 6. golive-skill — dari agent ke production dalam satu alur

Open-source Agent Skill + CLI Node tanpa dependensi: bawa produk yang dibangun agent ke production — hosting, database, domain, email, payment — semua di akun sendiri. Alurnya: detect → plan → approve → apply → verify. Tanpa akun/backend/telemetri pihak ketiga.

[github.com/mikehasa/golive-skill](https://github.com/mikehasa/golive-skill)

## 7. ollaya — "Ollama untuk decision model"

Pull dan serve model keputusan open-source (Laya, decider, NLI, GLiClass) secara lokal di balik API yang kompatibel TypeSafe. Berguna kalau butuh klasifikasi/NLI lokal tanpa memanggil LLM besar.

[github.com/ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya)

## 8. CEO MongoDB pindah ke Meta pimpin unit enterprise AI

Chirantan "CJ" Desai mundur dari MongoDB (saham turun 18%) untuk memimpin Meta Enterprise Platform — bisnis baru Meta yang menjual AI tools ke korporat: agen Muse, Meta Business Agent, Muse API, dan coding tools. Dev Ittycheria kembali jadi interim CEO MongoDB.

[Reuters](https://www.reuters.com/technology/mongodb-ceo-desai-steps-down-lead-metas-enterprise-platform-2026-09-28/)

---

*Tech Watch terbit setiap pagi. Kirim juga via Telegram setiap hari jam 7 pagi.*
