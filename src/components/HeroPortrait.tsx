import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HeroPortrait: React.FC<{ size?: number; className?: string }> = ({ size = 260, className = '' }) => {
  const [imgError, setImgError] = useState(false)
  // Bump this string if the browser keeps showing an older cached image.
  const profileSrc = `${import.meta.env.BASE_URL}profile.png?v=2026-01-22`

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
      
      {/* Container for image/blob */}
      <div className="relative z-10 w-full h-full rounded-[40%] bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-500 overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <img 
            src={profileSrc} 
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-white text-6xl font-bold">
            <span>👤</span>
          </div>
        )}
      </div>
      
      {/* Soft shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-black/20 blur-xl" />
    </motion.div>
  )
}



export default HeroPortrait
