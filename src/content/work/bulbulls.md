---
title: Bulbulls — Game Top-Up Store
publishDate: 2026-09-01 00:00:00
img: /assets/stock-1.jpg
img_alt: Abstract gradient artwork representing a digital storefront.
description: |
  Game top-up store built from an accepted v1.0 proposal: dynamic pricing,
  automatic supplier failover, multi-payment gateway architecture, and
  security hardening — on a five-week timeline to go-live.
tags:
  - Laravel
  - React
  - Payment Gateway
  - MySQL
---

Bulbulls is a game voucher top-up store I'm developing from an accepted v1.0 proposal, with a five-week target to go-live. The scope covers the full lifecycle of a production e-commerce build:

- **Dynamic pricing engine** — diagnosing and fixing price-calculation bugs so margins stay correct across products and suppliers.
- **Automatic supplier failover** — if the primary supplier fails, orders reroute automatically instead of failing at checkout.
- **Multi-payment gateway architecture** — designed to plug in several payment providers behind one abstraction, so adding a new gateway doesn't mean rewriting checkout.
- **UI/UX optimization** — banner and storefront polish for conversion.
- **Security hardening** — tightening the app before it touches real money.
- **UAT & go-live** — structured user-acceptance testing, then launch, followed by a retention period and monthly maintenance.

It's the kind of project where "it works on my machine" isn't enough — every order path has to be correct, idempotent, and auditable.
