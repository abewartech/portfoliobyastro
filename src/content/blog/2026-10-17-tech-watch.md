---
title: "Tech Watch — Sabtu, 17 Okt 2026"
publishDate: 2026-10-17 07:21:00
description: "Superpowers dengan dukungan Hermes, Context Mode penghemat context 98%, VoiceStudio alternatif ElevenLabs lokal, dan skill Android resmi Google."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Superpowers (obra)

[Superpowers](https://github.com/obra/superpowers) adalah framework skill + metodologi pengembangan perangkat lunak yang dirancang khusus untuk coding agent. Alurnya menarik: agent tidak langsung menulis kode, tapi lewat tahap brainstorming, penulisan design doc, rencana implementasi terstruktur, lalu subagent-driven development dengan TDD (red-green-refactor) dan code review antar-tugas.

Yang bikin spesial: repo ini sudah 300rb stars, lisensi MIT, dan secara resmi mendukung banyak harness — termasuk **Hermes Agent**. Pola subagent-nya (satu subagent per tugas kecil, review setelah tiap tugas) bisa jadi inspirasi untuk pola kerja agent kita sendiri.

## 2. Context Mode (mksglu/context-mode)

[Context Mode](https://github.com/mksglu/context-mode) adalah MCP server yang menangani "masalah context window" dari empat sisi: output tool disandbox (klaim penghematan 98% — 315 KB jadi 5,4 KB), memori sesi dipersistensi di SQLite lalu di-search via FTS5 saat compaction, paradigma "think in code" (agent menulis script analisis, bukan me-load puluhan file), dan routing otomatis ke 17 platform via MCP + hooks.

Untuk siapa pun yang menjalankan coding agent di sesi panjang, ini layak dievaluasi: sesi yang biasanya amnesia setelah compact bisa dilanjutkan tepat di titik terakhir.

## 3. VoiceStudio (debpalash/VoiceStudio)

[VoiceStudio](https://github.com/debpalash/VoiceStudio) adalah alternatif ElevenLabs yang sepenuhnya open-source dan berjalan lokal: voice cloning, voice design, video dubbing, dictation, transcription, hingga pembuatan audiobook — diklaim mendukung 646 bahasa. Arsitekturnya Electron + Python backend, ada local API dan integrasi MCP sehingga coding agent bisa mengotomasi workflow audio.

Buat produksi konten (misalnya narasi video pendek), ini menarik karena tidak ada ketergantungan ke API berbayar dan data suara tidak keluar dari mesin sendiri. Catatan lisensi: aplikasinya AGPL-3.0, jadi baca syaratnya kalau mau dipakai komersial.

## 4. Android Skills (android/skills)

Google merilis [koleksi skill resmi Android](https://github.com/android/skills) untuk coding agent: modul SKILL.md berisi instruksi yang dioptimasi AI untuk pola-pola pengembangan Android — upgrade AGP 9, CameraX, Jetpack Compose, R8 analyzer, navigasi, profiling, testing, sampai migrasi TV Leanback ke Compose TV. Lisensi Apache 2.0.

Bisa dipasang sebagai plugin agent (`/plugin install android-skills --marketplace android/skills`) atau per-skill lewat Android CLI. Relevan buat dev mobile yang sering meminta agent mengerjakan proyek Android.

## 5. Cursor Plugins Official (cursor/plugins)

[Repo plugin resmi Cursor](https://github.com/cursor/plugins) memuat spesifikasi plugin plus puluhan plugin bawaan: dari workflow dev (PR review canvas, orchestrate multi-agent, ralph-loop) sampai integrasi SaaS (Gmail, Google Drive, GitHub, Playwright, Shopify, WhatsApp Business). 12rb stars.

Trennya jelas: plugin/skill kini jadi standar lintas-harness (Claude Code, Codex, Cursor), bukan fitur eksklusif satu vendor. Kalau membangun custom tooling agent, mengikuti format standar ini bikin tool kita portabel.

## 6. AI Job Search (MadsLorentzen/ai-job-search)

[Framework pencarian kerja berbasis Claude Code](https://github.com/MadsLorentzen/ai-job-search) — 48rb stars. Fork repo, isi profil, lalu Claude mengevaluasi posting loker, men-score kecocokan, men-tailor CV + cover letter (LaTeX), menyiapkan interview, sampai melacak hasil aplikasi. Penulisnya membuktikan sendiri: 69 aplikasi tailor-made, 20 interview pertama, dan satu kontrak sebagai AI engineer.

Pola `/setup → /scrape → /rank → /apply → /interview → /outcome` adalah contoh workflow agent yang matang: drafter-reviewer, sumber terverifikasi sebelum dipakai, dan draft-only (tidak pernah auto-send). Perhatikan: fork publik GitHub menyimpan data pribadi di file ter-track, jadi gunakan repo private sebagai upstream kalau mau serius memakainya.

## 7. Private RAG via Random Projection (arXiv)

Paper [Private Retrieval Augmented Generation via Random Projection](https://arxiv.org/abs/2610.22297) mengusulkan RAG yang menjaga privasi: embedding diacak lewat random projection sehingga pihak yang memproses retrieval tidak melihat representasi asli dokumen. Relevan buat siapa pun yang mengindeks data sensitif ke pipeline agent tapi peduli privasi data — topik yang makin penting seiring agent dipakai untuk data internal perusahaan.

## 8. Learning Self-Orchestration in Decentralized Agent Swarms (arXiv)

Paper [Learning Self-Orchestration in Decentralized Agent Swarms](https://arxiv.org/abs/2610.22322) meneliti bagaimana swarm agent belajar mengorkestrasi dirinya sendiri tanpa koordinator pusat. Ini arah riset yang menarik untuk sistem multi-agent: bukan satu "boss agent" yang mendelegasikan, tapi agen-agen yang menegosiasikan pembagian kerja. Pola ini bisa menginspirasi desain workflow swarm yang lebih tahan terhadap kegagalan satu titik.

---

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
