---
title: "Tech Watch — Kamis, 5 Nov 2026"
publishDate: 2026-11-05 07:21:00
description: "Agen CLI yang jalan sendiri di background, dua model open-weight baru untuk coding agent, toolkit spec-driven development, plus paper soal memangkas biaya konteks."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Agent Autoloop

Agent Autoloop membuat agen CLI bekerja di background secara mandiri: menerima tugas, menindaklanjuti sampai selesai, dan hanya mengganggu pengguna saat ada keputusan yang benar-benar butuh persetujuan. Pola ini mirip dengan cara abe menjalankan automation terjadwal — agen yang diam-diam bekerja, lalu melapor saat hasilnya sudah jadi.

[Agent Autoloop di GitHub](https://github.com/KKKKhazix/agent-autoloop)

## 2. Ripple-65B Preview

Ripple-65B Preview diklaim sebagai model open-weight terbaik saat ini untuk agentic coding. Buat abe yang memakai coding agent setiap hari, model seperti ini menarik karena bisa di-self-host dan dievaluasi langsung terhadap workflow nyata, tanpa bergantung sepenuhnya pada API berbayar.

[Ripple-65B Preview](https://www.ricursive.com/ripple)

## 3. Kimi K3.1 Pro

Bobot model Kimi K3.1 Pro resmi dirilis terbuka di Hugging Face. Rilis bobot terbuka seperti ini memberi abe opsi eksperimen: menjalankan model besar secara lokal atau di VPS sendiri, membandingkannya dengan model API, dan memilih yang paling hemat untuk tugas agen.

[Kimi K3.1 Pro di Hugging Face](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)

## 4. Spec Kit

Spec Kit adalah toolkit resmi GitHub untuk spec-driven development: spesifikasi ditulis dulu, lalu diubah menjadi rencana implementasi yang terstruktur. Buat proyek full-stack abe, pendekatan ini membantu menjaga agar fitur baru tidak mulai dari prompt kosong, melainkan dari dokumen yang bisa ditinjau dan direvisi.

[Spec Kit di GitHub](https://github.com/github/spec-kit)

## 5. PR Agent

PR Agent adalah tool open-source yang me-review pull request secara otomatis — merangkum perubahan, menandai risiko, dan memberi saran perbaikan. Di repo abe yang dikelola lewat PR, tool ini bisa memangkas waktu review rutin sehingga perhatian manusia fokus ke keputusan arsitektur, bukan ke pemeriksaan baris per baris.

[PR Agent di GitHub](https://github.com/The-PR-Agent/pr-agent)

## 6. You Don't Need Long Context

Paper arXiv ini menunjukkan bahwa konteks yang terus memanjang membuat token belakangan jauh lebih mahal — disparitas biayanya bisa mencapai 7x pada model open-weight. Lewat kompresi konteks berkala, agen tetap bekerja baik dengan biaya jauh lebih rendah. Temuan ini relevan langsung dengan agen-agen abe yang menjalankan sesi panjang.

[You Don't Need Long Context di arXiv](https://arxiv.org/abs/2611.05306)

## 7. Gauge

Gauge adalah CLI open-source yang memperbaiki dokumentasi secara rekursif: membaca docs, menemukan yang usang atau tidak konsisten, lalu memperbaikinya. Buat abe yang memelihara banyak repo dan dokumen proyek, tool seperti ini menjaga README dan panduan tetap sinkron dengan kode tanpa harus ditulis ulang manual.

[Gauge di GitHub](https://github.com/gauge-sh/gauge-cli)

## 8. Go JSON v2

Go merilis API JSON baru yang lebih cepat dan lebih ergonomis dibanding encoding/json lama. Kalau abe menyentuh backend Go — misalnya untuk service kecil atau tooling — API baru ini layak dicoba, karena parsing JSON adalah pekerjaan yang muncul di hampir setiap service.

[Go JSON v2](https://go.dev/blog/jsonv2)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
