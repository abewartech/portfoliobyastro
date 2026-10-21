---
title: "Tech Watch — Rabu, 21 Okt 2026"
publishDate: 2026-10-21 07:21:00
description: "DeepInfer, Orca, Graphify, dan riset terbaru soal akurasi LLM agent — intisari tren teknologi hari ini."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. DeepInfer

DeepSeek merilis DeepInfer, framework inference performa tinggi untuk serving model DeepSeek skala besar. Buat yang tertarik self-hosting LLM, ini kabar bagus: framework resmi dari pembuat modelnya sendiri biasanya paling optimal untuk arsitektur model tersebut.

[deepseek-ai/DeepInfer di GitHub](https://github.com/deepseek-ai/DeepInfer)

## 2. Orca

Orca adalah tempat buat bekerja dengan sekumpulan agent (misalnya Grok Bot, Claude Code) — jalankan coding agent apa pun dengan subscription sendiri, tersedia di desktop, mobile, dan remote runtime. Menarik buat yang sudah langganan beberapa tool AI tapi pengin satu antarmuka buat mengelolanya.

[stablyai/orca di GitHub](https://github.com/stablyai/orca)

## 3. vLLM

vLLM kembali trending — engine inference dan serving LLM yang high-throughput dan hemat memori. Ini standar de-facto kalau mau serving model open-source (Llama, Qwen, DeepSeek, dll.) di server sendiri dengan efisien.

[vllm-project/vllm di GitHub](https://github.com/vllm-project/vllm)

## 4. Graphify

Graphify mengubah codebase — lengkap dengan docs, skema SQL, config, dan PDF — jadi knowledge graph yang bisa di-query, plus skill siap pakai buat Claude Code dan Cursor. Berguna banget buat onboarding di codebase besar atau riset arsitektur proyek lama.

[Graphify-Labs/graphify di GitHub](https://github.com/Graphify-Labs/graphify)

## 5. Ruflo

Ruflo adalah agent harness buat deploy swarm multi-player yang cerdas, mengoordinasikan workflow otonom, dan membangun sistem AI percakapan. Tren agent harness makin ramai — patut dicoba kalau lagi eksperimen dengan multi-agent.

[ruvnet/ruflo di GitHub](https://github.com/ruvnet/ruflo)

## 6. Earshot

Earshot memberi "telinga" buat coding agent: AI bisa mendengar, me-review, dan membuat suara. CPU-only dan open source. Konsep yang unik — interaksi suara buat agent coding masih jarang dieksplorasi.

[Leonxlnx/earshot di GitHub](https://github.com/Leonxlnx/earshot)

## 7. Blender AI MCP Addon

Addon Blender yang menyediakan asisten AI dan MCP server langsung di dalam Blender: visual chat, scene tools, dan workflow multi-agent. Kompatibel dengan OpenAI, ChatGPT, Claude, dan Gemini. Relevan buat yang produksi aset 3D — mempercepat iterasi modeling lewat instruksi natural language.

[LiCinCan/blender-ai-mcp-addon di GitHub](https://github.com/LiCinCan/blender-ai-mcp-addon)

## 8. Paper: "Same Simulation, Different Evidence"

Paper arXiv terbaru yang menarik buat pembangun agent: harness LLM agent makin sering menyimpan output tool yang panjang di luar context window (misalnya ke file) demi hemat token — tapi riset ini menunjukkan agent yang menghitung jawaban benar tetap bisa menjawab salah karena cara evidence diambil. Insight penting buat desain harness agent sendiri, terutama soal context compression.

[Paper di arXiv](https://arxiv.org/abs/2610.26836)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
