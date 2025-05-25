import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';

const teamMembers = [
  {
    name: 'Saif Ali',
    role: 'Founder & CEO',
    image: '/hero-image.jpg',
    bio: 'With extensive experience in the tech industry, Saif leads Eklavya Software Technology with vision and expertise.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },


// Email:- eklavyasoftware30@gmail.com 
  {
    name: 'Gulshan  Kumar ',
    role: 'Co-Founder',
    image: '/hero-image.jpg',
    bio: 'Gulshan Kumar brings extensive technical knowledge and innovation to drive our technology strategy forward.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  // {
  //   name: 'Mike Johnson',
  //   role: 'Lead Developer',
  //   image: '/hero-image.jpg',
  //   bio: 'Mike leads our development team with his exceptional coding skills and problem-solving abilities.',
  //   social: {
  //     linkedin: '#',
  //     twitter: '#',
  //     github: '#',
  //   },
  // },
  // {
  //   name: 'Sarah Williams',
  //   role: 'UI/UX Designer',
  //   image: '/hero-image.jpg',
  //   bio: 'Sarah creates beautiful and intuitive user experiences that delight our clients and their users.',
  //   social: {
  //     linkedin: '#',
  //     twitter: '#',
  //     github: '#',
  //   },
  // },
];

const Team = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden max-w-sm w-full"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-green-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 