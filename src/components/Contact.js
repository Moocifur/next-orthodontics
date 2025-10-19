export default function Contact({ location }) {
  const isPalmDesert = location === 'palm-desert'

  const colors = isPalmDesert ? {
    primary: '#4a6023',
    primaryDark: '#344518',
    secondary: '#e09c54',
    bgLight: '#f5efe0',
    text: '#2c4312',
    textLight: '#4a4a3a'
  } : {
    primary: '#1a56db',
    primaryDark: '#0c2d6b',
    secondary: '#87CEEB',
    bgLight: '#eff6ff',
    text: '#1e3a8a',
    textLight: '#1e40af'
  }

  return (
    <section 
      id="contact"
      className="relative overflow-hidden py-20"
      style={{ 
        backgroundColor: colors.bgLight,
        backgroundImage: isPalmDesert 
          ? 'linear-gradient(to bottom, #f5efe0, #e8d9bc)'
          : 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)'
      }}
    >
      {/* Top Decorative Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 opacity-50"
        style={{
          background: isPalmDesert
            ? 'linear-gradient(45deg, #e09c54 25%, transparent 25%), linear-gradient(-45deg, #e09c54 25%, transparent 25%)'
            : 'linear-gradient(45deg, #87CEEB 25%, transparent 25%), linear-gradient(-45deg, #87CEEB 25%, transparent 25%)',
          backgroundSize: '20px 20px',
          zIndex: 2
        }}
      />

      {/* SVG Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cpath d='M0,0 L5,5 M15,0 L20,5 M30,0 L35,5 M45,0 L50,5 M60,0 L65,5 M75,0 L80,5 M90,0 L95,5 M105,0 L110,5 M120,0 L125,5 M135,0 L140,5' stroke='${isPalmDesert ? 'rgba(224,156,84,0.08)' : 'rgba(26,86,219,0.08)'}' stroke-width='0.7'/%3E%3C/svg%3E")`,
          zIndex: 1
        }}
      />

      {/* Loma Linda - Scattered Beach Stickers */}
      {!isPalmDesert && (
        <>
          <div className="absolute" style={{ top: '8%', left: '5%', transform: 'rotate(-12deg)', fontSize: '3em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>🌊</div>
          <div className="absolute" style={{ top: '15%', right: '8%', transform: 'rotate(25deg)', fontSize: '2.5em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>☀️</div>
          <div className="absolute" style={{ top: '45%', left: '3%', transform: 'rotate(-8deg)', fontSize: '3.5em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>🏖️</div>
          <div className="absolute" style={{ bottom: '25%', left: '12%', transform: 'rotate(15deg)', fontSize: '3em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>🌴</div>
          <div className="absolute" style={{ bottom: '15%', right: '6%', transform: 'rotate(-20deg)', fontSize: '4em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>⭐</div>
          <div className="absolute" style={{ top: '60%', right: '15%', transform: 'rotate(30deg)', fontSize: '3em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>🐚</div>
          <div className="absolute" style={{ top: '35%', left: '20%', transform: 'rotate(-25deg)', fontSize: '2em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>🦀</div>
          <div className="absolute" style={{ bottom: '40%', right: '25%', transform: 'rotate(18deg)', fontSize: '2.8em', opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>🐠</div>
        </>
      )}

      {/* Palm Desert Decorative Elements */}
      {isPalmDesert && (
        <>
          <div 
            className="hidden xl:block absolute w-32 h-32 opacity-20 pointer-events-none"
            style={{
              top: '10%',
              right: '5%',
              backgroundImage: 'url(/images/cactus.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(10deg)',
              zIndex: 1
            }}
          />
          <div 
            className="hidden xl:block absolute w-40 h-40 opacity-15 pointer-events-none"
            style={{
              bottom: '20%',
              left: '5%',
              backgroundImage: 'url(/images/succulent2.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(-5deg)',
              zIndex: 1
            }}
          />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10" style={{ paddingBottom: '160px' }}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold inline-block relative mb-4"
            style={{ 
              fontFamily: isPalmDesert ? "'Shadows Into Light Two', cursive" : "'Spicy Rice', cursive",
              color: colors.primary
            }}
          >
            Ready to Transform Your Smile?
            <span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-16 rounded"
              style={{ 
                backgroundColor: colors.secondary,
                bottom: '-10px'
              }}
            />
          </h2>
          <p 
            className="text-lg mt-8 max-w-2xl mx-auto"
            style={{ color: colors.textLight }}
          >
            Schedule your complimentary consultation today and take the first step towards the smile you've always wanted.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
          <button
            className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            style={{
              backgroundColor: colors.primary,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <i className="fa-regular fa-calendar-days"></i>
            Request Appointment
          </button>
          
          <a
            href="tel:9097991825"
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'transparent',
              color: colors.primary,
              border: `2px solid ${colors.primary}`,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <i className="fa-solid fa-phone"></i>
            Call Us
          </a>
        </div>
      </div>

      {/* Footer Landscape Decoration */}
      <div className="absolute bottom-0 left-0 w-full" style={{ marginBottom: '-30px', zIndex: 5 }}>
        <div 
          className="w-full h-36"
          style={{
            backgroundImage: isPalmDesert 
              ? 'url("/images/footer.png")'
              : 'url("/images/bottom-beach.png")',
            backgroundSize: 'auto 150px',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'repeat-x'
          }}
        />
      </div>
    </section>
  )
}