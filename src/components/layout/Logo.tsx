'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'cropped' | 'icon';
  className?: string;
}

export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  const logoSrc = variant === 'cropped'
    ? '/logos/logo-full-horizontal-light-cropped.png'
    : variant === 'full'
    ? '/logos/logo-full-horizontal-light.jpg'
    : '/logos/logo-icon-light.jpg';

  const width = variant === 'icon' ? 50 : 200;
  const height = variant === 'icon' ? 50 : 60;

  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src={logoSrc}
        alt="Meraki Creative Media"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </Link>
  );
}
