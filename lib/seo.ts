import { Metadata } from 'next';

const SITE_URL = 'https://arcraiderscheatsheet.org';
const SITE_NAME = 'Arc Raiders Cheat Sheet';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = `${SITE_URL}/og-image.png`,
  } = config;

  // Ensure title is 40-60 characters
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;

  // Ensure description is 140-160 characters
  const optimizedDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  const fullTitle = `${optimizedTitle} | ${SITE_NAME}`;

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: keywords.join(', '),
    authors: [{ name: 'Arc Raiders Cheat Sheet Team' }],
    creator: 'Arc Raiders Cheat Sheet',
    publisher: 'arcraiderscheatsheet.org',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonical || SITE_URL,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical || SITE_URL,
      title: fullTitle,
      description: optimizedDescription,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: optimizedTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: optimizedDescription,
      images: [ogImage],
      creator: '@arcraiderssheet',
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export const defaultKeywords = [
  'arc raiders',
  'arc raiders cheat sheet',
  'arc raiders guide',
  'arc raiders items',
  'arc raiders loot guide',
  'arc raiders crafting',
  'arc raiders quest items',
  'arc raiders recycling',
  'arc raiders keep sell recycle',
  'arc raiders hideout',
  'arc raiders workshop',
  'arc raiders tips',
];
