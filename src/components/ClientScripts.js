'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ClientScripts() {
  useEffect(() => {
    // Wait for JotForm to be available and initialize
    const checkAndInitialize = () => {
      console.log('Checking for JotformFeedback...', typeof window.JotformFeedback)
      
      if (typeof window !== 'undefined' && typeof window.JotformFeedback !== 'undefined') {
        console.log('JotformFeedback found! Initializing forms...')
        
        try {
          // Create the form instances
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
          console.log('Appointment form created:', window.JFL_201747138890158)

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
          console.log('Payment form created:', window.JFL_202316251833144)

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
          console.log('Paperwork form created:', window.JFL_201746998764070)
          
        } catch (error) {
          console.error('Error creating JotForm instances:', error)
        }
      } else {
        console.log('JotformFeedback not ready yet, will retry...')
      }
    }

    // Global functions to open forms
    window.openAppointmentForm = () => {
      console.log('openAppointmentForm called')
      console.log('Form object:', window.JFL_201747138890158)
      
      if (window.JFL_201747138890158 && typeof window.JFL_201747138890158.open === 'function') {
        console.log('Opening appointment form...')
        window.JFL_201747138890158.open()
      } else {
        console.error('Appointment form not ready. Reinitializing...')
        checkAndInitialize()
        setTimeout(() => {
          if (window.JFL_201747138890158 && typeof window.JFL_201747138890158.open === 'function') {
            window.JFL_201747138890158.open()
          } else {
            console.error('Still cannot open form. Object:', window.JFL_201747138890158)
          }
        }, 1000)
      }
    }

    window.openPaymentForm = () => {
      console.log('openPaymentForm called')
      if (window.JFL_202316251833144 && typeof window.JFL_202316251833144.open === 'function') {
        window.JFL_202316251833144.open()
      } else {
        console.error('Payment form not ready')
        checkAndInitialize()
        setTimeout(() => {
          if (window.JFL_202316251833144) window.JFL_202316251833144.open()
        }, 1000)
      }
    }

    window.openPaperworkForm = () => {
      console.log('openPaperworkForm called')
      if (window.JFL_201746998764070 && typeof window.JFL_201746998764070.open === 'function') {
        window.JFL_201746998764070.open()
      } else {
        console.error('Paperwork form not ready')
        checkAndInitialize()
        setTimeout(() => {
          if (window.JFL_201746998764070) window.JFL_201746998764070.open()
        }, 1000)
      }
    }

    // Try multiple times to initialize
    checkAndInitialize()
    const timer1 = setTimeout(checkAndInitialize, 500)
    const timer2 = setTimeout(checkAndInitialize, 1500)
    const timer3 = setTimeout(checkAndInitialize, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const handleScriptLoad = () => {
    console.log('JotForm script loaded!')
    // Wait a bit for the script to fully initialize
    setTimeout(() => {
      const event = new Event('jotformLoaded')
      window.dispatchEvent(event)
    }, 500)
  }

  return (
    <>
      {/* JotForm Feedback Script */}
      <Script 
        src="https://form.jotform.com/static/feedback2.js" 
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={(e) => console.error('Error loading JotForm script:', e)}
      />
      
      {/* JotForm Embed Handler */}
      <Script 
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => console.log('JotForm embed handler loaded')}
      />
      
      {/* Rhinogram Widget */}
      <div id="rhinogram-container"></div>
      <Script 
        id="rhinogram-embed" 
        src="https://app.rhinogram.com/widget/embed.js?id=10ef415e-070c-4710-b08a-e0e26ab542e3"
        strategy="lazyOnload"
        onLoad={() => console.log('Rhinogram widget loaded')}
      />
    </>
  )
}