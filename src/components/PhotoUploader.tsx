import React, { useRef, useState } from 'react'
import { usePhotos } from '../context/PhotoContext'
import { motion } from 'framer-motion'

const labels = ['hero.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']

const PhotoUploader: React.FC = () => {
  const { setPhoto, clear } = usePhotos()
  const [targetName, setTargetName] = useState('hero.jpg')
  const inputRef = useRef<HTMLInputElement>(null)

  const onPick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result as string
      setPhoto(targetName, dataUrl)
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-[100]"
    >
      <div className="glass rounded-xl p-3 shadow-lg flex items-center gap-2">
        <select
          className="bg-transparent border border-white/20 rounded-lg px-2 py-1 text-sm"
          value={targetName}
          onChange={(e) => setTargetName(e.target.value)}
        >
          {labels.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <button
          className="px-3 py-1 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-500"
          onClick={() => inputRef.current?.click()}
        >
          Upload
        </button>
        <button
          className="px-3 py-1 text-sm rounded-lg bg-slate-700 text-white hover:bg-slate-600"
          onClick={clear}
        >
          Reset
        </button>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onPick} />
      </div>
    </motion.div>
  )
}

export default PhotoUploader
