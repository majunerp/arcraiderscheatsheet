import HomeClient from './HomeClient';

import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'My Little Pony Test - Arc Raiders Cheat Sheet',
  description:
    'My Little Pony Test is our interactive Arc Raiders cheat sheet for keep/sell/recycle decisions, item values, spawn types, and upgrade planning.',
  keywords: [
    'My Little Pony Test',
    'My Little Pony Test Arc Raiders',
    'My Little Pony Test Arc Raiders Cheat Sheet',
    'arc raiders cheat sheet',
    'arc raiders loot cheat sheet',
    'arc raiders keep sell recycle',
    'arc raiders item values',
    'arc raiders crafting',
    'arc raiders quests',
    'arc raiders workshop',
  ],
  canonical: 'https://arcraiderscheatsheet.org',
  ogImage: '/og-image.png?v=2',
});

export default function Page() {
  return <HomeClient />;
}

