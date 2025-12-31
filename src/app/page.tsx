import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import PortfolioHighlights from '@/components/home/PortfolioHighlights';
import Button from '@/components/shared/Button';
import Badge from '@/components/shared/Badge';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioHighlights />

      {/* Call to Action Section */}
      <section className="section-padding bg-brand-peach dark:bg-brand-navy">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-6">
            <Badge type="book-us" size={120} />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Book a session today and experience
            professional photography and videography that tells your unique story.
          </p>
          <Button href="/booking" variant="primary" className="text-lg px-8 py-4">
            Book Your Session Now
          </Button>
        </div>
      </section>
    </>
  );
}
