import "./globals.css";
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
        
        {/* Client-side scripts component - handles all JotForm and Rhinogram */}
        <ClientScripts />
      </body>
    </html>
  );
}