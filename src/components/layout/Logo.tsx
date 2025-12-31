'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
}

export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  const logoSrc = variant === 'full'
    ? '/logos/logo-full-horizontal-light.jpg'
    : '/logos/logo-icon-light.jpg';

  const width = variant === 'full' ? 200 : 50;
  const height = variant === 'full' ? 60 : 50;

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
