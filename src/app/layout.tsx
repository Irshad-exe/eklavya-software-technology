import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import ScrollHandler from "@/components/ScrollHandler"

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Eklavya Software Technology - IT Solutions & Services",
  description: "Leading IT solutions provider offering web development, mobile apps, digital marketing, and custom software solutions.",
  keywords: "IT solutions, web development, mobile apps, digital marketing, software development",
  openGraph: {
    title: "Eklavya Software Technology - IT Solutions & Services",
    description: "Leading IT solutions provider offering web development, mobile apps, digital marketing, and custom software solutions.",
    url: "https://eklavyasoftware.com",
    siteName: "Eklavya Software Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saif",
      },
    ],
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
    }
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Eklavya Software Technology - IT Solutions & Services',
    description: 'Leading IT solutions provider offering web development, mobile apps, digital marketing, and custom software solutions.',
    creator: '@eklavyasoftware',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://eklavyasoftware.com',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ScrollHandler />
        <main>
          {/* Decorative Gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-orange-50/10 to-white opacity-50 -z-10" />
          
          {/* Decorative Circles */}
          <div className="fixed -top-20 -left-20 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl animate-float -z-10" />
          <div className="fixed -bottom-20 -right-20 w-40 h-40 rounded-full bg-green-500/10 blur-3xl animate-float -z-10" />
          
          {children}
        </main>
      </body>
    </html>
  );
}
