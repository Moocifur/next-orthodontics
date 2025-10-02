export default function Hero({ locationName, subtitle, location }) {
  const ispalmDesert = location === 'palm-desert'
  
  const gradientFrom = ispalmDesert ? 'from-palm-desert-600' : 'from-loma-linda-600'
  const gradientTo = ispalmDesert ? 'to-palm-desert-800' : 'to-loma-linda-800'
  const buttonText = ispalmDesert ? 'text-palm-desert-600' : 'text-loma-linda-600'
  const buttonHover = ispalmDesert ? 'hover:bg-palm-desert-50' : 'hover:bg-loma-linda-50'

  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white py-20`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-4">
          {locationName}
        </h2>
        <p className="text-xl mb-8">
          {subtitle}
        </p>
        <button className={`bg-white ${buttonText} px-8 py-3 rounded-lg text-lg font-semibold ${buttonHover} transition-colors`}>
          Schedule Appointment
        </button>
      </div>
    </section>
  )
}