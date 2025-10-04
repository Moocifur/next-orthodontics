export default function EnhancedHero({ locationName, subtitle, location }) {
  const isPalmDesert = location === 'palm-desert';
  
  return (
    <>
      {/* HERO SECTION */}
      <section className={`relative overflow-hidden ${isPalmDesert ? 'bg-gradient-to-r from-green-800 to-green-700' : 'bg-sky-300'} py-16 md:py-20`}>
        {/* Decorative drape at top - Replace with your drape.png image */}
        <div 
          className={`absolute left-0 w-full h-80 pointer-events-none z-10 ${isPalmDesert ? 'opacity-90' : 'opacity-70'}`}
          style={{
            backgroundImage: 'url("/images/drape.png")',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'top center',
            backgroundSize: '20% auto',
            top: '0px'
          }}
        />
        
        {/* Subtle background overlay for Loma Linda */}
        {!isPalmDesert && (
          <div className="absolute inset-0 bg-white/10 opacity-30 z-10" />
        )}
        
        <div className="container mx-auto px-5 relative z-20 max-w-6xl">
          
          {isPalmDesert ? (
            /* PALM DESERT LAYOUT */
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto">
              {/* Content */}
              <div className="flex-1 text-center md:text-left order-2 md:order-1">
                <div className="bg-green-800/10 p-6 md:p-8 rounded-xl backdrop-blur-sm">
                  <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: "'Shadows Into Light Two', cursive" }}>
                    Your Perfect Smile Begins Here
                  </h1>
                  <p className="text-white text-lg md:text-2xl leading-relaxed font-medium drop-shadow-md">
                    State-of-the-art orthodontic care for patients of all ages. We're committed to creating 
                    beautiful, healthy smiles that last a lifetime.
                  </p>
                </div>
              </div>

              {/* Hero Image/Video placeholder */}
              <div className="flex-1 order-1 md:order-2 flex justify-center w-full">
                <div className="w-full max-w-lg">
                  <div className="bg-green-900/20 rounded-xl shadow-2xl aspect-video flex items-center justify-center backdrop-blur-sm border-4 border-white">
                    <p className="text-white/60 text-lg">Hero Video/Image</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* LOMA LINDA LAYOUT - Wire Wagon */
            <>
              {/* Header section */}
              <div className="text-center mb-8">
                <h1 className="text-blue-900 text-2xl md:text-4xl font-bold uppercase tracking-wide mb-2 drop-shadow-sm">
                  WELCOME TO THE
                </h1>
                <h2 className="text-blue-800 text-5xl md:text-8xl font-bold mb-2 drop-shadow-md" 
                    style={{ fontFamily: "'Spicy Rice', cursive" }}>
                  Wire Wagon
                </h2>
                <p className="text-blue-900 text-lg md:text-2xl font-bold uppercase tracking-wide">
                  A MOBILE ORTHODONTIC PRACTICE
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Left side - Text content */}
                <div className="flex-1 lg:pr-8 text-center lg:text-left">
                  <h3 className="text-blue-900 text-3xl md:text-5xl font-bold italic mb-6 leading-tight drop-shadow-sm"
                      style={{ fontFamily: "'Spicy Rice', cursive" }}>
                    Straight Smiles - no waiting rooms!
                  </h3>
                  
                  <div className="space-y-4 md:space-y-5 text-blue-900 text-base md:text-xl font-medium leading-relaxed">
                    <p className="drop-shadow-sm">
                      The Wire Wagon is Loma Linda's fully licensed, fully mobile orthodontic practice—bringing 
                      straight teeth and good vibes straight to you! Whether we're parked under the shade of a 
                      tree at your local park or pulling up curbside to your home, our mission is to make 
                      orthodontic care as easy and enjoyable as possible.
                    </p>
                    
                    <p className="drop-shadow-sm">
                      Licensed by the California Dental Board, we provide professional, high-quality orthodontic 
                      services in a relaxed, outdoor setting that skips the stress of traditional office visits.
                    </p>
                    
                    <p className="drop-shadow-sm">
                      Think of us as your neighborhood smile-mobile—making orthodontics convenient, comfortable, 
                      and just a little more fun.
                    </p>
                  </div>
                </div>
                
                {/* Right side - RV and contact info */}
                <div className="flex-1 flex flex-col items-center lg:items-end w-full">
                  <div className="relative w-full max-w-lg">
                    {/* RV Image placeholder */}
                    <div className="text-center mb-8 lg:-mt-16">
                      <div className="w-full h-48 md:h-64 bg-blue-200/30 rounded-lg shadow-lg flex items-center justify-center backdrop-blur-sm">
                        <p className="text-blue-900/60 text-lg">RV Image Here</p>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="text-center lg:pr-8 -mt-10 relative z-30">
                      <h3 className="text-blue-900 text-2xl md:text-4xl font-bold italic mb-2"
                          style={{ fontFamily: "'Spicy Rice', cursive" }}>
                        Want more info?
                      </h3>
                      <h4 className="text-blue-900 text-xl md:text-3xl font-bold italic mb-2"
                          style={{ fontFamily: "'Spicy Rice', cursive" }}>
                        Text us!
                      </h4>
                      <a 
                        href="tel:9097991825" 
                        className="text-blue-900 text-2xl md:text-4xl font-bold italic hover:scale-105 transition-transform duration-300 inline-block"
                        style={{ fontFamily: "'Spicy Rice', cursive" }}
                      >
                        (909) 799-1825
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom section - Book appointment */}
              <div className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-blue-900 text-xl md:text-3xl font-bold italic"
                      style={{ fontFamily: "'Spicy Rice', cursive" }}>
                    Already been aboard the Wire Wagon?
                  </h3>
                </div>
                
                <div className="flex justify-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-bold transform hover:-translate-y-2 transition-all duration-300 shadow-lg -rotate-6 hover:-rotate-3"
                  >
                    Book an Appointment
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom landscape decoration - Desert/Beach scenery */}
        <div className="absolute bottom-0 left-0 right-0 z-30 w-full">
          <div 
            className="w-full h-36"
            style={{
              backgroundImage: isPalmDesert 
                ? 'url("/images/top-desert.png")'
                : 'url("/images/top-beach.png")',
              backgroundSize: 'auto 150px',
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'repeat-x'
            }}
          />
        </div>
      </section>

      {/* SANDY ACTIONS SECTION */}
      <section className={`${isPalmDesert ? 'bg-yellow-600' : 'bg-yellow-500'} py-12 md:py-20 relative overflow-visible`}>
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-5 md:gap-8 relative z-10">
            
            {/* Request Appointment Card - Using custom image */}
            <div className="relative">
              <button
                className="transition-all duration-300 hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                <img 
                  src="/images/2.png" 
                  alt="Request an Appointment"
                  className="w-48 h-48 md:w-64 md:h-64 filter drop-shadow-2xl"
                />
              </button>
            </div>

            {/* Make Payment Card - Using custom image */}
            <div className="relative">
              <button
                className="transition-all duration-300 hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                <img 
                  src="/images/1.png" 
                  alt="Make a Payment"
                  className="w-48 h-48 md:w-64 md:h-64 filter drop-shadow-2xl"
                />
              </button>
            </div>

            {/* New Patient Card - Using custom image */}
            <div className="relative">
              <button
                className="transition-all duration-300 hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                <img 
                  src="/images/3.png" 
                  alt="New Patient Paperwork"
                  className="w-48 h-48 md:w-64 md:h-64 filter drop-shadow-2xl"
                />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}