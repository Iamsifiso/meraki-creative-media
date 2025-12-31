import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/shared/Button';

const highlights = [
  {
    src: '/images/portfolio-lifestyle-outdoor.JPG',
    alt: 'Lifestyle outdoor photography',
    title: 'Lifestyle',
  },
  {
    src: '/images/portfolio-glamour-portrait.JPG',
    alt: 'Glamour portrait photography',
    title: 'Portrait',
  },
  {
    src: '/images/about-client-consultation.jpg',
    alt: 'Client consultation',
    title: 'Commercial',
  },
  {
    src: '/images/services-client-experience.jpg',
    alt: 'Client experience',
    title: 'Events',
  },
];

export default function PortfolioHighlights() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">Portfolio Highlights</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A glimpse of our recent work and creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-heading text-xl">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
