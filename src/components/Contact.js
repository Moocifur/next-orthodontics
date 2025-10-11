export default function Contact({ location }) {
  const isPalmDesert = location === 'palm-desert'

  const colors = isPalmDesert ? {
    primary: '#4a6023',
    secondary: '#e09c54',
    bgLight: '#f5efe0',
    text: '#2c4312',
    textLight: '#4a4a3a'
  } : {
    primary: '#1a56db',
    secondary: '#87CEEB',
    bgLight: '#eff6ff',
    text: '#333333',
    textLight: '#555555'
  }

  return (
    <section 
      id="contact"
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: colors.bgLight }}
    >
      {/* SVG Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cpath d='M0,0 L5,5 M15,0 L20,5 M30,0 L35,5 M45,0 L50,5 M60,0 L65,5 M75,0 L80,5 M90,0 L95,5 M105,0 L110,5 M120,0 L125,5 M135,0 L140,5' stroke='rgba(224,156,84,0.08)' stroke-width='0.7'/%3E%3C/svg%3E")`
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

      <div className="container mx-auto px-6 relative z-10 pb-40">
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
      <div className="absolute bottom-0 left-0 w-full" style={{ marginBottom: '-30px' }}>
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