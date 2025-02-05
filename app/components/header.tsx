'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { AnimatedLogo } from './animated-logo'
import { Menu, X, Home, Briefcase, Users, Mail } from 'lucide-react'
import { smoothScrollTo } from '../utils/scroll'
import Head from 'next/head'

const navItems = [
  { name: 'Home', href: '#top', icon: Home },
  { name: 'Services', href: '#services-menu', icon: Briefcase },
  { name: 'Our Clients', href: '#clients', icon: Users },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const headerClass = isScrolled || isHovered
    ? 'bg-white text-black shadow-md'
    : 'bg-transparent text-white'

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      smoothScrollTo(href)
    }
  }

  return (
    <>
      <Head>
        <title>Ushodaya Networks</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClass}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }} 
              className="flex items-center"
            >
              <AnimatedLogo />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center space-x-2 hover:text-primary transition-colors ${
                      isScrolled || isHovered ? 'text-black' : 'text-white'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled || isHovered ? 'text-black' : 'text-white'} />
              ) : (
                <Menu className={isScrolled || isHovered ? 'text-black' : 'text-white'} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center space-x-2 py-2 hover:text-primary transition-colors ${
                        isScrolled || isHovered ? 'text-black' : 'text-white'
                      }`}
                    >
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  )
}

