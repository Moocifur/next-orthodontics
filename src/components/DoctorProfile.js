'use client'

import { useState, useEffect } from 'react'

export default function DoctorProfile({ location }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const isPalmDesert = location === 'palm-desert'

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#f5efe0',
        backgroundImage: 'linear-gradient(to bottom, #f5efe0, #e9dfc8)'
      }}
    >
      {/* Top decorative border */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 opacity-80"
        style={{
          background: 'linear-gradient(45deg, #e09c54 25%, transparent 25%), linear-gradient(-45deg, #e09c54 25%, transparent 25%)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold inline-block relative"
            style={{ 
              fontFamily: "'Shadows Into Light Two', cursive",
              color: '#4a6023',
              textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)'
            }}
          >
            Meet Dr. Lane
            <span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-16 rounded"
              style={{ 
                backgroundColor: '#e09c54',
                bottom: '-10px'
              }}
            />
          </h2>
        </div>

        {/* Doctor Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-12 relative">
          {/* Decorative background elements */}
          <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-35 pointer-events-none hidden md:block"
            style={{
              backgroundImage: 'url(/images/succulent2.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: 0
            }}
          />
          <div 
            className="absolute right-1/5 bottom-1/5 w-32 h-32 opacity-35 pointer-events-none hidden md:block"
            style={{
              backgroundImage: 'url(/images/cactus.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(-15deg)',
              zIndex: 0
            }}
          />

          {/* Text Content - Order 2 on mobile, 1 on desktop */}
          <div className="flex-1 md:max-w-[60%] relative z-10 order-2 md:order-1">
            <div 
              className="p-6 rounded-lg border text-center md:text-left"
              style={{
                backgroundColor: 'rgba(245, 239, 224, 0.3)',
                borderColor: 'rgba(74, 96, 35, 0.2)'
              }}
            >
              <div 
                className="text-lg leading-relaxed"
                style={{
                  color: '#2c4312',
                  textShadow: '0 1px 5px rgba(255, 255, 255, 0.6)'
                }}
              >
                <p className="mb-4">
                  Dr. Lane is a proud graduate of Loma Linda School of Dentistry, receiving his DDS as well as his Master's degree in Orthodontics and Dentofacial Orthopedics.
                </p>
                <p className="mb-4">
                  For over 15 years Dr. Lane has never lost his passion for creating beautiful smiles, offering each patient affordable, personalized, and precise Orthodontic treatment.
                </p>
                <p className="mb-0">
                  When not in the office, you can usually find Dr. Lane at the beach with his family. He is known as a perfectionist with a witty sense of humor. There is rarely a dull moment when Dr. Lane is around!
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Image - Order 1 on mobile, 2 on desktop */}
          <div className="flex-1 md:flex-initial md:w-[35%] relative z-10 self-center order-1 md:order-2 max-w-sm md:max-w-none mx-auto">
            <div className="relative">
              <img 
                src="/images/lane.jpg" 
                alt="Dr. Lane"
                className="w-full h-auto rounded-lg relative z-10 border-4 border-white transition-transform duration-300 hover:scale-105"
                style={{
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
                }}
              />
              {/* Decorative background shape */}
              <div 
                className="absolute rounded-lg opacity-60"
                style={{
                  top: '20px',
                  left: '20px',
                  right: '-20px',
                  bottom: '-20px',
                  backgroundColor: '#e09c54',
                  zIndex: 1
                }}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-[90%] md:w-full max-w-4xl mx-auto mt-10 relative order-3">
          <div 
            className="relative overflow-hidden rounded-lg"
            style={{
              height: '350px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Carousel Track */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                width: `${totalSlides * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`
              }}
            >
              {/* Slides */}
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num}
                  className="flex-shrink-0 h-full"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <img 
                    src={`/images/slide${num}.jpeg`}
                    alt={`Office slide ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:bg-opacity-100 hover:scale-110 z-20"
              style={{
                color: '#4a6023',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:bg-opacity-100 hover:scale-110 z-20"
              style={{
                color: '#4a6023',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Next slide"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 z-20">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'scale-125' 
                      : ''
                  }`}
                  style={{
                    backgroundColor: currentSlide === index 
                      ? '#4a6023' 
                      : 'rgba(255, 255, 255, 0.6)'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right decorative element */}
      <div 
        className="absolute -right-14 top-12 w-44 h-44 opacity-50 pointer-events-none hidden xl:block"
        style={{
          backgroundImage: 'url(/images/succulent2.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(15deg)',
          zIndex: 1
        }}
      />

      {/* Left decorative element */}
      <div 
        className="absolute -left-10 bottom-16 w-36 h-36 opacity-50 pointer-events-none hidden xl:block"
        style={{
          backgroundImage: 'url(/images/cactus.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
    </section>
  )
}