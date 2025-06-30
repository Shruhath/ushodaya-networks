'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Share2, Palette, Film } from 'lucide-react';

const services = [
  {
    icon: Globe,
    name: 'Website Building',
    description: 'Custom-designed, responsive websites tailored to your brand.',
    target: '#service-image-0', // Link to the corresponding service image
  },
  {
    icon: Share2,
    name: 'Social Media Management',
    description: 'Engaging content and strategy to grow your online community.',
    target: '#service-image-1', // Link to the corresponding service image
  },
  {
    icon: Palette,
    name: 'Poster Design',
    description: 'Eye-catching posters that capture attention and convey your message.',
    target: '#service-image-2', // Link to the corresponding service image
  },
  {
    icon: Film,
    name: 'Photo & Video Editing',
    description: 'Professional editing to make your visuals stand out.',
    target: '#service-image-3', // Link to the corresponding service image
  },
];

export function ServicesMenu() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleScroll = (target) => {
    const section = document.querySelector(target);
    if (section) {
      // Dynamically calculate header height
      const header = document.querySelector('header'); // Replace with your header selector
      const headerHeight = header ? header.offsetHeight : 0;
  
      // Determine additional offset for mobile screens
      const isMobile = window.innerWidth <= 768; // Adjust threshold as needed
      const additionalOffset = isMobile ? 20 : 0; // Fine-tune this value
  
      // Calculate the position of the top of the image
      const position =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        additionalOffset;
  
      // Scroll to the calculated position
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <section
      id="services-menu"
      ref={ref}
      className="py-20"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }} // Solid black background
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: '#2B2B2B' }} // Dark grey background for cards
              whileHover={{ backgroundColor: '#000000' }} // Black background on hover
              onClick={() => handleScroll(service.target)}
            >
              <div className="flex flex-col items-start cursor-pointer">
                <service.icon className="w-10 h-10 mb-6 text-[#FF5722]" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
