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
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{
            x: trail.x - 4,
            y: trail.y - 4,
            opacity: 0.8,
            scale: 1
          }}
          animate={{
            opacity: 0,
            scale: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          style={{
            opacity: (index + 1) / trails.length
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail
