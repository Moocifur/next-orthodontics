'use client'  // This tells Next.js this is a Client Component (needed for interactivity)

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderWithNav({ locationName, location }) {
  // State: is the mobile menu open or closed?
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Determine colors based on location
  const isPalmDesert = location === 'palm-desert'
  const headerBg = isPalmDesert ? 'bg-palm-desert-600' : 'bg-loma-linda-600'
  const buttonText = isPalmDesert ? 'text-palm-desert-600' : 'text-loma-linda-600'
  const buttonHover = isPalmDesert ? 'hover:bg-palm-desert-50' : 'hover:bg-loma-linda-50'

  return (
    <header className={`${headerBg} text-white shadow-lg`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <h1 className="text-2xl font-bold">{locationName}</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <Link 
              href="/"
              className={`bg-white ${buttonText} px-4 py-2 rounded-lg ${buttonHover} transition-colors`}
            >
              Other Location
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (slides down when open) */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              href="/" 
              className="block hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="block hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="block hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link 
              href="/"
              className={`inline-block bg-white ${buttonText} px-4 py-2 rounded-lg ${buttonHover} transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Other Location
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}