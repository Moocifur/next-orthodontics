import Link from 'next/link'

export default function Header({ locationName, location }) {
  // Determine which color classes to use based on location
  const ispalmDesert = location === 'palm-desert'
  
  const headerBg = ispalmDesert ? 'bg-palm-desert-600' : 'bg-loma-linda-600'
  const buttonText = ispalmDesert ? 'text-palm-desert-600' : 'text-loma-linda-600'
  const buttonHover = ispalmDesert ? 'hover:bg-palm-desert-50' : 'hover:bg-loma-linda-50'

  return (
    <header className={`${headerBg} text-white p-6 shadow-lg`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{locationName}</h1>
        <Link 
          href="/"
          className={`bg-white ${buttonText} px-4 py-2 rounded-lg ${buttonHover} transition-colors`}
        >
          ← Back to Locations
        </Link>
      </div>
    </header>
  )
}