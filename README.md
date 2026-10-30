# Keshfed Signature Commerce v6 — UX Patch

This is an improved **demonstration**, not a production-ready ecommerce service.

## Updates
- Working previous/next hero slide controls (3 visual treatments; real campaign assets required)
- Product image hover switches to the second catalog image
- More readable product labels, prices, actions and footer
- Visible favorites/cart count badges, including zero
- Admin demo is reachable via `/?view=admin` or footer; it is **not secure** and stores data in browser localStorage
- Next.js dependency range moved from the known-vulnerable 15.3.3 to a newer 15.5 patch range. Verify exact security status and build in Codex/Vercel before use.

## Run
`npm install && npm run typecheck && npm run build && npm run dev`

## NOT READY FOR LIVE ORDERS
No payment provider, backend database, real authentication, shipping carrier integration, inventory synchronization, order email or legal documents. No real visual similarity search; do not describe text search as visual search. Product photos are demo stock imagery and do not represent actual inventory.

To deploy commercially, implement and test: secure RBAC admin, hosted database, media asset pipeline, actual product images and variants, payment/webhooks, transactional email, stock reservations, shipping/returns, KVKK consent, legal terms, analytics and structured data.
