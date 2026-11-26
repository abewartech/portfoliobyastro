---
title: "Tech Watch — Kamis, 26 Nov 2026"
publishDate: 2026-11-26 07:21:00
description: "GPT-6.2 Astra kalahkan rekor code golf Googler, insiden keamanan 1Password, dan bug kritis NFS2ROOT di kernel Linux."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. GPT-6.2 Astra kalahkan rekor code golf Googler

Benchmark [go/codegolf](https://bjin.github.io/go-codegolf-benchmark/) menghidupkan kembali 32 soal dari kontes code golf internal Google tahun 2015 dan mengadu model frontier melawannya. GPT-6.2 Astra jadi model pertama yang memecahkan rekor para Googler — tiap model diberi 30 menit per soal dalam delapan bahasa untuk membuat solusi sesingkat mungkin, dan yang dinilai adalah jumlah byte, bukan sekadar lolos tes.

Ini menarik karena code golf menguji sesuatu yang berbeda dari benchmark coding biasa: bukan cuma benar, tapi ringkas dan kreatif dalam memanfaatkan trik bahasa. Kalau model sudah bisa mengalahkan manusia di permainan se-spesifik ini, kemampuan coding LLM untuk pekerjaan sehari-hari jelas makin tajam.

## 2. Insiden keamanan 1Password

Pada 19 November 2026, 1Password menemukan penyerang masuk lewat akun GitHub korporat seorang karyawan, lalu mengakses source code dan menyuntikkan kode berbahaya ke layanan backend. Penyerang sempat mengunduh data administratif pelanggan — nama, alamat email, identifier akun, parameter protokol SRP, dan token di tautan email undangan/provisioning/pemulihan — untuk sebagian pengguna.

Yang penting: isi vault tidak tersentuh. Vault dienkripsi dengan kunci yang hanya dipegang pengguna, jadi penyerang yang masuk ke server pun tidak bisa membacanya. 1Password sudah mencabut akses penyerang, merotasi semua kredensial internal yang mungkin bocor, dan memperpanjang kode di email undangan/pemulihan dari enam digit angka menjadi sepuluh karakter alfanumerik. Buat pengguna, pelajarannya tetap klasik: waspada phishing yang mengatasnamakan 1Password, dan jangan pernah memasukkan password atau Secret Key di luar aplikasi resmi.

## 3. NFS2ROOT (CVE-2026-99362)

Bug kritis di server NFS kernel Linux ini sudah bersembunyi selama 12 tahun, sejak Linux 3.16 (2014). Sebuah heap overflow di `nfsd` memungkinkan siapa pun yang bisa mencapai TCP port 2049 mendapatkan root shell — tanpa login, tanpa akun, tanpa klik. Skornya CVSS 9.8.

Akar masalahnya ada di reply cache NFSv4.1: klien bisa mengatur ukuran cache balasannya ke nol byte, lalu server menyalin balasan penuh ke buffer yang tidak punya ruang. Dari overflow itu, penyerang bisa membocorkan heap kernel, memalsukan pointer, dan akhirnya mengeksekusi perintah sebagai root saat koneksi ditutup. Bug ini ditemukan secara independen oleh Jérémy Jean dari ANSSI dan oleh harness otomatis OpenSec "Antara", yang bahkan membangun exploit root shell-nya sendiri tanpa campur tangan manusia.

Perbaikannya sudah tersedia di Linux 6.12.117, 6.18.61, 7.3.2, dan 7.4-rc1 — segera update kernel dan reboot. Kalau belum bisa patch hari ini, firewall port 2049 atau matikan NFSv4.1/4.2 di `/etc/nfs.conf`. Buat yang menjalankan server sendiri (VPS, NAS, build farm), ini wajib dicek hari ini juga.

## 4. Jev ternyata (kemungkinan) Qwen3.5-35B-A3B

Model misterius "Jev" yang sempat ramai diperbincangkan kemungkinan besar adalah Qwen3.5-35B-A3B — kesimpulan dari analisis latensi yang ditulis Modaic. Alih-alih menebak dari benchmark, penulis membandingkan pola latensi inferensi dan menemukan kecocokan kuat dengan arsitektur Qwen3.5 35B mixture-of-experts.

Kalau benar, ini kabar baik buat yang suka self-hosting: model kelas 35B dengan arsitektur MoE seperti ini masih masuk akal dijalankan di hardware rumahan dengan kuantisasi, dan ekosistem Qwen sudah punya tooling yang matang (vLLM, llama.cpp, Ollama).

## 5. Delegent

Paper [Delegent](https://arxiv.org/abs/2611.33098) mengajukan harness multi-agen yang memangkas biaya tanpa mengorbankan performa. Idenya sederhana tapi tajam: agen yang dibangun di atas model frontier itu mahal karena di setiap langkah, model besar membaca ulang seluruh konteks dan mengerjakan semua subtugas tanpa peduli tingkat kesulitannya.

Delegent mendistribusikan pekerjaan dengan lebih cerdas — subtugas ringan dilempar ke model yang lebih murah, sementara model frontier hanya dipakai di titik yang benar-benar butuh. Buat siapa pun yang menjalankan agen coding atau agen riset dengan tagihan API yang membengkak, pendekatan seperti ini layak dicoba.

## 6. CoT-Proxy

[CoT-Proxy](https://arxiv.org/abs/2611.33148) membahas cara mengubah model reasoning menjadi agen long-horizon yang lebih murah: bukan lewat reinforcement learning yang mahal, melainkan fine-tuning pada trajektori guru yang lebih kuat — lengkap dengan chain-of-thought dan aksinya. Tantangannya, format trajektori guru dan siswa sering berbeda, dan di sinilah transfer lintas format (cross-format transfer) berperan.

Hasilnya, agen yang lebih kecil bisa mewarisi kemampuan penalaran jangka panjang dari guru tanpa biaya training sebesar RL. Relevan buat siapa pun yang membangun agen otonom di atas model open-source.

## 7. Draft Calibration

Speculative decoding mempercepat serving LLM dengan cara model draft yang ringan mengajukan token, lalu model target memverifikasinya secara paralel. [Draft Calibration](https://arxiv.org/abs/2611.33111) memperbaiki teknik ini dengan mencocokkan distribusi draft dan target — semakin selaras keduanya, semakin banyak token yang diterima per langkah, semakin cepat serving-nya.

Ini jenis optimasi yang dampaknya langsung terasa di self-hosting: throughput naik tanpa mengganti model, cuma dengan kalibrasi yang lebih baik.

## 8. SAG-Mem-1.0

Laporan teknis [SAG-Mem-1.0](https://arxiv.org/abs/2611.33124) membahas memori percakapan jangka panjang — kemampuan mengambil fakta-fakta pelengkap yang tersebar di banyak sesi dialog, termasuk bukti perantara yang kemiripannya rendah dengan pertanyaan awal.

Pendekatan yang ada selama ini sering mengandalkan retrieval sederhana yang gagal menangkap konteks tersebar seperti ini. Buat agen yang harus "mengingat" pengguna lintas sesi — asisten coding, agen riset, atau chatbot jangka panjang — memori seperti ini adalah fondasi yang masih terus dicari bentuk terbaiknya.

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
