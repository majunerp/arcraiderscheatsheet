'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ItemImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

const rarityColors = {
  common: '#9CA3AF',
  uncommon: '#10B981',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#F59E0B',
};

export function ItemImage({
  src,
  alt,
  width = 64,
  height = 64,
  className = '',
  rarity = 'common'
}: ItemImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // If image fails to load or hasn't loaded yet, show placeholder
  if (imageError || !imageLoaded) {
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
        {!imageError && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="hidden"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            unoptimized
          />
        )}
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
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
