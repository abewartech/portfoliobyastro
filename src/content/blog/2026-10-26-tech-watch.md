---
title: "Tech Watch — Senin, 26 Okt 2026"
publishDate: 2026-10-26 07:21:00
description: "IDE vibe coding baru JetBrains, PaaS self-host Coolify, sidebar multi-agen Harp, server inferensi lokal NVIDIA Flare, ruangan Three.js dari LiDAR iPhone, dua paper agen & embedding, dan anjloknya harga LLM."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

Edisi Senin ini condong ke perkakas kerja sehari-hari: IDE dan PaaS baru, cara menjalankan banyak agen sekaligus, inferensi lokal yang makin serius, plus kabar baik soal harga LLM yang terus turun.

## 1. JetBrains/thinkrail — IDE ringan untuk vibe coding

[JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) adalah IDE ringan yang dibangun untuk vibe coding bersama agen pi, dan dirancang menyesuaikan diri dengan cara kerja penggunanya. JetBrains yang masuk ke arena vibe coding patut dicoba, terutama buat yang sudah nyaman dengan ekosistem JetBrains tapi ingin alur kerja berbasis agen yang lebih enteng daripada IDE berat.

## 2. coollabsio/coolify — PaaS open-source yang bisa di-self-host

[coollabsio/coolify](https://github.com/coollabsio/coolify) adalah alternatif open-source untuk Vercel, Heroku, dan Netlify yang bisa di-self-host, lengkap dengan dukungan deploy aplikasi dan database. Buat yang sudah punya VPS sendiri, ini cara paling praktis untuk mendapatkan pengalaman deploy semudah PaaS tanpa mengunci diri ke satu vendor — satu kandidat kuat untuk dicoba di server yang sudah jalan.

## 3. dominikmartn/harp — banyak agen dalam satu sidebar

[dominikmartn/harp](https://github.com/dominikmartn/harp) menjalankan banyak agen Claude Code dan Codex secara berdampingan dalam satu sidebar yang memberi tahu agen mana yang sedang butuh perhatian. Begitu alur kerja melibatkan beberapa agen paralel, masalahnya bukan lagi menjalankan agennya, melainkan memantau semuanya — dan di situlah perkakas seperti ini berguna.

## 4. NVIDIA/flare-local-inference — server inferensi lokal berruntime Rust

[NVIDIA/flare-local-inference](https://github.com/NVIDIA/flare-local-inference) adalah server inferensi lokal untuk GPU NVIDIA SM120/SM121 yang dibangun untuk percakapan panjang, coding agent, dan pemakaian tool berulang. Arsitekturnya menarik: build memakai ekosistem PyTorch standar, tapi serving-nya berjalan dari runtime Rust tanpa Python. Masih berupa prototipe riset, tapi arahnya jelas — inferensi lokal yang makin kencang dan hemat untuk beban agen.

## 5. wesbos/3d-model-anything — ruangan Three.js dari LiDAR iPhone

[wesbos/3d-model-anything](https://github.com/wesbos/3d-model-anything) menangkap data LiDAR dan foto dari iPhone, lalu merekonstruksi ruangan menjadi model Three.js yang bisa diedit dan dijelajahi di browser. Buat pekerjaan web, ini menunjukkan betapa murahnya sekarang mengubah dunia nyata menjadi konten 3D interaktif — bahan eksperimen yang seru untuk proyek web berbasis Three.js.

## 6. Paper: EpiSEM-Bench — keamanan agen LLM saat bukti hilang

[EpiSEM-Bench](https://arxiv.org/abs/2610.31650v1) mengevaluasi keamanan dan pemulihan bukti pada agen LLM ketika respons tool menghilangkan fakta yang relevan dengan keamanan. Temuannya relevan langsung buat siapa pun yang membangun agen pemakai tool: agen yang mengambil keputusan dari fakta lingkungan harus tetap aman justru saat informasi yang diterimanya tidak lengkap.

## 7. Paper: Low-Bit N-Gram Embeddings — model open-weight yang lebih hemat

[Low-Bit N-Gram Embeddings](https://arxiv.org/abs/2610.31646v1) membahas kompresi tabel embedding n-gram pada model bahasa open-weight, yang selama ini memakan banyak memori. Teknik seperti ini penting buat menjalankan model di perangkat keras terbatas — termasuk fleet self-host — karena tabel embedding yang lebih kecil berarti model yang sama bisa jalan dengan sumber daya lebih sedikit.

## 8. Harga LLM anjlok — OpenAI & Anthropic pangkas harga sampai 80%

[Analisis penurunan harga LLM](https://minimaxir.com/2026/10/cheap-llms/) mencatat OpenAI dan Anthropic memangkas harga LLM mereka sampai 80% hanya dalam beberapa bulan. Bagi yang membangun di atas API LLM maupun yang bereksperimen dengan model murah, tren ini berarti anggaran eksperimen yang sama kini bisa jauh lebih jauh — dan model-model yang dulu terasa mahal mulai masuk akal untuk pemakaian sehari-hari.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
