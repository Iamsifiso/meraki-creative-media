import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Badge from '@/components/shared/Badge';

export const metadata: Metadata = {
  title: 'Our Services | Meraki Creative Media',
  description: 'Professional photography and videography services including portraits, events, commercial work, and content creation in Paarl, Western Cape.',
};

const services = [
  {
    id: 'portrait',
    badge: 'photos' as const,
    title: 'Portrait Photography',
    description: 'Capture your personality and style with professional portrait photography. Perfect for personal branding, professional headshots, and lifestyle sessions.',
    features: [
      'Lifestyle portraits',
      'Professional headshots',
      'Personal branding sessions',
      'Individual and group portraits',
    ],
    duration: '1-2 hours',
    priceRange: 'Contact for quote',
    image: '/images/portfolio-glamour-portrait.JPG',
  },
  {
    id: 'event',
    badge: 'videos' as const,
    title: 'Event Photography & Videography',
    description: 'Comprehensive coverage of your special events, from weddings to corporate functions. We capture every precious moment with professionalism and creativity.',
    features: [
      'Wedding photography & videography',
      'Corporate events',
      'Celebrations and parties',
      'Full-day coverage available',
    ],
    duration: '4-8 hours',
    priceRange: 'Contact for quote',
    image: '/images/services-client-experience.jpg',
  },
  {
    id: 'commercial',
    badge: 'photos' as const,
    title: 'Commercial Photography & Videography',
    description: 'Elevate your brand with professional commercial content. From product photography to promotional videos, we help businesses stand out.',
    features: [
      'Business content creation',
      'Product photography',
      'Promotional videos',
      'Brand storytelling',
    ],
    duration: '2-4 hours',
    priceRange: 'Contact for quote',
    image: '/images/hero-videography-equipment.jpg',
  },
  {
    id: 'content',
    badge: 'bts' as const,
    title: 'Content Creation',
    description: 'Engaging content for social media and digital platforms. We create authentic, scroll-stopping content that connects with your audience.',
    features: [
      'Social media content',
      'Brand storytelling',
      'Behind-the-scenes coverage',
      'Influencer collaborations',
    ],
    duration: '1-3 hours',
    priceRange: 'Contact for quote',
    image: '/images/about-client-consultation.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-navy to-brand-blue text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Professional photography and videography services tailored to your unique needs.
            From intimate portraits to large-scale events, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-4">
                    <Badge type={service.badge} size={80} />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl mb-4">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Pricing</p>
                      <p className="font-semibold">{service.priceRange}</p>
                    </div>
                  </div>

                  <Button href="/booking" variant="primary">
                    Book This Service
                  </Button>
                </div>

                <div className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-peach dark:bg-gray-900">
        <div className="container-custom">
          <Card className="p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We'd love to discuss your project and help you choose the perfect service
              package. Get in touch for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button href="/portfolio" variant="outline">
                View Our Work
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
