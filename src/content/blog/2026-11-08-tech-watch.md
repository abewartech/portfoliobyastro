---
title: "Tech Watch — Minggu, 8 Nov 2026"
publishDate: 2026-11-08 07:21:00
description: "Claude Code bocorkan password ke GitHub, halaman PR baru dari GitHub, Sherlock kembali trending, dan tool GPU untuk model LLM lokal."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Claude Code Bocorkan Password ke GitHub

Laporan dari [Apiiro](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) menemukan masalah keamanan serius di Claude Code: fitur "Don't Ask Again" ternyata menyimpan kredensial di file yang bisa ikut ter-commit ke repository publik. Hasilnya, 1.122 file publik di GitHub kedapatan mengandung password yang terekspos.

Ini pengingat penting di era coding agent: alat yang kita beri akses ke kredensial dan file sistem bisa tanpa sengaja membocorkannya. Kalau kamu memakai Claude Code atau agen coding lain, audit repo publikmu sekarang dan rotasi kredensial yang mungkin pernah tersimpan di file konfigurasi.

## 2. Halaman Overview Pull Request Baru dari GitHub

GitHub merilis [halaman overview pull request baru](https://github.blog/changelog/2026-11-05-new-pull-request-overview-page-in-public-preview/) dalam public preview. Tampilan PR dirombak agar proses review lebih cepat — konteks perubahan lebih jelas dan navigasi antar file lebih mudah.

Buat yang setiap hari mereview PR, perubahan kecil seperti ini berdampak besar pada kecepatan kerja tim. Layak dicoba selagi masih preview dan beri feedback ke GitHub.

## 3. Sherlock Kembali Trending

[Sherlock](https://github.com/sherlock-project/sherlock) adalah tool OSINT klasik untuk melacak sebuah username di ratusan situs dan jejaring sosial sekaligus. Hari ini ia melonjak dengan 1.766 star baru — tanda bahwa kebutuhan verifikasi identitas online makin relevan.

Buat developer, Sherlock berguna untuk riset akun, memeriksa jejak digital sebuah username, atau sekadar memastikan nama pengguna yang kamu pilih belum dipakai di mana-mana.

## 4. Terminal-Mac: macOS di Dalam Terminal

[Terminal-Mac](https://github.com/govijr/terminal-mac) adalah proyek Swift yang menjalankan seluruh macOS di dalam terminal — dan sudah mengumpulkan lebih dari 2.200 star dalam seminggu. Bukan sekadar gimmick: ini menunjukkan sejauh mana emulasi dan virtualisasi bisa didorong dari baris perintah.

Menarik buat yang suka eksperimen sistem operasi, atau sekadar ingin melihat desktop macOS berjalan di tempat yang tidak biasa.

## 5. Sand3D: Modeling 3D Pakai Python untuk LLM

[Sand3D](https://github.com/Sandflow-ai/sand3d) membawa modeling 3D ke dalam Python — dan dirancang khusus agar mudah digerakkan oleh LLM. Alih-alih mengklik di aplikasi 3D, model dibuat lewat kode yang bisa ditulis, direvisi, dan diotomasi oleh agen AI.

Ini arah yang menarik: begitu LLM bisa menulis kode Python, ia juga bisa membangun objek 3D. Buat yang bermain dengan generative 3D atau pipeline aset game, repo ini patut dicoba.

## 6. Billion-Context: Kompresi Konteks untuk Sesi Agen Panjang

[Billion-Context](https://github.com/ranxianglei/billion-context) adalah plugin kompresi konteks yang diklaim mendukung sesi tunggal hingga miliaran token — cukup untuk sesi coding agent yang berlangsung berbulan-bulan.

Masalah konteks yang membengkak adalah salah satu keluhan terbesar pengguna coding agent. Kalau plugin ini bekerja seperti yang dijanjikan, sesi panjang tidak lagi harus di-reset dan kehilangan memori kerja.

## 7. GPUTaskMan: Task Manager GPU dengan Insight LLM

[GPUTaskMan](https://github.com/shanselman/gputaskman) dari Scott Hanselman adalah task manager GPU untuk Windows, Linux, dan WSL. Selain menampilkan pemakaian VRAM per proses, ia juga memberi insight soal model LLM dan KV-cache yang sedang berjalan.

Buat yang menjalankan model lokal di rumah atau di server sendiri, tool ini memberi visibilitas yang selama ini sulit didapat — siapa yang memakan VRAM, dan model apa yang sedang aktif.

## 8. Benchmarks as Software: Terminal-Bench (arXiv)

Paper [Benchmarks as Software: Terminal-Bench and the Case for Continuous Benchmarks](https://arxiv.org/abs/2611.08417) mengusulkan cara baru memandang benchmark coding agent: bukan artefak sekali rilis yang perlahan basi, melainkan software yang terus diperbarui seperti produk biasa.

Argumennya masuk akal — benchmark yang statis cepat kedaluwarsa begitu model menghafal atau mengakali pola soalnya. Buat yang memilih coding agent berdasarkan skor benchmark, pendekatan continuous benchmark ini bisa mengubah cara kita membaca hasil evaluasi.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
