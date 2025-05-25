'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Products() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Our Products"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Discover our innovative solutions and digital products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We are working on some exciting products that will revolutionize the way you do business.
              Stay tuned for updates!
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
                Subscribe for Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 