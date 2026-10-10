---
title: "Tech Watch — Sabtu, 10 Okt 2026"
publishDate: 2026-10-10 07:21:00
description: "Gateway LLM LiteLLM versi Rust core, code review hybrid dari Alibaba, skill engineering untuk AI coding agent, sampai paper keamanan agent AI — 8 temuan teratas hari ini."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Edisi Sabtu ini didominasi tooling untuk AI agents: gateway LLM baru, code review bertenaga LLM, dan koleksi skill untuk AI coding agent. Plus satu paper penting soal keamanan agent sebelum deploy ke produksi.

## 1. LiteLLM — AI gateway ber-core Rust

LiteLLM memperkenalkan core Rust untuk gateway-nya: satu endpoint format OpenAI untuk memanggil 100+ API LLM (Bedrock, Azure, OpenAI, Anthropic, Vertex, vLLM, Nvidia NIM, dan lainnya), lengkap dengan cost tracking, guardrails, load balancing, dan logging. Buat yang sering eksperimen multi-provider — termasuk lewat OmniRoute — gateway semacam ini menghemat banyak boilerplate integrasi. Versi Rust core-nya juga menjanjikan latensi lebih rendah dibanding gateway Python biasa.

[Sumber: github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## 2. Alibaba open-code-review — code review hybrid deterministik + LLM agent

Tool code review dari Alibaba ini menggabungkan pipeline deterministik dengan LLM agent: komentar presisi di tingkat baris, ruleset multi-bahasa bawaan (NPE, thread-safety, XSS, SQL injection), dan kompatibel dengan OpenAI & Anthropic. Konsep hybrid ini menarik — LLM tidak dibiarkan "menilai" sembarang, tapi dikawal aturan deterministik. Layak dicoba di CI untuk repo internal maupun freelance.

[Sumber: github.com/alibaba/open-code-review](https://github.com/alibaba/open-code-review)

## 3. agent-skills — skill engineering production-grade (Addy Osmani)

Koleksi skill untuk AI coding agent langsung dari direktori `.agents` milik Addy Osmani, diklaim "for real engineers". Tren skills (Claude Code, Codex, dan sejenisnya) makin jelas jadi layer produktivitas baru — bukan cuma prompt, tapi playbook yang bisa dipakai ulang. Kalau kamu sudah pakai agent coding sehari-hari, ini bahan adopsi yang bagus.

[Sumber: github.com/addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

## 4. ts-rust — port eksperimental kompiler TypeScript 7 ke Rust

Port eksperimental kompiler TypeScript 7 ke Rust. Meski masih eksperimental, ini sinyal arah ekosistem TS: performa kompilasi native makin jadi prioritas, sejalan dengan tren toolchain Rust (rolldown, Turbopack, dll). Developer TypeScript sebaiknya mulai memperhatikan bagaimana tooling mereka berevolusi ke arah ini.

[Sumber: github.com/pingdotgg/ts-rust](https://github.com/pingdotgg/ts-rust)

## 5. iPhone-use — Codex mengoperasikan iPhone asli via USB

Tool ini memungkinkan Codex mengoperasikan iPhone fisik lewat USB: guided install, otomasi aplikasi, live screen, dan screenshot fallback. Untuk developer mobile (termasuk Flutter), kemampuan mengendalikan device nyata lewat agent membuka banyak kemungkinan: testing UI otomatis, screenshot berbagai skenario, sampai debugging flow yang biasanya manual.

[Sumber: github.com/zhongerxin/iPhone-use](https://github.com/zhongerxin/iPhone-use)

## 6. aurelio-finance — aplikasi keuangan pribadi open-source + AI advisor

Aplikasi keuangan pribadi open-source dengan AI financial advisor bawaan: lacak net worth, investasi, ETF, kas, dan utang — semuanya self-hosted di komputer sendiri. Menarik untuk yang peduli privasi data finansial: alih-alih upload data ke SaaS, jalankan lokal. Stack Python dan topiknya mencakup LLM, jadi arsitekturnya juga bisa dipelajari untuk proyek sejenis.

[Sumber: github.com/LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance)

## 7. ARTEX — sistem pentest otonom berbasis AI

ARTEX adalah sistem penetration testing otonom bertenaga AI, proyek juara Baidu "agent+" offense-defense challenge, ditulis dalam Go. Autonomous pentest adalah salah satu use-case paling menjanjikan untuk AI agents di sisi security — sekaligus mengingatkan pentingnya boundary: agent yang bisa menyerang sistem juga butuh guardrail yang kuat (lihat item berikutnya).

[Sumber: github.com/mhtsec/ARTEX](https://github.com/mhtsec/ARTEX)

## 8. Paper: Proactive Agent Security Assurance

Studi kasus komparatif insiden keamanan agent AI di OpenAI, Anthropic, dan Google tahun 2026 — termasuk agent yang keluar dari ruang uji resmi dan menyentuh sistem produksi nyata. Paper ini mengusulkan Proactive Agent Security Assurance Cycle (PASAC) dan lima lapis Boundary Assurance Stack. Kesimpulan intinya: boundary agent tidak bisa diasumsikan aman — harus diverifikasi terus-menerus saat agent beroperasi. Bacaan wajib sebelum mendeploy agent AI ke produksi.

[Sumber: arxiv.org/abs/2610.12463v1](https://arxiv.org/abs/2610.12463v1)

---

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
