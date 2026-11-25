---
title: "Tech Watch — Rabu, 25 Nov 2026"
publishDate: 2026-11-25 07:21:00
description: "Mason, read-replica Postgres ringan; Songe, engine training model lokal; dan Bonsai 2.5 27B, model open berbobot ternary."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Mason

[Mason](https://masondata.ai/) adalah read-replica Postgres yang ringan dan dibangun di atas columnar storage. Idenya sederhana tapi berguna: beban query baca yang berat dipindah ke replika tanpa membebani server utama, dengan penyimpanan kolom yang membuat agregasi dan analitik jauh lebih cepat dibanding row store biasa. Buat abe yang memakai Postgres di berbagai proyek, ini opsi self-host yang menarik untuk scaling baca tanpa harus naik ke layanan managed yang mahal.

## 2. Songe

[Songe](https://github.com/sous-labs/songe) adalah engine training untuk model lokal yang memanfaatkan komputasi idle di perangkatmu. Alih-alih menyewa GPU cloud, Songe memakai sumber daya yang menganggur — konsepnya mirip distributed training rumahan. Cocok buat eksperimen fine-tuning model kecil tanpa biaya cloud, meski tentu performanya bergantung pada perangkat yang tersedia.

## 3. Bonsai 2.5 27B

[Bonsai 2.5 27B](https://prismml.com/news/bonsai-2-5-27b) adalah model open-weight 27B dari PrismML yang memakai bobot ternary. Kuantisasi ternary membuat model sebesar ini jauh lebih ringan dijalankan di perangkat lokal dibanding model 27B biasa — kabar baik buat yang mau menjalankan LLM besar tanpa GPU kelas data center. Patut dicoba buat coding dan tugas generalis sehari-hari.

## 4. PQCrypta Proxy

[PQCrypta Proxy](https://github.com/PQCrypta/pqcrypta-proxy) adalah proxy Rust dengan HTTP/3 dan QUIC plus TLS hybrid post-quantum. Ditulis di Rust, proxy ini ditujukan buat self-hosting yang siap menghadapi era kriptografi pasca-kuantum, saat algoritma klasik mulai dianggap berisiko. Buat yang menjalankan layanan sendiri, ini cara murah untuk mulai bereksperimen dengan TLS post-quantum tanpa mengganti seluruh stack.

## 5. ToolSmith

[ToolSmith](https://arxiv.org/abs/2611.31198) adalah framework yang secara otomatis menghasilkan tool pencarian multimodal untuk search agent. Selama ini search agent bergantung pada pustaka tool yang dibuat manual; ToolSmith membalik pendekatannya dengan men-generate tool sesuai kebutuhan pencarian, lengkap dengan penalaran dan visi. Relevan buat siapa pun yang membangun agen AI yang harus mencari dan memverifikasi informasi dari web.

## 6. Uncertainty Tokens

Paper [Language Models Steer on Injected Uncertainty Tokens, but Fail to Self-Monitor In Situ](https://arxiv.org/abs/2611.31228) meneliti cara LLM mengekspresikan ketidakpastian lewat token kepercayaan numerik. Hasilnya: model bisa diarahkan oleh token ketidakpastian yang disuntikkan, tapi gagal memantau dirinya sendiri saat sedang berjalan — strategi backtracking berbasis kepercayaan diri ternyata tidak seandal yang diduga. Pelajaran penting buat desain agen yang mengandalkan self-verification.

## 7. Personal Software Creation

Studi [A Mixed-Methods Study of Personal Software Creation](https://arxiv.org/abs/2611.31217) meneliti bagaimana orang tanpa latar belakang pemrograman kini bisa membuat software untuk kebutuhan mereka sendiri berkat AI. Temuannya memperkuat arah vibe-coding: software personal — dibuat untuk satu orang, satu kebutuhan — menjadi kategori yang makin nyata dan layak diperhatikan, baik sebagai peluang produk maupun sebagai cara kerja baru.

## 8. Know When to Abstain

Paper [Know When to Abstain: Conformal Confidence Estimation for Text-to-SQL](https://arxiv.org/abs/2611.31190) membahas masalah klasik Text-to-SQL: query yang berhasil dieksekusi belum tentu menjawab pertanyaan yang benar. Penulis mengusulkan estimasi konfidensi conformal agar sistem tahu kapan harus menolak menjawab daripada menghasilkan query yang salah. Buat aplikasi yang mengubah bahasa alami menjadi SQL, kemampuan "tahu diri" seperti ini penting untuk mencegah jawaban salah yang terlihat meyakinkan.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
