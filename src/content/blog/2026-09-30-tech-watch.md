---
title: "Tech Watch — Rabu, 30 Sep 2026"
publishDate: 2026-09-30 07:21:00
description: "NVIDIA merilis runtime aman untuk AI agent otonom, klien database ringan untuk 100+ DB dengan AI bawaan, memori agent yang bisa belajar sendiri, dan paper prediksi konsumsi token agent LLM."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. NVIDIA/OpenShell — Runtime Aman untuk AI Agent Otonom

NVIDIA merilis [OpenShell](https://github.com/NVIDIA/OpenShell), sebuah runtime yang dirancang untuk menjalankan AI agent otonom secara aman dan privat. Tren agent yang mengeksekusi kode dan mengakses tool pihak ketiga membuat sandbox eksekusi menjadi kebutuhan pokok, bukan sekadar pelengkap. Bagi yang membangun agent di infrastruktur sendiri atau on-prem, ini layak dipantau — privasi data dan isolasi eksekusi adalah dua hal yang paling sering jadi deal-breaker di proyek enterprise.

## 2. vectorize-io/hindsight — Memori Agent yang Belajar

[Hindsight](https://github.com/vectorize-io/hindsight) adalah implementasi memori untuk agent dengan konsep yang menarik: memori yang "belajar" dari pengalaman. Salah satu kelemahan agent LLM saat ini adalah konteks yang hilang antar sesi; proyek seperti ini mencoba menutup celah itu dengan lapisan memori yang terus berkembang. Relevan buat siapa pun yang membangun agent jangka panjang — RAG biasa menyimpan dokumen, tapi memori pengalaman agent adalah lapisan yang berbeda.

## 3. t8y2/dbx — Klien Database 25MB untuk 100+ Database

[dbx](https://github.com/t8y2/dbx) adalah klien database lintas platform yang super ringan (25 MB) dengan dukungan lebih dari 100 database, termasuk MySQL, PostgreSQL, SQLite, Redis, MongoDB, hingga DuckDB. Sudah ada AI bawaan, MCP server, CLI, dan versi desktop maupun Docker. Untuk full stack developer yang tiap hari berpindah-pindah database antar proyek, satu tool ringan yang mencakup semuanya — plus AI assistant untuk bantu tulis query — adalah peningkatan produktivitas yang nyata.

## 4. oblien/openship — Platform Deployment Self-Hosted

[openship](https://github.com/oblien/openship) menawarkan platform deployment yang bisa di-hosting sendiri. Dengan biaya PaaS yang terus naik, opsi self-hosted ringan untuk deploy aplikasi web tetap menarik, terutama untuk proyek sampingan dan klien kecil. Layak dicoba di VPS sendiri sebelum memutuskan workflow deploy jangka panjang.

## 5. VectifyAI/PageIndex — RAG Tanpa Vector Database

[PageIndex](https://github.com/VectifyAI/PageIndex) mengambil pendekatan berbeda untuk RAG: indexing dokumen berbasis reasoning, tanpa vector database sama sekali. Ini menarik karena vector DB menambah kompleksitas infrastruktur (embedding model, index maintenance, biaya). Kalau pendekatan reasoning-based terbukti cukup akurat untuk use case dokumen terstruktur, arsitektur RAG bisa jauh lebih sederhana.

## 6. supermemoryai/company-brain — "Rekan Slack" yang Mengingat Semuanya

[company-brain](https://github.com/supermemoryai/company-brain) adalah proyek open source dari tim Supermemory: sebuah "rekan kerja" di Slack yang mengingat semua yang dikatakan tim, lalu bisa mengerjakan tugas berdasarkan ingatan itu. Konsep company brain / team memory ini sedang naik — menggabungkan chat ops dengan agent yang punya konteks institusional. Menarik dipelajari arsitekturnya, terutama bagaimana mereka mengelola memori jangka panjang lintas banyak pengguna.

## 7. dsh-free-model — Akses Model LLM Frontier Gratis

[dsh-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) adalah plugin yang memberi akses gratis ke model-model frontier (termasuk Muse Spark 1.3 dan MiMo) tanpa login, registrasi, atau API key. Untuk eksperimen dan prototyping, akses model gratis selalu berguna — tapi tetap bijak: jangan kirim data sensitif atau rahasia klien lewat layanan gratis semacam ini.

## 8. TokenCast — Memprediksi Konsumsi Token Agent LLM

Paper [TokenCast](http://arxiv.org/abs/2609.35760v1) (arXiv, 28 Sep 2026) meneliti cara memprediksi konsumsi token selama eksekusi agent LLM. Biaya API adalah pain point nyata saat menjalankan agent di produksi — kemampuan memprediksi dan membatasi pemakaian token sebelum eksekusi selesai bisa jadi fondasi fitur budget-control di sistem agent. Topik yang praktis untuk siapa pun yang mengoperasikan agent dengan budget terbatas.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
