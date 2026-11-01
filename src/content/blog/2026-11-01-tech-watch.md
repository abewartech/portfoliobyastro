---
title: "Tech Watch — Minggu, 1 Nov 2026"
publishDate: 2026-11-01 07:21:00
description: "Prototipe superagen otonom dari DeepSeek, tim AI lokal-first Orkas, peta codebase floorplan, dan peringatan CVE kritis Linux TCP."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. DeepSeek Superagent Prototype

DeepSeek merilis prototipe superagen yang mengarah ke sistem agen yang lebih otonom, dan repositori ini langsung mengumpulkan lebih dari 2.300 star dalam sehari. Bagi abe yang bekerja dengan agen coding dan otomasi, prototipe ini layak dipelajari arsitekturnya: bagaimana sebuah agen dirancang untuk menangani tugas multi-langkah tanpa pengawasan konstan, dan di mana batas antara otonomi dan kontrol pengguna ditarik.

Sumber: [deepseek-ai/dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype)

## 2. Orkas

Orkas adalah tim AI open-source berlisensi MIT yang berjalan lokal-first di desktop: satu Commander mengubah tujuan menjadi daftar tugas, lalu mengoordinasi 16 agen spesialis bawaan plus Claude Code, Codex, OpenCode, OpenClaw, dan Hermes. Pendekatan lokal-first menarik karena data dan eksekusi tetap di mesin sendiri, dan model tim multi-agen ini bisa jadi referensi saat abe merancang workflow agen untuk proyeknya sendiri.

Sumber: [Orkas-AI/Orkas](https://github.com/Orkas-AI/Orkas)

## 3. floorplan

floorplan menghasilkan peta interaktif sebuah codebase dalam bahasa sederhana, digambar oleh Claude atau Codex. Alih-alih menelusuri struktur folder dan dependensi secara manual, abe bisa melihat bagaimana aplikasi benar-benar tersusun — modul apa yang saling terhubung dan di mana logika utama berada. Alat seperti ini sangat membantu saat onboarding ke repo besar atau saat kembali ke proyek lama setelah jeda panjang.

Sumber: [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan)

## 4. Memdoor

Memdoor menunjukkan tim yang terdiri dari 5 model Qwen3.8-27B mampu mengalahkan Fable 5 di LiveCodeBench Hard, tolok ukur pemrograman yang sulit. Hasil ini penting karena membuktikan kolaborasi beberapa model terbuka yang relatif kecil bisa menyaingi sistem yang jauh lebih besar — kabar baik buat abe yang bereksperimen dengan model gratis dan self-hosting, karena strategi multi-agen bisa menutup gap kapabilitas tanpa biaya API premium.

Sumber: [guregodevo/memdoor](https://github.com/guregodevo/memdoor/tree/main/examples/workflows/team-solve)

## 5. CVE Linux TCP Use-After-Free (CVSS 9.8)

Kerentanan use-after-free di IPv4 TCP pada kernel Linux mendapat skor CVSS 9.8, kategori kritis. Karena abe menjalankan server sendiri, ini bukan sekadar berita keamanan: periksa versi kernel di server yang terpapar internet dan jadwalkan patch secepatnya, karena kerentanan jaringan tingkat kernel seperti ini termasuk yang paling cepat dieksploitasi setelah detailnya tersebar.

Sumber: [Atlasum — TCP Use-After-Free: CVE-2026-98432](https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf)

## 6. Retrieval as Traversal (arXiv)

Paper ini mengusulkan memori terindeks nilai untuk agen long-context yang stateful: alih-alih mencari ulang seluruh konteks di setiap langkah, agen menelusuri memori yang terstruktur berdasarkan nilai. Ide ini relevan dengan pekerjaan agen abe, di mana agen yang berjalan lama — misalnya sweep harian atau otomasi multi-langkah — perlu mengingat state sebelumnya tanpa membengkakkan konteks dan biaya di setiap putaran.

Sumber: [Retrieval as Traversal di arXiv](http://arxiv.org/abs/2610.40545v1)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
