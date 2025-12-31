'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Logo variant="full" className="hidden md:block" />
        <Logo variant="icon" className="md:hidden" />
        <Navigation />
      </div>
    </header>
  );
}
