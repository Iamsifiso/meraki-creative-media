'use client';

import React from 'react';
import Badge from '@/components/shared/Badge';
import { PortfolioCategory } from '@/types/portfolio';

interface PortfolioFilterProps {
  activeFilter: PortfolioCategory;
  onFilterChange: (filter: PortfolioCategory) => void;
}

const filters: { id: PortfolioCategory; label: string; badge?: 'photos' | 'videos' | 'bts' }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'photos', label: 'Photos', badge: 'photos' },
  { id: 'videos', label: 'Videos', badge: 'videos' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'fashion', label: 'Fashion' },
];

export default function PortfolioFilter({ activeFilter, onFilterChange }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col items-center">
          {filter.badge ? (
            <Badge
              type={filter.badge}
              size={80}
              onClick={() => onFilterChange(filter.id)}
              active={activeFilter === filter.id}
              className="mb-2"
            />
          ) : (
            <button
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-brand-orange text-white scale-110'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
