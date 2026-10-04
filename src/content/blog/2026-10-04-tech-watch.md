---
title: "Tech Watch — Minggu, 4 Okt 2026"
publishDate: 2026-10-04 07:21:00
description: "OpenDots dari CopilotKit, rilis MCP resmi OpenAI, model open 0.8B jeff, dan skill engineering untuk AI coding agents."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. OpenDots — AI Coworker Open-Source (CopilotKit)

[OpenDots](https://github.com/CopilotKit/OpenDots) dari CopilotKit digambarkan sebagai "AI coworker" yang selalu aktif dan bisa berpindah-pindah antara teks, panggilan, dan Slack. Repo ini langsung melejit ke 2.500+ bintang dalam beberapa hari terakhir, yang menandakan minat besar pada agen AI personal yang berjalan di komputer sendiri.

Buat abe, ini menarik dari dua sisi: sebagai referensi arsitektur agen multi-channel (kalau suatu saat mau bangun agen produktivitas sendiri), dan sebagai alternatif open-source dari agen komersial yang vendor lock-in.

## 2. openai/mcp-extensions — Plugin ChatGPT Resmi dari OpenAI

[openai/mcp-extensions](https://github.com/openai/mcp-extensions) adalah rilis resmi OpenAI untuk membangun plugin MCP yang terasa seperti fitur bawaan ChatGPT. Ini sinyal kuat bahwa OpenAI makin serius menjadikan MCP sebagai standar ekstensibilitas.

Kalau kamu pernah bangun integrasi MCP sendiri (misalnya untuk workflow Hermes atau tooling internal), repo ini wajib dibaca — kemungkinan berisi pola resmi untuk plugin lifecycle, auth, dan UX yang selama ini cuma bisa ditebak.

## 3. firelex/jeff — Model Open 0.8B "System 1"

[jeff](https://github.com/firelex/jeff) adalah model open dengan 0.8B parameter yang dirancang sebagai "System 1" — mengambil keputusan antar opsi dalam hitungan milidetik dengan probabilitas terkalibrasi, dijalankan cukup dengan satu baris perintah.

Buat use case praktis seperti routing request (pilih model murah vs mahal, klasifikasi intent, triage), model sekecil ini bisa jalan di laptop atau VPS kecil tanpa GPU. Menarik buat dieksperimen sebagai lapisan "otak cepat" di depan model besar.

## 4. addyosmani/agent-skills — Skill Production-Grade untuk AI Coding Agents

[agent-skills](https://github.com/addyosmani/agent-skills) dari Addy Osmani (Google) mengumpulkan skill engineering kelas produksi untuk AI coding agents. Ini bukan sekadar prompt — tapi pola terstruktur yang bisa dipasang di Claude Code dan sejenisnya.

Langsung aplikatif: skill-skill ini bisa dicoba di workflow coding harianmu untuk menstandarkan hal-hal seperti code review, testing, dan dokumentasi yang selama ini dikerjakan manual oleh agen.

## 5. earendil-works/pi — Toolkit Agen AI All-in-One

[pi](https://github.com/earendil-works/pi) adalah toolkit agen AI yang menggabungkan unified LLM API, agent loop, TUI, dan coding agent dalam satu paket. Konsep "unified LLM API"-nya mirip dengan yang sudah dipakai di OmniRoute — satu interface untuk banyak provider.

Cocok buat eksperimen self-host: kamu bisa colok provider gratis/keyless yang sudah ada dan punya agent loop sendiri tanpa bergantung ke layanan komersial.

## 6. Agent-Reach — Beri AI Agent "Mata" ke Seluruh Internet

[Agent-Reach](https://github.com/Panniantong/Agent-Reach) menjanjikan kemampuan membaca seluruh internet untuk AI agent — tanpa diblokir. Kalau kamu pernah mengalami agent mentok di Cloudflare Turnstile atau anti-bot saat scraping (pengalaman yang sudah familiar dari faucet automation), tool semacam ini patut dicoba.

## 7. AutoCompact — Kapan Memadatkan Konteks Coding Agent (arXiv)

Paper [AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](http://arxiv.org/abs/2610.02163v1) meneliti pertanyaan yang sangat praktis: kapan waktu terbaik memadatkan (compact) konteks pada coding agent yang berjalan lama. Ini langsung relevan buat sesi panjang di Claude Code — compact yang terlalu dini membuang konteks penting, terlalu lambat membuang token.

---

Paling layak dicoba duluan: **agent-skills** dan **pi** — keduanya langsung bisa dipakai di workflow coding harian tanpa setup berat.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*