"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { School, Users, Award } from "lucide-react"

interface AboutSectionProps {
  id: string
}

export default function AboutSection({ id }: AboutSectionProps) {
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
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron text-glow">About</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn more about Prarambh Tech Fest and the organizing institutions behind this exciting event.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <School className="h-8 w-8 text-purple-400" />
                  <h3 className="text-2xl font-semibold text-white font-orbitron">About SAL Education</h3>
                </div>

                <p className="text-gray-300 mb-4">
                  SAL Group of Institutions was established in 2009 under the Adarsh Foundation and is promoted by Dr.
                  Rajendrabhai Shah. It consists of 10 institutes:
                </p>

                <ul className="space-y-2 text-gray-300 mb-6 list-disc pl-5">
                  <li>SAL Institute of Technology & Engineering Research</li>
                  <li>SAL College of Engineering</li>
                  <li>SAL Engineering & Technical Institute</li>
                  <li>SAL Institute of Diploma Studies</li>
                  <li>SAL College of Pharmacy</li>
                  <li>SAL Institute of Pharmacy</li>
                  <li>SAL Institute of Management</li>
                  <li>SAL School of Architecture</li>
                  <li>SAL School of Interior Design</li>
                  <li>SAL Institute of Medical Science</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-purple-400" />
                  <h3 className="text-2xl font-semibold text-white font-orbitron">About ISTE</h3>
                </div>

                <p className="text-gray-300 mb-4">
                  ISTE (Indian Society for Technical Education) is a national, professional, non-profit-making society
                  registered under the Societies Registration Act of 1860. The key objective of ISTE is to develop
                  high-quality professional engineers and technicians.
                </p>

                <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">ISTE Gujarat Section</h4>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>8,500+ Life Members</li>
                  <li>50,000+ Student Members</li>
                  <li>153 Institutional Members (97 Degree & 51 Diploma Institutes)</li>
                  <li>70 ISTE Chapters & many student chapters</li>
                  <li>Headquartered at The Maharaja Sayajirao University of Baroda, Vadodara</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-semibold text-white font-orbitron">Event Leadership</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">Chief Patron</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li>Dr. Rajendrabhai Shah – CMD, SAL Education</li>
                    <li>Dr. Pratapsinh K. Desai – President, ISTE</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">Patron & Program Convener</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li>Dr. Rupesh Vasani – Director, SAL Education</li>
                    <li>Mrs. Nilimaben Shah – General Manager, SAL Education</li>
                    <li>Dr. Sachin Parikh – Hon. Chairman, ISTE Gujarat</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">Institute Coordinators</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li>Prof. Vijay Jadeja (HOD-CE/CSE/IT, SCE)</li>
                    <li>Prof. Madhuri Parekh (HOD-CE/CSE, SETI)</li>
                    <li>Prof. Sachi Bhavsar (HOD-IT/ICT, SETI)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">Advisory Committee</h4>
                  <ul className="space-y-2 text-gray-300 mb-6 text-sm">
                    <li>Dr. Bhasker V. Bhatt (Hon. Secretary Cum Treasurer, ISTE Gujarat)</li>
                    <li>Dr. Rakesh D. Patel (Member, National Executive Council, ISTE)</li>
                    <li>Dr. Kirit M. Makwana (Member, National Executive Council, ISTE)</li>
                    <li>Prof. Kalpesh M. Bhavsar (Member, National Executive Council, ISTE)</li>
                    <li>Dr. Sanjaykumar K. Dave (Member, National Executive Council, ISTE)</li>
                    <li>Dr. Jayesh A. Shah (Member, National Executive Council, ISTE)</li>
                    <li>Prof. Hardik V. Bhatt (Member, Section Management Committee, ISTE Gujarat)</li>
                    <li>Er. Vishal Bhavsar (Member, Section Management Committee, ISTE Gujarat)</li>
                    <li>Prof. Alefiya L. Kachwala (Member, Section Management Committee, ISTE Gujarat)</li>
                    <li>Dr. Asutosh K. Patel (Member, Section Management Committee, ISTE Gujarat)</li>
                    <li>Dr. Shilpa Kathad (Member, Section Management Committee, ISTE Gujarat)</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">
                    Organizing Committee Members
                  </h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li>Prof. Yogesh Vaghela (Asst. Prof. IT, SETI)</li>
                    <li>Prof. Ravi Patel (Asst. Prof. IT, SETI)</li>
                    <li>Prof. Parth Wadhwa (Asst. Prof. CE, SETI)</li>
                    <li>Prof. Tejas Patel (Asst. Prof. CE, SETI)</li>
                    <li>Prof. Krupa Patel (Asst. Prof. CE, SETI)</li>
                    <li>Prof. Shivani Doshi (Asst. Prof. IT, SETI)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

