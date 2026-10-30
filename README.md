# KESHFED Luxury Boutique — Editorial Storefront

Next.js 15 / React 19 / TypeScript responsive luxury lingerie storefront **prototype**.

## Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 . Run `npm run typecheck` and `npm run build` before deploying.

## Included

- Three rotating hero slides (arrows, dots, automatic rotation)
- Desktop mega menu / mobile navigation
- Category filtering by category, sizes, colors, price and discounts; sorting
- 16 sample products, image hover alternate photo, product detail, sizes, colors, related products
- Search with product thumbnails, **image upload UI only** (no actual visual similarity search)
- Wishlist, cart, shipping choice, gift wrap, `KESH10` sample coupon
- Demo checkout **does not collect card data or charge money**
- Approximate Fit Studio calculator, newsletter demo, Journal, Privé presentation
- Admin demo at **`/?` then footer > YÖNETİCİ GİRİŞİ**; demo password `DEMO2026` (NOT real authentication)
- Admin product add/edit/delete, CSV export; demo orders. Data in browser localStorage only.
- Metadata, sitemap, robots and semantic HTML foundations

## Important before commercial launch

This is **not production ready for real commerce**. No real authentication, centralized database, payment provider, image hosting, image similarity service, fulfillment, transactional emails, privacy/consent management or legal policy content. Product photos are external placeholder fashion images and may not match product names; they must be replaced by licensed, accurate product photos. If external photos cannot load, a local CSS fallback is shown. No product reviews or stock counts are verified.

SEO sitemap URLs use `https://keshfed.com` as a placeholder; adjust to your real canonical domain. Product detail is currently rendered client-side in one page, so dedicated server-rendered `/urun/[slug]` pages should be added before search indexing. Real policies and legal compliance must be provided by the merchant.

## Deploy

Upload the **contents** of this folder (not the ZIP itself) to the repository root. Connect GitHub to Vercel, select Next.js and deploy. The package uses a patched Next.js 15.5 range, but always verify security status and update dependencies before launch.
