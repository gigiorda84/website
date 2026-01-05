import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alphatechnology.ai'),
  title: {
    default: "Alpha Technology | AI Solutions for Business & Industrial Automation",
    template: "%s | Alpha Technology"
  },
  description: "AI automation consulting by Giuseppe Giordano & Marco Martellacci. -40% tickets, -25% downtime, -15% energy costs. Business & industrial AI solutions for manufacturing, energy, and enterprises.",
  keywords: ["AI automation", "business automation", "industrial automation", "AI agents", "predictive maintenance", "Italy", "AI consulting", "machine learning", "digital transformation", "smart cities", "energy optimization"],
  authors: [
    { name: "Giuseppe Giordano", url: "https://alphatechnology.ai" },
    { name: "Marco Martellacci", url: "https://alphatechnology.ai" }
  ],
  creator: "Alpha Technology",
  publisher: "Alpha Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    url: "https://alphatechnology.ai",
    title: "Alpha Technology | AI Solutions for Business & Industrial Automation",
    description: "AI automation consulting by Giuseppe Giordano & Marco Martellacci. -40% tickets, -25% downtime, -15% energy costs. Business & industrial AI solutions.",
    siteName: "Alpha Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alpha Technology - AI Solutions for Business & Industrial Automation"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Technology | AI Solutions for Business & Industrial Automation",
    description: "AI automation consulting by Giuseppe Giordano & Marco Martellacci. -40% tickets, -25% downtime, -15% energy costs.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://alphatechnology.ai',
    languages: {
      'en': 'https://alphatechnology.ai',
      'it': 'https://alphatechnology.ai/it',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0087ca',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alpha Technology",
    "alternateName": "Alpha",
    "url": "https://alphatechnology.ai",
    "logo": "https://alphatechnology.ai/alpha_logo.svg",
    "description": "AI automation consulting and development company specializing in business automation and industrial automation solutions. Helping enterprises leverage AI Agents and data-driven technologies.",
    "founder": [
      {
        "@type": "Person",
        "name": "Giuseppe Giordano",
        "jobTitle": "CEO & Co-founder"
      },
      {
        "@type": "Person",
        "name": "Marco Martellacci",
        "jobTitle": "CSO & Co-founder"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Torino",
        "addressCountry": "IT"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Milano",
        "addressCountry": "IT"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-349-2112515",
      "email": "info@alphatechnology.ai",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Italian"]
    },
    "sameAs": [
      "https://linkedin.com/company/alpha-technology-ai"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Italy"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Business Automation",
      "Industrial Automation",
      "Machine Learning",
      "AI Agents",
      "Predictive Maintenance",
      "Digital Transformation"
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
