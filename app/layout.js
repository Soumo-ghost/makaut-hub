import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // 1. The Basics
  title: 'MAKAUT Info Hub | SGPA Calculator, Notes & PYQs',
  description: 'The all-in-one platform for MAKAUT students. Calculate SGPA to Percentage, download Notes, PYQs, and find suggestive playlists.',
  keywords: ['MAKAUT', 'SGPA Calculator', 'MAKAUT Notes', 'WBUT PYQ', 'B.Tech Notes', 'West Bengal University of Technology'],
  
  // 2. The URL Base (Important for images to work)
  // Replace with your ACTUAL domain later (e.g., https://makautmate.in)
  metadataBase: new URL('https://makaut-hub.vercel.app'),

  // 3. Open Graph (For WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: 'MAKAUT Info Hub - Student Companion',
    description: 'Calculate your percentage instantly and download free study resources.',
    url: 'https://makaut-hub.vercel.app',
    siteName: 'MAKAUT Info Hub',
    images: [
      {
        url: '/og-image.png', // We will add this image next
        width: 1200,
        height: 630,
        alt: 'MAKAUT Info Hub Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 4. Twitter Card (For Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'MAKAUT Info Hub',
    description: 'SGPA Calculator and B.Tech Resources.',
    images: ['/og-image.png'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4 min-h-screen">
          {children}
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          <p>© 2026 Makaut Hub - Built for Students</p>
        </footer>
      </body>
    </html>
  );
}
