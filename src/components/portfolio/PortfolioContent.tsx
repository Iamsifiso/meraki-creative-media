'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PortfolioFilter from './PortfolioFilter';
import PortfolioGrid from './PortfolioGrid';
import { portfolioItems } from '@/lib/utils/portfolio-data';
import { PortfolioCategory } from '@/types/portfolio';

export default function PortfolioContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter') as PortfolioCategory | null;

  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');

  useEffect(() => {
    if (filterParam && ['all', 'photos', 'videos', 'lifestyle', 'commercial', 'fashion', 'bts'].includes(filterParam)) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return item.category === activeFilter;
  });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <PortfolioFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <PortfolioGrid items={filteredItems} />
      </div>
    </section>
  );
}
