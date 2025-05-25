import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, ServerIcon, ChartBarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: ServerIcon,
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.',
    icon: ChartBarIcon,
  },
  {
    title: 'Business Analytics',
    description: 'Data-driven insights to help you make informed business decisions.',
    icon: PresentationChartLineIcon,
  },
];

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of digital solutions to help your business grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Alternate between orange, blue, and green colors
            const colorSchemes = [
              { bg: "bg-orange-100", hover: "bg-orange-600", text: "text-orange-600" },
              { bg: "bg-blue-100", hover: "bg-blue-600", text: "text-blue-600" },
              { bg: "bg-green-100", hover: "bg-green-600", text: "text-green-600" }
            ];
            const colorScheme = colorSchemes[index % 3];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card group"
              >
                <div className={`w-14 h-14 ${colorScheme.bg} rounded-lg flex items-center justify-center mb-6 group-hover:${colorScheme.hover} transition-colors duration-300`}>
                  <service.icon className={`w-7 h-7 ${colorScheme.text} group-hover:text-white transition-colors duration-300`} />
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-4">{service.title}</h3>
              <p className="text-[#6b7280]">{service.description}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;