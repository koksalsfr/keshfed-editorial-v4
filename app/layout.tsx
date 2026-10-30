import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'KESHFED | Editorial Luxury Collection', description: 'Keshfed premium iç giyim koleksiyonları. Editorial Luxury v4 demo.', robots: { index: false, follow: false } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="tr"><body>{children}</body></html>; }
