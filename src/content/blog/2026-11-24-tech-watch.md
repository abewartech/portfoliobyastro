---
title: "Tech Watch — Selasa, 24 Nov 2026"
publishDate: 2026-11-24 07:21:00
description: "GLM-5.4, Qwen 27B dalam 10 GB, akselerator MCP Antigravity, dan tim AI agent lokal-first."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. GLM-5.4

Zhipu merilis GLM-5.4, model open-weight yang diposisikan untuk coding generalis dan diklaim memakai arsitektur loop transformer pertama mereka. Bagi yang membangun coding agent atau mencari alternatif model coding selain pilihan besar yang sudah ada, rilis ini layak dicoba — apalagi bobotnya terbuka dan ekosistem tooling-nya terus berkembang.

[Baca pengumuman GLM-5.4](https://z.ai/blog/glm-5.4)

## 2. NariQ Qwen3.8-27B

NariQ mengemas Qwen3.8-27B ke dalam satu file GGUF 10 GB dengan kualitas yang diklaim setara BF16. Ini kabar baik buat self-hosting: model kelas 27B yang biasanya butuh VRAM besar kini jauh lebih ringan dijalankan lokal, misalnya lewat llama.cpp atau Ollama, tanpa mengorbankan banyak kualitas.

[Lihat model di Hugging Face](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF)

## 3. agy-fast

Plugin MCP non-invasif untuk Google Antigravity (CLI, desktop, dan IDE) yang diklaim memangkas turn LLM sekitar 34% dan menghemat kuota token. Buat yang memakai Antigravity sebagai coding agent sehari-hari, penghematan seperti ini langsung terasa di biaya dan kecepatan iterasi.

[Lihat repo agy-fast](https://github.com/INK-Q/agy-fast)

## 4. PiBot

PiBot adalah tim AI agent open-source yang local-first untuk desktop: multi-agent group chat, computer use, browser, dan MCP dalam satu aplikasi. Konsepnya mirip punya beberapa agen yang saling berkolaborasi di mesin sendiri, tanpa harus mengirim semua konteks ke cloud.

[Lihat repo PiBot](https://github.com/w01fb0ss/PiBot)

## 5. skill-distill

Tool ini mengubah satu sesi Claude Code atau Codex yang bagus menjadi sebuah skill yang bisa diikuti model open-weight untuk mengerjakan tugas serupa. Ide yang menarik: alih-alih menulis skill dari nol, kita "menyuling" jejak kerja yang sudah terbukti berhasil menjadi panduan yang bisa dipakai ulang.

[Lihat repo skill-distill](https://github.com/sybil-solutions/skill-distill)

## 6. Stalwart

Stalwart, mail server open-source yang sudah dikenal di kalangan self-hosting, kini diposisikan sebagai pengganti drop-in Microsoft Exchange. Buat yang menjalankan infrastruktur sendiri dan ingin lepas dari layanan mail berbayar, ini opsi yang patut dilirik — satu server untuk mail, kalender, dan kontak.

[Baca pengumuman Stalwart](https://stalw.art/blog/microsoft-exchange-replacement/)

## 7. MemOnce

Paper ini mengusulkan arsitektur memori yang skalabel untuk LLM, agar model bisa mempertahankan dan memakai kembali state memori dalam interaksi jangka panjang. Relevan buat siapa pun yang membangun AI agent: memori yang persisten dan efisien adalah salah satu kepingan yang masih sering jadi bottleneck.

[Baca paper MemOnce di arXiv](https://arxiv.org/abs/2611.27973)

## 8. Speculative Decoding

Paper ini menunjukkan bahwa speculative decoding — teknik mempercepat inferensi LLM dengan menyiapkan kandidat token lebih dulu — ternyata kurang "spekulatif" dari yang selama ini diduga. Temuan seperti ini penting buat yang men-deploy atau men-tuning serving LLM sendiri, karena memengaruhi cara kita mengukur dan mengoptimalkan throughput.

[Baca paper di arXiv](https://arxiv.org/abs/2611.27891)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
