import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <main className="flex-grow">{children}</main>

        <footer className="text-center text-xs text-gray-600 p-4 border-t border-gray-200">
          Copyright © {new Date().getFullYear()} Zero Bomb All rights reserved.
          version 0.0.1 | 10-05-2025
        </footer>
      </body>
    </html>
  )
}
