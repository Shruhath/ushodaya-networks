'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Elegant Websites',
    description: 'We create stunning, responsive websites that captivate your audience and drive results.',
    image: '/website-design.jpg',
    id: 'service-image-0', // Assign unique ID for the image
  },
  {
    title: 'Facebook and Instagram Marketing',
    description: 'Boost your social media presence with our targeted marketing strategies.',
    image: '/social-media-marketing.jpg',
    id: 'service-image-1', // Assign unique ID for the image
  },
  {
    title: 'Branding and Posters',
    description: 'Develop a strong, cohesive brand identity that sets you apart from the competition.',
    image: '/branding.jpg',
    id: 'service-image-2', // Assign unique ID for the image
  },
  {
    title: 'Photo and Video Editing',
    description: 'Enhance your visual content with our professional editing services.',
    image: '/photo-video-editing.jpg',
    id: 'service-image-3', // Assign unique ID for the image
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">What We Work On</h2>
        {services.map((service, index) => (
          <ServiceItem key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ service, index }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20`}
    >
      <div id={service.id} className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-lg shadow-lg w-full h-auto border border-light-border"
          width={600}
          height={400}
        />
      </div>
      <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-300 text-lg">{service.description}</p>
      </div>
    </motion.div>
  );
}

