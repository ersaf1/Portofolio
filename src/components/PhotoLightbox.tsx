import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  open: boolean
  src: string
  title?: string
  description?: string
  onClose: () => void
  id?: number
}

export default function PhotoLightbox({ open, src, title, onClose, id }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="relative w-auto overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] bg-black/30"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              layoutId={`photo-${id ?? 0}`}
              src={src}
              alt={title || 'Foto'}
              className="block w-auto h-auto max-w-[84vw] md:max-w-[52vw] max-h-[60vh] object-contain"
              style={{ transformPerspective: 1000 }}
              initial={{ scale: 0.86, opacity: 0, y: 12, rotateX: 6, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              exit={{ scale: 0.97, opacity: 0, y: 8, filter: 'blur(4px)' }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            />
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="absolute top-2 right-2 px-3 py-1.5 rounded-md bg-white/85 text-slate-800 hover:bg-white shadow"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
