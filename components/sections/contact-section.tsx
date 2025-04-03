"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Calendar } from "lucide-react"
import DesignerCredits from "@/components/designer-credits"

interface ContactSectionProps {
  id: string
}

export default function ContactSection({ id }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron text-glow-intense">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about Prarambh Tech Fest? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-900/50 p-4 rounded-full mb-4 animate-glow">
                  <Mail className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">Email</h3>
                <p className="text-gray-300">iste@sal.edu.in</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-900/50 p-4 rounded-full mb-4 animate-glow">
                  <MapPin className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">Location</h3>
                <p className="text-gray-300">
                  SAL Education
                  <br />
                  Opp. Science City, Sola-Bhadaj Road
                  <br />
                  Ahmedabad, Gujarat-380060
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-900/50 p-4 rounded-full mb-4 animate-glow">
                  <Phone className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">Phone</h3>
                <p className="text-gray-300 text-sm">
                  <span className="text-purple-400 font-medium block mb-2">Student Coordinators:</span>
                  Ronak Bhatia: +91 96877 70700
                  <br />
                  Dhyey Barot: +91 96246 74405
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-900/50 p-4 rounded-full mb-4 animate-glow">
                  <Calendar className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-orbitron">Event Date</h3>
                <p className="text-gray-300 text-xl font-orbitron text-glow-blue">
                  23<sup>rd</sup> April, 2025
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 font-orbitron text-glow-blue">CONNECTION GLORY FUTURE</h3>
          <p className="text-xl text-gray-300 font-rajdhani">
            Join us for the 19<sup>th</sup> ISTE Gujarat State Annual Students Convention
          </p>
        </motion.div>
        <DesignerCredits />
      </div>
    </section>
  )
}

