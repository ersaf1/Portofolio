import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, 
              rgba(168, 85, 247, ${0.6 + Math.random() * 0.4}) 0%, 
              rgba(236, 72, 153, ${0.4 + Math.random() * 0.3}) 50%, 
              rgba(59, 130, 246, ${0.2 + Math.random() * 0.2}) 100%)`
          }}
          animate={{
            y: [0, -40 - Math.random() * 20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2 + Math.random() * 0.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: particle.duration + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
      {/* Additional glowing particles */}
      {particles.slice(0, 8).map((particle) => (
        <motion.div
          key={`glow-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x + 5}%`,
            top: `${particle.y + 10}%`,
            width: particle.size * 3,
            height: particle.size * 3,
            background: `radial-gradient(circle, 
              transparent 0%, 
              rgba(168, 85, 247, 0.1) 30%, 
              rgba(236, 72, 153, 0.05) 60%, 
              transparent 100%)`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground
