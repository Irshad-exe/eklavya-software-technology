import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our digital solutions can help you achieve your business goals
            and stay ahead of the competition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold hover:bg-orange-50 transition-colors duration-300 inline-flex items-center justify-center">
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-md font-semibold hover:bg-green-400/10 transition-colors duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 