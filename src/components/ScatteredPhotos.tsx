import React from 'react'
import { motion } from 'framer-motion'
// Abstract gradient blobs for aesthetic background

const BLOB_COLORS = [
  'from-teal-500 via-cyan-500 to-emerald-500',
  'from-cyan-500 via-teal-500 to-emerald-400',
  'from-emerald-500 via-teal-500 to-cyan-400',
  'from-teal-400 via-emerald-500 to-cyan-500',
  'from-cyan-400 via-emerald-400 to-teal-500',
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
