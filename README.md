# KESHFED — Editorial Luxury v4

GitHub / Codex / Vercel için hazırlanmış, Next.js 15 + React 19 + TypeScript tabanlı **etkileşimli mağaza demosu**.

## Başlatma

```bash
npm install
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın.

## GitHub'a yükleme

ZIP'i açın ve `keshfed-editorial-v4` klasörünün **içindeki dosyaları** GitHub deposunun kök dizinine yükleyin. Alternatif:

```bash
git init
git add .
git commit -m "Keshfed Editorial Luxury v4 demo"
git branch -M main
git remote add origin https://github.com/KULLANICI/DEPO.git
git push -u origin main
```

Vercel'de **Add New → Project → Import Git Repository** adımlarını kullanın. Framework otomatik Next.js algılanır; build komutu `npm run build`.

## Mevcut özellikler

- Responsive büyük ürün kartları, masaüstü üç sütun / mobil iki sütun
- Görsel hover alternatifleri, kategori vitrini, büyük hero
- Kategori / fiyat / indirim filtreleri, sıralama, büyük/kompakt görünüm
- Ürün detay galerisi, beden seçimi, favoriler
- Sepet miktarı, kargo, hediye paketi, demo `KESH10` kuponu
- Sepet ve favoriler için localStorage
- Dış bağlantıya ihtiyaç duymayan yerel SVG demo ürün konseptleri

## Önemli sınırlamalar

Bu sürüm **tasarım prototipidir**: Görseller ürün fotoğrafı değil, temsili SVG konseptleridir. Gerçek ödeme, müşteri hesabı, stok yönetimi, sipariş kayıtları, Shopier, kargo API, admin paneli, doğrulanmış yorumlar ve güvenlik altyapısı yoktur. Fiyatlar ve teslimat seçenekleri örnektir. Canlı satışa açılmadan önce bunların geliştirilmesi ve test edilmesi gerekir.

## Sonraki adım

Gerçek ürün görsellerini `public/images` içine ekleyin veya bir görsel CDN'e bağlayın; `app/page.tsx` içindeki `products` kataloğunda `image` ve `second` yollarını güncelleyin.
