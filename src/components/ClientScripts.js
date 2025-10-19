'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ClientScripts() {
  useEffect(() => {
    // Initialize JotForm instances after scripts load
    const initializeJotForms = () => {
      console.log('Attempting to initialize JotForms...')
      console.log('JotformFeedback available?', typeof window.JotformFeedback !== 'undefined')
      
      if (typeof window !== 'undefined' && window.JotformFeedback) {
        console.log('JotformFeedback is available, creating instances...')
        
        // Appointment Form
        if (!window.JFL_201747138890158) {
          try {
            window.JFL_201747138890158 = new window.JotformFeedback({
              formId: '201747138890158',
              base: 'https://form.jotform.com/',
              windowTitle: 'Appointment Request Form',
              backgroundColor: '#50e3c2',
              fontColor: '#FFFFFF',
              type: '1',
              height: 500,
              width: 700,
              openOnLoad: false
            })
            console.log('Appointment form initialized')
          } catch (e) {
            console.error('Error initializing appointment form:', e)
          }
        }

        // Payment Form
        if (!window.JFL_202316251833144) {
          try {
            window.JFL_202316251833144 = new window.JotformFeedback({
              formId: '202316251833144',
              base: 'https://form.jotform.com/',
              windowTitle: 'Lane Orthodontics Payment Form',
              backgroundColor: '#4a90e2',
              fontColor: '#FFFFFF',
              type: '1',
              height: 500,
              width: 700,
              openOnLoad: false
            })
            console.log('Payment form initialized')
          } catch (e) {
            console.error('Error initializing payment form:', e)
          }
        }

        // New Patient Paperwork
        if (!window.JFL_201746998764070) {
          try {
            window.JFL_201746998764070 = new window.JotformFeedback({
              formId: '201746998764070',
              base: 'https://form.jotform.com/',
              windowTitle: 'New Patient Paperwork',
              backgroundColor: '#4a90e2',
              fontColor: '#FFFFFF',
              type: '2',
              height: 500,
              width: 700,
              openOnLoad: false
            })
            console.log('Paperwork form initialized')
          } catch (e) {
            console.error('Error initializing paperwork form:', e)
          }
        }
      }
    }

    // Add global functions to open forms with better error handling
    window.openAppointmentForm = () => {
      console.log('openAppointmentForm called')
      if (window.JFL_201747138890158) {
        console.log('Opening appointment form...')
        window.JFL_201747138890158.open()
      } else {
        console.error('Appointment form not initialized yet. Trying to initialize now...')
        initializeJotForms()
        setTimeout(() => {
          if (window.JFL_201747138890158) {
            window.JFL_201747138890158.open()
          }
        }, 500)
      }
    }

    window.openPaymentForm = () => {
      console.log('openPaymentForm called')
      if (window.JFL_202316251833144) {
        console.log('Opening payment form...')
        window.JFL_202316251833144.open()
      } else {
        console.error('Payment form not initialized yet. Trying to initialize now...')
        initializeJotForms()
        setTimeout(() => {
          if (window.JFL_202316251833144) {
            window.JFL_202316251833144.open()
          }
        }, 500)
      }
    }

    window.openPaperworkForm = () => {
      console.log('openPaperworkForm called')
      if (window.JFL_201746998764070) {
        console.log('Opening paperwork form...')
        window.JFL_201746998764070.open()
      } else {
        console.error('Paperwork form not initialized yet. Trying to initialize now...')
        initializeJotForms()
        setTimeout(() => {
          if (window.JFL_201746998764070) {
            window.JFL_201746998764070.open()
          }
        }, 500)
      }
    }

    // Try to initialize immediately if scripts already loaded
    initializeJotForms()

    // Also set up multiple retry timers
    const timer1 = setTimeout(initializeJotForms, 1000)
    const timer2 = setTimeout(initializeJotForms, 2000)
    const timer3 = setTimeout(initializeJotForms, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <>
      {/* JotForm Feedback Script */}
      <Script 
        src="https://form.jotform.com/static/feedback2.js" 
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize forms when script loads
          if (window.JotformFeedback) {
            setTimeout(() => {
              const event = new Event('jotformLoaded')
              window.dispatchEvent(event)
            }, 100)
          }
        }}
      />
      
      {/* JotForm Embed Handler */}
      <Script 
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="lazyOnload"
      />
      
      {/* Rhinogram Widget */}
      <div id="rhinogram-container"></div>
      <Script 
        id="rhinogram-embed" 
        src="https://app.rhinogram.com/widget/embed.js?id=10ef415e-070c-4710-b08a-e0e26ab542e3"
        strategy="lazyOnload"
      />
    </>
  )
}