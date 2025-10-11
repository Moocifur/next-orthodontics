import HeaderWithNav from '@/components/HeaderWithNav'
import Hero from '@/components/Hero'
import DoctorProfile from '@/components/DoctorProfile'
import Service from '@/components/Service'
import Insurance from '@/components/Insurance'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function PalmDesert() {
  return (
    <div className="min-h-screen bg-palm-desert-50">
      <HeaderWithNav 
        locationName="Palm Desert Orthodontics"
        location="palm-desert"
      />

      <Hero 
        locationName="Palm Desert Location"
        subtitle="Traditional Office - Serving the Coachella Valley"
        location="palm-desert"
      />

      <DoctorProfile location="palm-desert" />

      {/* <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            About Our Palm Desert Office
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our Palm Desert location offers state-of-the-art orthodontic care in a comfortable, 
            modern setting. We're equipped with the latest technology to provide you with the 
            best possible treatment experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're looking for traditional braces or modern clear aligners, our team 
            is here to help you achieve your perfect smile.
          </p>
        </div>
      </section> */}

      {/* <section id="services" className="py-16 bg-palm-desert-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Traditional Braces"
              description="Time-tested metal braces that effectively correct even complex orthodontic issues."
              location="palm-desert"
            />
            <ServiceCard 
              title="Clear Aligners"
              description="Nearly invisible aligners that straighten your teeth without the look of traditional braces."
              location="palm-desert"
            />
            <ServiceCard 
              title="Retainers"
              description="Custom retainers to maintain your beautiful new smile after treatment."
              location="palm-desert"
            />
          </div>
        </div>
      </section> */}
      <Service location="palm-desert" />

      <Insurance location="palm-desert" />

      <Location location="palm-desert" />

      <Contact location="palm-desert" />

      {/* <section id="contact" className="py-16 bg-palm-desert-50">
        <div className="max-w-6xl mx-auto px-6">
          <ContactForm location="palm-desert" />
        </div>
      </section> */}

      <Footer 
        locationName="Palm Desert Orthodontics"
        location="palm-desert"
      />
    </div>
  )
}