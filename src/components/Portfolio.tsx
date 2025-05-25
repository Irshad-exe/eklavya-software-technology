import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    image: '/hero-image.jpg',
    category: 'Web Development',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application for iOS and Android.',
    image: '/hero-image.jpg',
    category: 'Mobile Development',
  },
  {
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling and medical records.',
    image: '/hero-image.jpg',
    category: 'Web Development',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tours.',
    image: '/hero-image.jpg',
    category: 'UI/UX Design',
  },
  {
    title: 'Food Delivery App',
    description: 'On-demand food delivery platform with real-time tracking.',
    image: '/hero-image.jpg',
    category: 'Mobile Development',
  },
  {
    title: 'Educational Platform',
    description: 'Interactive learning management system with video conferencing.',
    image: '/hero-image.jpg',
    category: 'Web Development',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-sm font-medium text-blue-300 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 