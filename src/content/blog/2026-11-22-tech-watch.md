---
title: "Tech Watch — Minggu, 22 Nov 2026"
publishDate: 2026-11-22 07:21:00
description: "Inkling 2 Mini jalan di MacBook, OpenVINO trending, plus riset RL untuk diffusion dan keamanan aplikasi agen AI."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Inkling 2 Mini

Thinking Machines merilis Inkling 2 Mini, model open-weights dengan 26,4 miliar parameter total (3,4 miliar aktif) yang dirancang untuk jalan di laptop — footprint memorinya sekitar 20 GB, dan tim mereka mendemonstrasikannya berjalan offline di MacBook Pro. Arsitekturnya memakai looped transformer: lapisan tengah model dijalankan tiga kali per token, sehingga model bisa bernalar lebih lama tanpa menulis rantai berpikir yang panjang.

Yang menarik buat developer: Inkling 2 Mini memimpin semua model open-weights di bawah 100B parameter pada benchmark agentic coding seperti DeepSWE v1.1 (48,2%) dan SWE-bench Pro v2. Buat yang membangun agen coding lokal atau self-hosting LLM, ini kandidat serius — model coding yang kuat tanpa perlu GPU server.

[Pengumuman resmi](https://thinkingmachines.ai/news/inkling-2-mini/)

## 2. OpenVINO

Toolkit open-source dari Intel untuk mengoptimasi dan men-deploy inferensi AI ini kembali masuk GitHub trending harian. OpenVINO membantu menjalankan model di berbagai hardware — CPU, GPU, NPU — dengan optimasi seperti kuantisasi dan kompilasi graf.

Relevan buat abe yang bereksperimen dengan self-hosting model: kalau suatu saat mau menjalankan model lokal di perangkat keras yang tersedia, OpenVINO adalah salah satu jalur optimasi yang paling matang, terutama di ekosistem Intel.

[OpenVINO di GitHub](https://github.com/openvinotoolkit/openvino)

## 3. PcapAnalyzer

PcapAnalyzer adalah tool self-hosted untuk menganalisis file capture jaringan (pcap) dengan 27 detektor masalah bawaan. Daripada mengorek Wireshark manual, tool ini langsung menandai pola bermasalah dalam traffic.

Buat yang mengelola layanan sendiri — seperti pipeline AIS atau server pribadi — tool semacam ini mempercepat debugging saat ada yang aneh di jaringan, tanpa perlu mengirim file capture ke layanan pihak ketiga.

[PcapAnalyzer di GitHub](https://github.com/sebaandrada-cell/PcapAnalyzer)

## 4. PostgreSQL Extensions in Go

Artikel ini membahas cara menulis ekstensi PostgreSQL menggunakan Go. Postgres memang bisa diperluas dengan ekstensi C, tapi menulisnya dalam Go membuka jalan bagi developer yang lebih nyaman dengan Go — dan ekosistem Go punya tooling yang enak buat pekerjaan semacam ini.

Buat abe yang sehari-hari memakai Postgres, ini bacaan yang berguna kalau suatu saat perlu fungsi kustom di level database — misalnya tipe data khusus atau logika yang lebih efisien dijalankan di dalam Postgres ketimbang di aplikasi.

[PostgreSQL Extensions in Go](https://jespino.github.io/gopgext/)

## 5. RL Post-Training in Diffusion Transformers

Paper ini meneliti efek reinforcement learning (RL) sebagai post-training pada diffusion transformer — keluarga model di balik generator gambar dan video modern. Hasilnya: RL post-training meningkatkan kualitas visual, akurasi rendering teks, dan akurasi komposisi gambar secara substansial.

Buat yang mengikuti perkembangan model generatif, ini memperkuat tren bahwa teknik post-training ala LLM (RLHF/RLVR) juga bekerja untuk model diffusion — bukan cuma soal pretraining yang lebih besar.

[Paper di arXiv](https://arxiv.org/abs/2611.26627)

## 6. Backtracking Agent Applications Security Incidents

Seiring aplikasi agen AI makin banyak di-deploy dengan akses file dan pembayaran, insiden keamanan ikut muncul — dan paper ini membahas cara melakukan backtracking saat insiden terjadi: mengidentifikasi titik masuk serangan (compromise entry point), memperbaiki kerusakan, dan menelusuri jejaknya.

Relevan buat siapa pun yang membangun aplikasi agen, termasuk bot automation: desain agen perlu memikirkan audit trail dan forensik sejak awal, bukan setelah insiden pertama.

[Paper di arXiv](https://arxiv.org/abs/2611.26525)

## 7. LLM Baca-Tulis Executable dari Hex Dump

Eksperimen menarik: LLM ternyata bisa membaca dan menulis file executable byte per byte lewat representasi hex dump. Ini menunjukkan sejauh mana model bahasa memahami format biner — bukan cuma teks dan kode sumber, tapi juga struktur file hasil kompilasi.

Implikasinya dua arah: di satu sisi membuka kemungkinan tooling baru (analisis dan patching biner lewat LLM), di sisi lain mengingatkan bahwa model juga bisa dipakai untuk memodifikasi biner dengan cara yang sulit dideteksi. Bacaan yang bagus buat yang berkecimpung di reverse engineering.

[LLMs can read and write executables byte by byte from a hex dump](https://sgiannopoulos.github.io/blog/machine-code-programming/)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
