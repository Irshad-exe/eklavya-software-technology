'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BuildingOfficeIcon, LightBulbIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    icon: LightBulbIcon,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
    icon: HeartIcon,
  },
  {
    title: 'Global Reach',
    description: 'We serve clients worldwide with localized solutions.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics.',
    icon: BuildingOfficeIcon,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section title="About Us">
        <div className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-image.jpg"
              alt="About Us"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                We are more than just a digital agency. We are your partner in growth.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section title="Our Mission">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with innovative digital solutions that drive growth and success in the digital age.
              We believe in creating technology that makes a difference.
            </p>
            <p className="text-lg text-gray-600">
              Our team combines technical expertise with creative thinking to deliver solutions that exceed expectations
              and help our clients achieve their goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/about.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section title="Our Values" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} icon={<value.icon className="w-6 h-6 text-orange-500" />}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Our Team">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team member cards would go here */}
        </div>
      </Section>

      {/* Call to Action */}
      <Section title="Ready to Work Together?">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-6">
              Let's create something amazing together. Contact us to get started.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}