---
title: "Tech Watch — Selasa, 13 Okt 2026"
publishDate: 2026-10-13 07:21:00
description: "free-claude-code trending dengan 59rb stars, bot team untuk DeepSeek Harness, pencarian on-device pakai EmbeddingGemma 2, dan dugaan malware di Zod 4.6.6."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Intisari teknologi terbaru hari ini: tooling AI coding gratis yang lagi viral, agen dan bot long-lived, pencarian lokal bertenaga embedding, dua paper riset soal coding agent, teknik hemat token, alternatif Canva open-source, plus peringatan keamanan untuk pengguna Zod.

## 1. free-claude-code — Coding Agent Gratis dari Terminal sampai Browser

[free-claude-code](https://github.com/Alishahryar1/free-claude-code) kembali menembus trending GitHub dengan 59 ribu stars. Repo ini mengklaim memberi akses gratis (1,3 miliar+ token) ke Claude Code, Codex, VSCode, Pi, dan OpenCode — plus enam harness lain — dari terminal, aplikasi, IDE, HP, bahkan langsung dari browser lewat sesi browser native multi-harness dan multi-model dengan dukungan suara.

Untuk full-stack engineer yang sehari-hari memakai coding agent, ini jelas menarik untuk dicoba — terutama karena tidak perlu kartu kredit atau API key berbayar. Satu catatan wajar: klaim "ToS friendly"-nya tetap perlu diverifikasi sendiri sebelum dipakai untuk pekerjaan produksi atau data sensitif.

## 2. DeepSeek-Bot — Tim Bot Long-Lived untuk DeepSeek Harness

[DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) adalah proyek baru (rilis 7 Oktober, sudah 1.300+ stars) yang membangun tim bot berumur panjang di atas DeepSeek Harness. Ada bot utama, pesan antar-bot, dan group chat — pola yang mirip dengan arsitektur multi-agent yang sedang populer untuk otomasi alur kerja kompleks.

Relevan buat yang bereksperimen dengan orkestrasi agent: codebase kecil seperti ini adalah cara cepat mempelajari pola koordinasi antar-agent tanpa membangun framework sendiri.

## 3. DigUp — Cari File Mac dari Isinya, 100% On-Device

[DigUp](https://github.com/ARahim3/DigUp) memungkinkan pencarian di Mac berdasarkan isi file — foto, PDF, rekaman, video, sampai kode — semuanya berjalan on-device dengan memanfaatkan EmbeddingGemma 2 dari Google DeepMind. Tidak ada data yang dikirim ke cloud.

Ini contoh menarik dari tren "local AI": model embedding ringan yang cukup bagus untuk dipakai di laptop sehari-hari. Untuk developer yang peduli privasi atau sering bekerja offline, pendekatannya layak dipelajari — terutama cara indexing dan retrieval-nya.

## 4. Paper: Snapshot Sandbox Bikin Coding Agent Lebih Tangguh

Paper arXiv ["Returning to Development States: When Full Sandbox Snapshots Help Coding Agents"](http://arxiv.org/abs/2610.13841v1) meneliti masalah klasik coding agent: mereka sering membuat progres berguna sebelum akhirnya gagal, tapi strategi retry-from-scratch membuang seluruh state mesin yang sudah dibangun. Paper ini menunjukkan bahwa menyimpan snapshot penuh sandbox di titik-titik perantara membuat recovery dari kegagalan jauh lebih murah — failure recovery diperlakukan sebagai masalah pencarian, bukan pengulangan buta.

Wawasan praktisnya: kalau kamu membangun atau mengonfigurasi coding agent sendiri, checkpoint state environment (bukan cuma riwayat chat) adalah optimasi yang berdampak besar pada tingkat keberhasilan task panjang.

## 5. Paper: RATED — Retrieval Tool yang Sadar Reliabilitas

Paper ["RATED: Reliability-Aware AI Agent Tool Retrieval via Execution Dynamics"](http://arxiv.org/abs/2610.13889v1) mengangkat kelemahan metode retrieval tool untuk AI agent saat ini: mereka mengoptimasi kemiripan semantik, tapi mengabaikan apakah tool tersebut benar-benar tersedia dan bisa dieksekusi dengan andal saat runtime. RATED memasukkan dinamika eksekusi ke dalam proses retrieval sehingga agent memilih tool yang tidak hanya relevan, tapi juga bisa diandalkan.

Seiring agent yang kita bangun memakai semakin banyak tool eksternal (API, MCP server, CLI), reliabilitas tool menjadi faktor penentu — riset seperti ini memberi fondasi untuk agent yang tidak gampang "halu" soal kemampuan tool-nya.

## 6. Local Indexing — Pangkas Tool Calling dan Token Coding Agent

Artikel [Local Indexing to reduce tool calling and token usage](https://tedhaley.ca/pensieve/) membahas teknik indexing lokal untuk mengurangi jumlah tool call yang dilakukan coding agent — yang secara langsung memangkas konsumsi token dan biaya. Idenya sederhana tapi efektif: beri agent peta kode yang sudah di-index, bukan membiarkannya menjelajah file system lewat puluhan tool call.

Buat yang tagihan API-nya membengkak karena agent yang "terlalu rajin eksplorasi", ini bacaan wajib. Tekniknya juga bisa diadopsi ke setup agent pribadi.

## 7. Peringatan: Zod 4.6.6 Dicurigai Disusupi Malware

Komunitas Hacker News [menemukan commit mencurigakan](https://news.ycombinator.com/item?id=50052814) di rilis Zod 4.6.6 berjudul "Fix bugs and improve performance". Analisis awal komentar menunjukkan kode tersebut tampak seperti remote-code loader yang mengambil payload lanjutan — diduga lewat smart contract Ethereum — dan dieksekusi saat package di-install.

Statusnya masih dugaan yang sedang didiskusikan, tapi untuk library sepopuler Zod (dipakai hampir di setiap proyek TypeScript untuk validasi schema), langkah amannya jelas: tahan update ke 4.6.6, pin versi yang sudah teruji, dan pantau pengumuman resmi maintainer sebelum upgrade. Pengingat bagus untuk selalu me-review lockfile dan mengaktifkan audit dependency di CI.

## 8. Doory — Alternatif Canva Open-Source

[Doory](https://github.com/shaongitbd/doory) adalah alternatif Canva yang open-source, ditulis dominan dalam TypeScript, dan langsung mengumpulkan 800+ stars sejak rilis 10 Oktober. Editor desain grafis berbasis web adalah proyek full-stack yang kompleks — canvas rendering, layer management, export — sehingga codebase-nya bisa jadi referensi arsitektur yang bagus.

Buat yang butuh tool desain ringan yang bisa di-self-host, atau sekadar ingin mempelajari cara membangun editor visual di web, Doory layak di-star dan dicoba.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
