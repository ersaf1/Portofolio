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

export default function PhotoLightbox({ open, src, title, description, onClose, id }: Props) {
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
          // backdrop blur when lightbox is open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            // Keep compact popup (~40vw). Description area will have solid background.
            className={`w-[40vw] max-w-[95vw] overflow-hidden rounded-2xl shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* On small screens: stack. On md+ screens: image left, description right */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-2/5 w-full flex items-center justify-center md:h-96 h-80">
                <motion.img
                  layoutId={`photo-${id ?? 0}`}
                  src={src}
                  alt={title || 'Foto'}
                  // Smooth 3D zoom animation with perspective and blur effect
                  className={'object-cover h-full w-full'}
                  initial={{ scale: 0.7, opacity: 0, rotateY: -15, filter: 'blur(10px)' }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0, filter: 'blur(0px)' }}
                  exit={{ scale: 0.9, opacity: 0, filter: 'blur(5px)' }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 180, 
                    damping: 22,
                    opacity: { duration: 0.4 },
                    filter: { duration: 0.5 }
                  }}
                  style={{ transformPerspective: 1200 }}
                />
              </div>
              <div className="md:w-3/5 w-full p-4 md:p-6 flex flex-col bg-white dark:bg-slate-900">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title || 'Foto'}</h3>
                    {description ? (
                      <motion.p 
                        className="mt-2 text-sm text-slate-600 dark:text-slate-300" 
                        initial={{ x: -30, opacity: 0, scale: 0.95 }} 
                        animate={{ x: 0, opacity: 1, scale: 1 }} 
                        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {description}
                      </motion.p>
                    ) : (
                      <motion.p 
                        className="mt-2 text-sm text-slate-500" 
                        initial={{ x: -30, opacity: 0, scale: 0.95 }} 
                        animate={{ x: 0, opacity: 1, scale: 1 }} 
                        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        Tidak ada keterangan untuk foto ini.
                      </motion.p>
                    )}
                  </div>
                  <div className="ml-4 flex gap-2">
                    <button
                      onClick={onClose}
                      className="p-2 rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-200"
                      aria-label="Tutup"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Klik di luar atau tekan Esc untuk menutup.</div>
                <div className="mt-auto pt-4">
                  {/* Placeholder for extra controls like download/share */}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
