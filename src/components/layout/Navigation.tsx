'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/shared/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center gap-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-brand-orange ${
              pathname === link.href
                ? 'text-brand-orange'
                : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Button href="/booking" variant="primary" className="ml-4">
          Book Now
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-brand-navy dark:bg-white transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-brand-navy dark:bg-white transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-brand-navy dark:bg-white transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden z-50">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-brand-orange ${
                  pathname === link.href
                    ? 'text-brand-orange'
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/booking" variant="primary" className="mt-2">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
