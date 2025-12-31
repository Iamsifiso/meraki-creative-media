'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-medical-aesthetics.MP4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Fallback Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-homepage-photographer-client.jpg"
          alt="Professional photographer with client"
          fill
          className="object-cover opacity-0"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">
          Capturing Moments,
          <br />
          <span className="text-brand-orange">Creating Memories</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Professional photography and videography services in Paarl, Western Cape.
          We bring your vision to life with creativity and passion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/booking" variant="primary" className="w-full sm:w-auto">
            Book a Session
          </Button>
          <Button href="/portfolio" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-navy">
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
