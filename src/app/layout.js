import "./globals.css";

export const metadata = {
  title: "Orthodontics - Palm Desert & Loma Linda",
  description: "Professional orthodontic care in Palm Desert and Loma Linda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}