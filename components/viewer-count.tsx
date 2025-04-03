"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users } from "lucide-react"

export default function ViewerCount() {
  const [count, setCount] = useState(819) // Start with 421 visitors
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Get current count from localStorage or initialize
    const storedCount = localStorage.getItem("viewerCount")
    const initialCount = storedCount ? Number.parseInt(storedCount) : 819 // Default to 421 if not set

    // Increment count
    const newCount = initialCount + 1
    localStorage.setItem("viewerCount", newCount.toString())

    // Set count with a delay for animation
    setTimeout(() => {
      setCount(newCount)
      setIsVisible(true)
    }, 1000)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2 animated-border"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 5px rgba(168, 85, 247, 0.3)",
                "0 0 15px rgba(168, 85, 247, 0.5)",
                "0 0 5px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              },
            }}
          >
            <Users className="h-4 w-4 text-purple-400" />
            <div className="flex items-center">
              <span className="text-white text-xs font-audiowide mr-1 text-glow">VISITORS:</span>
              <div className="relative h-5 overflow-hidden">
                <motion.div
                  key={count}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-400 font-exo2 font-bold text-sm text-glow-cyan"
                >
                  {count.toString().padStart(4, "0")}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

