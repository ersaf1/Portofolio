import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RADIUS = 18
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const Footer: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement.scrollHeight - window.innerHeight
      setProgress(doc > 0 ? window.scrollY / doc : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="relative mt-20 comic-panel-thick bg-comic-yellow">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <Link
            to="/"
            className="font-bangers text-2xl text-comic-black tracking-tight"
          >
            ersaf<span className="text-comic-red">.</span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center" aria-label="Footer navigation">
            {[
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
              { to: '/blog', label: 'Blog' },
              { to: '/contact', label: 'Contact' },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="font-bangers text-sm text-comic-black hover:text-comic-red transition-colors uppercase tracking-wider"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Copy */}
          <p className="font-bangers text-sm text-comic-black">
            &copy; {new Date().getFullYear()} Ersaf Sirazi Arifin
          </p>
        </div>
      </div>

      {/* Scroll-to-top with progress ring */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute -top-6 right-6 w-12 h-12 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 44 44"
          aria-hidden
        >
          <circle cx="22" cy="22" r={RADIUS} fill="none" stroke="#111" strokeWidth="2" />
          <circle
            cx="22" cy="22" r={RADIUS}
            fill="none"
            stroke="#E8192C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 0.12s ease' }}
          />
        </svg>
        <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center comic-border bg-comic-cream">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>
    </footer>
  )
}

export default Footer
