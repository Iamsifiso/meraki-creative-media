import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book a Session' },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <Logo variant="full" className="mb-4" />
            <p className="text-brand-blue text-sm leading-relaxed">
              Professional photography and videography services in Paarl, Western Cape, South Africa.
              Creating stunning visual stories with creativity and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-blue hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-brand-blue text-sm">
              <p>Paarl, Western Cape</p>
              <p>South Africa</p>
              <p>Email: info@merakicreativemedia.co.za</p>
              {/* Add social media links when available */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-blue mt-8 pt-8 text-center text-sm text-brand-blue">
          <p>&copy; {currentYear} Meraki Creative Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
