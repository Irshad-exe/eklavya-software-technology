import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    image: '/hero-image.jpg',
    content: 'Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations in every way.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, GrowthCo',
    image: '/hero-image.jpg',
    content: 'The attention to detail and level of professionalism shown by the team was outstanding. They truly understood our vision.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    image: '/hero-image.jpg',
    content: 'I was impressed by their technical expertise and ability to solve complex problems. Highly recommended!',
  },
];

const Testimonials = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 