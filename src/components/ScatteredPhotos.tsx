import React from 'react'
import { motion } from 'framer-motion'
// Abstract gradient blobs for aesthetic background

const BLOB_COLORS = [
  'from-purple-500 via-pink-500 to-blue-500',
  'from-pink-500 via-purple-500 to-blue-400',
  'from-blue-500 via-purple-500 to-pink-400',
  'from-purple-400 via-blue-500 to-pink-500',
  'from-pink-400 via-blue-400 to-purple-500',
]

const ScatteredPhotos: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, rotate: 0, y: 0 }}
          animate={{
            opacity: 0.18 + (i % 3) * 0.07,
            rotate: (i * 23) % 60 - 30,
            y: [0, -20 - (i % 4) * 8, 0],
            scale: 0.7 + (i % 4) * 0.13,
          }}
          transition={{ duration: 7 + (i % 5) * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          className="absolute"
          style={{
            top: `${(i * 17 + 10) % 80}%`,
            left: `${(i * 23 + 5) % 90}%`,
            width: `${110 + (i % 4) * 40}px`,
            height: `${140 + (i % 3) * 50}px`,
            zIndex: 0,
          }}
        >
          <div
            className={`w-full h-full rounded-[40%] bg-gradient-to-br ${BLOB_COLORS[i % BLOB_COLORS.length]} blur-2xl`}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ScatteredPhotos
