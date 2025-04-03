"use client"

import { motion } from "framer-motion"

export default function DesignerCredits() {
  return (
    <motion.div
      className="text-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.div
        className="bg-black/60 backdrop-blur-md border border-purple-500/50 rounded-lg p-3 animated-border inline-block"
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
        <div className="text-center">
          <h3 className="text-xs text-gray-400 font-rajdhani mb-1">DESIGNED BY</h3>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-audiowide text-sm">
            Dwij Pancholi • Vivek Vishwakarma • Harshil Sakhareliya
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

