'use client'

import { useState } from 'react'

export default function Services({ location }) {
  const [activeTab, setActiveTab] = useState('orthodontics')
  const [hoveredCard, setHoveredCard] = useState(null)

  const isPalmDesert = location === 'palm-desert'

  // Color variables based on location
  const colors = isPalmDesert ? {
    primary: '#4a6023',
    primaryDark: '#344518',
    secondary: '#e09c54',
    gradient: 'linear-gradient(135deg, #4a6023, #e09c54)',
    bgLight: '#f5efe0',
    bgGradient: 'linear-gradient(to bottom, #f5efe0, #e9dfc8)'
  } : {
    primary: '#1a56db',
    primaryDark: '#0c2d6b',
    secondary: '#87CEEB',
    gradient: 'linear-gradient(135deg, #1a56db, #87CEEB)',
    bgLight: '#eff6ff',
    bgGradient: 'linear-gradient(to bottom, #eff6ff, #dbeafe)'
  }

  // Palm Desert Services (with tabs)
  const palmDesertServices = {
    orthodontics: [
      {
        id: 'comprehensive',
        title: 'Comprehensive Orthodontics',
        description: 'Comprehensive orthodontic treatment for adults and children',
        icon: 'fa-teeth'
      },
      {
        id: 'aesthetic',
        title: 'Aesthetic Options',
        description: 'Clear brackets and Aligners',
        icon: 'fa-eye'
      },
      {
        id: 'airway',
        title: 'Airway Orthodontics',
        description: 'Specialized treatment focusing on proper airway development and breathing patterns for overall health',
        icon: 'fa-lungs'
      }
    ],
    diagnostics: [
      {
        id: 'imaging',
        title: 'Diagnostic Imaging',
        description: 'In house Panoramic and Cephalometric X-Rays',
        icon: 'fa-x-ray'
      },
      {
        id: 'consultations',
        title: 'Free Consultations',
        description: 'Complimentary Consultations',
        icon: 'fa-stethoscope'
      }
    ],
    supplementary: [
      {
        id: 'guards',
        title: 'Custom Guards',
        description: 'Custom fit Sports guards and Night guards',
        icon: 'fa-shield-halved'
      },
      {
        id: 'tmj',
        title: 'TMJ Treatment',
        description: 'TMJ treatment',
        icon: 'fa-head-side-mask'
      },
      {
        id: 'whitening',
        title: 'Teeth Whitening',
        description: 'At home teeth whitening kits',
        icon: 'fa-tooth'
      },
      {
        id: 'retainers',
        title: 'Retainers',
        description: 'Hawley and Lower Fixed retainers',
        icon: 'fa-teeth-open'
      }
    ]
  }

  // Loma Linda Services (simpler, no tabs)
  const lomaLindaServices = [
    {
      id: 'traditional-braces',
      title: 'Traditional Braces',
      description: 'Full orthodontic treatment with metal braces, right from our mobile unit.',
      icon: 'fa-teeth'
    },
    {
      id: 'clear-aligners',
      title: 'Clear Aligners',
      description: 'Modern invisible aligners fitted and monitored at convenient mobile locations.',
      icon: 'fa-eye'
    },
    {
      id: 'mobile-convenience',
      title: 'Mobile Convenience',
      description: 'We come to you! Check our schedule for Wire Wagon locations and times.',
      icon: 'fa-rv'
    },
    {
      id: 'airway',
      title: 'Airway Orthodontics',
      description: 'Specialized treatment focusing on proper airway development and breathing patterns.',
      icon: 'fa-lungs'
    }
  ]

  const tabs = [
    { id: 'orthodontics', label: 'Orthodontics' },
    { id: 'diagnostics', label: 'Diagnostics & Planning' },
    { id: 'supplementary', label: 'Supplementary Services' }
  ]

  const getCurrentServices = () => {
    if (!isPalmDesert) return lomaLindaServices
    return palmDesertServices[activeTab] || []
  }

  return (
    <section 
      id="services"
      className="py-20 relative overflow-hidden"
      style={{ background: colors.bgGradient }}
    >
      {/* Top decorative border */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 opacity-50"
        style={{
          background: `linear-gradient(45deg, ${colors.secondary} 25%, transparent 25%), linear-gradient(-45deg, ${colors.secondary} 25%, transparent 25%)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold inline-block relative mb-6"
            style={{ 
              fontFamily: isPalmDesert ? "'Shadows Into Light Two', cursive" : "'Spicy Rice', cursive",
              color: colors.primary
            }}
          >
            {isPalmDesert ? 'We do more than Just straighten teeth' : 'Our Services'}
            <span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-16 rounded"
              style={{ 
                backgroundColor: colors.secondary,
                bottom: '-10px'
              }}
            />
          </h2>
          {isPalmDesert && (
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4a4a3a' }}>
              We believe maintaining overall health begins with oral health, therefore we are proud to offer the following services:
            </p>
          )}
        </div>

        {/* Tabs (Palm Desert only) */}
        {isPalmDesert && (
          <div className="flex justify-center mb-12 gap-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'transform -translate-y-0.5' 
                    : ''
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? colors.primary : 'white',
                  color: activeTab === tab.id ? 'white' : colors.primary,
                  border: `2px solid ${colors.primary}`,
                  boxShadow: activeTab === tab.id 
                    ? '0 5px 12px rgba(0, 0, 0, 0.1)' 
                    : '0 3px 6px rgba(0, 0, 0, 0.05)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Services Flow Container */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {getCurrentServices().map((service, index) => {
            const isEven = index % 2 === 1
            const isHovered = hoveredCard === index

            return (
              <article
                key={service.id}
                className={`flex items-center gap-8 p-6 bg-white rounded-3xl transition-all duration-300 relative overflow-hidden ${
                  isEven ? 'flex-row-reverse' : ''
                } ${isHovered ? 'transform -translate-y-1' : ''}`}
                style={{
                  boxShadow: isHovered 
                    ? `0 15px 40px ${isPalmDesert ? 'rgba(74, 96, 35, 0.2)' : 'rgba(26, 86, 219, 0.2)'}` 
                    : `0 10px 30px ${isPalmDesert ? 'rgba(74, 96, 35, 0.1)' : 'rgba(26, 86, 219, 0.1)'}`,
                  background: isEven 
                    ? `linear-gradient(135deg, ${isPalmDesert ? '#f0f8f0' : '#f0f9ff'}, ${isPalmDesert ? '#e6f4e6' : '#e0f2fe'})` 
                    : 'white'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Shimmer effect */}
                <div 
                  className="absolute top-0 h-full w-full transition-all duration-500 pointer-events-none"
                  style={{
                    left: isHovered ? '100%' : '-100%',
                    background: `linear-gradient(90deg, transparent, ${isPalmDesert ? 'rgba(74, 96, 35, 0.1)' : 'rgba(26, 86, 219, 0.1)'}, transparent)`
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    background: colors.gradient,
                    boxShadow: `0 8px 20px ${isPalmDesert ? 'rgba(74, 96, 35, 0.3)' : 'rgba(26, 86, 219, 0.3)'}`
                  }}
                >
                  <i className={`fas ${service.icon} text-3xl text-white`}></i>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Footer CTA */}
        {isPalmDesert && (
          <div 
            className="text-center mt-16 p-12 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${isPalmDesert ? '#f0f8f0' : '#f0f9ff'}, ${isPalmDesert ? '#e6f4e6' : '#e0f2fe'})`,
              border: `2px solid ${isPalmDesert ? 'rgba(74, 96, 35, 0.2)' : 'rgba(26, 86, 219, 0.2)'}`
            }}
          >
            <p 
              className="text-2xl font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Ready to Transform Your Smile?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{
                background: colors.gradient,
                boxShadow: `0 4px 15px ${isPalmDesert ? 'rgba(74, 96, 35, 0.2)' : 'rgba(26, 86, 219, 0.2)'}`
              }}
            >
              Schedule Your Free Consultation
            </a>
          </div>
        )}
      </div>
    </section>
  )
}