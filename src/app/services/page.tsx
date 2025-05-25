'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps',
    ],
    image: '/webdev.jpg',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
    ],
    image: '/Appdev.jpg',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
    ],
    image: '/uiux.jpg',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'Analytics & Reporting',
    ],
    image: '/digitalmarketing.jpg',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Our Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Comprehensive digital solutions to help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <ArrowRightIcon className={`w-5 h-5 mr-2 ${featureIndex % 3 === 0 ? 'text-orange-500' : featureIndex % 3 === 1 ? 'text-blue-500' : 'text-green-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`text-white px-6 py-2 rounded-md hover:opacity-90 transition-colors duration-300 ${index % 3 === 0 ? 'bg-orange-500 hover:bg-orange-600' : index % 3 === 1 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'}`}>
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-blue-600 to-green-500 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/90 mb-8"
            >
              Contact us today to discuss your project requirements and how we can help you achieve your goals.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-300 border-2 border-white"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 