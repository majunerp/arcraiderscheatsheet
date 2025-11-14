'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ItemImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  // If true, use `/items/<normalized-alt>.png` when src is not provided
  preferLocalByName?: boolean;
}

const rarityColors = {
  common: '#9CA3AF',
  uncommon: '#10B981',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#F59E0B',
};

function normalizeName(name: string) {
  const lower = name.toLowerCase();
  // remove apostrophes and non-alphanumeric (keep spaces/underscores), then replace spaces with underscores
  const cleaned = lower
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9 _-]/g, ' ') // normalize other punctuation to space
    .replace(/[\s-]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return cleaned;
}

export function ItemImage({
  src,
  alt,
  width = 64,
  height = 64,
  className = '',
  rarity = 'common',
  preferLocalByName = false,
}: ItemImageProps) {
  const [imageError, setImageError] = useState(false);

  const computedSrc = src || `/items/${normalizeName(alt)}.png`;

  // If image fails to load, show placeholder
  if (imageError) {
    const bgColor = rarityColors[rarity];
    const initials = alt
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return (
      <div
        className={`flex items-center justify-center font-bold text-white ${className}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: bgColor,
          borderRadius: '8px',
          fontSize: `${width / 3}px`,
        }}
        title={`${alt} (Image not available)`}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={computedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
      style={{ borderRadius: '8px' }}
      unoptimized
    />
  );
}
