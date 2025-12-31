import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Meraki Creative Media | Professional Photography & Videography',
  description: 'Professional photography and videography services in Paarl, Western Cape, South Africa. Specializing in lifestyle, commercial, and event photography.',
  keywords: 'photography, videography, Paarl, Western Cape, South Africa, professional photographer, wedding photography, commercial photography',
  authors: [{ name: 'Meraki Creative Media' }],
  creator: 'Meraki Creative Media',
  publisher: 'Meraki Creative Media',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://merakicreativemedia.co.za',
    siteName: 'Meraki Creative Media',
    title: 'Meraki Creative Media | Professional Photography & Videography',
    description: 'Professional photography and videography services in Paarl, Western Cape, South Africa.',
    images: [
      {
        url: '/logos/logo-social-circle.jpg',
        width: 1200,
        height: 1200,
        alt: 'Meraki Creative Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meraki Creative Media | Professional Photography & Videography',
    description: 'Professional photography and videography services in Paarl, Western Cape, South Africa.',
    images: ['/logos/logo-social-circle.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logos/logo-icon-light.jpg',
    apple: '/logos/logo-icon-light.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
