import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Arc Raiders Items - Complete Database & Guide',
  description: 'Browse 70+ Arc Raiders items with filters. Learn what to keep, sell, or recycle. Complete item database with values, rarities, and detailed uses.',
  keywords: [
    'arc raiders items',
    'arc raiders item database',
    'arc raiders loot',
    'arc raiders keep sell recycle',
    'arc raiders item guide',
    'arc raiders item list',
  ],
  canonical: 'https://arcraiderscheatsheet.org/items',
});

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
