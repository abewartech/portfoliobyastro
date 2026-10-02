---
title: "Tech Watch — Jumat, 2 Okt 2026"
publishDate: 2026-10-02 07:21:00
description: "SvelteKit 3 rilis mayor, Janus jalanin model GGUF via Vulkan di GPU mana pun, model open-weight 0.8B Jeff, Cloudflare Clef buka platform RL fine-tuning, plus plugin resmi Cursor dan toolkit agent Pi."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Intisari harian dari GitHub trending, Hacker News, dan GitHub search — disaring untuk full-stack developer. Hari ini arXiv kena rate limit (429), jadi feed paper diskip sementara.

## 1. SvelteKit 3 rilis

SvelteKit 3 akhirnya tiba — rilis mayor framework full-stack dari tim Svelte. Buat abe yang sehari-hari main di React/Laravel, SvelteKit tetap menarik karena filosofinya kebalikan dari React: compiler-first, nyaris zero-runtime, dan bundle kecil. Rilis mayor biasanya membawa perubahan breaking di routing, server hooks, atau rendering — jadi ini momen yang pas buat cek ulang sebelum dipakai di proyek baru, bukan sekadar update dependency.

[Pengumuman SvelteKit 3](https://svelte.dev/blog/sveltekit-3-is-here)

## 2. Janus — jalanin model GGUF via Vulkan di GPU apa pun

Janus adalah binary Go tunggal yang menjalankan model GGUF lewat Vulkan — artinya bisa jalan di GPU AMD, Intel, maupun Nvidia tanpa drama driver CUDA. Buat abe yang eksperimen self-hosting model lokal (terutama di hardware campuran, bukan cuma Nvidia), ini menurunkan friksi setup dibanding llama.cpp yang butuh compile/config backend GPU. Satu binary, bawa model GGUF favorit, jalan.

[GitHub — Vibra-Ingenn/Janus](https://github.com/Vibra-Ingenn/Janus)

## 3. Jeff — model open-weight 0.8B untuk keputusan cepat

Jeff adalah model open 0.8B yang didesain sebagai "System 1": mengambil keputusan antar opsi dalam hitungan milidetik dengan probabilitas yang terkalibrasi. Ukurannya yang kecil bikin dia murah dan cepat untuk self-host — cocok sebagai komponen decision layer di dalam agent (misal: pilih strategi, pilih tool) tanpa harus memanggil LLM besar untuk hal sepele. Pola yang sama dipakai banyak pipeline agent production: model kecil untuk routing, model besar untuk reasoning.

[GitHub — firelex/jeff](https://github.com/firelex/jeff)

## 4. Cloudflare Clef — open-weight decision models + RL fine-tuning

Cloudflare memperkenalkan Clef: keluarga model open-weight untuk pengambilan keputusan, plus platform RL fine-tuning. Ini relevan ganda: (1) model decision open-weight bisa dipakai gratis/self-host seperti Jeff, dan (2) platform RL fine-tuning dari Cloudflare membuka jalan buat melatih model kecil dengan feedback sendiri tanpa membangun infra training dari nol. Kalau abe pernah penasaran fine-tune model kecil untuk tugas spesifik, ini jalur yang lebih ringan dibanding full SFT.

[Blog Cloudflare — Clef](https://blog.cloudflare.com/clef-decision-models/)

## 5. Cursor rilis spesifikasi plugin resmi

Cursor membuka spesifikasi plugin resmi beserta plugin-plugin official-nya. Ini sinyal Cursor bergerak ke arah ekosistem ekstensi ala VS Code — dan buat developer, ini peluang: plugin yang menyelesaikan masalah spesifik (integrasi internal tools, workflow custom) bisa dibangun di atas API yang sekarang didokumentasikan resmi, bukan hack. Patut dibaca spec-nya kalau abe pakai Cursor sehari-hari.

[GitHub — cursor/plugins](https://github.com/cursor/plugins)

## 6. Pi — toolkit agent AI all-in-one

Pi adalah toolkit agent AI: unified LLM API (satu interface untuk banyak provider), agent loop, TUI, dan coding-agent CLI dalam satu paket. Buat abe yang sudah menjalankan Hermes via OmniRoute, konsepnya familiar — bedanya Pi membawa agent loop dan TUI sendiri. Menarik untuk dibandingkan dengan setup existing: kalau unified LLM API-nya bagus, bisa jadi alternatif routing model lokal.

[GitHub — earendil-works/pi](https://github.com/earendil-works/pi)

## 7. Hyperframes — tulis HTML, render jadi video

Hyperframes dari HeyGen: tulis HTML, render jadi video — dan dirancang khusus untuk dipakai oleh AI agent. Ini langsung nyambung dengan minat abe bikin konten video (TikTok/Facebook): daripada edit manual, template HTML + data bisa di-render jadi video otomatis oleh agent. Potensinya besar untuk konten repetitif seperti daily short — tinggal generate HTML-nya, Hyperframes yang render.

[GitHub — heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

## 8. Superpowers — framework agentic skills untuk dev

Superpowers adalah framework agentic skills sekaligus metodologi pengembangan software yang "works" — intinya sekumpulan skill dan pola kerja yang bikin coding agent (Claude Code dkk.) bekerja lebih rapi dan konsisten. Sejalan dengan tren skills yang lagi ramai (kemarin ada logo-design-skill, mattpocock/skills juga trending), ini menunjukkan ekosistem agent coding sedang menstandarkan cara kerja: bukan cuma prompt, tapi skill yang reusable.

[GitHub — obra/superpowers](https://github.com/obra/superpowers)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
