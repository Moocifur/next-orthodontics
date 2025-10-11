export default function Footer({ location }) {
  const isPalmDesert = location === 'palm-desert'

  const footerBg = isPalmDesert ? '#2c4312' : '#d3aa69'
  const footerText = isPalmDesert ? '#f3eadc' : '#ffffff'
  const accentColor = isPalmDesert ? '#e09c54' : '#1a56db'

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
              {['Home', 'About Us', 'Services', 'Insurance', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: footerText }}
                  >
                    {link}
                  </a>
                </li>
              ))}
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
              {['Traditional Braces', 'Clear Aligners', 'Accelerated Orthodontics', 'Retainers', 'Early Treatment'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: footerText }}
                  >
                    {service}
                  </a>
                </li>
              ))}
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
              <p>
                73-899 Highway 111<br/>
                Palm Desert, CA 92260
              </p>
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