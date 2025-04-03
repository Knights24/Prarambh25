"use client"

import type React from "react"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import HomeSection from "@/components/sections/home-section"
import EventsSection from "@/components/sections/events-section"
import RegistrationSection from "@/components/sections/registration-section"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import GeometricBackground from "@/components/geometric-background"
import AtomClickEffect from "@/components/atom-click-effect"
import ViewerCount from "@/components/viewer-count"

export default function Home() {
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null)

  // Handle global click to show atom effect
  const handleGlobalClick = (e: React.MouseEvent) => {
    // Don't trigger if clicking on interactive elements
    if (
      e.target instanceof HTMLButtonElement ||
      e.target instanceof HTMLAnchorElement ||
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest("a") ||
      (e.target as HTMLElement).closest("input") ||
      (e.target as HTMLElement).closest("label")
    ) {
      return
    }

    // Set click position for atom effect
    setClickPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="min-h-screen w-full text-white relative" onClick={handleGlobalClick}>
      {/* Geometric background */}
      <GeometricBackground />

      {/* Header */}
      <Header />

      {/* Atom click effect */}
      <AnimatePresence>
        {clickPosition && (
          <AtomClickEffect x={clickPosition.x} y={clickPosition.y} onAnimationComplete={() => setClickPosition(null)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="relative z-10">
        <HomeSection id="home" />
        <EventsSection id="events" />
        <RegistrationSection id="registration" />
        <AboutSection id="about" />
        <ContactSection id="contact" />
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-6 border-t border-purple-900/30 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Prarambh Tech Fest | Organized by ISTE Student Chapter SAL</p>
          <p className="text-gray-500 mt-2">
            Venue: SAL Education, Opp. Science City, Sola-Bhadaj Road, Ahmedabad, Gujarat-380060
          </p>
        </div>
      </footer>

      {/* Viewer count */}
      <ViewerCount />
    </div>
  )
}

