'use client'

import { useState } from 'react'

export default function Insurance({ location }) {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const isPalmDesert = location === 'palm-desert'

  // Color variables based on location
  const colors = isPalmDesert ? {
    primary: '#4a6023',
    primaryDark: '#344518',
    secondary: '#e09c54',
    gradient: 'linear-gradient(135deg, #4a6023, #e09c54)',
    bgMain: '#e09c54',
    bgGradient: 'linear-gradient(to bottom, #e09c54, #d69149)',
    lightBg: 'rgba(255, 255, 255, 0.15)',
    iconBg: 'rgba(255, 255, 255, 0.25)'
  } : {
    primary: '#1a56db',
    primaryDark: '#0c2d6b',
    secondary: '#87CEEB',
    gradient: 'linear-gradient(135deg, #1a56db, #87CEEB)',
    bgMain: '#87CEEB',
    bgGradient: 'linear-gradient(to bottom, #87CEEB, #7abfd9)',
    lightBg: 'rgba(255, 255, 255, 0.15)',
    iconBg: 'rgba(255, 255, 255, 0.25)'
  }

  const features = [
    {
      id: 'insurance',
      icon: 'fa-shield-heart',
      title: 'PPO Insurance Accepted',
      emoji: '🏥'
    },
    {
      id: 'flexible',
      icon: 'fa-hand-holding-dollar',
      title: 'Interest-Free Payment Plans',
      emoji: '💳'
    }
  ]

  return (
    <section 
      id="insurance"
      className="py-20 relative overflow-hidden"
      style={{ background: colors.bgGradient }}
    >
      {/* Fun decorative pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Header - Fun & Friendly */}
        <div className="text-center mb-16">
          <div className="block mb-6 md:mb-10 lg:mb-12">
            <div 
              className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: colors.iconBg,
                border: '3px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span className="text-5xl">💰</span>
            </div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block"
            style={{ 
              fontFamily: isPalmDesert ? "'Shadows Into Light Two', cursive" : "'Spicy Rice', cursive",
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            Don't let finances keep you from your dream smile!
            <span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 rounded bg-white"
              style={{ bottom: '-12px' }}
            />
          </h2>
          
          <p className="text-xl text-white mt-6 max-w-2xl mx-auto font-medium" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.15)' }}>
            We offer interest-free payment options and accept most PPO insurance plans
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => {
            const isHovered = hoveredFeature === index

            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group"
                style={{
                  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: isHovered 
                    ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                    : '0 10px 25px rgba(0, 0, 0, 0.1)',
                  border: '3px solid rgba(255, 255, 255, 0.5)'
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-10 transition-all duration-300"
                  style={{
                    background: colors.gradient,
                    borderRadius: '0 0 0 100%',
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)'
                  }}
                />

                {/* Icon with emoji */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative transition-all duration-300"
                    style={{
                      background: colors.gradient,
                      boxShadow: `0 8px 16px ${isPalmDesert ? 'rgba(74, 96, 35, 0.3)' : 'rgba(26, 86, 219, 0.3)'}`,
                      transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0) scale(1)'
                    }}
                  >
                    <i className={`fas ${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <span className="text-4xl" style={{
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    display: 'inline-block',
                    transition: 'transform 0.3s ease'
                  }}>
                    {feature.emoji}
                  </span>
                </div>

                {/* Content */}
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: colors.primary }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Shine effect on hover */}
                <div 
                  className="absolute inset-0 transition-all duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Fun Info Card */}
        <div 
          className="max-w-3xl mx-auto rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: colors.lightBg,
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Sparkle decorations */}
          <div className="absolute top-4 left-4 text-3xl animate-pulse">✨</div>
          <div className="absolute top-4 right-4 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
          <div className="absolute bottom-4 left-8 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
          <div className="absolute bottom-4 right-8 text-2xl animate-pulse" style={{ animationDelay: '1.5s' }}>⭐</div>

          <div className="relative z-10">
            <div 
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{
                background: colors.iconBg,
                border: '3px solid rgba(255, 255, 255, 0.4)'
              }}
            >
              <i className="fas fa-comments text-4xl text-white"></i>
            </div>

            <h3 
              className="text-3xl font-bold text-white mb-4"
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                fontFamily: isPalmDesert ? "'Shadows Into Light Two', cursive" : "'Spicy Rice', cursive"
              }}
            >
              Have Questions About Coverage?
            </h3>
            
            <p className="text-lg text-white mb-8 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.15)' }}>
              Our friendly team is here to help! We'll verify your insurance, explain your benefits, and create a payment plan that works for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white font-bold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105"
                style={{
                  color: colors.primary,
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                }}
              >
                <i className="fas fa-envelope"></i>
                Contact Us About Insurance
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid white',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <i className="fas fa-calendar"></i>
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}