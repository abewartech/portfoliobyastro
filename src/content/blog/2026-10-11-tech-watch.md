---
title: "Tech Watch — Minggu, 11 Okt 2026"
publishDate: 2026-10-11 07:21:00
description: "OpenAI rilis 719 manuskrip matematika hasil model AI, colibri bawa inference MoE ke hardware sendiri, pentagi pentest otomatis via AI agent, dan CRM open-source dengan integrasi WhatsApp."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. openai/math — 719 manuskrip matematika dari model AI internal

OpenAI membuka repositori berisi 719 manuskrip matematika yang dihasilkan oleh model internal mereka, lengkap dengan artefak bukti (proof artifacts) — sebagian sudah diformalkan dalam Lean. Beberapa hasil masih dalam tahap verifikasi, dan repo ini akan terus diperbarui.

Buat kita sebagai engineer, ini menarik bukan cuma dari sisi matematikanya: ini bukti nyata bahwa LLM sekarang dipakai untuk riset formal, bukan sekadar menjawab pertanyaan. Tren "AI untuk riset" ini layak dipantau karena akan mengubah cara AI agent bekerja di domain teknis yang presisi.

[https://github.com/openai/math](https://github.com/openai/math)

## 2. colibri — frontier MoE di hardware yang kamu punya

Repo dengan ★41rb ini langsung jadi trending: menjalankan frontier MoE (mixture-of-experts) models di hardware yang sudah dimiliki, ditulis murni dalam C tanpa dependensi, dan expert-nya di-stream dari disk.

Pendekatan "streaming experts from disk" ini menyelesaikan masalah terbesar inference MoE: total parameter raksasa tidak perlu muat di VRAM sekaligus. Buat yang tertarik self-hosting LLM besar tanpa GPU monster, ini breakthrough praktis yang layak dicoba.

[https://github.com/JustVugg/colibri](https://github.com/JustVugg/colibri)

## 3. pentagi — AI agent otonom untuk penetration testing

pentagi (★25rb) adalah sistem AI agent yang fully autonomous untuk melakukan penetration testing kompleks. Ini contoh bagus arsitektur multi-agent di domain yang benar-benar sulit: pentesting butuh perencanaan, eksekusi tool, dan adaptasi dari hasil.

Buat kita yang membangun agent (Hermes, misalnya), arsitekturnya bisa jadi referensi — cara agent-nya memecah tugas kompleks, memilih tool, dan memverifikasi hasil sendiri.

[https://github.com/vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)

## 4. agent-skills — registry skill tervalidasi untuk AI coding agent

Katalog skill yang sudah divalidasi keamanannya untuk AI coding agent: Antigravity, Claude Code, Cursor, Copilot, dan lainnya. Masalah nyata dengan skill komunitas adalah trust — skill adalah kode yang berjalan di mesin kita dengan akses penuh.

Registry yang terverifikasi seperti ini menjawab kebutuhan profesional: memperpanjang kemampuan coding assistant tanpa risiko skill jahat. Layak dibookmark buat workflow sehari-hari.

[https://github.com/tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills)

## 5. DeskcommCRM — CRM open-source dengan AI agent + WhatsApp

DeskcommCRM (★4,5rb) adalah "AI sales OS" open-source yang bisa di-self-host: CRM dengan native AI agents dan integrasi WhatsApp via WAHA, sudah MCP-ready dan multi-tenant. Diposisikan sebagai alternatif open-source untuk Kommo, Octadesk, dan Intercom.

Relevan ganda: self-hosting (data di tangan sendiri) dan integrasi WhatsApp — kanal utama bisnis Indonesia. MCP-ready juga berarti bisa dihubungkan ke AI agent eksternal dengan mudah.

[https://github.com/melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM)

## 6. fsearch — pencarian disk macOS dalam ~1 ms

fsearch adalah whole-disk file search untuk macOS: mendukung fuzzy name matching, toleran typo, dan indexed content grep — diklaim ~1 ms untuk 8 juta file. Kecil, native, dan memecahkan masalah nyata developer Mac yang tiap hari mencari file.

[https://github.com/noahdunnagan/fsearch](https://github.com/noahdunnagan/fsearch)

## 7. Paper: kuantisasi optimizer-state AdamW 4-bit

Paper baru memperkenalkan "Rounding in Preconditioner Space" — desain ulang kuantisasi 4-bit untuk optimizer-state AdamW. Optimizer state biasanya memakan 2x memori parameter saat training/fine-tuning, jadi menurunkannya ke 4-bit membuka fine-tuning model besar di GPU dengan VRAM terbatas.

Relevan buat yang eksperimen fine-tuning model open-source di mesin sendiri.

[https://arxiv.org/abs/2610.12444v1](https://arxiv.org/abs/2610.12444v1)

## 8. Paper: Ecology of AI Agents

Paper ini mempelajari "ekologi" AI agent: kolaborasi antar agent menciptakan ambang populasi (population threshold) untuk takeoff — di bawah ambang tertentu kolaborasi tidak terjadi, di atasnya kemampuan kolektif melonjak.

Wawasan penting buat desain multi-agent system: bukan cuma soal kemampuan agent individual, tapi dinamika populasinya. Praktis untuk siapa pun yang membangun sistem agent kolaboratif.

[https://arxiv.org/abs/2610.12436v1](https://arxiv.org/abs/2610.12436v1)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
