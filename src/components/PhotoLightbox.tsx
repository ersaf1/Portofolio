import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getMeta, setMeta } from '../utils/photoMeta'

type Props = {
  open: boolean
  src: string
  title?: string
  description?: string
  onClose: () => void
  id?: number
}

export default function PhotoLightbox({ open, src, title, description, onClose, id }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [showPwd, setShowPwd] = useState(false)
  const [pwdValue, setPwdValue] = useState('')
  const [pwdError, setPwdError] = useState('')
  const [t, setT] = useState<string>('')
  const [d, setD] = useState<string>('')

  // Load saved meta when src changes/open
  useEffect(() => {
    if (!src) return
    const meta = getMeta(src)
    setT(meta?.title ?? '')
    setD(meta?.description ?? '')
  }, [src, open])

  const displayTitle = useMemo(() => (t?.trim() ? t : (title || 'Foto')), [t, title])
  const displayDesc = useMemo(() => (d?.trim() ? d : (description || '')), [d, description])
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
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{displayTitle}</h3>
                    {displayDesc ? (
                      <motion.p 
                        className="mt-2 text-sm text-slate-600 dark:text-slate-300" 
                        initial={{ x: -30, opacity: 0, scale: 0.95 }} 
                        animate={{ x: 0, opacity: 1, scale: 1 }} 
                        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {displayDesc}
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
                      onClick={() => {
                        // Always require password each time
                        setPwdValue('')
                        setPwdError('')
                        setShowPwd(true)
                      }}
                      className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                      aria-label="Edit"
                    >
                      {isEditing ? 'Batal' : 'Edit'}
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-200"
                      aria-label="Tutup"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Judul</label>
                      <input
                        value={t}
                        onChange={(e) => setT(e.target.value)}
                        className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                        placeholder="Judul foto"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Keterangan</label>
                      <textarea
                        value={d}
                        onChange={(e) => setD(e.target.value)}
                        rows={3}
                        className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                        placeholder="Tulis keterangan foto di sini"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setMeta(src, { title: t, description: d })
                          setIsEditing(false)
                        }}
                        className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
                      >
                        Simpan
                      </button>
                      <button
                        onClick={() => {
                          // reload from saved to discard in-memory edits
                          const meta = getMeta(src)
                          setT(meta?.title ?? '')
                          setD(meta?.description ?? '')
                          setIsEditing(false)
                        }}
                        className="px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Klik di luar atau tekan Esc untuk menutup.</div>
                <div className="mt-auto pt-4">
                  {/* Placeholder for extra controls like download/share */}
                </div>
              </div>
            </div>
            {/* Password Modal */}
            <AnimatePresence>
              {showPwd && (
                <motion.div
                  key="pwd-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  onClick={() => { /* swallow clicks on backdrop to force explicit close via button */ }}
                >
                  <motion.div
                    key="pwd-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    className="relative w-[92vw] max-w-md"
                  >
                    <div className="p-[2px] rounded-2xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-600">
                      <div className="rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur p-5 shadow-2xl border border-white/10 dark:border-slate-700/40">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Masukkan Password</h4>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Diperlukan untuk mengedit judul dan keterangan foto.</p>
                        <input
                          type="password"
                          autoFocus
                          value={pwdValue}
                          onChange={(e) => setPwdValue(e.target.value)}
                          className="mt-4 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          placeholder="Password"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              if (pwdValue === 'ersafnonchalant') {
                                setIsEditing(true)
                                setShowPwd(false)
                              } else {
                                setPwdError('Password salah')
                              }
                            }
                          }}
                        />
                        {pwdError && <div className="mt-2 text-xs text-red-600">{pwdError}</div>}
                        <div className="mt-4 flex justify-end gap-2">
                          <button
                            onClick={() => setShowPwd(false)}
                            className="px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm"
                          >
                            Batal
                          </button>
                          <button
                            onClick={() => {
                              if (pwdValue === 'ersafnonchalant') {
                                setIsEditing(true)
                                setShowPwd(false)
                              } else {
                                setPwdError('Password salah')
                              }
                            }}
                            className="px-3 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white text-sm"
                          >
                            Konfirmasi
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
