import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type PhotoMap = { [key: string]: string } // name => dataURL

type PhotoContextType = {
  photos: PhotoMap
  setPhoto: (name: string, dataUrl: string) => void
  getSrc: (name: string) => string
  clear: () => void
}

const PhotoContext = createContext<PhotoContextType | null>(null)

const BASE = (import.meta as any).env?.BASE_URL || '/'
const staticPath = (name: string) => `${BASE}photos/${name}`

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<PhotoMap>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem('userPhotos')
      if (raw) setPhotos(JSON.parse(raw))
    } catch {}
  }, [])

  const setPhoto = (name: string, dataUrl: string) => {
    setPhotos(prev => {
      const next = { ...prev, [name]: dataUrl }
      try { localStorage.setItem('userPhotos', JSON.stringify(next)) } catch {}
      return next
    })
  }

  const clear = () => {
    setPhotos({})
    try { localStorage.removeItem('userPhotos') } catch {}
  }

  const getSrc = (name: string) => photos[name] || staticPath(name)

  const value = useMemo(() => ({ photos, setPhoto, getSrc, clear }), [photos])

  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
}

export const usePhotos = () => {
  const ctx = useContext(PhotoContext)
  if (!ctx) throw new Error('usePhotos must be used within PhotoProvider')
  return ctx
}
