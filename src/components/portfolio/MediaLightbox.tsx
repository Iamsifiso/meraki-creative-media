'use client';

import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/types/portfolio';

interface MediaLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function MediaLightbox({ item, onClose }: MediaLightboxProps) {
  if (!item) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="bg-white rounded-lg overflow-hidden">
          {item.type === 'image' ? (
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <video
              controls
              autoPlay
              className="w-full"
              style={{ maxHeight: '80vh' }}
            >
              <source src={item.src} type="video/mp4" />
              <source src={item.src} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Info */}
          <div className="p-6">
            <h3 className="font-heading text-2xl mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-gray-600">{item.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
