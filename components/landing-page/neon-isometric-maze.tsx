"use client"

import { useEffect, useRef } from "react"

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
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cellSize = Math.min(canvas.width, canvas.height) / 15
      const cols = Math.ceil(canvas.width / cellSize) * 2
      const rows = Math.ceil(canvas.height / (cellSize * 0.5)) * 2
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      for (let y = -rows; y < rows; y++) {
        for (let x = -cols; x < cols; x++) {
          const px = centerX + ((x - y) * cellSize) / 2
          const py = centerY + ((x + y) * cellSize) / 4
          const distance = Math.sqrt(x * x + y * y)
          const maxDistance = Math.sqrt(cols * cols + rows * rows)
          const intensity = 1 - distance / maxDistance
          const height = cellSize * intensity * Math.abs(Math.sin(distance * 0.5 + time))

          ctx.beginPath()
          ctx.moveTo(px, py - height)
          ctx.lineTo(px + cellSize/2, py - cellSize/2 - height)
          ctx.lineTo(px + cellSize, py - height)
          ctx.lineTo(px + cellSize, py)
          ctx.lineTo(px + cellSize/2, py + cellSize/2)
          ctx.lineTo(px, py)
          ctx.closePath()

          const gradient = ctx.createLinearGradient(px, py - height, px + cellSize, py)
          gradient.addColorStop(0, `rgba(0,255,255,${intensity * 0.8})`)
          gradient.addColorStop(1, `rgba(255,0,255,${intensity * 0.8})`)
          ctx.fillStyle = gradient
          ctx.fill()
          ctx.strokeStyle = `rgba(255,255,0,${intensity * 0.5})`
          ctx.stroke()

          // Add neon lines effect
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(px, py - height)
          ctx.moveTo(px + cellSize, py)
          ctx.lineTo(px + cellSize, py - height)
          ctx.moveTo(px + cellSize/2, py + cellSize/2)
          ctx.lineTo(px + cellSize/2, py - cellSize/2 - height)
          ctx.strokeStyle = `rgba(255,255,255,${intensity * 0.3})`
          ctx.stroke()
        }
      }

      time += 0.05
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
      className="fixed top-0 left-0 w-full h-screen -z-10 opacity-70"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
      }}
    />
  )
}