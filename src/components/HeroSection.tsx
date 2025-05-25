'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, RocketLaunchIcon, ArrowTrendingUpIcon, GlobeAltIcon, CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const HeroStats = [
  {
    icon: CodeBracketIcon,
    title: 'Innovation',
    value: '100+',
    text: 'Projects Completed'
  },
  {
    icon: ChartBarIcon,
    title: 'Growth',
    value: '95%',
    text: 'Client Satisfaction'
  },
  {
    icon: GlobeAltIcon,
    title: 'Success',
    value: '500+',
    text: 'Happy Clients'
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float-reverse" />
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L100 100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-6 tracking-tight"
            >
              <span className="block">Elevate Your</span>
              <span className="block">Digital Presence</span>
              <span className="block">with Expertise</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            >
              We craft innovative digital solutions that drive growth, enhance user experiences, and transform businesses into industry leaders.
            </motion.p>

            {/* Hero Stats with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 md:gap-12 mt-12"
            >
              {HeroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="relative">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                <span>Start Your Journey</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="text-blue-300"
                >
                  →
                </motion.span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 border border-blue-200"
              >
                <span>Explore Services</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="text-blue-600"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}