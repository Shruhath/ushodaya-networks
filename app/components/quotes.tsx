'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const quotes = [
  {
    text: "WE BUILD THE LADDER YOU CLIMB",
    author: "Our Philosophy"
  },
  {
    text: "CREATIVITY IS INTELLIGENCE HAVING FUN",
    author: "Albert Einstein"
  }
]

export function Quotes() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {quotes.map((quote, index) => (
          <QuoteItem key={index} quote={quote} />
        ))}
      </div>
    </section>
  )
}

function QuoteItem({ quote }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 last:mb-0"
    >
      <blockquote className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E65100] to-[#BF360C] mb-4 drop-shadow-lg">
        "{quote.text}"
      </blockquote>
      <cite className="text-xl text-white drop-shadow-lg">- {quote.author}</cite>
    </motion.div>
  )
}

