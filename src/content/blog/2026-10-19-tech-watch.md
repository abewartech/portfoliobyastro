---
title: "Tech Watch — Senin, 19 Okt 2026"
publishDate: 2026-10-19 07:21:00
description: "Plugin resmi Claude Code dari Anthropic, eleven & leanrea buat reverse engineering agent-first, swarm multi-agent ruflo, browser agent Scout, dan model image open-source MOSS-Image."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Claude Code Plugins — Direktori Plugin Resmi dari Anthropic

[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) adalah direktori plugin resmi yang dikelola Anthropic untuk Claude Code — berisi plugin dan skill berkualitas tinggi yang sudah terkurasi. Repository ini masuk trending harian dengan lebih dari 1.100 stars dalam sehari, menandakan ekosistem Claude Code sedang berkembang pesat. Kalau kamu memakai coding agent di terminal setiap hari, direktori ini adalah titik awal paling aman untuk memperluas kemampuan agent: skill untuk git workflow, review kode, dan integrasi tool, semuanya dari sumber resmi. Patut dibandingkan dengan setup Hermes kamu — mungkin ada skill yang bisa diadopsi langsung.

## 2. eleven — Reverse Engineering Agent-First

[Zfinix/eleven](https://github.com/Zfinix/eleven) membawa konsep "agent-first" ke reverse engineering: agent ACP bisa membaca, me-rename simbol, dan me-patch binary di macOS, Windows, Linux, hingga Android. Proyek ini baru dirilis seminggu terakhir dan langsung mengumpulkan ratusan stars. Buat kamu yang sedang mendalami reverse engineering binary (seperti analisis Player.bin di PES Club Manager), eleven menawarkan pendekatan baru: alih-alih menelusuri disassembly manual, biarkan agent yang melakukan pekerjaan berat seperti renaming fungsi dan pemetaan struktur. Wajib masuk daftar coba.

## 3. leanrea — Skill Reverse Engineering 8KB

[aicodeking/leanrea](https://github.com/aicodeking/leanrea) adalah skill satu file 8KB yang diklaim menggantikan REA (Reverse Engineer Anything): hanya memakai CLI tools biasa, tanpa MCP, dengan benchmark 38% lebih cepat dan 35% lebih murah. Filosofinya sederhana — kadang tool paling efektif bukan yang paling canggih, tapi yang paling ringan. Kalau eleven terlalu berat atau eksperimental, leanrea bisa jadi pintu masuk yang praktis: instal skill, jalankan dari terminal, langsung analisa binary. Kombinasinya dengan eleven menarik: leanrea untuk triage cepat, eleven untuk deep-dive.

## 4. ruflo — Agent Harness untuk Swarm Multi-Agent

[ruvnet/ruflo](https://github.com/ruvnet/ruflo) adalah agent harness untuk mendeploy "swarm" multi-agent: mengoordinasikan workflow otonom antar banyak agent dan membangun sistem multi-pemain yang cerdas. Repository ini trending dengan 500+ stars dalam sehari. Tren multi-agent makin kuat — dari orchestra coding agent sampai riset agent swarm yang kooperatif. Kalau kamu bereksperimen dengan Hermes dan OmniRoute, ruflo memberi gambaran arsitektur bagaimana banyak agent bisa dikoordinasikan sebagai satu sistem, bukan sekadar tool tunggal.

## 5. CLI-Anything — Membuat Software Agent-Native

[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) mengusung misi "membuat SEMUA software agent-native" lewat CLI-Hub. Ide dasarnya: command-line interface adalah jembatan paling natural antara AI agent dan software, jadi mari standarkan dan perluas. Proyek ini relevan dengan filosofi tooling kamu — server, script, dan otomasi yang semuanya bisa dikendalikan agent. CLI-Hub-nya (clianything.cc) layak dikunjungi untuk melihat katalog tool yang sudah "diagent-kan".

## 6. Scout — Browser Agent Open-Source dari Outcrawl

[outcrawlai/scout](https://github.com/outcrawlai/scout) adalah browser agent open-source: agent yang bisa membuka halaman web, mengklik, mengisi form, dan mengekstrak data secara otomatis. Dikembangkan Outcrawl dan di-mirror otomatis ke GitHub. Buat kamu yang sudah membangun pipeline otomatisasi browser (upload YouTube Shorts, seller center, dan sejenisnya), Scout bisa jadi referensi arsitektur — atau bahkan pengganti sebagian script custom. Browser agent open-source yang matang makin langka; yang satu ini patut dipantau perkembangannya.

## 7. MOSS-Image — Model Image Generation Open-Source 5B

[OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image) adalah model diffusion 5B parameter open-source dengan kualitas text rendering dan layout generation yang tinggi — dua kelemahan klasik model image open-source. Buat kebutuhan desain lokal (banner produk digital, thumbnail, aset blog), model yang bisa me-render teks dengan benar adalah game changer: tidak perlu lagi mengandalkan API berbayar untuk gambar berisi tulisan. Wajar masuk shortlist evaluasi untuk pipeline konten kamu.

## 8. Paper: Improving Environment-Agnostic Coding Agents

[Paper arXiv 2610.22289](https://arxiv.org/abs/2610.22289) meneliti peran scaffolding dalam meningkatkan coding agent yang bekerja lintas environment — bagaimana struktur prompt, tool, dan feedback loop memengaruhi keberhasilan agent di codebase yang belum dikenal. Temuannya praktis: agent yang sama bisa jauh lebih efektif hanya dengan scaffolding yang tepat. Insight ini langsung aplikatif buat workflow agent kamu sehari-hari — sebelum ganti model atau tool, coba perbaiki dulu scaffolding-nya.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
