# KESHFED — Signature Commerce (v5)

Premium Turkish lingerie ecommerce **functional prototype** using Next.js 16 / React 19 / TypeScript. Built to deploy to Vercel or run in Codex.

## Start

Requires Node.js 20.9 or newer (Node.js 24 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production validation: `npm run typecheck && npm run build`.

## Implemented, interactive

- Responsive editorial homepage, navigation, mobile drawer, search, product categories, price/category/collection filters, sorting, 3/4-column grid.
- 24 sample products, product detail galleries, colors, sizes, stock, price comparisons, wishlist, cart drawer, quantities, delivery, gift wrap, demo coupon **KESHFED10**.
- Demo checkout with form validation, browser-local order history, account simulation, Fit Studio estimated size calculator, Privé content, Journal, FAQ, contact form demo, shipping, returns, legal placeholders, newsletter browser-local opt-in, and local demo product management panel.
- LocalStorage persistence for cart, favorites, sample orders, demo accounts, admin price/stock changes.
- SEO: metadata, Open Graph, Turkish semantic copy, robots and sitemap. Image fallback for unavailable remote editorial photos.

## Critical production limitations (intentional; not represented as live functionality)

**This is NOT a production ecommerce backend.** Checkout never charges cards or creates real merchant orders. The account has no server authentication. Admin is an unprotected browser-local demo; it cannot change products for other users. Newsletter/contact forms do not send email. Product imagery is editorial placeholder photography, not photos of the named lingerie products; price, ratings, stock and policies are fictional demo content. Do not market or launch commercially until you add a real database, secure authentication/authorization, real inventory/PIM, payment provider (e.g. iyzico/PayTR), transactional email, shipping/returns services, approved legal/privacy/cookie/consumer-rights documents, and actual product photography.

## Deploy

Upload **the contents of this folder**, not the ZIP or its parent directory, to your GitHub repository root. In Vercel import the repository, select Next.js, root `./`, deploy. For Codex, select the repo and ask it to run `npm install && npm run dev` and open browser preview.

## Images

Editorial Unsplash images are remote and may not correspond to product type. They fall back to a designed gradient placeholder on load failure. Replace `lib/data.ts` image mapping and hero CSS before production.
