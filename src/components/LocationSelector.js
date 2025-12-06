import Link from 'next/link'

export default function LocationSelector() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)' }}>
      {/* Hero Section */}
      <div className="text-center pt-20 pb-16 px-6">
        <h1 
          className="text-6xl md:text-7xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Lane Orthodontics
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 rounded"></div>
        <p className="text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          Professional Orthodontic Care at Two Convenient Locations
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Choose your preferred location to explore services, schedule appointments, and begin your journey to a perfect smile
        </p>
      </div>

      {/* Location Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Palm Desert Card */}
          <Link href="/palm-desert" className="group block">
            <div 
              className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-4 border-white"
              style={{ minHeight: '500px' }}
            >
              {/* Image/Visual Section */}
              <div 
                className="h-64 relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #4a6023, #e09c54)',
                }}
              >
                {/* Desert decorative footer */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-32 opacity-60"
                  style={{
                    backgroundImage: 'url("/images/footer.png")',
                    backgroundSize: 'auto 100px',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'repeat-x'
                  }}
                />
                
                {/* Floating cactus decoration */}
                <div 
                  className="absolute top-8 right-8 w-24 h-24 opacity-30"
                  style={{
                    backgroundImage: 'url(/images/cactus.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    transform: 'rotate(15deg)',
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 
                    className="text-5xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      fontFamily: "'Shadows Into Light Two', cursive",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    Palm Desert
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    Traditional Office
                  </span>
                </div>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Our full-service orthodontic office in the heart of Palm Desert, featuring state-of-the-art equipment and a comfortable, modern environment.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-green-600"></i>
                    </div>
                    <span>73-899 Highway 111, Palm Desert</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <i className="fas fa-clock text-green-600"></i>
                    </div>
                    <span>Mon-Fri: 9am-5pm</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <i className="fas fa-phone text-green-600"></i>
                    </div>
                    <span>(909) 799-1825</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-green-700 font-semibold text-lg group-hover:text-green-800 transition-colors">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* Loma Linda Card */}
          <Link href="/loma-linda" className="group block">
            <div 
              className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-4 border-white"
              style={{ minHeight: '500px' }}
            >
              {/* Image/Visual Section */}
              <div 
                className="h-64 relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #1a56db, #87CEEB)',
                }}
              >
                {/* Beach decorative footer */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-32 opacity-60"
                  style={{
                    backgroundImage: 'url("/images/bottom-beach.png")',
                    backgroundSize: 'auto 100px',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'repeat-x'
                  }}
                />
                
                {/* Beach emoji decorations */}
                <div className="absolute top-6 left-6 text-4xl opacity-30 transform rotate-12">🌊</div>
                <div className="absolute top-8 right-8 text-3xl opacity-30 transform -rotate-12">☀️</div>
                <div className="absolute bottom-20 left-12 text-3xl opacity-30 transform rotate-6">🏖️</div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 
                    className="text-5xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      fontFamily: "'Spicy Rice', cursive",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    Wire Wagon
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    Mobile RV Unit
                  </span>
                </div>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Our innovative mobile orthodontic practice bringing professional care directly to convenient locations throughout the Loma Linda area.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-rv text-blue-600"></i>
                    </div>
                    <span>Mobile Unit - Loma Linda Area</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-clock text-blue-600"></i>
                    </div>
                    <span>Mon-Thu: By Appointment</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-phone text-blue-600"></i>
                    </div>
                    <span>(909) 799-1825</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-blue-700 font-semibold text-lg group-hover:text-blue-800 transition-colors">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pb-20 px-6">
        <p className="text-gray-600 text-lg mb-4">Questions about which location is right for you?</p>
        <a 
          href="tel:9097991825"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <i className="fas fa-phone"></i>
          Call Us: (909) 799-1825
        </a>
      </div>
    </div>
  )
}