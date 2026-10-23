---
title: "Tech Watch — Jumat, 23 Okt 2026"
publishDate: 2026-10-23 07:21:00
description: "Verifikasi formal software pakai LLM dari Anthropic, PoC RCE PHP php2shell (CVE-2026-109618/109619), reylo, REA-Prompts, dan tiga paper soal coding agent & reasoning."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Anthropic: Verifikasi Formal Skala Besar

Riset terbaru [Anthropic](https://www.anthropic.com/research/formal-verification) menunjukkan bahwa LLM membuat verifikasi formal software — teknik matematis untuk membuktikan kebenaran program — feasible di skala yang jauh lebih besar dari sebelumnya. Selama ini verifikasi formal hanya praktis untuk komponen kecil karena butuh usaha manusia yang mahal; LLM mengubah kalkulusnya. Ini relevan buat siapa pun yang sudah memakai AI untuk menulis kode: generasi kode makin cepat, tapi verifikasinya tertinggal. Kombinasi keduanya bisa jadi jawaban atas kekhawatiran kualitas kode AI-generated.

## 2. php2shell PoC (CVE-2026-109618 / CVE-2026-109619)

Repo [php2shell-poc](https://github.com/ikow/php2shell-poc) mendokumentasikan 5 rantai RCE pre-auth yang mengeksploitasi PHP `session.upload_progress`, lengkap dengan detection rules untuk Suricata, Sigma, dan ModSecurity. Serangan ini relevan banget buat ekosistem PHP/Laravel — kalau masih mengelola server PHP (terutama yang menghadap publik), pastikan versi PHP sudah di-patch dan rules deteksi di atas dipertimbangkan. Ini contoh kasus di mana "server jalan normal" belum tentu "server aman".

## 3. reylo

[reylo](https://github.com/colinhacks/reylo) memungkinkan import file `.sql` langsung ke TypeScript dengan full type inference dan tanpa codegen. Buat yang hidup di antara query SQL dan type safety TypeScript, ini menghilangkan satu langkah build yang selama ini jadi sumber drift antara schema dan tipe. Pendekatan zero-codegen-nya juga menarik secara teknis: tipe diderivasi statis dari SQL, bukan digenerate lalu di-commit.

## 4. REA-Prompts

[REA-Prompts](https://github.com/JoasASantos/REA-Prompts) adalah kumpulan prompt untuk memaksimalkan REA (Reverse Engineer Anything) — workflow reverse engineering berbantuan AI. Prompt yang bagus adalah setengah dari hasil analisis yang bagus; koleksi ini mencakup teknik untuk membedah program, mengkloning perilaku, sampai menemukan kelemahan. Cocok dipadukan dengan workflow Ghidra headless yang sudah berjalan.

## 5. Supabase

[Supabase](https://github.com/supabase/supabase) kembali trending: platform development Postgres yang menyediakan database dedicated untuk membangun aplikasi web, mobile, dan AI. Bagi yang butuh backend cepat tanpa mengorbankan kontrol, Supabase tetap jadi opsi self-host yang paling rapi di kelasnya — Postgres asli di bawahnya, bukan abstraksi yang mengunci.

## 6. SWE-DIVE (paper)

Paper [SWE-DIVE](https://arxiv.org/abs/2610.30047) mengevaluasi coding agent dalam setting multi-turn dengan simulasi user yang dinamis — jauh dari benchmark satu-shot seperti SWE-bench yang memakai GitHub issue sebagai input tunggal. Di dunia nyata, requirement berubah di tengah jalan dan user memberi feedback parsial; paper ini mencoba mengukur kemampuan agent dalam kondisi yang jauh lebih mirip pemakaian sebenarnya. Acuan bagus kalau sedang membandingkan kualitas agent coding.

## 7. LongZero (paper)

[LongZero](https://arxiv.org/abs/2610.30132) menunjukkan bahwa reinforcement learning bisa memperkuat long-context reasoning LLM "from zero data" — tanpa data latih khusus. Kalau teknik ini matang, implikasinya besar buat coding agent: membaca codebase ratusan ribu baris dan tetap koheren adalah masalah long-context, dan pendekatan tanpa data ini bisa membuat kemampuan tersebut tersedia jauh lebih murah.

## 8. Kolaborasi Agen Paralel (paper)

Paper [Parallel AI Agent Collaboration](https://arxiv.org/abs/2610.30074) memodelkan masalah koordinasi agen paralel sebagai optimasi block terdistribusi berstruktur graf: tiap agent menghasilkan edit lokal yang bagus, tapi gabungannya justru merusak solusi bersama. Formalisasi ini penting buat siapa pun yang menjalankan banyak agent coding paralel — merge conflict antar-agent bukan sekadar masalah tooling, tapi masalah optimasi yang bisa didekati secara matematis.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
