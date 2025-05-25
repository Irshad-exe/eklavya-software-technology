'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton phoneNumber="+91 9771491637" />
    </main>
  );
}

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    icon: '📈',
  },
];
