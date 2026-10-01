---
title: "Tech Watch — Kamis, 1 Okt 2026"
publishDate: 2026-10-01 07:21:00
description: "Gemini 4 Argon rilis, Magnitude klaim 2x lebih cepat dari llama.cpp, dots punya browser anti-block, jevgrep bantu coding agent eksplorasi repo, dan paper market-aware routing untuk inferensi LLM open-weight."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Intisari harian dari GitHub trending, Hacker News, dan arXiv — disaring untuk full-stack developer.

## 1. Gemini 4 Argon rilis — model frontier baru Google

Google mengumumkan Gemini 4 Argon, model frontier terbaru yang dibangun untuk deep reasoning dalam workflow jangka panjang: software engineering real-world, enterprise knowledge work (legal, finance), dan pertahanan siber. Skor 77,9% di DeepSWE v1.1 (di atas Claude Opus 5.5 dan GPT-6 Astra), limit output 1 juta token, dan harga perkenalan $2 per juta token input / $10 per juta token output.

Saat ini rollout masih bertahap — dimulai dari cyber defender terpercaya via Fairwind Program, lalu ke pelanggan API berbayar dan Google AI Ultra. Begitu API-nya terbuka untuk developer, ini kandidat kuat buat ditambahkan ke OmniRoute sebagai node berbayar murah.

[Pengumuman resmi Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)

## 2. Magnitude — inference engine self-optimizing, 2x llama.cpp

Magnitude (YC S25) adalah inference engine open-source yang mengkompilasi dan men-tuning kernel di perangkat target sebelum model jalan — bukan shipping kernel yang sudah precompiled. Klaimnya: sampai 2x throughput dibanding llama.cpp, 92% lebih cepat decode di Metal (Apple Silicon), 19% di CUDA.

Didesain khusus untuk agent lokal: dynamic memory allocation (heap membesar/mengecil mengikuti sesi agent), jalan di macOS/Linux/Windows, dan bisa di-plug ke Pi, OpenCode, Hermes, OpenClaw, Codex. Worth trying buat abe yang jalanin Hermes di Apple Silicon.

[GitHub — magnitudedev/magnitude](https://github.com/magnitudedev/magnitude)

## 3. dots — AI agent dengan browser sendiri yang anti-block

dots adalah AI agent open-source yang membawa browser-nya sendiri dan tidak kena block situs. Buat abe yang sering butuh otomasi riset web (hunting gig, price watch, scraping), ini pendekatan yang menarik — browser automation biasanya mentok di deteksi bot, dan dots mengklaim menyelesaikan masalah itu.

[GitHub — feder-cr/dots](https://github.com/feder-cr/dots)

## 4. jevgrep — cari kode dengan bertanya

jevgrep adalah CLI untuk coding agent: tinggal tanya "kode ini ngapain?" dan dia menemukan file serta konteks sumber yang relevan. Di atas Jev (search engine semantik), tools ini menghemat token waktu coding agent eksplorasi repo besar — daripada baca seluruh tree, agent dapat langsung konteks yang tepat.

[GitHub — dzhng/jevgrep](https://github.com/dzhng/jevgrep)

## 5. context-mode — optimasi context window coding agent

context-mode adalah tools optimasi context window untuk AI coding agent: mensandbox output tool (reduksi 98%), menyimpan session memory secara persisten, dan menegakkan routing lewat 17 platform via MCP + hooks. Buat abe yang jalanin Hermes setiap hari, ini kategori tools yang langsung terasa manfaatnya — context window yang lebih efisien berarti sesi agent lebih panjang dan lebih murah.

[GitHub — mksglu/context-mode](https://github.com/mksglu/context-mode)

## 6. OpenClaw — AI yang "beneran ngelakuin sesuatu"

OpenClaw memposisikan diri sebagai AI agent yang benar-benar mengeksekusi task, jalan di OS apa pun dan platform apa pun. Di tengah maraknya framework agent, arsitekturnya menarik dipelajari — terutama sebagai perbandingan untuk Hermes gateway yang sudah jalan di Telegram abe.

[GitHub — openclaw/openclaw](https://github.com/openclaw/openclaw)

## 7. OpenAI rilis mcp-extensions untuk plugin ChatGPT

OpenAI merilis mcp-extensions: cara membangun plugin yang terasa seperti fitur native ChatGPT. Buat abe yang bikin tools sendiri, ini jalur resmi untuk mengintegrasikan aplikasi/tools ke dalam ChatGPT — bukan sekadar custom GPT, tapi plugin first-class.

[GitHub — openai/mcp-extensions](https://github.com/openai/mcp-extensions)

## 8. Paper arXiv: market-aware routing untuk inferensi LLM open-weight

Paper terbaru (2609.37902) membahas routing inferensi LLM open-weight yang sadar pasar — tidak bisa memilih provider hanya dari price list. Konsepnya langsung relevan dengan OmniRoute: routing yang cerdas harus mempertimbangkan latensi, throughput, dan biaya secara dinamis, bukan sekadar urutan fallback statis. Bahan bacaan bagus buat improve routing `auto/thrifty` di OmniRoute.

[arXiv — 2609.37902](https://arxiv.org/abs/2609.37902)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
