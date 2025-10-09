import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Trail {
  id: number
  x: number
  y: number
}

const CursorTrail: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([])
  const [idCounter, setIdCounter] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        id: idCounter,
        x: e.clientX,
        y: e.clientY
      }
      
      setTrails((prev) => [...prev, newTrail].slice(-5))
      setIdCounter((prev) => prev + 1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [idCounter])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute rounded-full"
          initial={{
            x: trail.x - 6,
            y: trail.y - 6,
            opacity: 0.9,
            scale: 1.2,
            width: 12,
            height: 12,
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(236, 72, 153, 0.6) 50%, rgba(59, 130, 246, 0.4) 100%)",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
          }}
          animate={{
            opacity: 0,
            scale: 0,
            width: 2,
            height: 2
          }}
          transition={{
            duration: 0.8,
            ease: [0.165, 0.84, 0.44, 1]
          }}
          style={{
            opacity: ((index + 1) / trails.length) * 0.8,
            filter: `blur(${(trails.length - index) * 0.3}px)`
          }}
        />
      ))}
      {trails.map((trail, index) => (
        <motion.div
          key={`glow-${trail.id}`}
          className="absolute rounded-full"
          initial={{
            x: trail.x - 10,
            y: trail.y - 10,
            opacity: 0.5,
            scale: 2,
            width: 20,
            height: 20,
            background: "radial-gradient(circle, transparent 0%, rgba(168, 85, 247, 0.2) 70%, transparent 100%)"
          }}
          animate={{
            opacity: 0,
            scale: 0.5,
            width: 40,
            height: 40
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
          style={{
            opacity: ((index + 1) / trails.length) * 0.3
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail
