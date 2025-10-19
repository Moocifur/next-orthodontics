'use client'

/**
 * Reusable JotForm Button Component
 * 
 * Usage:
 * <JotFormButton formType="appointment">Book Appointment</JotFormButton>
 * <JotFormButton formType="payment">Make Payment</JotFormButton>
 * <JotFormButton formType="paperwork">New Patient Forms</JotFormButton>
 */

export default function JotFormButton({ 
  formType, 
  children, 
  className = '',
  style = {}
}) {
  const handleClick = () => {
    if (typeof window === 'undefined') return

    switch (formType) {
      case 'appointment':
        if (window.openAppointmentForm) {
          window.openAppointmentForm()
        }
        break
      case 'payment':
        if (window.openPaymentForm) {
          window.openPaymentForm()
        }
        break
      case 'paperwork':
        if (window.openPaperworkForm) {
          window.openPaperworkForm()
        }
        break
      default:
        console.warn(`Unknown form type: ${formType}`)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={className}
      style={style}
      type="button"
    >
      {children}
    </button>
  )
}