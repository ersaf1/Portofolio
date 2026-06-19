import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import photo1 from '../assets/WhatsApp Image 2025-10-10 at 10.12.54.jpeg';
import photo2 from '../assets/WhatsApp Image 2025-10-10 at 10.12.56.jpeg';
import photo3 from '../assets/WhatsApp Image 2025-10-10 at 10.13.04 (1).jpeg';
import photo4 from '../assets/WhatsApp Image 2025-10-10 at 10.13.05.jpeg';
import photo5 from '../assets/WhatsApp Image 2025-10-10 at 10.13.26.jpeg';
import photo6 from '../assets/WhatsApp Image 2025-10-10 at 10.13.27.jpeg';
import photo7 from '../assets/WhatsApp Image 2025-10-10 at 10.13.28.jpeg';

const photos = [
  { src: photo1, caption: 'Golden Hour', category: 'Portrait' },
  { src: photo2, caption: 'Street Vibes', category: 'Street' },
  { src: photo3, caption: 'Urban Flow', category: 'Urban' },
  { src: photo4, caption: 'Quiet Moment', category: 'Mood' },
  { src: photo5, caption: 'Neon Nights', category: 'Night' },
  { src: photo6, caption: 'City Lights', category: 'City' },
  { src: photo7, caption: 'Rooftop View', category: 'Landscape' },
];

const Gallery: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > (active ?? 0) ? 1 : -1);
    setActive(next);
  }, [active]);

  const prev = () => go((active! - 1 + photos.length) % photos.length);
  const next = () => go((active! + 1) % photos.length);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active]);

  return (
    <div className="py-8 space-y-8">

      {/* ── HEADER ───────────────────────────────────── */}
      <div className="relative overflow-hidden profile-card p-7 md:p-10 animate-fade-in-up">
        <div className="action-lines opacity-20" />
        <span className="onomatopoeia-pow absolute top-4 right-6 text-5xl z-10">SNAP!</span>
        <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="icon-box icon-box-red"><Camera className="w-4 h-4" /></div>
              <span className="section-label">Galeri Foto</span>
              <span className="badge-comic badge-comic-black">{photos.length}</span>
            </div>
            <h1
              className="font-bangers text-comic-black tracking-tight leading-[0.85]"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
            >
              MY{' '}
              <span className="text-comic-red" style={{ WebkitTextStroke: '3px #111' }}>
                PHOTOS
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="font-bangers text-xs uppercase tracking-widest text-comic-black opacity-40">born</div>
            <div className="font-bangers text-4xl text-comic-black leading-none">23 <span className="text-comic-red">DES</span></div>
            <div className="font-bangers text-xl text-comic-black opacity-60">2008</div>
          </div>
        </div>
        <div className="mt-6 h-1.5 bg-comic-black" />
        <div className="mt-1 h-0.5 bg-comic-red" />
      </div>

      {/* ── GRID ─────────────────────────────────────── */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-fade-in"
        style={{ animationDelay: '150ms' }}
      >
        {photos.map((photo, i) => (
          <button
            key={i}
            className="relative overflow-hidden group focus:outline-none transition-all duration-200 hover:-translate-y-1"
            style={{
              border: '3px solid #111',
              boxShadow: '5px 5px 0 #111',
              aspectRatio: '4/3',
            }}
            onClick={() => { setDir(1); setActive(i); }}
            aria-label={`Open photo: ${photo.caption}`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Number badge */}
            <div
              className="absolute top-2 left-2 font-bangers text-xs leading-none px-2 py-0.5"
              style={{ background: '#FFD700', color: '#111', border: '2px solid #111' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

          </button>
        ))}
      </div>

      {/* ── BOTTOM STRIP ────────────────────────────── */}
      <div
        className="flex flex-wrap items-center justify-between gap-4 animate-fade-in-up"
        style={{ borderTop: '3px solid #111', paddingTop: '1rem' }}
      >
        <p className="font-bangers text-xs uppercase tracking-widest text-comic-black opacity-40">
          Klik foto untuk membuka &bull; Arrow keys untuk navigasi
        </p>
        <div className="flex gap-1.5">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => { setDir(1); setActive(i); }}
              className="w-8 h-8 overflow-hidden transition-all hover:scale-110 hover:-translate-y-0.5"
              style={{
                border: '2px solid #111',
                boxShadow: '2px 2px 0 #111',
                opacity: 0.6,
              }}
              aria-label={`Jump to photo ${i + 1}`}
            >
              <img src={photo.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ─────────────────────────────────── */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col animate-fade-in"
          style={{ background: 'rgba(17,17,17,0.98)' }}
          onClick={() => setActive(null)}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0">
            <div
              className="font-bangers text-sm uppercase tracking-wider px-4 py-2"
              style={{ background: '#FFD700', color: '#111', border: '3px solid #111', boxShadow: '3px 3px 0 #fff' }}
            >
              {String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bangers text-white text-lg">{photos[active].caption}</span>
              <span className="font-bangers text-[10px] uppercase tracking-widest text-comic-yellow px-2 py-0.5" style={{ border: '1px solid #FFD700' }}>
                {photos[active].category}
              </span>
            </div>

            <button
              onClick={() => setActive(null)}
              className="flex items-center gap-2 font-bangers text-sm uppercase tracking-wider px-4 py-2"
              style={{ background: '#E8192C', color: '#fff', border: '3px solid #111', boxShadow: '3px 3px 0 #fff' }}
              aria-label="Close"
            >
              <X className="w-4 h-4" /> ESC
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center px-6 min-h-0" onClick={e => e.stopPropagation()}>
            <button
              onClick={prev}
              className="shrink-0 z-10 flex items-center justify-center w-12 h-12 transition-transform hover:scale-110"
              style={{ background: '#FFD700', border: '3px solid #111', boxShadow: '3px 3px 0 #111' }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-comic-black" />
            </button>

            <div className="flex-1 mx-4 flex items-center justify-center">
              <img
                key={active}
                src={photos[active].src}
                alt={photos[active].caption}
                className={`max-h-[75vh] max-w-full object-contain ${dir === 1 ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
                style={{ border: '4px solid #111', boxShadow: '8px 8px 0 #E8192C' }}
              />
            </div>

            <button
              onClick={next}
              className="shrink-0 z-10 flex items-center justify-center w-12 h-12 transition-transform hover:scale-110"
              style={{ background: '#FFD700', border: '3px solid #111', boxShadow: '3px 3px 0 #111' }}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-comic-black" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-1.5 px-6 py-3 shrink-0" style={{ borderTop: '3px solid #333' }} onClick={e => e.stopPropagation()}>
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="relative overflow-hidden shrink-0 w-12 h-12 transition-all hover:scale-110"
                style={{
                  border: active === i ? '3px solid #E8192C' : '3px solid #555',
                  boxShadow: active === i ? '2px 2px 0 #E8192C' : 'none',
                  opacity: active === i ? 1 : 0.45,
                }}
                aria-label={`Go to photo ${i + 1}`}
              >
                <img src={photo.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
