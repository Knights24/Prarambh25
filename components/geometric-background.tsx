"use client"

import { useEffect, useRef } from "react"

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Animation variables
    let animationFrameId: number
    const time = { current: 0 }

    // Atom structure parameters
    const atoms: any[] = []
    const atomCount = 3 // Number of atom structures

    // Initialize atoms
    for (let i = 0; i < atomCount; i++) {
      atoms.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 100 + Math.random() * 150, // Nucleus size
        orbits: [],
        vx: (Math.random() - 0.5) * 0.02, // Further reduced velocity for slower movement
        vy: (Math.random() - 0.5) * 0.02, // Further reduced velocity for slower movement
      })

      // Create 3-5 orbits for each atom
      const orbitCount = 3 + Math.floor(Math.random() * 3)
      for (let j = 0; j < orbitCount; j++) {
        atoms[i].orbits.push({
          radius: (j + 1) * (50 + Math.random() * 30), // Orbit radius
          angle: Math.random() * Math.PI * 2, // Starting angle
          speed: 0.0002, // Consistent slower rotation speed for all orbits
          tilt: Math.random() * Math.PI, // Tilt angle
          rotationAxis: [Math.random(), Math.random(), Math.random()], // 3D rotation axis
          electrons: [],
        })

        // Add 1-3 electrons to each orbit
        const electronCount = 1 + Math.floor(Math.random() * 3)
        for (let k = 0; k < electronCount; k++) {
          atoms[i].orbits[j].electrons.push({
            angle: ((Math.PI * 2) / electronCount) * k, // Distribute evenly
            size: 3 + Math.random() * 4, // Electron size
          })
        }
      }
    }

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reposition atoms when canvas is resized
      atoms.forEach((atom) => {
        atom.x = Math.random() * canvas.width
        atom.y = Math.random() * canvas.height
      })

      drawBackground()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Draw the geometric background
    function drawBackground() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background - deeper tech colors
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0A0E29") // Deeper blue
      gradient.addColorStop(0.4, "#141E3C") // Dark blue-purple
      gradient.addColorStop(0.7, "#1F1638") // Deep purple
      gradient.addColorStop(1, "#080818") // Very dark blue-black
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw digital grid - more futuristic but calmer (reduced opacity)
      ctx.globalAlpha = 0.03 // Reduced opacity for calmer look
      ctx.strokeStyle = "#4A88FF"
      ctx.lineWidth = 0.5

      // Larger grid size for a more spacious, futuristic look
      const gridSize = 120 // Increased grid size for calmer look
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw atom structures
      for (let i = 0; i < atoms.length; i++) {
        const atom = atoms[i]

        // Move atom
        atom.x += atom.vx
        atom.y += atom.vy

        // Bounce off edges
        if (atom.x < 0 || atom.x > canvas.width) atom.vx *= -1
        if (atom.y < 0 || atom.y > canvas.height) atom.vy *= -1

        // Draw nucleus
        const nucleusGradient = ctx.createRadialGradient(atom.x, atom.y, 0, atom.x, atom.y, atom.size / 2)
        nucleusGradient.addColorStop(0, "rgba(168, 85, 247, 0.6)") // Reduced opacity for calmer look
        nucleusGradient.addColorStop(0.5, "rgba(168, 85, 247, 0.2)") // Reduced opacity for calmer look
        nucleusGradient.addColorStop(1, "rgba(168, 85, 247, 0)")

        ctx.globalAlpha = 0.15 // Reduced opacity for calmer look
        ctx.fillStyle = nucleusGradient
        ctx.beginPath()
        ctx.arc(atom.x, atom.y, atom.size / 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.globalAlpha = 0.4 // Reduced opacity for calmer look
        ctx.fillStyle = "rgba(168, 85, 247, 0.6)" // Reduced opacity for calmer look
        ctx.beginPath()
        ctx.arc(atom.x, atom.y, atom.size / 6, 0, Math.PI * 2)
        ctx.fill()

        // Draw orbits and electrons
        for (let j = 0; j < atom.orbits.length; j++) {
          const orbit = atom.orbits[j]

          // Update orbit angle
          orbit.angle += orbit.speed

          // Draw orbit path (elliptical)
          ctx.globalAlpha = 0.07 // Reduced opacity for calmer look
          ctx.strokeStyle = "#00FFFF"
          ctx.lineWidth = 0.8 // Thinner lines for calmer look

          ctx.beginPath()
          for (let a = 0; a < Math.PI * 2; a += 0.1) {
            const x = atom.x + Math.cos(a) * orbit.radius * Math.cos(orbit.tilt)
            const y = atom.y + Math.sin(a) * orbit.radius

            if (a === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.closePath()
          ctx.stroke()

          // Draw electrons
          for (let k = 0; k < orbit.electrons.length; k++) {
            const electronData = orbit.electrons[k]

            // Update electron position
            electronData.angle += orbit.speed * 2

            // Calculate 3D position
            const x = atom.x + Math.cos(electronData.angle + orbit.angle) * orbit.radius * Math.cos(orbit.tilt)
            const y = atom.y + Math.sin(electronData.angle + orbit.angle) * orbit.radius

            // Draw electron
            const electronGlow = ctx.createRadialGradient(x, y, 0, x, y, electronData.size * 2)
            electronGlow.addColorStop(0, "rgba(0, 255, 255, 0.6)") // Reduced opacity for calmer look
            electronGlow.addColorStop(0.5, "rgba(0, 255, 255, 0.2)") // Reduced opacity for calmer look
            electronGlow.addColorStop(1, "rgba(0, 255, 255, 0)")

            ctx.globalAlpha = 0.6 // Reduced opacity for calmer look
            ctx.fillStyle = electronGlow
            ctx.beginPath()
            ctx.arc(x, y, electronData.size, 0, Math.PI * 2)
            ctx.fill()

            // Draw electron core
            ctx.globalAlpha = 0.8 // Reduced opacity for calmer look
            ctx.fillStyle = "#00FFFF"
            ctx.beginPath()
            ctx.arc(x, y, electronData.size / 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Add connecting lines between atoms - with reduced opacity for calmer look
      if (atoms.length > 1) {
        ctx.globalAlpha = 0.03 // Reduced opacity for calmer look
        ctx.strokeStyle = "#8A2BE2"
        ctx.lineWidth = 0.3 // Thinner lines for calmer look

        for (let i = 0; i < atoms.length; i++) {
          for (let j = i + 1; j < atoms.length; j++) {
            const distance = Math.sqrt(Math.pow(atoms[i].x - atoms[j].x, 2) + Math.pow(atoms[i].y - atoms[j].y, 2))

            if (distance < 500) {
              ctx.beginPath()
              ctx.moveTo(atoms[i].x, atoms[i].y)
              ctx.lineTo(atoms[j].x, atoms[j].y)
              ctx.stroke()
            }
          }
        }
      }

      ctx.globalAlpha = 1.0

      // Increment time for animation
      time.current += 0.05 // Further reduced time increment for slower speed
      animationFrameId = requestAnimationFrame(drawBackground)
    }

    drawBackground()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

