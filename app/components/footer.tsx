'use client'

import { useCallback } from 'react'
import { smoothScrollTo } from '../utils/scroll'

export function Footer() {
  const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo('#contact');
  }, []);

  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold">Ushodaya Networks</h3>
            <p className="mt-2 text-sm md:text-base">Elevating your digital presence</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-row justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-[#cc5500] text-center">Privacy Policy</a>
            <a href="#" className="hover:text-[#cc5500] text-center">Terms of Service</a>
            <a href="#contact" onClick={handleContactClick} className="hover:text-[#cc5500] text-center">
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="absolute bottom-2 right-4 text-sm md:text-base opacity-75">
          <p>&copy; {new Date().getFullYear()} Ushodaya Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

