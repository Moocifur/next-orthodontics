import "./globals.css";
import Script from 'next/script';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  title: "Orthodontics - Palm Desert & Loma Linda",
  description: "Professional orthodontic care in Palm Desert and Loma Linda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&family=Shadows+Into+Light+Two&family=Spicy+Rice&display=swap" 
          rel="stylesheet" 
        />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Quicksand', sans-serif" }}>
        {children}
        
        {/* JotForm Feedback Script */}
        <Script 
          src="https://form.jotform.com/static/feedback2.js" 
          strategy="lazyOnload"
        />
        
        {/* JotForm Embed Handler */}
        <Script 
          src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
          strategy="lazyOnload"
        />
        
        {/* JotForm Configuration Scripts */}
        <Script id="jotform-appointment" strategy="lazyOnload">
          {`
            if (typeof JotformFeedback !== 'undefined') {
              window.JFL_201747138890158 = new JotformFeedback({
                formId: '201747138890158',
                base: 'https://form.jotform.com/',
                windowTitle: 'Appointment Request Form',
                backgroundColor: '#50e3c2',
                fontColor: '#FFFFFF',
                type: '1',
                height: 500,
                width: 700,
                openOnLoad: false
              });
            }
          `}
        </Script>
        
        <Script id="jotform-payment" strategy="lazyOnload">
          {`
            if (typeof JotformFeedback !== 'undefined') {
              window.JFL_202316251833144 = new JotformFeedback({
                formId: '202316251833144',
                base: 'https://form.jotform.com/',
                windowTitle: 'Lane Orthodontics Payment Form',
                backgroundColor: '#4a90e2',
                fontColor: '#FFFFFF',
                type: '1',
                height: 500,
                width: 700,
                openOnLoad: false
              });
            }
          `}
        </Script>
        
        <Script id="jotform-paperwork" strategy="lazyOnload">
          {`
            if (typeof JotformFeedback !== 'undefined') {
              window.JFL_201746998764070 = new JotformFeedback({
                formId: '201746998764070',
                base: 'https://form.jotform.com/',
                windowTitle: 'New Patient Paperwork',
                backgroundColor: '#4a90e2',
                fontColor: '#FFFFFF',
                type: '2',
                height: 500,
                width: 700,
                openOnLoad: false
              });
            }
          `}
        </Script>
        
        {/* Rhinogram Widget */}
        <div id="rhinogram-container"></div>
        <Script 
          id="rhinogram-embed" 
          src="https://app.rhinogram.com/widget/embed.js?id=10ef415e-070c-4710-b08a-e0e26ab542e3"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}