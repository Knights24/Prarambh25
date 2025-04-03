import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Orbitron, Rajdhani, Audiowide, Exo_2 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Define fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
})

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prarambh - Tech Fest 2025 | ISTE & SAL Education",
  description:
    "19th ISTE Gujarat State Annual Students Convention - The Ultimate Tech Fest Experience on 23rd April, 2025",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${spaceGrotesk.variable} ${orbitron.variable} ${rajdhani.variable} ${audiowide.variable} ${exo2.variable}`}
    >
      <body className="font-space-grotesk">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'