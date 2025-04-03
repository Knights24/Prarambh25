"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, FileText, Gamepad2, Palette, Clock, Trophy, Music } from "lucide-react"

interface EventsSectionProps {
  id: string
}

const technicalEvents = [
  {
    id: "code-crackers",
    title: "CODE CRACKERS",
    description: "Solve mind-bending coding challenges!",
    rules: [
      "MCQ exam first, then coding tasks in rounds using C/Python",
      "Round-1: 20-minute MCQ test",
      "Round-2: 20-minute coding tasks",
      "Round-3: Up to 50 minutes to solve a tricky code",
      "Judging: Based on output, timing, and code quality",
    ],
    icon: <Code className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "innovation-ignite",
    title: "INNOVATION IGNITE",
    description: "Showcase your innovative hardware & software projects",
    rules: [
      "Group project (2–4 students) on IoT/hardware innovation with a working model",
      "Judging: Evaluated on model preparation, presentation, functionality, and real-world impact",
    ],
    icon: <Lightbulb className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "poster-presentation",
    title: "POSTER PRESENTATION",
    description: "Present ideas with creativity and impact!",
    rules: [
      "Create a Flex Banner poster (56″ × 30″) following a given sample",
      "Round-1: Present your project idea to visitors and judges",
      "Judging: Based on layout, approach, presentation, and impact",
    ],
    icon: <FileText className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "robo-soccer",
    title: "ROBO SOCCER",
    description: "Score goals with your robot in an intense showdown!",
    rules: [
      "Individual event where robots (fixed specs) play soccer",
      "Match Rules: 3-minute match (two halves with a mid-game interval), with penalties for technical issues",
      "Judging: Based on performance during the match and adherence to technical rules",
    ],
    icon: <Gamepad2 className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "logo-thon",
    title: "LOGO-THON",
    description: "Design creative logos under time pressure!",
    rules: [
      "1-hour logo design contest using provided laptops and design tools",
      "Create professional logos based on given themes",
      "Judging: Based on creativity, relevance, aesthetics, and presentation",
    ],
    icon: <Palette className="h-6 w-6 text-purple-400" />,
  },
]

const nonTechnicalEvents = [
  {
    id: "valorant",
    title: "LAN-GAMING (Valorant)",
    description: "Compete in an intense LAN gaming showdown!",
    rules: [
      "Group tournament with 5-player teams using an in-game economy and unique agent selections",
      "Round-1: 90-minute matches with 12 teams; 6 advance",
      "Round-2: 45-minute matches among 6 teams; 3 advance",
      "Round-3: Final round between the best 2 teams",
      "Judging: Based on team objectives and individual performance metrics",
    ],
    icon: <Gamepad2 className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "minute-madness",
    title: "MINUTE MADNESS",
    description: "Quick challenges, 60 seconds to win!",
    rules: [
      "Series of games each with a strict 1-minute time limit",
      "Round-1: Each round produces a winner awarded a prize",
      "Judging: Adherence to time limits and game rules",
    ],
    icon: <Clock className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "drawing-dash",
    title: "DRAWING DASH",
    description: "Sketching meets creative competition!",
    rules: [
      "Individual drawing event using only oil pastels on an A2 sheet (provided by college)",
      "Rules: Complete the drawing in 1.5 hours while staying on theme",
      "Judging: Based on neatness, finishing quality, and theme relevance",
    ],
    icon: <Palette className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "straw-fusion",
    title: "STRAW FUSION",
    description: "Build the tallest and strongest straw structure",
    rules: [
      "Group event (2 per team) to construct a structure using drinking straws within 90 minutes",
      "Round-1: One object must be built in the allotted time",
      "Judging: Based on creativity, efficiency, and sustainability of the structure",
    ],
    icon: <Trophy className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "bollywood-frenzy",
    title: "BOLLYWOOD FRENZY",
    description: "Test your filmy knowledge!",
    rules: [
      "Individual quiz/game event on Bollywood films, actors, and songs with strict no-help rules",
      "Round-1: Trivia on classic Bollywood content",
      "Round-2: Audio clip recognition",
      "Round-3: Video clip recognition",
      "Judging: Based on depth of Bollywood knowledge and speed of response",
    ],
    icon: <Music className="h-6 w-6 text-purple-400" />,
  },
]

export default function EventsSection({ id }: EventsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("technical")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

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
          <h2 className="text-4xl font-bold text-white mb-4 font-audiowide text-glow-intense heading-futuristic">
            Events
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto font-rajdhani">
            Explore our exciting lineup of technical and non-technical events designed to challenge your skills and
            creativity.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-purple-900/30 rounded-full">
              <TabsTrigger
                value="technical"
                className="data-[state=active]:bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-800/50 font-exo2"
              >
                Technical Events
              </TabsTrigger>
              <TabsTrigger
                value="non-technical"
                className="data-[state=active]:bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-800/50 font-exo2"
              >
                Non-Technical Events
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView && activeTab === "technical" ? "visible" : "hidden"}
            >
              {technicalEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 rounded-3xl overflow-hidden hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] card-futuristic">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {event.icon}
                        <CardTitle className="text-white font-audiowide text-glow">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300 font-rajdhani">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2 font-exo2 text-glow">Rules</h4>
                          <ul className="text-gray-300 text-sm space-y-1 font-rajdhani">
                            {event.rules.map((rule, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="non-technical">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView && activeTab === "non-technical" ? "visible" : "hidden"}
            >
              {nonTechnicalEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 rounded-3xl overflow-hidden hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] card-futuristic">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {event.icon}
                        <CardTitle className="text-white font-audiowide text-glow">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300 font-rajdhani">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2 font-exo2 text-glow">Rules</h4>
                          <ul className="text-gray-300 text-sm space-y-1 font-rajdhani">
                            {event.rules.map((rule, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

