import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  GlobeAltIcon, 
  CodeBracketIcon, 
  ChartBarIcon, 
  BuildingLibraryIcon,
  AcademicCapIcon,
  SparklesIcon as SparklesIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  GlobeAltIcon as GlobeAltIconSolid 
} from '@heroicons/react/24/outline';

const HeroStats = [
  {
    icon: SparklesIcon,
    title: 'Innovation',
    value: '100+',
    text: 'Projects Completed',
    color: 'bg-orange-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Growth',
    value: '95%',
    text: 'Client Satisfaction',
    color: 'bg-green-500'
  },
  {
    icon: GlobeAltIcon,
    title: 'Success',
    value: '500+',
    text: 'Happy Clients',
    color: 'bg-blue-500'
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/10 to-white" />
        
        {/* Decorative Icons */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-24 sm:w-32 h-24 sm:h-32">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="w-full h-full"
          >
            <CodeBracketIcon className="w-full h-full text-orange-600" />
          </motion.div>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-24 sm:w-32 h-24 sm:h-32">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="w-full h-full"
          >
            <BuildingLibraryIcon className="w-full h-full text-green-600" />
          </motion.div>
        </div>
        
        {/* Animated Pattern */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <pattern
                id="pattern"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <rect x="0" y="0" width="20" height="20" fill="#FF7E00" fillOpacity="0.02" />
                <rect x="20" y="20" width="20" height="20" fill="#10B981" fillOpacity="0.02" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
            </svg>
          </motion.div>
        </div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="url(#pattern)"
            />
            <defs>
              <pattern
                id="pattern"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                patternTransform="rotate(45)"
              >
                <circle cx="10" cy="10" r="2" fill="#2563eb" fillOpacity="0.05" />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container relative z-10 w-full">
        <div className="max-w-5xl mx-auto pt-16 sm:pt-20">
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              <span className="block">Eklavya Software Technology</span>
              <span className="block">Elevate Your Digital Presence</span>
              <span className="block">with Our Expertise</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed"
            >
              We craft innovative digital solutions that drive growth, enhance user experiences, and transform businesses into industry leaders.
            </motion.p>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8"
            >
              {HeroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full mb-3">
                    <motion.div
                      className={`absolute inset-0 rounded-full ${stat.color} opacity-100`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    {/* Reduce icon size on mobile */}
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative z-10"
                      >
                        <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </motion.div>
                    </div>
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 mb-16 sm:mb-20"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-md text-white font-medium hover:opacity-90 transition-all duration-300"
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
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-md text-green-600 font-medium hover:bg-green-50 transition-all duration-300 border border-green-200"
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
};

export default Hero;