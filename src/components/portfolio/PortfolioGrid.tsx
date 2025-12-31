'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/types/portfolio';
import MediaLightbox from './MediaLightbox';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No items found in this category.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                  <source src={item.src} type="video/quicktime" />
                </video>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-brand-navy ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-heading text-xl mb-1">{item.title}</h3>
              <p className="text-gray-200 text-sm capitalize">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <MediaLightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
