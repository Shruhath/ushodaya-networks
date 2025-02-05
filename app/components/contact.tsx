'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const burntOrange = "#BF5700"; // Burnt orange color

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Let's Create Something Amazing Together</h2>
        <p className="text-xl text-gray-300 mb-12 drop-shadow-lg">
          Ready to elevate your digital presence? Get in touch with us today!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
          <a 
            href="mailto:shruhathreddy@ushodayanetworks.com" 
            className="bg-[color:var(--burnt-orange)] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            style={{ backgroundColor: burntOrange }}
          >
            shruhathreddy@ushodayanetworks.com
          </a>
          <a 
            href="tel:+919182239431" 
            className="bg-[color:var(--burnt-orange)] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            style={{ backgroundColor: burntOrange }}
          >
            +91 918-2239-431
          </a>
        </div>
        <div className="flex justify-center items-center space-x-6 mb-12">
          <a href="#" className="hover:text-white transition-colors" style={{ color: burntOrange }}>
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors" style={{ color: burntOrange }}>
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors" style={{ color: burntOrange }}>
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors" style={{ color: burntOrange }}>
            <Linkedin size={24} />
          </a>
          <a 
            href="https://wa.me/9182239431?text=Hello%21%20I%27m%20interested%20in%20working%20with%20you.%20Let%27s%20connect%21" 
            className="hover:text-white transition-colors flex items-center"
            style={{ color: burntOrange }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/whatsapp-icon.png" 
              alt="WhatsApp" 
              className="w-10 h-10 inline-block align-middle"
              style={{ verticalAlign: "middle" }}
            />
          </a>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Work With Us</h3>
          <p className="text-gray-300 mb-6">Interested in joining our team? We're always looking for talented individuals!</p>
          <a 
            href="https://wa.me/9182239431?text=Hello%21%20I%27m%20interested%20in%20working%20with%20Ushodaya%20Networks.%20Could%20you%20please%20share%20more%20details%20about%20the%20open%20positions%3F" 
            className="bg-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            style={{ color: burntOrange }}
          >
            View Open Positions
          </a>
        </div>
      </div>
    </motion.section>
  )
}

