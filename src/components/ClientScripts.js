'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function ClientScripts() {
  const [rhinogramLoaded, setRhinogramLoaded] = useState(false)

  useEffect(() => {
    // Simple modal lightbox implementation - no JotForm scripts needed!
    const createLightbox = (formUrl, title) => {
      // Remove any existing lightbox first
      const existing = document.querySelector('.custom-lightbox-overlay')
      if (existing) existing.remove()

      // Create overlay
      const overlay = document.createElement('div')
      overlay.className = 'custom-lightbox-overlay'
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.2s ease-in;
      `

      // Create modal container
      const modal = document.createElement('div')
      modal.style.cssText = `
        position: relative;
        width: 90%;
        max-width: 700px;
        height: 80%;
        max-height: 600px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        animation: slideIn 0.3s ease-out;
      `

      // Create header
      const header = document.createElement('div')
      header.style.cssText = `
        padding: 20px;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f9fafb;
        border-radius: 12px 12px 0 0;
      `

      const titleEl = document.createElement('h3')
      titleEl.textContent = title
      titleEl.style.cssText = `
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
      `

      const closeBtn = document.createElement('button')
      closeBtn.innerHTML = '✕'
      closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        color: #6b7280;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: all 0.2s;
      `
      closeBtn.onmouseover = () => {
        closeBtn.style.background = '#e5e7eb'
        closeBtn.style.color = '#1f2937'
      }
      closeBtn.onmouseout = () => {
        closeBtn.style.background = 'none'
        closeBtn.style.color = '#6b7280'
      }

      header.appendChild(titleEl)
      header.appendChild(closeBtn)

      // Create iframe container
      const iframeContainer = document.createElement('div')
      iframeContainer.style.cssText = `
        flex: 1;
        overflow: hidden;
        border-radius: 0 0 12px 12px;
      `

      // Create iframe
      const iframe = document.createElement('iframe')
      iframe.src = formUrl
      iframe.style.cssText = `
        width: 100%;
        height: 100%;
        border: none;
      `
      iframe.setAttribute('allowfullscreen', '')
      iframe.setAttribute('allow', 'geolocation; microphone; camera')

      iframeContainer.appendChild(iframe)
      modal.appendChild(header)
      modal.appendChild(iframeContainer)
      overlay.appendChild(modal)

      // Close handlers
      const close = () => {
        overlay.style.animation = 'fadeOut 0.2s ease-out'
        setTimeout(() => overlay.remove(), 200)
      }

      closeBtn.onclick = close
      overlay.onclick = (e) => {
        if (e.target === overlay) close()
      }

      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          close()
          document.removeEventListener('keydown', escHandler)
        }
      })

      // Add animations
      const style = document.createElement('style')
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `
      if (!document.querySelector('#lightbox-animations')) {
        style.id = 'lightbox-animations'
        document.head.appendChild(style)
      }

      document.body.appendChild(overlay)
    }

    // Global functions to open forms
    window.openAppointmentForm = () => {
      console.log('📝 Opening appointment form...')
      createLightbox('https://form.jotform.com/201747138890158', 'Appointment Request')
    }

    window.openPaymentForm = () => {
      console.log('💳 Opening payment form...')
      createLightbox('https://form.jotform.com/202316251833144', 'Make a Payment')
    }

    window.openPaperworkForm = () => {
      console.log('📄 Opening paperwork form...')
      createLightbox('https://form.jotform.com/201746998764070', 'New Patient Paperwork')
    }

    console.log('✅ Form functions ready')
  }, [])

  const handleRhinogramLoad = () => {
    console.log('✅ Rhinogram script loaded!')
    setRhinogramLoaded(true)
    
    setTimeout(() => {
      const container = document.getElementById('rhinogram-container')
      if (container && container.children.length > 0) {
        console.log('✅ Rhinogram widget initialized')
      } else {
        console.warn('⚠️ Rhinogram widget may not have initialized')
      }
    }, 1500)
  }

  return (
    <>
      {/* Rhinogram Widget */}
      <div id="rhinogram-container"></div>
      <Script 
        id="rhinogram-embed" 
        src="https://app.rhinogram.com/widget/embed.js?id=10ef415e-070c-4710-b08a-e0e26ab542e3"
        strategy="afterInteractive"
        onLoad={handleRhinogramLoad}
        onError={(e) => console.error('❌ Rhinogram error:', e)}
      />

      {/* Debug Panel */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '12px',
          zIndex: 9999,
          maxWidth: '280px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            🔧 Scripts Status
          </div>
          <div>Custom Lightbox: ✅ Ready</div>
          <div>Rhinogram: {rhinogramLoaded ? '✅' : '⏳'}</div>
          
          <div style={{ 
            paddingTop: '10px', 
            borderTop: '1px solid rgba(255,255,255,0.2)',
            fontSize: '11px',
            opacity: 0.8,
            marginBottom: '5px',
            marginTop: '10px'
          }}>
            Test forms:
          </div>
          <button 
            onClick={() => window.openAppointmentForm?.()}
            style={{
              width: '100%',
              padding: '8px',
              background: '#22c55e',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              marginBottom: '5px',
              fontSize: '11px'
            }}
          >
            📝 Test Appointment
          </button>
          <button 
            onClick={() => window.openPaymentForm?.()}
            style={{
              width: '100%',
              padding: '8px',
              background: '#3b82f6',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              marginBottom: '5px',
              fontSize: '11px'
            }}
          >
            💳 Test Payment
          </button>
          <button 
            onClick={() => window.openPaperworkForm?.()}
            style={{
              width: '100%',
              padding: '8px',
              background: '#f59e0b',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '11px'
            }}
          >
            📄 Test Paperwork
          </button>
        </div>
      )}
    </>
  )
}