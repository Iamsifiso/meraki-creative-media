import React from 'react';
import Image from 'next/image';

interface BadgeProps {
  type: 'photos' | 'videos' | 'bts' | 'clients' | 'book-us';
  size?: number;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

export default function Badge({
  type,
  size = 80,
  onClick,
  className = '',
  active = false,
}: BadgeProps) {
  const badgeMap = {
    photos: '/logos/badge-photos.jpg',
    videos: '/logos/badge-videos.jpg',
    bts: '/logos/badge-bts.jpg',
    clients: '/logos/badge-clients.jpg',
    'book-us': '/logos/badge-book-us.jpg',
  };

  const isClickable = !!onClick;

  const baseStyles = isClickable
    ? 'cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'
    : '';

  const activeStyles = active ? 'ring-4 ring-brand-orange scale-110' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${activeStyles} ${className} relative inline-block`}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      <Image
        src={badgeMap[type]}
        alt={`${type} badge`}
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  );
}
