import type { Metadata } from 'next';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Badge from '@/components/shared/Badge';

export const metadata: Metadata = {
  title: 'Our Services | Meraki Creative Media',
  description: 'Professional photography and videography services including portrait packages and behind-the-scenes event content in Paarl, Western Cape.',
};

const portraitPackages = [
  {
    name: 'Bronze',
    price: 'R350',
    duration: '30 minutes',
    photos: '25-30 edited photos',
    outfits: '1 outfit',
    features: [
      '30 minute session',
      '25-30 professionally edited photos',
      '1 outfit styling',
      'High-resolution digital files',
    ],
    popular: false,
  },
  {
    name: 'Silver',
    price: 'R650',
    duration: '1 hour',
    photos: '30-50 edited photos',
    outfits: '2 outfits',
    features: [
      '1 hour session',
      '30-50 professionally edited photos',
      '2 outfit stylings',
      'Free Outfit Highlight Reel',
      'High-resolution digital files',
    ],
    popular: true,
  },
  {
    name: 'Gold',
    price: 'R900',
    duration: '2 hours',
    photos: '60-80 edited photos',
    outfits: '2-3 outfits',
    features: [
      '2 hour session',
      '60-80 professionally edited photos',
      '2-3 outfit stylings',
      'Free Outfit Highlight Reel',
      'High-resolution digital files',
    ],
    popular: false,
  },
];

const btsAddons = [
  { name: 'Additional edited videos', price: 'R200 per video' },
  { name: 'Additional individual videos (unedited)', price: 'R100 for every 5 videos' },
  { name: 'Additional time', price: 'R200 for every 30 minutes extra' },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-navy to-brand-blue text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">Our Services & Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Professional photography and videography services with transparent pricing.
            Choose the package that best fits your needs.
          </p>
        </div>
      </section>

      {/* Portrait Photography Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge type="photos" size={80} className="mx-auto mb-4" />
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Portrait Photography</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Capture your personality and style with our professional portrait photography packages.
              Perfect for personal branding, professional headshots, and lifestyle sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portraitPackages.map((pkg) => (
              <div key={pkg.name} className="relative pt-6">
                {pkg.popular && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`p-8 ${
                    pkg.popular
                      ? 'ring-2 ring-brand-orange shadow-2xl transform md:scale-105'
                      : 'shadow-lg'
                  }`}
                >

                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl mb-2">{pkg.name} Package</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-4xl font-bold text-brand-orange">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{pkg.duration} session</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3 text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                      <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold">{pkg.photos}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold">{pkg.outfits}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5"
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
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/booking" variant={pkg.popular ? 'primary' : 'outline'} className="w-full">
                  Book {pkg.name} Package
                </Button>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BTS Event Content */}
      <section className="section-padding bg-brand-peach dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge type="bts" size={80} className="mx-auto mb-4" />
              <h2 className="font-heading text-4xl md:text-5xl mb-4">
                BTS - Behind the Scenes Event Content
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Behind-the-scenes content captured with a mobile device and delivered within 24 hours.
                Delivered digitally to clients for immediate use on social media and marketing.
              </p>
            </div>

            <Card className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Base Package */}
                <div>
                  <div className="mb-6">
                    <h3 className="font-heading text-3xl mb-2">Starting at</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-brand-orange">R800</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg mb-4">Base Package Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>1 hour 30 minutes</strong> of event coverage
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>2 fully edited videos</strong> (1 recap + 1 client request video)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Up to 40 individual videos</strong> (unedited)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>20 photos</strong> (unedited)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>24-hour delivery</strong> - Digital delivery
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Add-ons */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Available Add-ons:</h4>
                  <div className="space-y-4">
                    {btsAddons.map((addon, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-brand-orange/20"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {addon.name}
                          </span>
                          <span className="text-brand-orange font-semibold whitespace-nowrap">
                            {addon.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-brand-orange/10 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Perfect for:</strong> Events, celebrations, business functions, brand activations,
                      and any occasion where you want authentic, immediate behind-the-scenes content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button href="/booking" variant="primary" className="w-full md:w-auto">
                  Book BTS Event Content
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Have questions about our packages or need a custom quote? We'd love to discuss
              your project and help you choose the perfect service package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/booking" variant="primary">
                Book Now
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
