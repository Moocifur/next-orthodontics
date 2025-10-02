'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, Menu, X, MapPinned } from 'lucide-react'

export default function HeaderWithNav({ locationName, location }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Determine colors based on location
  const isPalmDesert = location === 'palm-desert'
  const headerBg = isPalmDesert ? 'bg-palm-desert-600' : 'bg-loma-linda-600'
  const buttonText = isPalmDesert ? 'text-palm-desert-600' : 'text-loma-linda-600'
  const buttonHover = isPalmDesert ? 'hover:bg-palm-desert-50' : 'hover:bg-loma-linda-50'
  
  // Action button classes
  const primaryBtnBg = isPalmDesert ? 'bg-palm-desert-800' : 'bg-loma-linda-800'
  const primaryBtnHover = isPalmDesert ? 'hover:bg-palm-desert-900' : 'hover:bg-loma-linda-900'
  
  const paymentBtnBg = isPalmDesert ? 'bg-palm-desert-400' : 'bg-loma-linda-400'
  const paymentBtnHover = isPalmDesert ? 'hover:bg-palm-desert-500' : 'hover:bg-loma-linda-500'

  return (
    <>
      {/* TOP INFO BAR - Non-sticky */}
      <div className={`${headerBg} border-b border-white/20 text-white`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="hidden lg:flex justify-between items-center py-2 text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/90" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/90" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/90" />
                <span>123 Main St, City, ST 12345</span>
              </div>
            </div>

            {/* Right Side - Hours & Payment */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-white/90" />
                <span>Mon-Fri 9AM-5PM</span>
              </div>
              <a 
                href="#payment" 
                className={`${paymentBtnBg} ${paymentBtnHover} text-white px-3 py-1 rounded transition-colors font-medium`}
              >
                Make Payment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER - Sticky */}
      <header className={`sticky top-0 z-50 ${headerBg} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Title */}
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <h1 className="text-2xl font-bold">{locationName}</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#insurance" className="hover:underline">
                Insurance
              </a>
              <a href="#location" className="hover:underline">
                Location
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
              
              {/* Divider */}
              <div className="h-6 w-px bg-white/50"></div>
              
              {/* Action Buttons */}
              <a 
                href="#appointment"
                className={`${primaryBtnBg} ${primaryBtnHover} px-4 py-2 rounded-lg transition-colors font-medium`}
              >
                Book Appointment
              </a>
              
              <Link 
                href={isPalmDesert ? '/loma-linda' : '/palm-desert'}
                className={`bg-white ${buttonText} px-4 py-2 rounded-lg ${buttonHover} transition-colors flex items-center gap-2`}
                title="Switch Location"
              >
                <MapPinned className="w-4 h-4" />
                <span className="hidden xl:inline">
                  {isPalmDesert ? 'Loma Linda' : 'Palm Desert'}
                </span>
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
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
                href="#insurance" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Insurance
              </a>
              <a 
                href="#location" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
              <a 
                href="#contact" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2 border-t border-white/20">
                <a 
                  href="#appointment"
                  className={`block text-center ${primaryBtnBg} ${primaryBtnHover} px-4 py-3 rounded-lg transition-colors font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </a>
                <a 
                  href="#payment"
                  className={`block text-center ${paymentBtnBg} ${paymentBtnHover} text-white px-4 py-3 rounded-lg transition-colors font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Make Payment
                </a>
                <Link 
                  href={isPalmDesert ? '/loma-linda' : '/palm-desert'}
                  className={`flex items-center justify-center gap-2 bg-white ${buttonText} px-4 py-3 rounded-lg ${buttonHover} transition-colors font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPinned className="w-4 h-4" />
                  Switch to {isPalmDesert ? 'Loma Linda' : 'Palm Desert'}
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}