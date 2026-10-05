---
title: "Tech Watch — Senin, 5 Okt 2026"
publishDate: 2026-10-05 07:21:00
description: "DeepSeek 4 bisa jalan lokal via ds4 (antirez), OpenDots & open-dot bawa AI coworker ke komputer sendiri, plus claude-mem, agent skill HTML, framework e2e baru, dan design language impeccable."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. ds4 — DeepSeek 4 Lokal di Laptop Sendiri

[antirez/ds4](https://github.com/antirez/ds4) adalah inference engine lokal untuk DeepSeek 4 Flash dan PRO yang berjalan di Metal (Apple Silicon), CUDA, dan ROCm. Ini datang dari antirez, kreator Redis, jadi kredibilitas teknisnya solid.

Buat abe yang sudah biasa eksperimen dengan model open-source, ds4 menurunkan gesekan terbesar: inferensi model kelas DeepSeek 4 tanpa biaya API dan tanpa kirim data ke cloud. Potensial untuk stack lokal — misalnya dipakai sebagai backend model murah untuk agent coding.

## 2. OpenDots — AI Coworker Always-On

[CopilotKit/OpenDots](https://github.com/CopilotKit/OpenDots) menawarkan konsep "AI coworker" yang selalu aktif dan berpindah-pindah antara teks, panggilan telepon, dan Slack. Ini evolusi dari agent yang pasif menunggu prompt menjadi entitas yang ikut dalam alur kerja tim.

Relevan buat abe yang memantau tren AI agent: pola always-on seperti ini mulai jadi standar untuk use case support, sales, dan ops internal.

## 3. open-dot — Personal AI Agent di Komputer Sendiri

[composio-community/open-dot](https://github.com/composio-community/open-dot) adalah personal AI agent open-source yang bekerja mandiri di komputer pengguna (Mac app, integrasi OpenAI + Composio).

Trennya jelas: agent tidak lagi hanya hidup di cloud vendor, tapi bergerak ke perangkat pengguna dengan akses tool lokal. Buat developer full stack, ini pola arsitektur yang layak dipelajari — permission model, tool sandboxing, dan persistensi task.

## 4. claude-mem — Memori Persisten untuk AI Agent

[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) menangkap semua yang dilakukan agent selama sesi, mengompresnya, dan membuatnya tersedia lintas sesi untuk setiap agent.

Ini menyelesaikan salah satu masalah paling nyata saat memakai coding agent setiap hari: konteks hilang tiap sesi baru. Kalau abe pakai Claude Code atau agent sejenis secara rutin, tool seperti ini layak dicoba — ingatan proyek yang persisten bisa menghemat banyak prompt ulang.

## 5. answer-me-with-html — Agent Skill Berbasis HTML

[QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) adalah agent skill yang menjawab pertanyaan sulit dengan satu halaman HTML yang enak dibaca, bukan wall of text di terminal.

Menarik karena menunjukkan arah baru agent skill: output agent tidak harus teks mentah. Skill bisa memproduksi artefak ter-render (HTML, dashboard, dokumen) yang jauh lebih berguna untuk jawaban kompleks.

## 6. e2e — Framework Testing Generasi Baru

[tester-army/e2e](https://github.com/tester-army/e2e) mengklaim sebagai framework e2e testing generasi baru untuk aplikasi web dan mobile.

Buat abe yang pegang aplikasi absensi 30 ribu karyawan dan beberapa app mobile di ALSOK, tooling e2e yang lebih ringan dan modern selalu layak dilirik — apalagi kalau bisa mencakup web dan mobile dalam satu framework.

## 7. impeccable — Design Language untuk AI Harness

[pbakaus/impeccable](https://github.com/pbakaus/impeccable) adalah design language yang membuat AI harness (seperti coding agent) menghasilkan desain yang lebih bagus. Dibuat oleh pbakaus (eks-Vercel), yang paham betul soal design system.

Ini relevan dengan tren "vibe coding": bottleneck-nya bukan lagi kecepatan generate kode, tapi kualitas output desain. Design language yang dioptimalkan untuk AI consumer adalah kategori tooling baru yang menarik.

## 8. Keyword Harnesses Fail Open — Diagnostic Murah untuk Tool-Use LLM

Paper arXiv [2610.02142](https://arxiv.org/abs/2610.02142) mengusulkan "diagnostic ladder" murah untuk memverifikasi klaim tool-use pada small language model — menemukan bahwa banyak keyword harness "fail open" (lolos palsu).

Praktis buat abe: sebelum percaya benchmark tool-use sebuah model kecil (yang penting saat memilih model gratis/murah untuk agent), ada cara murah untuk mengujinya sendiri.

---

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
