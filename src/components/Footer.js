'use client'

export default function Footer({ location }) {
  const isPalmDesert = location === 'palm-desert'

  const footerBg = isPalmDesert ? '#2c4312' : '#d3aa69'
  const footerText = isPalmDesert ? '#f3eadc' : '#ffffff'
  const accentColor = isPalmDesert ? '#e09c54' : '#1a56db'

  // Scroll to top function
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer 
      className="text-white pt-16 pb-5 relative"
      style={{ 
        backgroundColor: footerBg,
        color: footerText
      }}
    >
      <div className="container mx-auto px-6">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo & Description Section */}
          <div className="lg:col-span-1">
            <div 
              className="text-2xl font-bold mb-4"
              style={{ 
                fontFamily: isPalmDesert ? "'Shadows Into Light Two', cursive" : "'Spicy Rice', cursive",
                color: 'white'
              }}
            >
              Lane Orthodontics
            </div>
            <p className="mb-6 leading-relaxed opacity-90">
              Providing exceptional orthodontic care in a comfortable, friendly environment.
            </p>

            {/* Contact Methods */}
            <div className="flex flex-col gap-3">
              <a 
                href="tel:9097991825"
                className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                style={{ color: footerText }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>(909) 799-1825</span>
              </a>
              
              <a 
                href="mailto:carterlaneortho@gmail.com"
                className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                style={{ color: footerText }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>carterlaneortho@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-4 relative pb-3"
              style={{ color: 'white' }}
            >
              Quick Links
              <span 
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded"
                style={{ backgroundColor: accentColor }}
              />
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block text-left"
                  style={{ color: footerText, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  Home
                </button>
              </li>
              <li>
                <a 
                  href="#about"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#insurance"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Insurance
                </a>
              </li>
              <li>
                <a 
                  href="#location"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Location
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 
              className="text-xl font-bold mb-4 relative pb-3"
              style={{ color: 'white' }}
            >
              Our Services
              <span 
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded"
                style={{ backgroundColor: accentColor }}
              />
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Traditional Braces
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Clear Aligners
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Airway Orthodontics
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Retainers
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: footerText }}
                >
                  Custom Guards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 
              className="text-xl font-bold mb-4 relative pb-3"
              style={{ color: 'white' }}
            >
              Contact Us
              <span 
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded"
                style={{ backgroundColor: accentColor }}
              />
            </h3>
            <address className="not-italic space-y-3 opacity-90">
              {isPalmDesert ? (
                <>
                  <p>
                    73-899 Highway 111<br/>
                    Palm Desert, CA 92260
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Mobile RV Unit<br/>
                    Loma Linda, CA
                  </p>
                </>
              )}
              <p>(909) 799-1825</p>
              <p>carterlaneortho@gmail.com</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-semibold" style={{ color: 'white' }}>Hours:</p>
                <p>Mon-Fri: 9am-5pm</p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="text-center pt-6 border-t opacity-75"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p>&copy; 2025 Lane Orthodontics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}