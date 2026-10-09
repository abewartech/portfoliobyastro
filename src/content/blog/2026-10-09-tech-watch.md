---
title: "Tech Watch — Jumat, 9 Okt 2026"
publishDate: 2026-10-09 07:21:00
description: "Whistle speech-to-text 16,9 MB, model StepFun 1M konteks di OpenRouter, kompresi LLM sub-1-bit LittleBit dari SamsungLabs, dan benchmark AI SRE Arena."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Ringkasan teknologi terbaru yang relevan untuk software engineer full stack, edisi Jumat, 9 Oktober 2026.

## 1. Whistle — Speech-to-Text dalam 16,9 MB

[Cactus Compute](https://cactuscompute.com) merilis Whistle, engine speech-to-text yang hanya berukuran 16,9 MB. Ukuran sekecil ini membuatnya bisa berjalan sepenuhnya lokal, bahkan di perangkat dengan spesifikasi terbatas. Relevan buat kamu yang butuh fitur transkripsi suara tanpa bergantung ke API cloud berbayar.

## 2. Step 5 Preview dari StepFun Muncul di OpenRouter

Model Step 5 Preview, sebuah Mixture-of-Experts (MoE) dengan konteks 1 juta token dari StepFun, kini tersedia lewat [OpenRouter](https://openrouter.ai). Konteks 1 juta token membuka opsi murah untuk pekerjaan konteks panjang seperti analisis codebase besar atau RAG atas dokumen tebal.

## 3. LittleBit — Kompresi LLM Sub-1-Bit dari SamsungLabs

[LittleBit](https://github.com/SamsungLabs/LittleBit) adalah implementasi resmi teknik kompresi LLM sub-1-bit via latent factorization (NeurIPS 2025 dan lanjutannya LittleBit-2, ICML 2026). Kompresi ekstrem seperti ini membuat model besar bisa dijalankan di hardware yang jauh lebih kecil — topik penting kalau kamu tertarik self-hosting model.

## 4. AI SRE Arena — Benchmark Terbuka untuk AI SRE Agents

[EdgeDelta](https://github.com/edgedelta) membuka AI SRE Arena, benchmark open source untuk mengevaluasi agen AI yang mengerjakan tugas SRE/DevOps di Kubernetes. Bisa jadi rujukan kalau kamu membangun atau mengevaluasi coding/infra agents sendiri.

## 5. rea — Reverse Engineering dengan Agents

[rea](https://github.com/morluto/rea) adalah tool open source yang memakai agen AI untuk reverse engineer apa pun, dari perilaku aplikasi sampai binary native. Sedang trending di GitHub dan menarik sebagai referensi pola arsitektur agent yang bekerja dengan tools analisis sistem.

## 6. knowledge-work-plugins — Plugin Open Source Resmi Anthropic

[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) berisi koleksi plugin untuk knowledge worker di Claude Cowork. Praktis kalau kamu sudah pakai ekosistem Claude untuk otomatisasi kerja.

## 7. Paper: Prediksi Performa Coding-Agent dari Base Model

Paper [arXiv 2610.10478](http://arxiv.org/abs/2610.10478v1) membahas cara memprediksi performa coding-agent setelah post-training hanya dari karakteristik base model-nya. Temuan semacam ini membantu memilih model yang tepat sebelum berinvestasi waktu training/fine-tuning untuk agen coding.

## 8. Paper: EngramEdit — Update Pengetahuan LLM Tanpa Retraining Penuh

[EngramEdit](http://arxiv.org/abs/2610.10533v1) mengusulkan metode update pengetahuan LLM secara terpisah (decoupled) melalui conditional memory, sehingga fakta baru bisa dimasukkan tanpa retraining penuh. Pendekatan yang relevan untuk kasus RAG dan knowledge management.

Dari delapan item di atas, **Whistle** dan **LittleBit** paling layak dicoba akhir pekan ini kalau mau eksperimen model ringan yang berjalan lokal.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
