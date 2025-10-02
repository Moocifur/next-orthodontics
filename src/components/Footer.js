export default function Footer({ locationName, location }) {
  const footerBg = location === 'palm-desert' ? 'bg-palm-desert-900' : 'bg-loma-linda-900'

  return (
    <footer className={`${footerBg} text-white py-8`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; 2025 {locationName}. All rights reserved.</p>
      </div>
    </footer>
  )
}