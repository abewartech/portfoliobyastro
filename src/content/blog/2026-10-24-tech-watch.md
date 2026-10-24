---
title: "Tech Watch — Sabtu, 24 Okt 2026"
publishDate: 2026-10-24 07:21:00
description: "php2shell (CVE-2026-109618/109619) masih mendominasi: scanner & info operasional resmi bermunculan, plus TTS multibahasa VoxCPM2 dan prompt REA untuk reverse engineering."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Edisi Sabtu ini didominasi satu tema besar: **php2shell** — celah RCE pre-auth (CVSS 9.2) di `session.upload_progress` PHP yang memicu banjir tool deteksi dan dokumentasi resmi. Berikut ringkasan yang relevan untuk full-stack & self-hosting.

## 1. php/php-src trending di GitHub

[php/php-src](https://github.com/php/php-src) — repo interpreter PHP resmi — melonjak ke daftar trending harian, dipicu gelombang perhatian soal php2shell. Ini pengingat konkret: patch resmi sudah keluar di PHP 8.2.35 / 8.3.36 / 8.4.27 / 8.5.12, jadi image `php:8.2-apache` di siege perlu direbuild ke 8.2.35 secepatnya. Kalau ada deployment PHP yang masih menunda upgrade, minggu ini waktunya.

## 2. NCSC-NL/php2shell — info operasional resmi

[NCSC-NL/php2shell](https://github.com/NCSC-NL/php2shell) — pusat siber nasional Belanda merilis informasi operasional resmi soal kerentanan php2shell. Sumber otoritatif seperti ini berguna sebagai referensi verifikasi untuk daily CVE watch (cakrawala.id, pernika.com), supaya keputusan patch berlandas pada advisory resmi, bukan sekadar PoC random.

## 3. assetnote/php2shell-scanner

[assetnote/php2shell-scanner](https://github.com/assetnote/php2shell-scanner) — scanner fidelitas tinggi khusus untuk CVE-2026-109618 dan CVE-2026-109619. Tool paling actionable edisi ini: bisa langsung dijalankan untuk mengaudit siege dan VPS sebelum/sesudah rebuild PHP. Assetnote dikenal scanner-nya yang presisi, jadi false positive-nya minim.

## 4. openai/php2shell-checker

[openai/php2shell-checker](https://github.com/openai/php2shell-checker) — OpenAI ikut merilis checker untuk php2shell. Bisa dipakai sebagai pembanding silang terhadap scanner lain — kalau dua scanner independen sepakat, keyakinan status patching jauh lebih tinggi.

## 5. SnailSploit/Claude-Red

[SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) — pustaka skill offensive-security terkurasi yang dirancang untuk sistem skill Claude, masing-masing skill berupa file SKILL.md terstruktur. Menarik sebagai bahan adaptasi: pola yang sama bisa dipakai membangun skill audit keamanan untuk workflow agent, misalnya otomatisasi pemeriksaan header & TLS untuk daily watch.

## 6. OpenBMB/VoxCPM2 — TTS multibahasa tanpa tokenizer

[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) — VoxCPM2: TTS multibahasa tanpa tokenizer dengan creative voice design dan voice cloning yang mendekati suara asli. Relevan untuk produksi konten: narasi tutorial atau voice-over Short berbahasa Indonesia bisa dibuat tanpa talenta suara, dan kualitasnya diklaim true-to-life.

## 7. REA-Prompts — prompt untuk reverse engineering

[JoasASantos/REA-Prompts](https://github.com/JoasASantos/REA-Prompts) — kumpulan prompt untuk REA (Reverse Engineer Anything): memaksimalkan hasil reverse engineering, mengkloning, atau membedah program dengan LLM. Cocok dipadukan dengan kerjaan RE yang sedang berjalan (Ghidra headless / angr) — prompt yang baik bisa mempercepat pemahaman fungsi-fungsi seperti `WesysData::IsValid`.

## 8. Paper: "A Fix for Softmax and Cross-Entropy"

[http://arxiv.org/abs/2610.31642v1](http://arxiv.org/abs/2610.31642v1) — paper baru menemukan dua bug numerik pada implementasi standar softmax, log-softmax, dan cross-entropy: "Softmax Collapse" yang membulatkan gradien logit target. Temuan fundamental untuk siapa pun yang bereksperimen dengan training/fine-tuning — dan relevan sebagai bekal memahami perilaku model di fleet Ollama siege.

---

Rekomendasi akhir pekan: jalankan `assetnote/php2shell-scanner` ke siege, lalu rebuild image ke PHP 8.2.35 — dua langkah itu menutup celah paling kritis minggu ini.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
