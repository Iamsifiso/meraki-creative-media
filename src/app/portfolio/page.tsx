import type { Metadata } from 'next';
import { Suspense } from 'react';
import PortfolioContent from '@/components/portfolio/PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio | Meraki Creative Media',
  description: 'Explore our portfolio of professional photography and videography work including lifestyle, commercial, and fashion projects.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-peach to-brand-blue/20 dark:from-brand-navy dark:to-gray-900">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of photography and videography work. From lifestyle
            sessions to commercial projects, each piece tells a unique story.
          </p>
        </div>
      </section>

      {/* Filter and Grid */}
      <Suspense fallback={<div className="section-padding text-center">Loading...</div>}>
        <PortfolioContent />
      </Suspense>
    </div>
  );
}
