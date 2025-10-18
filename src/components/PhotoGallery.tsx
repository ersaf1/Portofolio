import React, { useState } from 'react';

// Pastikan file-file berikut ada di folder public/photos dengan nama yang sama persis
const rawNames = [
  'WhatsApp Image 2025-10-10 at 10.12.54.jpeg',
  'WhatsApp Image 2025-10-10 at 10.12.56.jpeg',
  'WhatsApp Image 2025-10-10 at 10.13.04 (1).jpeg',
  'WhatsApp Image 2025-10-10 at 10.13.04.jpeg',
  'WhatsApp Image 2025-10-10 at 10.13.05.jpeg',
  'WhatsApp Image 2025-10-10 at 10.13.26.jpeg',
  'WhatsApp Image 2025-10-10 at 10.13.27.jpeg',
  'WhatsApp Image 2025-10-10 at 10.13.28 (1).jpeg',
];

const photoList = rawNames.map((name) => encodeURI(`/photos/${name}`));

// Helper untuk menukar ekstensi .jpeg <-> .jpg
const swapJpegJpg = (url: string) => {
  if (/\.jpeg$/i.test(url)) return url.replace(/\.jpeg$/i, '.jpg')
  if (/\.jpg$/i.test(url)) return url.replace(/\.jpg$/i, '.jpeg')
  return url
}

export default function PhotoGallery() {
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const [srcs, setSrcs] = useState<string[]>(photoList)
  const [fallbackTried, setFallbackTried] = useState<Record<number, boolean>>({})
  const placeholder = 'https://placehold.co/800x600/0f172a/94a3b8?text=Foto+Tidak+Ditemukan'

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {srcs.map((src, i) => (
        <figure key={i} className="overflow-hidden rounded-xl shadow-lg bg-slate-900/20 h-64 relative">
          {!broken[src] ? (
            <img
              src={src}
              alt={`Galeri ${i + 1}`}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={() => {
                // Coba fallback ke ekstensi lain sekali
                if (!fallbackTried[i]) {
                  setFallbackTried((ft) => ({ ...ft, [i]: true }))
                  setSrcs((curr) => {
                    const next = [...curr]
                    next[i] = swapJpegJpg(curr[i])
                    return next
                  })
                } else {
                  // Pakai placeholder agar tetap tampil
                  setSrcs((curr) => {
                    const next = [...curr]
                    next[i] = placeholder
                    return next
                  })
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
  );
}
