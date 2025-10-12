import React from 'react'
import { motion } from 'framer-motion'
import { photos } from '../data/photos'

// Horizontal collage ribbon with subtle blur and rounded images
const PhotoBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  const items = photos.slice(1) // skip hero first if available
  if (!items.length) return null

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex gap-4 pr-4"
      >
        {[...items, ...items].map((src, i) => (
          <div key={i} className="relative w-56 h-36 shrink-0 rounded-2xl overflow-hidden glass">
            <img src={src} alt="photo" className="w-full h-full object-cover" style={{ filter: 'brightness(1.05) saturate(1.05) blur(0.2px)' }} />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default PhotoBanner
