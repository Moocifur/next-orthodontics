'use client'

export default function EnhancedHero({ locationName, subtitle, location }) {
  const isPalmDesert = location === 'palm-desert';

  const handleAppointmentClick = () => {
    if (typeof window !== 'undefined' && window.openAppointmentForm) {
      window.openAppointmentForm()
    }
  }
  
  return (
    <section 
      className={`relative overflow-hidden ${
        isPalmDesert ? 'py-24 md:py-32' : 'py-16 md:py-20'
      }`}
      style={isPalmDesert ? {
        backgroundImage: 'url("/images/palm-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {
        backgroundImage: 'url("/images/beach-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      {isPalmDesert && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))',
          }}
        />
      )}
      
      {!isPalmDesert && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5))',
          }}
        />
      )}
      
      <div className="container mx-auto px-5 relative z-20 max-w-6xl">
        
        {isPalmDesert ? (
          /* ========== PALM DESERT LAYOUT ========== */
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-7xl mx-auto">
            {/* Content - Order 1 on both mobile and desktop */}
            <div className="flex-1 text-center md:text-left order-1">
              <div className="p-8 md:p-10">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight drop-shadow-lg" style={{ fontFamily: "'Shadows Into Light Two', cursive" }}>
                  Your Perfect Smile Begins Here
                </h1>
                <p className="text-white text-lg md:text-2xl leading-relaxed font-medium drop-shadow-md mb-10">
                  State-of-the-art orthodontic care for patients of all ages. We're committed to creating 
                  beautiful, healthy smiles that last a lifetime.
                </p>
                
                {/* CTA Buttons - Palm Desert */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={handleAppointmentClick}
                    className="px-8 py-4 bg-white text-green-800 font-bold rounded-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                  >
                    Request An Appointment
                  </button>
                  
                  <a
                    href="#insurance"
                    className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg text-center inline-block"
                  >
                    Payment Options
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Video - Order 2 on both mobile and desktop */}
            <div className="flex-1 order-2 flex justify-center w-full">
              <div className="w-full max-w-lg">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/hero-fallback.jpg" 
                  className="w-full h-auto rounded-xl shadow-2xl border-4 border-white"
                  style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
                >
                  <source src="/images/hero-vid.mp4" type="video/mp4" />
                  <img src="/images/hero-fallback.jpg" alt="Happy patient with braces" className="w-full h-auto rounded-xl" />
                </video>
              </div>
            </div>
          </div>
        ) : (
          /* ========== LOMA LINDA LAYOUT - Wire Wagon ========== */
          <>
            {/* Header section */}
            <div className="text-center mb-8">
              <h1 className="text-blue-900 text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2">
                WELCOME TO THE
              </h1>
              <h2 
                className="text-blue-800 text-5xl md:text-7xl lg:text-8xl font-bold mb-2" 
                style={{ fontFamily: "'Spicy Rice', cursive" }}
              >
                Wire Wagon
              </h2>
              <p className="text-blue-900 text-lg md:text-xl font-bold uppercase tracking-wide">
                A MOBILE ORTHODONTIC PRACTICE
              </p>
            </div>
            
            {/* Main content - Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12">
              
              {/* Left Column - Text content */}
              <div className="space-y-6 text-center lg:text-left">
                <h3 
                  className="text-blue-900 text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight"
                  style={{ fontFamily: "'Spicy Rice', cursive" }}
                >
                  Straight Smiles - no waiting rooms!
                </h3>
                
                <div className="space-y-4 text-blue-900 text-base md:text-lg leading-relaxed mb-6">
                  <p>
                    The Wire Wagon is Loma Linda's fully licensed, fully mobile orthodontic practice—bringing 
                    professional orthodontic care right to your neighborhood! We park at convenient locations 
                    throughout the community, making it easier than ever to get the smile you've always wanted.
                  </p>
                  
                  <p>
                    Licensed by the California Dental Board, we provide high-quality orthodontic services in a 
                    unique outdoor setting. No waiting rooms, no traditional office stress—just straightforward 
                    care in a relaxed, open-air environment.
                  </p>
                </div>
                
                {/* CTA Buttons - Loma Linda */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={handleAppointmentClick}
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Request An Appointment
                  </button>
                  
                  <a
                    href="#insurance"
                    className="px-6 py-3 bg-transparent text-blue-900 font-bold rounded-lg border-2 border-blue-900 hover:bg-blue-900/10 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Payment Options
                  </a>
                </div>
              </div>
              
              {/* Right Column - RV Graphic */}
              <div className="flex flex-col items-center">
                {/* RV Image */}
                <div className="relative w-full max-w-md">
                  <img 
                    src="/images/rv3.png"
                    alt="Wire Wagon Mobile Orthodontic RV"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
              
            </div>
          </>
        )}
      </div>
    </section>
  );
}