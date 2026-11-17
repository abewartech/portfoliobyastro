---
title: "Tech Watch — Selasa, 17 Nov 2026"
publishDate: 2026-11-17 07:21:00
description: "SkillEvaluator NVIDIA, editor video lokal untuk coding agent, clipping AI self-hosted, dan dua paper agen terbaru."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. NVIDIA SkillEvaluator

NVIDIA merilis framework multi-tier untuk mengevaluasi skill dan plugin AI agent dengan quality gate, deteksi overlap semantik antar skill, dan dataset evaluasi sintetis. Buat yang membangun agen dengan banyak skill — seperti abe yang merakit skill untuk coding agent — ini alat yang pas untuk memastikan skill baru tidak bentrok atau menurunkan kualitas agen sebelum dipakai produksi.

[SkillEvaluator di GitHub](https://github.com/NVIDIA/SkillEvaluator)

## 2. ffmpeg-skill

Editor video lokal untuk coding agent: 42 tool FFmpeg dengan kontrak machine-readable plus server MCP, kompatibel dengan Claude Code, Cursor, dan Codex. Potong, caption, reframe, loudness, sampai export per platform — semuanya jalan lokal, tanpa cloud dan tanpa API key. Mengingat pipeline Shorts abe sudah berbasis FFmpeg, skill ini bisa langsung dipasang sebagai tool agent.

[ffmpeg-skill di GitHub](https://github.com/kajisho5/ffmpeg-skill)

## 3. PaperOrchestra

Framework multi-agen dari Google Research untuk menulis paper riset secara otomatis — dari riset literatur sampai draf lengkap. Menarik sebagai contoh arsitektur agen yang terorkestrasi rapi: tiap agen punya peran (riset, menulis, mereview), dan hasilnya bisa jadi referensi saat merancang agen multi-langkah sendiri.

[PaperOrchestra di GitHub](https://github.com/google-research/paper-orchestra)

## 4. PeakCut

AI clipping untuk video panjang dan live stream, self-hosted dengan API key sendiri. PeakCut otomatis menemukan momen yang layak jadi klip pendek — relevan banget buat pipeline Shorts abe, karena tinggal sambungkan ke sumber video podcast lalu hasilkan kandidat klip tanpa editor cloud berbayar.

[PeakCut di GitHub](https://github.com/haziqahmedqasmi/PeakCut)

## 5. Haru

Model dialog suara full-duplex multibahasa dengan latensi rendah, open-source dari higurashi-ai. Berbeda dari pipeline TTS/STT yang bergantian, Haru bisa mendengar dan berbicara bersamaan seperti percakapan manusia — menarik untuk dicoba di perangkat sendiri, apalagi kalau suatu saat butuh asisten suara lokal.

[Haru di GitHub](https://github.com/higurashi-ai/Haru)

## 6. Arcane

Manajemen Docker modern dengan UI yang rapi, ditulis di Go. Alternatif ringan untuk mengatur container di server sendiri — misalnya di siege atau CWP — tanpa perlu Portainer yang lebih berat. Cocok buat yang self-hosting beberapa service dan ingin memantau container dari satu dashboard.

[Arcane di GitHub](https://github.com/getarcaneapp/arcane)

## 7. ModHarness-RL

Paper terbaru tentang agentic reinforcement learning: harness — scaffold di sekeliling model yang mengatur apa yang dilihat model dari interaksinya — diperlakukan sebagai program yang bisa dipelajari dan berevolusi, bukan sekadar kode statis. Idenya: harness yang ikut belajar bisa membuat agen RL makin efektif dari waktu ke waktu.

[ModHarness-RL di arXiv](https://arxiv.org/abs/2611.18533)

## 8. ARCHER

Paper tentang melatih small language model (SLM) untuk bernalar: bukan sekadar meniru rationale, tapi belajar lewat penalaran yang bisa dieksekusi dan diverifikasi. Hasilnya SLM yang lebih andal di tugas matematika dan penalaran, dengan biaya jauh lebih murah daripada model besar — arah yang sejalan dengan tren model kecil yang bisa jalan lokal.

[ARCHER di arXiv](https://arxiv.org/abs/2611.18494)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
