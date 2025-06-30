"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const services = [
  {
    title: "App & Software Development with Integrated AI",
    description: "We build robust, scalable apps and software solutions, seamlessly integrating AI to drive innovation and efficiency for your business.",
    image: "/app-software-ai.jpg",
    id: "service-image-0",
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites that deliver exceptional user experiences and help your brand stand out online.",
    image: "/web-development.jpg",
    id: "service-image-1",
  },
  {
    title: "SMMA & Managing",
    description: "Grow your business with our expert Social Media Marketing & Management services, tailored to maximize your online presence.",
    image: "/smma-managing.jpg",
    id: "service-image-2",
  },
  {
    title: "Photo & Video Editing",
    description: "Professional photo and video editing to make your visual content truly shine and engage your audience.",
    image: "/photo-video-editing.jpg",
    id: "service-image-3",
  },
  {
    title: "Branding & Graphic Designing",
    description: "Distinctive branding and creative graphic design solutions that elevate your business identity.",
    image: "/branding-graphic-design.jpg",
    id: "service-image-4",
  },
]

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
  )
}

function ServiceItem({ service, index }) {
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

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-20`}
    >
      <div id={service.id} className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="rounded-lg shadow-lg w-full h-auto border border-light-border"
          width={600}
          height={400}
        />
      </div>
      <div className={`md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-300 text-lg">{service.description}</p>
      </div>
    </motion.div>
  )
}

