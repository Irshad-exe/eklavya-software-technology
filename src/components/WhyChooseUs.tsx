import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Expert Team',
    description: 'Our team consists of highly skilled professionals with years of industry experience.',
    icon: UserGroupIcon,
  },
  {
    title: 'Quality Assurance',
    description: 'We maintain the highest standards of quality in every project we undertake.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Timely Delivery',
    description: 'We are committed to delivering projects on time without compromising quality.',
    icon: ClockIcon,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority. We work closely with you to meet your needs.',
    icon: CheckCircleIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 