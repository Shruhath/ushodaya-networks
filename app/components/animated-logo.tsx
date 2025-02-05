'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function AnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [pageHeight, setPageHeight] = useState(0)
  
  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(document.documentElement.scrollHeight - window.innerHeight)
    }
    
    updatePageHeight()
    window.addEventListener('resize', updatePageHeight)
    return () => window.removeEventListener('resize', updatePageHeight)
  }, [])

  const sunX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [10, 35, 55]
  )

  const sunY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 20, 10]
  )

  const sunScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.8, 1, 1.2]
  )

  const sunOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.7, 1, 0.9]
  )

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.3, 0.5, 0.2]
  )

  const sunbeamOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.2, 0.1, 0]
  )

  const arcPath = `
    M 0 60
    Q 25 -20 50 0
  `

  return (
    <div ref={containerRef} className="relative flex items-center">
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d={arcPath}
          stroke="white"
          strokeWidth="0.5"
          opacity="0"
          fill="none"
        />
        
        <motion.g style={{ opacity: sunOpacity }}>
          <motion.path
            d="M0 70 Q35 35 70 0"
            stroke="url(#sunbeam)"
            strokeWidth="40"
            strokeLinecap="round"
            style={{
              x: sunX,
              y: sunY,
              scale: sunScale,
              opacity: sunbeamOpacity
            }}
          />

          <motion.circle
            style={{
              x: sunX,
              y: sunY,
              scale: sunScale,
            }}
            r="15"
            fill="url(#sunGlow)"
          />
          
          <motion.circle
            style={{
              x: sunX,
              y: sunY,
              scale: sunScale
            }}
            r="8"
            fill="url(#sunGradient)"
          />
          
          <motion.g
            style={{
              x: sunX,
              y: sunY,
              scale: sunScale,
              opacity: glowOpacity
            }}
          >
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
              <motion.line
                key={angle}
                x1="0"
                y1="-10"
                x2="0"
                y2={`-${14 + (index % 2) * 4}`}
                stroke="#FF6F00"
                strokeWidth="2"
                transform={`rotate(${angle})`}
                opacity={0.6 + (index % 2) * 0.4}
              />
            ))}
          </motion.g>

          <motion.circle
            style={{
              x: useTransform(sunX, (x) => x + 5),
              y: useTransform(sunY, (y) => y - 5),
              scale: sunScale,
            }}
            r="2"
            fill="white"
            opacity="0.7"
          />
        </motion.g>

        <defs>
          <radialGradient id="sunGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF6F00" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sunGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#FF7043" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="sunbeam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB74D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF6F00" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="flex flex-col items-start">
        <span className="text-3xl font-bold leading-none tracking-wide">Ushodaya</span>
        <span className="text-sm opacity-90 tracking-wider self-end mt-1">Networks</span>
      </div>
    </div>
  )
}

