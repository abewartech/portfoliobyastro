---
title: "Tech Watch — Selasa, 10 Nov 2026"
publishDate: 2026-11-10 07:21:00
description: "Claude Fable 5.2 pecahkan rekor benchmark, otak agen Hermes siap pakai, dan framework UI baru dari tim Expo."
tags:
  - AI
  - LLM
  - Open Source
  - Tech Watch
---

## 1. Claude Fable 5.2 & Mythos 5.2

Anthropic merilis dua model Claude terbaru, Fable 5.2 dan Mythos 5.2. Fable 5.2 mencatat skor 65 di Artificial Analysis — tertinggi sejauh ini — dan dalam demo sempat membangun game impian dari satu prompt saja. Buat yang sudah memakai Claude sebagai coding partner sehari-hari, ini kandidat kuat untuk dicoba sebagai model utama berikutnya.

[Baca pengumuman Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)

## 2. gbrain

Garry Tan merilis gbrain, otak agen siap pakai untuk OpenClaw/Hermes Agent. Repo ini berisi konfigurasi dan "otak" agen yang sudah jadi opini — tinggal dipakai sebagai fondasi agen pribadi. Menarik khususnya buat yang sudah menjalankan Hermes Agent sendiri, karena pola dan default-nya bisa langsung diadopsi atau dimodifikasi.

[Lihat di GitHub](https://github.com/garrytan/gbrain)

## 3. Poki

Poki membiarkan agen AI mengoperasikan iPhone asli melalui MCP server lokal — tanpa jailbreak dan tanpa hardware tambahan. Agen bisa melihat layar dan mengetuk UI seperti pengguna sungguhan, dengan kamu tetap memegang kendali. Buat yang tertarik otomasi mobile berbasis agen, ini jalur yang jauh lebih bersih dibanding emulator atau perangkat yang di-root.

[Lihat di GitHub](https://github.com/JosssphZhou/poki)

## 4. Exact

Tim Expo merilis Exact, framework UI cross-platform baru. Mengingat React Native sudah jadi bagian dari stack abe, framework dari tim yang sama dengan Expo ini patut dilirik — terutama untuk proyek yang butuh UI konsisten di banyak platform tanpa mengorbankan performa native.

[Lihat di GitHub](https://github.com/expo/exact)

## 5. Muse Ember

Meta memperkenalkan Muse Ember, model mereka yang paling kecil dan paling efisien. Model ringan seperti ini relevan buat beban AI yang tidak butuh model raksasa — inference lebih murah, latensi lebih rendah, dan lebih realistis untuk self-hosting atau edge.

[Baca blog Meta](https://research.meta.ai/blog/muse-ember)

## 6. Hermes Voice

Hermes Voice menghubungkan profil Hermes Agent ke Home Assistant Assist, jadi kamu bisa ngobrol dengan agen lewat asisten suara di rumah. Buat setup Home Assistant yang sudah berjalan, ini cara praktis membawa agen AI ke perangkat rumah tanpa membangun integrasi dari nol.

[Lihat di GitHub](https://github.com/majorminorlabs/hermes-voice)

## 7. CPU-ARC

Paper ini mengusulkan caching penalaran agen: begitu sebuah tugas pernah dipecahkan, langkah penalarannya disimpan dan dipakai ulang sehingga LLM tidak perlu memecahkan masalah yang sama dari nol setiap kali. Hasilnya adalah penghematan komputasi yang signifikan, dan yang menarik — semuanya bisa jalan di CPU. Cocok buat yang membangun agen dengan anggaran komputasi terbatas.

[Baca paper di arXiv](https://arxiv.org/abs/2611.09891)

## 8. CodeQuant2

CodeQuant2 membahas mitigasi outlier dan clustering adaptif untuk kuantisasi presisi rendah pada large reasoning model. Model reasoning menghasilkan trace yang panjang, sehingga biaya inferensi membengkak — teknik ini menekan biaya itu tanpa mengorbankan kualitas penalaran secara signifikan. Relevan buat siapa pun yang menjalankan model besar secara self-hosted.

[Baca paper di arXiv](https://arxiv.org/abs/2611.09868)

*Tech Watch terbit setiap pagi. Dikirim juga via Telegram setiap hari jam 7 pagi.*
