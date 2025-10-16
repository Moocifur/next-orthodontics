export default function Location({ location }) {
  const isPalmDesert = location === 'palm-desert'

  // Color variables based on location
  const colors = isPalmDesert ? {
    primary: '#4a6023',
    primaryDark: '#344518',
    secondary: '#e09c54',
    bgLight: '#f5efe0',
    bgGradient: 'linear-gradient(to bottom, #f5efe0, #e8d9bc)',
    text: '#2c4312',
    textLight: '#4a4a3a'
  } : {
    primary: '#1a56db',
    primaryDark: '#0c2d6b',
    secondary: '#87CEEB',
    bgLight: '#eff6ff',
    bgGradient: 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)',
    text: '#1e3a8a',
    textLight: '#1e40af'
  }

  if (!isPalmDesert) {
    // LOMA LINDA - Wire Wagon Mobile Location
    return (
      <section 
        id="location"
        className="py-20 relative overflow-hidden"
        style={{ background: colors.bgGradient }}
      >
        {/* Wave pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='%231a56db' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 20px'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold inline-block relative mb-4"
              style={{ 
                fontFamily: "'Spicy Rice', cursive",
                color: colors.primary,
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3)'
              }}
            >
              Where's the Wire Wagon?
              <span 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 rounded"
                style={{ 
                  backgroundColor: colors.secondary,
                  bottom: '-10px'
                }}
              />
            </h2>
            <p 
              className="text-xl mt-8 max-w-2xl mx-auto font-medium"
              style={{ color: colors.textLight }}
            >
              Our mobile orthodontic RV in the Loma Linda area
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">

            {/* Contact CTA Card */}
            <div 
              className="bg-white rounded-3xl p-10 text-center relative overflow-hidden"
              style={{
                boxShadow: '0 20px 50px rgba(26, 86, 219, 0.2)',
                border: '4px solid white',
                background: 'linear-gradient(135deg, rgba(224, 247, 250, 0.5), rgba(178, 235, 242, 0.5))'
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 text-4xl opacity-30">🌊</div>
              <div className="absolute top-6 right-6 text-4xl opacity-30">☀️</div>
              <div className="absolute bottom-6 left-10 text-3xl opacity-30">🏖️</div>
              <div className="absolute bottom-6 right-10 text-3xl opacity-30">🌴</div>

              <div className="relative z-10">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    boxShadow: '0 8px 20px rgba(26, 86, 219, 0.3)'
                  }}
                >
                  <i className="fas fa-phone text-3xl text-white"></i>
                </div>

                <h3 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ 
                    fontFamily: "'Spicy Rice', cursive",
                    color: colors.primary
                  }}
                >
                  Visit the Wire Wagon!
                </h3>
                
                <p 
                  className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: colors.text }}
                >
                  Contact us to confirm our current location and schedule your appointment!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:9097991825"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      boxShadow: '0 6px 20px rgba(26, 86, 219, 0.3)'
                    }}
                  >
                    <i className="fas fa-phone"></i>
                    Call (909) 799-1825
                  </a>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
                    style={{
                      background: 'white',
                      color: colors.primary,
                      border: `3px solid ${colors.primary}`,
                      boxShadow: '0 4px 12px rgba(26, 86, 219, 0.2)'
                    }}
                  >
                    <i className="fas fa-envelope"></i>
                    Send Message
                  </a>
                </div>

                {/* Office Hours */}
                <div 
                  className="mt-8 pt-6 border-t-2 max-w-md mx-auto"
                  style={{ borderColor: `${colors.secondary}50` }}
                >
                  <p 
                    className="font-bold text-lg mb-2"
                    style={{ color: colors.primary }}
                  >
                    <i className="fas fa-clock mr-2"></i>
                    Operating Hours
                  </p>
                  <p style={{ color: colors.text }}>
                    Monday - Thursday: By Appointment<br/>
                    Friday: Administrative Day
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom wave decoration */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%231a56db'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
        />
      </section>
    )
  }

  // PALM DESERT - Traditional Office Location (original code)
  return (
    <section 
      id="location"
      className="py-20 relative overflow-hidden"
      style={{ background: colors.bgGradient }}
    >
      {/* SVG Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cpath d='M0,0 L5,5 M15,0 L20,5 M30,0 L35,5 M45,0 L50,5 M60,0 L65,5 M75,0 L80,5 M90,0 L95,5 M105,0 L110,5 M120,0 L125,5 M135,0 L140,5' stroke='rgba(224,156,84,0.08)' stroke-width='0.7'/%3E%3C/svg%3E")`,
          zIndex: 1
        }}
      />

      {/* Top Decorative Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 opacity-50"
        style={{
          background: `linear-gradient(45deg, ${colors.secondary} 25%, transparent 25%), linear-gradient(-45deg, ${colors.secondary} 25%, transparent 25%)`,
          backgroundSize: '20px 20px',
          zIndex: 2
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold inline-block relative mb-4"
            style={{ 
              fontFamily: "'Shadows Into Light Two', cursive",
              color: colors.primary
            }}
          >
            Find Us
            <span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-16 rounded"
              style={{ 
                backgroundColor: colors.secondary,
                bottom: '-10px'
              }}
            />
          </h2>
          <p 
            className="text-lg mt-8"
            style={{ color: colors.textLight }}
          >
            Visit our office for exceptional orthodontic care in a comfortable environment
          </p>
        </div>

        {/* Location Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10 relative">
          {/* Decorative Elements */}
          <div 
            className="hidden xl:block absolute -top-8 right-0 w-32 h-32 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/cactus.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(10deg)',
              zIndex: 1
            }}
          />
          <div 
            className="hidden xl:block absolute -bottom-5 left-0 w-40 h-40 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/succulent2.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(-5deg)',
              zIndex: 1
            }}
          />

          {/* Location Details Card */}
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div 
              className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md relative"
              style={{
                border: `1px solid rgba(224, 156, 84, 0.2)`
              }}
            >
              {/* Bottom gradient overlay */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl pointer-events-none"
                style={{
                  background: `linear-gradient(to top, rgba(245, 239, 224, 0.5), transparent)`,
                  zIndex: -1
                }}
              />

              {/* Icon */}
              <div 
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 5px 15px rgba(74, 96, 35, 0.2)`
                }}
              >
                <i className="fa-solid fa-location-dot text-3xl text-white"></i>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold text-center mb-4 relative inline-block w-full"
                style={{ color: colors.primary }}
              >
                Palm Desert Office
                <span 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-12 rounded"
                  style={{ 
                    backgroundColor: colors.secondary,
                    bottom: '-8px'
                  }}
                />
              </h3>

              {/* Address */}
              <address 
                className="not-italic text-center mb-5 text-lg leading-relaxed mt-6"
                style={{ color: colors.text }}
              >
                <p>73-899 Highway 111<br/>Palm Desert, CA 92260</p>
              </address>

              {/* Office Hours */}
              <div 
                className="mb-6 p-4 rounded-lg"
                style={{ backgroundColor: `${colors.bgLight}80` }}
              >
                <h4 
                  className="font-bold mb-2 text-lg"
                  style={{ color: colors.primaryDark }}
                >
                  Office Hours
                </h4>
                <p style={{ color: colors.textLight }}>
                  Monday - Friday: 9am - 5pm
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a 
                  href="tel:9097991825"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <i className="fa-solid fa-phone"></i>
                  Call Us
                </a>
                <a 
                  href="https://maps.app.goo.gl/JZBwBRFNnKB5Hx4Y9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'transparent',
                    color: colors.primary,
                    border: `2px solid ${colors.primary}`,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <i className="fa-solid fa-directions"></i>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="flex-1 lg:flex-[1.5] relative z-10">
            <div 
              className="rounded-xl overflow-hidden shadow-xl border-white"
              style={{
                border: '6px solid white',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="relative w-full h-96 lg:h-full min-h-[450px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.258166444042!2d-116.38245752391635!3d33.7253313371956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db03d0accb4c55%3A0xe14ea191e88c3d62!2s73899%20CA-111%2C%20Palm%20Desert%2C%20CA%2092260!5e0!3m2!1sen!2sus!4v1713984129037!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ 
                    border: 0,
                    filter: 'saturate(0.9) sepia(0.1)',
                    transition: 'filter 0.3s ease'
                  }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:saturate-100 hover:sepia-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}