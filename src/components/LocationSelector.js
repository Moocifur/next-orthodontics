import Link from 'next/link'

export default function LocationSelector() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        Welcome to Our Orthodontics Practice
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        We have two convenient locations to serve you. Select your preferred location:
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Palm Desert Button */}
        <Link 
          href="/palm-desert"
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 rounded-lg text-2xl font-semibold transition-colors duration-200 text-center"
        >
          Palm Desert
          <p className="text-sm font-normal mt-2 opacity-90">Traditional Office</p>
        </Link>

        {/* Loma Linda Button */}
        <Link 
          href="/loma-linda"
          className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 rounded-lg text-2xl font-semibold transition-colors duration-200 text-center"
        >
          Loma Linda
          <p className="text-sm font-normal mt-2 opacity-90">Mobile RV - Wire Wagon</p>
        </Link>
      </div>
    </div>
  )
}