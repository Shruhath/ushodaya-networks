"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BrainCircuit, Globe, Share2, Film, Palette } from "lucide-react"
import { useCallback, useEffect } from "react"

const services = [
  {
    icon: BrainCircuit,
    name: "App & Software Dev + AI",
    description: "Innovative apps and software with integrated AI for smarter solutions.",
    target: "#service-image-0",
  },
  {
    icon: Globe,
    name: "Web Development",
    description: "Modern, responsive websites for your brand.",
    target: "#service-image-1",
  },
  {
    icon: Share2,
    name: "SMMA & Managing",
    description: "Grow your business with expert social media marketing and management.",
    target: "#service-image-2",
  },
  {
    icon: Film,
    name: "Photo & Video Editing",
    description: "Professional editing to make your visuals stand out.",
    target: "#service-image-3",
  },
  {
    icon: Palette,
    name: "Branding & Graphic Designing",
    description: "Creative branding and graphic design for a unique identity.",
    target: "#service-image-4",
  },
]

export function ServicesMenu() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleScroll = useCallback((target: string) => {
    const section = document.querySelector(target)
    if (section) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      const isMobile = window.innerWidth <= 768
      const additionalOffset = isMobile ? 20 : 0

      const position = section.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset

      window.scrollTo({
        top: position,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <section id="services-menu" ref={ref} className="py-20" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: "#2B2B2B" }}
              whileHover={{ backgroundColor: "#000000" }}
              onClick={() => handleScroll(service.target)}
            >
              <div className="flex flex-col items-start cursor-pointer">
                <service.icon className="w-10 h-10 mb-6 text-[#FF5722]" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

