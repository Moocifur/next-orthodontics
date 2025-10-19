'use client'

export default function Services({ location }) {
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

  // Palm Desert Services (all in one)
  const palmDesertServices = [
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
    },
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
    },
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

        {/* Services Container - Responsive Grid */}
        <div className="services-responsive-container">
          <style jsx>{`
            .services-responsive-container {
              max-width: 900px;
              margin: 0 auto;
            }

            .service-item {
              background: white;
              border-radius: 12px;
              margin-bottom: 15px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.06);
              transition: all 0.3s ease;
            }

            .service-header {
              padding: 20px 25px;
              display: flex;
              align-items: center;
              gap: 15px;
              background: linear-gradient(to right, ${isPalmDesert ? 'rgba(74, 96, 35, 0.05)' : 'rgba(26, 86, 219, 0.05)'}, transparent);
              transition: all 0.3s ease;
              height: 100%;
            }

            .service-item:hover .service-header {
              background: linear-gradient(to right, ${isPalmDesert ? 'rgba(74, 96, 35, 0.1)' : 'rgba(26, 86, 219, 0.1)'}, transparent);
            }

            .service-icon {
              width: 50px;
              height: 50px;
              background: ${colors.gradient};
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 1.3em;
              flex-shrink: 0;
            }

            .service-title {
              flex: 1;
            }

            .service-title h4 {
              color: ${colors.primary};
              font-size: 1.1em;
              margin-bottom: 3px;
              font-weight: 600;
            }

            .service-title p {
              color: #666;
              font-size: 0.9em;
              line-height: 1.5;
            }

            /* Desktop: Transform to grid */
            @media (min-width: 768px) {
              .services-responsive-container {
                max-width: 1200px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 30px;
              }

              .service-item {
                margin-bottom: 0;
                height: 100%;
                display: flex;
                flex-direction: column;
              }

              .service-header {
                flex-direction: column;
                text-align: center;
                padding: 40px 30px 30px;
                flex: 1;
              }

              .service-icon {
                width: 80px;
                height: 80px;
                border-radius: 16px;
                font-size: 2em;
                margin-bottom: 20px;
                box-shadow: 0 8px 20px ${isPalmDesert ? 'rgba(74, 96, 35, 0.3)' : 'rgba(26, 86, 219, 0.3)'};
              }

              .service-title h4 {
                font-size: 1.4em;
                margin-bottom: 10px;
              }

              .service-title p {
                font-size: 1em;
                line-height: 1.6;
              }

              .service-item:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 30px ${isPalmDesert ? 'rgba(74, 96, 35, 0.12)' : 'rgba(26, 86, 219, 0.12)'};
              }
            }

            /* Large Desktop: 3 columns */
            @media (min-width: 1200px) {
              .services-responsive-container {
                grid-template-columns: repeat(3, 1fr);
              }
            }
          `}</style>

          {(isPalmDesert ? palmDesertServices : lomaLindaServices).map((service) => (
            <div 
              key={service.id}
              className="service-item"
            >
              <div className="service-header">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-title">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {isPalmDesert && (
          <div 
            className="text-center mt-16 p-12 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #f0f8f0, #e6f4e6)',
              border: '2px solid rgba(74, 96, 35, 0.2)'
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
                boxShadow: '0 4px 15px rgba(74, 96, 35, 0.2)'
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