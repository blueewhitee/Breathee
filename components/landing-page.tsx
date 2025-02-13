"use client"

import { useEffect, useRef } from "react"
import { Headerlanding } from "./landing-page/header"
import { Hero } from "./landing-page/hero"
import { Features } from "./landing-page/features"
import { Benefits } from "./landing-page/benefits"
import { Testimonials } from "./landing-page/testimonials"
import { CallToAction } from "./landing-page/call-to-action"
import { Footer } from "./landing-page/footer"

export function NeonIsometricMaze() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    const draw = () => {
      // Change background opacity to be more transparent
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cellSize = Math.min(canvas.width, canvas.height) / 25 // Smaller cells
      const cols = Math.ceil(canvas.width / cellSize) * 2
      const rows = Math.ceil(canvas.height / cellSize) * 2

      for (let y = -rows; y < rows; y++) {
        for (let x = -cols; x < cols; x++) {
          const px = canvas.width/2 + (x - y) * cellSize/2
          const py = canvas.height/2 + (x + y) * cellSize/4
          const height = cellSize * Math.abs(Math.sin(Math.sqrt(x*x + y*y) * 0.5 + time))

          ctx.beginPath()
          ctx.moveTo(px, py - height)
          ctx.lineTo(px + cellSize/2, py - cellSize/2 - height)
          ctx.lineTo(px + cellSize, py - height)
          ctx.lineTo(px + cellSize, py)
          ctx.lineTo(px + cellSize/2, py + cellSize/2)
          ctx.lineTo(px, py)
          ctx.closePath()

          // Change gradient colors to be more subtle and match white theme
          const gradient = ctx.createLinearGradient(px, py - height, px + cellSize, py)
          gradient.addColorStop(0, "hsla(230, 100%, 80%, 0.3)") // Light blue with opacity
          gradient.addColorStop(1, "hsla(190, 100%, 80%, 0.2)") // Light cyan with opacity
          ctx.fillStyle = gradient
          ctx.fill()
        }
      }

      time += 0.02 // Slower animation
      frameId = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", resize)
    resize()
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 right-0 h-screen max-h-[100vh] w-full 
                 opacity-50 pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)'
      }}
    />
  )
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <NeonIsometricMaze />
        <div className="relative z-10">
          <Headerlanding />
          <Hero />
        </div>
      </div>

      <main className="relative z-10 space-y-20 bg-white">
        <Features />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}