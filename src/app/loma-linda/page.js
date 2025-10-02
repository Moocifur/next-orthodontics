import HeaderWithNav from '@/components/HeaderWithNav'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function LomaLinda() {
  return (
    <div className="min-h-screen bg-loma-linda-50">
      <HeaderWithNav   
        locationName="Wire Wagon - Loma Linda"
        location="loma-linda"
      />

      <Hero 
        locationName="Wire Wagon - Loma Linda"
        subtitle="Mobile RV Orthodontics - Bringing Care to You!"
        location="loma-linda"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            About the Wire Wagon
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Wire Wagon is our innovative mobile orthodontic unit serving the Loma Linda area. 
            This state-of-the-art RV brings professional orthodontic care directly to convenient 
            locations throughout the community.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Despite being mobile, the Wire Wagon is equipped with all the same advanced technology 
            and treatment options as our traditional office, ensuring you receive the highest 
            quality care wherever we meet you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-loma-linda-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Traditional Braces"
              description="Full orthodontic treatment with metal braces, right from our mobile unit."
              location="loma-linda"
            />
            <ServiceCard 
              title="Clear Aligners"
              description="Modern invisible aligners fitted and monitored at convenient mobile locations."
              location="loma-linda"
            />
            <ServiceCard 
              title="Mobile Convenience"
              description="We come to you! Check our schedule for Wire Wagon locations and times."
              location="loma-linda"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Find the Wire Wagon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-loma-linda-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-loma-linda-600 mb-3">Service Area</h4>
              <p className="text-gray-700">
                Loma Linda<br />
                Redlands<br />
                San Bernardino<br />
                Riverside County
              </p>
            </div>
            <div className="bg-loma-linda-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-loma-linda-600 mb-3">Schedule</h4>
              <p className="text-gray-700">
                Monday - Thursday: Various locations<br />
                Friday: Admin day<br />
                Check our schedule for specific locations and times
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-loma-linda-50">
        <div className="max-w-6xl mx-auto px-6">
          <ContactForm location="loma-linda" />
        </div>
      </section>

      <Footer 
        locationName="Wire Wagon Orthodontics"
        location="loma-linda"
      />
    </div>
  )
}