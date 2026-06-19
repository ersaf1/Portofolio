import React, { useEffect, useState } from 'react'
import { Music } from 'lucide-react'

const TRACKS = [
  { title: 'Kasih Putih', artist: 'Glenn Fredly', duration: '4:12' },
  { title: 'Tentang Kita', artist: 'Payung Teduh', duration: '5:01' },
  { title: 'Ruang Sendiri', artist: 'Kunto Aji', duration: '3:47' },
  { title: 'Rehat', artist: 'Kunto Aji', duration: '4:22' },
  { title: 'Bebas', artist: 'Float', duration: '4:05' },
]

const EqBar: React.FC<{ delay: number }> = ({ delay }) => (
  <div
    className="w-1 rounded-full bg-comic-red animate-eq"
    style={{ height: '3px', animationDelay: `${delay}s` }}
  />
)

const SpotifyWidget: React.FC = () => {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % TRACKS.length), 8000)
    return () => clearInterval(id)
  }, [])

  const track = TRACKS[idx]

  return (
    <div className="w-full comic-panel p-4 bg-comic-cream max-w-[280px]">
      <div className="flex items-center justify-between mb-3">
        <span className="font-bangers text-xs uppercase tracking-wider text-comic-black">
          now playing
        </span>
        <div className="flex items-end gap-0.5 h-3" aria-hidden>
          <EqBar delay={0} />
          <EqBar delay={0.15} />
          <EqBar delay={0.3} />
          <EqBar delay={0.08} />
        </div>
      </div>

      <div
        key={idx}
        className="flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-comic-yellow comic-border">
          <Music className="w-3.5 h-3.5 text-comic-black" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-comic-black truncate font-bangers">
            {track.title}
          </p>
          <p className="text-xs text-comic-black font-mono truncate opacity-60">
            {track.artist}
          </p>
        </div>
        <span className="text-xs text-comic-black font-mono shrink-0 opacity-40">
          {track.duration}
        </span>
      </div>

      {/* progress */}
      <div className="mt-3 h-1 overflow-hidden comic-border bg-comic-white">
        <div
          className="h-full bg-comic-red animate-progress"
        />
      </div>
    </div>
  )
}

export default SpotifyWidget
