"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

interface HomeSectionProps {
  id: string
}

export default function HomeSection({ id }: HomeSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate time until event (April 23, 2025)
  useEffect(() => {
    const eventDate = new Date("April 23, 2025").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 z-10 text-center">
        {/* Organization logos */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <img src="/iste-logo.png" alt="ISTE Logo" className="h-24 w-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-0"
          >
            <img src="/prarambh-logo.png" alt="Prarambh Logo" className="h-auto w-48 md:w-64" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <img src="/sal-logo.png" alt="SAL Education Logo" className="h-24 w-auto" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-2 font-audiowide text-glow-blue">
            19<sup>th</sup> ISTE Gujarat State Annual Students Convention
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-orbitron text-glow-intense">
            The Ultimate Tech Fest Experience
          </p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-rajdhani">
            23<sup>rd</sup> April, 2025 • SAL Education
          </p>
        </motion.div>

        {/* Enhanced Countdown Timer */}
        <motion.div
          className="flex justify-center gap-4 md:gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 rounded-lg blur-md"></div>
                <div className="relative bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-lg">
                  <div className="text-3xl md:text-6xl font-bold font-audiowide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                </div>
              </div>
              <div className="text-sm md:text-base text-gray-400 font-rajdhani mt-2">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="#registration">
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 btn-futuristic font-audiowide"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-400 font-rajdhani">ORGANIZED BY</p>
          <p className="text-white text-xl mt-2 font-orbitron text-glow-intense bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
            ISTE STUDENT CHAPTER SAL
          </p>
        </motion.div>
      </div>
    </section>
  )
}

