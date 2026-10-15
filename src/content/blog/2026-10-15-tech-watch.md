---
title: "Tech Watch — Kamis, 15 Okt 2026"
publishDate: 2026-10-15 07:21:00
description: "CLI-Anything bikin semua CLI jadi agent-native (52rb stars), Scout browser agent open-source, 177 skill buat AI scientist, dan dua paper arXiv soal agent yang memperbaiki diri."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. CLI-Anything — "Making ALL Software Agent-Native"

Repo ini (52rb stars) membawa misi besar: membuat semua software CLI bisa dipakai langsung oleh AI agent, lewat CLI-Hub. Buat yang sehari-hari pakai coding agent, ini menarik — banyak tool CLI yang output-nya tidak terstruktur dan boros context window; pendekatan agent-native seperti ini bisa jadi standar ke depan.

[github.com/HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)

## 2. Scout — Browser agent open-source

Scout dari Outcrawl adalah browser agent yang open-source (repo mirror otomatis dari repo resmi mereka). Buat yang sering membangun otomasi browser, arsitekturnya bisa jadi referensi bagus — bagaimana agent bernavigasi di halaman, mengisi form, dan menangani state antar langkah.

[github.com/outcrawlai/scout](https://github.com/outcrawlai/scout)

## 3. scientific-agent-skills — 177 skill untuk AI scientist

Klaimnya "The #1 Agent Skills library for science" dengan 177 skill siap pakai yang sudah divalidasi, 49rb stars. Terlepas dari hype marketing-nya, nilai praktisnya ada di pola desain skill-nya: bagaimana memecah tugas sains menjadi skill modular yang bisa dipanggil agent. Pola ini bisa ditiru untuk membangun custom skill di workflow sendiri.

[github.com/K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

## 4. my-claude-code-mods — Koleksi mod Claude Code

Kumpulan custom Claude Code mods dari satu developer sesuai kebutuhan pribadinya. Berguna sebagai inspirasi: banyak workflow agent yang bagus lahir dari kebutuhan personal lalu dibagikan — dan mod kecil seringkali lebih praktis daripada framework besar.

[github.com/YeonwooSung/my-claude-code-mods](https://github.com/YeonwooSung/my-claude-code-mods)

## 5. gptibo — Storefront self-hosted (Go, MIT)

Storefront + panel admin yang bisa di-self-host, dengan backend Go dan lisensi MIT. Buat yang mengelola toko online di marketplace, punya alternatif self-hosted untuk sistem storefront sendiri bisa jadi opsi menarik — penuh kontrol, tanpa biaya langganan platform.

[github.com/CoolkHz/gptibo](https://github.com/CoolkHz/gptibo)

## 6. Paper: "Self-Evolving Agent Harness"

Paper ini membahas harness agent yang berevolusi sendiri: scaffolding perangkat lunak agent — prompt, memory, workflow, komponen executable — direvisi secara otomatis sambil model intinya tetap. Ini arah yang menarik untuk agent yang berjalan lama: bukan modelnya yang di-fine-tune, tapi "kerangka kerjanya" yang belajar dari pengalaman.

[arxiv.org/abs/2610.18813v1](http://arxiv.org/abs/2610.18813v1)

## 7. Paper: "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards"

Long-horizon agent — yang bekerja otonom dari hitungan jam sampai hari — membutuhkan environment dengan sinyal progress yang padat, bukan cuma reward di akhir. Paper ini mengusulkan cara men-scaling environment seperti itu dengan dense progress rewards. Relevan buat siapa pun yang membangun agent yang ditinggal kerja lama.

[arxiv.org/abs/2610.18868v1](http://arxiv.org/abs/2610.18868v1)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
