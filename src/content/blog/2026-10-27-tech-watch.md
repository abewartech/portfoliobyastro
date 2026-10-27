---
title: "Tech Watch — Selasa, 27 Oktober 2026"
publishDate: 2026-10-27 07:21:00
description: "GPT-6.1 Terra yang lebih murah dan kuat di coding, scanner keamanan skill agen dari NVIDIA, serta deretan agent skills baru yang siap pakai."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. GPT-6.1 Terra

OpenAI merilis GPT-6.1 Terra, model yang diklaim cepat, efisien, dan jauh lebih murah: harga API standarnya 50% lebih rendah dari GPT-5.6 Terra. Untuk coding, lompatannya besar — di Terminal-Bench 4.0, Terra memecahkan 50,3% tugas, lebih dari dua kali lipat skor pendahulunya. Model ini juga unggul di penalaran visual dan computer use, menjadikannya pilihan menarik untuk agen coding harian dengan bujet terbatas.

[Baca pengumuman resmi](https://openai.com/index/introducing-gpt-6-1-terra/)

## 2. SkillSpector dari NVIDIA

Seiring makin banyaknya agent skills yang beredar, NVIDIA merilis SkillSpector: scanner keamanan untuk skills Claude Code, Codex, dan MCP. Tool ini mendeteksi prompt injection, pola jahat, risiko eksfiltrasi data, dan risiko supply-chain sebelum sebuah skill dipasang. Bagi siapa pun yang rajin memasang skills dari komunitas, ini adalah lapisan pertahanan yang layak masuk ke rutinitas.

[Lihat di GitHub](https://github.com/NVIDIA/SkillSpector)

## 3. TradingAgents

TradingAgents adalah framework multi-agen LLM untuk trading finansial yang sedang naik daun di GitHub trending (bertambah 1.395 star dalam sehari). Di luar konteks tradingnya, arsitektur multi-agen dengan peran-peran spesialis di dalamnya adalah referensi bagus untuk merancang sistem agen apa pun.

[Lihat di GitHub](https://github.com/TauricResearch/TradingAgents)

## 4. andrej-karpathy-skills

Repo ini berisi satu file CLAUDE.md yang diturunkan dari observasi Andrej Karpathy tentang jebakan-jebakan umum LLM saat coding. Tinggal tempel ke proyek, perilaku Claude Code langsung membaik — contoh nyata bahwa "skill" terbaik kadang sesederhana instruksi yang tepat.

[Lihat di GitHub](https://github.com/multica-ai/andrej-karpathy-skills)

## 5. tstack

Theo (t3dotgg) membagikan kumpulan agent skills yang ia pakai setiap hari, kompatibel dengan Claude Code dan Codex. Cocok sebagai titik awal untuk membangun perpustakaan skill pribadi tanpa mulai dari nol.

[Lihat di GitHub](https://github.com/t3dotgg/tstack)

## 6. Type Server Protocol

Microsoft memperkenalkan Type Server Protocol (TSP), protokol baru untuk language server yang didokumentasikan bersama Pylance. Jika diadopsi luas, TSP bisa membuat tooling TypeScript/Python lebih cepat dan terstandar — kabar baik bagi pengembang yang hidup di editor setiap hari.

[Baca dokumentasinya](https://github.com/microsoft/pylance-release/blob/main/docs/tsp/type-server-protocol.md)

## 7. Hob

Hob adalah alternatif open-source yang berjalan on-device untuk Claude Cowork dan ChatGPT. Agen lokal tanpa ketergantungan cloud semakin relevan, baik untuk privasi maupun untuk bekerja tanpa koneksi stabil.

[Lihat di GitHub](https://github.com/FrigadeHQ/hob)

## 8. Measure Before You Train (arXiv)

Paper ini memperkenalkan Foyer, agen inbox personal yang self-hosted, dan membandingkan model keputusan bertipe, baseline klasik, dan LLM generatif untuk routing pesan. Temuannya relevan bagi siapa pun yang merancang routing antar model LLM — termasuk routing provider gratis — karena tidak semua keputusan butuh LLM.

[Baca papernya](https://arxiv.org/abs/2610.32955v1)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
