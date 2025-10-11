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
    bgGradient: 'linear-gradient(to bottom, #eff6ff, #dbeafe)',
    text: '#333333',
    textLight: '#555555'
  }

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
              fontFamily: isPalmDesert ? "'Shadows Into Light Two', cursive" : "'Spicy Rice', cursive",
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
                border: `1px solid ${isPalmDesert ? 'rgba(224, 156, 84, 0.2)' : 'rgba(26, 86, 219, 0.2)'}`
              }}
            >
              {/* Bottom gradient overlay */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${isPalmDesert ? 'rgba(245, 239, 224, 0.5)' : 'rgba(239, 246, 255, 0.5)'}, transparent)`,
                  zIndex: -1
                }}
              />

              {/* Icon */}
              <div 
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 5px 15px ${isPalmDesert ? 'rgba(74, 96, 35, 0.2)' : 'rgba(26, 86, 219, 0.2)'}`
                }}
              >
                <i className="fa-solid fa-location-dot text-3xl text-white"></i>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold text-center mb-4 relative inline-block w-full"
                style={{ color: colors.primary }}
              >
                {isPalmDesert ? 'Palm Desert Office' : 'Loma Linda Office'}
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
                <p>
                  {isPalmDesert ? (
                    <>73-899 Highway 111<br/>Palm Desert, CA 92260</>
                  ) : (
                    <>Mobile RV Unit<br/>Loma Linda, CA</>
                  )}
                </p>
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
                  {isPalmDesert ? (
                    <>Monday - Friday: 9am - 5pm</>
                  ) : (
                    <>Check our schedule for locations</>
                  )}
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