import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';
import VideoPlayer from '@/components/shared/VideoPlayer';

export const metadata: Metadata = {
  title: 'About Us | Meraki Creative Media',
  description: 'Learn about Meraki Creative Media, a professional photography and videography business based in Paarl, Western Cape, South Africa.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-brand-peach dark:bg-gray-900">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">About Meraki Creative Media</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Based in Paarl, Western Cape, South Africa, we are passionate storytellers
            dedicated to capturing life's most precious moments through the lens.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Meraki (pronounced may-rah-kee) is a Greek word that means to do something
                  with soul, creativity, or love; to put something of yourself into your work.
                  This philosophy is at the heart of everything we do.
                </p>
                <p>
                  We believe that every photograph and video should tell a story, evoke
                  emotion, and capture the authentic essence of the moment. Whether it's a
                  portrait session, a commercial project, or a special event, we approach
                  each assignment with dedication and artistic vision.
                </p>
                <p>
                  Our experience spans lifestyle photography, commercial videography, and
                  creative content creation. We work closely with our clients to understand
                  their vision and bring it to life through stunning visual storytelling.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-client-consultation.jpg"
                alt="Client consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">What Makes Us Unique</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">Creative Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We bring a unique artistic perspective to every project, ensuring
                your story is told in a way that's authentic and compelling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">Professional Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Using top-tier equipment and techniques, we deliver high-quality
                results that exceed expectations every time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3">Client-Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your satisfaction is our priority. We work collaboratively to
                ensure the final product perfectly captures your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Badge type="bts" size={100} />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Behind the Scenes</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Watch our videography work in action - authentic BTS content that captures the essence of every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ReSkin Medical Aesthetics Video */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                src="/videos/portfolio-medical-reskin-full.MOV"
                title="ReSkin Medical Aesthetics"
              />
              <div className="bg-white dark:bg-gray-800 p-4">
                <h3 className="font-semibold text-lg mb-1">ReSkin Medical Aesthetics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Commercial BTS Content</p>
              </div>
            </div>

            {/* Lifestyle Café Red Video */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                src="/videos/portfolio-lifestyle-cafe-red.MP4"
                title="Lifestyle Café"
              />
              <div className="bg-white dark:bg-gray-800 p-4">
                <h3 className="font-semibold text-lg mb-1">Lifestyle Café</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lifestyle BTS Content</p>
              </div>
            </div>

            {/* Plato Coffee Commercial Video */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                src="/videos/portfolio-commercial-plato-coffee.MOV"
                title="Plato Coffee Commercial"
              />
              <div className="bg-white dark:bg-gray-800 p-4">
                <h3 className="font-semibold text-lg mb-1">Plato Coffee Commercial</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Commercial BTS Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-brand-blue text-lg mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Get in touch to discuss your project
            or book a session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" variant="primary">
              Book a Session
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
