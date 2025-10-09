import "./globals.css";

export const metadata = {
  title: "Orthodontics - Palm Desert & Loma Linda",
  description: "Professional orthodontic care in Palm Desert and Loma Linda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}