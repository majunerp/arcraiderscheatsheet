import { Metadata } from 'next';

const SITE_URL = 'https://arcraiderscheatsheet.org';
const SITE_NAME = 'Arc Raiders Cheat Sheet';
const SITE_TWITTER = '@arcraiderssheet';

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
    ogImage = `${SITE_URL}/og-image.png?v=2`,
  } = config;

  const socialImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const socialAlt = `${SITE_NAME} social preview`;

  // Keep page titles readable in SERP/snippets
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const openGraphTitle = `${optimizedTitle} | ${SITE_NAME}`;

  // Ensure description is 140-160 characters
  const optimizedDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  return {
    metadataBase: new URL(SITE_URL),
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
      title: openGraphTitle,
      description: optimizedDescription,
      siteName: SITE_NAME,
      images: [
        {
          url: socialImage,
          secureUrl: socialImage,
          type: 'image/png',
          width: 1200,
          height: 630,
          alt: socialAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description: optimizedDescription,
      images: [socialImage],
      creator: SITE_TWITTER,
      site: SITE_TWITTER,
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
