import React from 'react';
import Badge from '@/components/shared/Badge';
import Card from '@/components/shared/Card';
import Link from 'next/link';

const services = [
  {
    badge: 'photos' as const,
    title: 'Photography',
    description: 'Professional portrait photography with flexible packages. Choose from Bronze, Silver, or Gold packages tailored to your needs.',
    link: '/services',
  },
  {
    badge: 'bts' as const,
    title: 'Videography',
    description: 'Behind-the-scenes event content captured with mobile devices and delivered within 24 hours. Perfect for authentic, immediate content.',
    link: '/services',
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We offer a range of creative services tailored to capture your unique story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link key={service.title} href={service.link}>
              <Card hover className="p-8 text-center h-full">
                <div className="flex justify-center mb-6">
                  <Badge type={service.badge} size={100} />
                </div>
                <h3 className="font-heading text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <span className="text-brand-orange font-semibold hover:underline">
                  Learn More →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
