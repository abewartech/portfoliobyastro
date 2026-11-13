---
title: "Tech Watch — Jumat, 13 Nov 2026"
publishDate: 2026-11-13 07:21:00
description: "Gemini 4 Hydrogen, bug RCE PostgreSQL berusia 22 tahun, dan model open Edge0-145B yang jalan di komputer sendiri."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Gemini 4 Hydrogen

Google memperkenalkan [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/), model terbarunya yang hadir bersama Orchestrator — mode multi-agen di dalam Antigravity yang bisa mengoordinasikan beberapa agen untuk mengerjakan tugas kompleks secara paralel. Buat developer yang sudah memakai agen coding, ini arah yang jelas: model bukan lagi sekadar autocomplete, tapi orkestrator yang membagi kerja ke sub-agen. Layak dicoba lewat Antigravity untuk melihat apakah workflow multi-agen ini benar-benar menghemat waktu dibanding satu agen besar.

## 2. Bug PostgreSQL 22 Tahun Jadi RCE

Sebuah bug *type confusion* di PostgreSQL yang sudah ada selama 22 tahun ternyata bisa dieksploitasi menjadi *remote code execution* — dijelaskan tuntas di artikel [How I Ended Up Turning a 22-Year-Old PostgreSQL Type Confusion Primitive into RCE](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-20). Ini pengingat keras buat siapa pun yang menjalankan Postgres di produksi: bug yang tampak sepele di lapisan tipe data bisa berujung pada eksekusi kode di server. Cek versi Postgres yang kamu pakai dan pastikan patch keamanan terkait CVE ini sudah diterapkan.

## 3. Edge0-145B

[Edge0-145B](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) adalah model open-weight 145 miliar parameter yang diklaim membawa kemampuan kelas frontier ke komputer sendiri. Tren model besar yang bisa di-self-host makin kuat — setelah kuantisasi dan arsitektur yang efisien, batas antara model cloud dan model lokal makin tipis. Buat yang menjalankan model lokal di server sendiri, ini kandidat serius untuk dicoba: kemampuan frontier tanpa tagihan API per token.

## 4. agentes-chat

[agentes-chat](https://github.com/agentes-chat/agentes-chat) adalah alternatif Slack yang open-source dan bisa di-self-host, dengan satu pembeda penting: tim manusia dan AI agent bekerja bersama di channel dan DM yang sama. Alih-alih agen hidup di tool terpisah, mereka jadi anggota tim yang bisa diajak kolaborasi langsung di tempat kerja sehari-hari. Buat tim kecil atau proyek pribadi yang ingin alur kerja agen yang lebih natural, ini konsep yang menarik untuk diuji di server sendiri.

## 5. AgentRun

[AgentRun](https://github.com/Parcha-ai/agentrun) adalah platform open-source yang menambahkan *self-improvement*, eksekusi yang tahan lama (*durable execution*), dan *control plane* di atas harness agen favoritmu. Klaimnya: agen menjadi lebih pintar, lebih tahan gagal, dan memakai lebih sedikit token di setiap run. Ini menyentuh masalah nyata dalam menjalankan agen di produksi — run yang gagal di tengah jalan dan biaya token yang membengkak. Kalau kamu sudah menjalankan agen untuk otomasi rutin, AgentRun layak dievaluasi.

## 6. Yogurt

[Yogurt](https://github.com/FrigadeHQ/yogurt) adalah aplikasi catatan meeting AI yang privat dan open-source. Berbeda dengan layanan pencatat meeting berbasis cloud, Yogurt dirancang agar data tidak perlu dikirim ke server pihak ketiga. Buat developer yang sering meeting dan peduli privasi — atau sekadar tidak mau langganan bulanan untuk fitur transkrip — ini alternatif yang bisa di-self-host dan langsung dipakai.

## 7. solo-to-team-skills

Repo [solo-to-team-skills](https://github.com/dabingfy-dot/solo-to-team-skills) berisi skill untuk tim yang dipimpin manusia dan dibantu AI: cara mendelegasikan tugas, memverifikasi bukti kerja agen, menjelaskan langkah dengan jelas, dan belajar dari kasus nyata. Seiring agen coding makin dipakai di tim, yang membedakan tim yang efektif bukan lagi seberapa pintar modelnya, tapi seberapa rapi proses delegasi dan verifikasinya. Koleksi skill ini memberi kerangka praktis untuk itu.

## 8. Qwen Code

[Qwen Code](https://github.com/QwenLM/qwen-code) adalah coding agent open-source dari Qwen yang hidup di terminal — alternatif Claude Code yang makin ramai dipakai. Dengan 29 ribu star lebih, ia termasuk alat agen coding yang paling cepat diadopsi saat ini. Buat yang sudah nyaman dengan workflow agen di terminal, Qwen Code layak dicoba sebagai pembanding: gratis, open-source, dan didukung model Qwen yang kuat di coding.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
