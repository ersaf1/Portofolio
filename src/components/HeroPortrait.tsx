import React from 'react'
import { motion } from 'framer-motion'
// Simple placeholder portrait (no photo logic)

const HeroPortrait: React.FC<{ size?: number; className?: string }> = ({ size = 260, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[40%] bg-gradient-to-tr from-teal-500/30 via-cyan-500/20 to-emerald-500/30 blur-2xl" />
      {/* Placeholder blob */}
      <div className="relative z-10 w-full h-full rounded-[40%] bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-white text-6xl font-bold">
        <span>👤</span>
      </div>
      {/* Soft shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-black/20 blur-xl" />
    </motion.div>
  )
}

export default HeroPortrait
