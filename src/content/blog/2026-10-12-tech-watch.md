---
title: "Tech Watch — Senin, 12 Okt 2026"
publishDate: 2026-10-12 07:21:00
description: "AirLLM jalanin LLM 70B di GPU 4GB, Helix Foundry bawa data workspace local-first, dan riset terbaru soal keamanan agent LLM."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Intisari teknologi terbaru hari ini: self-hosting LLM yang makin hemat, tooling agent, klon office suite open-source, dan tiga paper riset seputar keamanan dan observabilitas AI agent.

## 1. AirLLM — LLM 70B di Satu GPU 4GB

[AirLLM](https://github.com/lyogavin/airllm) menembus trending GitHub dengan klaim berani: inferensi model 70B parameter di atas satu GPU 4GB. Triknya adalah layer-by-layer inference dengan offloading cerdas, sehingga requirement VRAM turun drastis dibanding quantization biasa. Untuk full-stack engineer yang eksperimen self-hosting (misalnya jadi node OmniRoute), ini bisa memangkas biaya infrastruktur secara signifikan. Layak dicoba benchmark-nya sebelum dijadikan tumpuan produksi — latency per token jadi hal yang perlu diuji.

## 2. Helix Foundry — Data Workspace Local-First

[Helix Foundry](https://github.com/HelixDB/helix-foundry) dari tim HelixDB adalah workspace data local-first yang menghubungkan data perusahaan ke dalam satu ontologi, berjalan sepenuhnya di komputer sendiri di atas HelixDB dan DuckDB. Pendekatan local-first sedang naik daun untuk analitik dan RAG internal tanpa mengirim data ke cloud — relevan untuk arsitektur backend yang peduli privasi data.

## 3. ArtCraft — Klon Office Suite Murni Rust

Proyek [ArtCraft](https://github.com/storytold/artcraft) (storytold) merilis serangkaian reimplementasi clean-room aplikasi produktivitas populer dalam Rust murni: Word ([wordcraft](https://github.com/storytold/wordcraft)), Excel ([gridcraft](https://github.com/storytold/gridcraft)), PowerPoint ([deckcraft](https://github.com/storytold/deckcraft)), hingga AutoCAD ([cadcraft](https://github.com/storytold/cadcraft)). Terlepas dari kegunaannya sebagai produk, codebase-nya adalah referensi arsitektur aplikasi desktop yang rapi — cara memodelkan dokumen kompleks, rendering, dan undo/redo dalam Rust.

## 4. Anatomy — Agent Skill Ilustrasi Isometrik

[Anatomy](https://github.com/wheresryan22/anatomy) adalah agent skill yang membuat ilustrasi isometrik detail dan interaktif dari mesin dan sistem kompleks dunia nyata, menghasilkan SVG yang rapi. Tren "agent skills" sebagai unit kemampuan yang bisa dipasang ke coding agent (Claude Code, Codex, dsb.) terus menguat — skill seperti ini bisa langsung di-drop ke workflow agent untuk kebutuhan dokumentasi visual.

## 5. Omdrop Owl — Airdrop untuk Non-Apple

[Omdrop Owl](https://github.com/t4t5/omdrop-owl) menghadirkan pengalaman berbagi file ala AirDrop untuk perangkat non-Apple. Utilitas kecil lintas platform seperti ini selalu berguna di meja kerja multi-device (Android + laptop Linux/Windows).

## 6. Paper: Caught in the Act — Deteksi Sabotase Agent

Paper [arXiv 2610.12445](http://arxiv.org/abs/2610.12445v1) menunjukkan bahwa probe white-box efektif mendeteksi sabotase dan menangkap penipuan yang tidak terverbalisasi (unverbalized deception) oleh LLM. Seiring agent makin sering diberi akses ke sistem nyata, monitoring perilaku agent di level aktivasi model menjadi lapisan keamanan penting di samping guardrail berbasis aturan.

## 7. Paper: SGUID — Memilih Skill Bank yang Ringkas

[arXiv 2610.12367](http://arxiv.org/abs/2610.12367v1) membahas cara memilih bank skill yang ringkas untuk ko-evolusi model-skill. Temuannya: menambahkan skill prosedural saat inferensi bisa meningkatkan performa downstream secara substansial, tapi pemilihan skill mana yang didistilasi sangat menentukan. Relevan buat yang membangun sistem agent berbasis skills.

## 8. Paper: OnTrack — Monitoring Trajektori Agent Real-Time

[arXiv 2610.12375](http://arxiv.org/abs/2610.12375v1) mengusulkan monitoring dan intervensi real-time terhadap trajektori LLM agent lewat streaming structured reasoning. Untuk agent yang berjalan otonom (trip planner, triage insiden IT, trading), kemampuan mengintervensi di tengah jalan — bukan hanya evaluasi pasca-hoc — adalah kebutuhan operasional yang nyata.

---

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
