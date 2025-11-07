import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion'
import PhotoLightbox from './PhotoLightbox'

// Ambil SEMUA gambar dari folder src/assets (subfolder juga) secara otomatis
// Vite akan mengubahnya menjadi URL yang bisa dipakai di <img>
const useAssetImages = () => {
  const modules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,gif,svg}', {
    eager: true,
    as: 'url',
  }) as Record<string, string>

  // Urutkan berdasarkan path agar konsisten
  const urls = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url)
  return urls
}

export default function PhotoGallery() {
  const assets = useAssetImages()
  const initial = useMemo(() => (assets.length ? assets : []), [assets])
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const [srcs, setSrcs] = useState<string[]>(initial)
  const [fallbackTried, setFallbackTried] = useState<Record<number, boolean>>({})
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const placeholderFor = (i: number) => `https://picsum.photos/seed/galeri-${i}/800/600`

  // Jika daftar assets berubah (mis. setelah build HMR), sinkronkan srcs
  React.useEffect(() => {
    setSrcs(assets.length ? assets : [])
  }, [assets])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {srcs.map((src, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-xl shadow-lg bg-slate-900/20 h-64 relative cursor-pointer"
            onClick={() => setOpenIdx(i)}
          >
            {!broken[src] ? (
              <motion.img
                layoutId={`photo-${i}`}
                src={src}
                alt={`Galeri ${i + 1}`}
                className="object-cover w-full h-full"
                style={{ visibility: openIdx === i ? 'hidden' as const : 'visible' as const }}
                loading="lazy"
                onError={() => {
                  // Pakai foto random agar tetap tampil
                  if (!fallbackTried[i]) {
                    setFallbackTried((ft) => ({ ...ft, [i]: true }))
                    setSrcs((curr) => {
                      const next = [...curr]
                      next[i] = placeholderFor(i)
                      return next
                    })
                  } else {
                    setBroken((b) => ({ ...b, [src]: true }))
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm p-4 text-center">
                Gambar tidak ditemukan: <span className="ml-1 break-all">{decodeURI(src)}</span>
              </div>
            )}
          </figure>
        ))}
      </div>

      <PhotoLightbox
        open={openIdx !== null}
        src={openIdx !== null ? srcs[openIdx] : ''}
        title={openIdx !== null ? `Galeri ${openIdx + 1}` : undefined}
        description={openIdx !== null ? `Foto nomor ${openIdx + 1} dari galeri.` : undefined}
        id={openIdx ?? undefined}
        onClose={() => setOpenIdx(null)}
      />
    </>
  )
}
