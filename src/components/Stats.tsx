import { motion } from 'framer-motion';
import { UsersIcon, CheckCircleIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    title: 'Happy Clients',
    value: '200+',
    icon: UsersIcon,
    description: 'Satisfied customers worldwide',
  },
  {
    title: 'Projects Completed',
    value: '500+',
    icon: CheckCircleIcon,
    description: 'Successfully delivered projects',
  },
  {
    title: 'Years Experience',
    value: '10+',
    icon: ClockIcon,
    description: 'Years of industry expertise',
  },
  {
    title: 'Awards Won',
    value: '25+',
    icon: TrophyIcon,
    description: 'Industry recognition',
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
              <p className="text-blue-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 