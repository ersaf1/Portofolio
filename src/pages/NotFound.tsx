import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NotFound: React.FC = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
    {/* Giant 404 */}
    <div
      className="select-none font-bangers text-comic-red opacity-20"
      style={{
        fontSize: 'clamp(6rem,20vw,16rem)',
        lineHeight: 1,
        letterSpacing: '-0.05em',
      }}
      aria-hidden
    >
      404
    </div>

    <div className="space-y-3 max-w-sm -mt-4">
      <h1 className="font-bangers text-2xl text-comic-black tracking-tight">
        Page not found
      </h1>
      <p className="text-sm text-comic-black font-comic leading-relaxed opacity-70">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
    </div>

    <div className="flex gap-3 mt-10">
      <Link to="/" className="btn-comic px-5 py-2.5 text-sm bg-comic-red text-white">
        Back to home
      </Link>
      <button
        onClick={() => window.history.back()}
        className="btn-comic px-5 py-2.5 text-sm bg-comic-yellow text-comic-black flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" /> Go back
      </button>
    </div>
  </div>
)

export default NotFound
