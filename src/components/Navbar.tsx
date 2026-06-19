import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/galery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/order', label: 'Order' },
  { to: '/contact', label: 'Contact' },
]

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()
  const [menuStyle, setMenuStyle] = useState({ height: 0, opacity: 0, display: 'none' as 'none' | 'block' })

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      setMenuStyle({ height: 300, opacity: 1, display: 'block' })
    } else {
      setMenuStyle({ height: 0, opacity: 0, display: 'none' })
    }
  }, [mobileOpen])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header className="sticky top-0 z-50 premium-nav">
      <div className="h-1.5 w-full" style={{ background: 'var(--c-red)' }} />

      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 select-none">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-sm font-bold text-lg"
            style={{
              fontFamily: 'var(--font-display)',
              background: 'var(--c-red)',
              color: '#fff',
              border: '3px solid #111',
              boxShadow: '3px 3px 0 #111',
              letterSpacing: '0.05em',
            }}
          >
            ES
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                letterSpacing: '0.06em',
                color: '#111',
                lineHeight: 1,
              }}
            >
              ERSAF
            </div>
            <div className="text-label" style={{ fontSize: '0.5rem', letterSpacing: '0.2em' }}>Creative Developer</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? 'page' : undefined}
              className="relative px-3 py-1.5 text-sm transition-all"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.1em',
                fontSize: '1rem',
                color: isActive(item.to) ? '#fff' : '#111',
                background: isActive(item.to) ? 'var(--c-red)' : 'transparent',
                border: isActive(item.to) ? '2px solid #111' : '2px solid transparent',
                boxShadow: isActive(item.to) ? '3px 3px 0 #111' : 'none',
                borderRadius: '3px',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="/cv-ersaf.pdf"
            download
            className="btn-primary flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm lg:hidden"
          style={{ border: '3px solid #111', background: mobileOpen ? 'var(--c-red)' : '#fff', color: mobileOpen ? '#fff' : '#111', boxShadow: '3px 3px 0 #111' }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        style={{ display: menuStyle.display, height: menuStyle.height, opacity: menuStyle.opacity, overflow: 'hidden', transition: 'height 300ms ease, opacity 250ms ease' }}
        className="border-t-4 border-black"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-4 md:px-6" style={{ background: '#fffbe6' }}>
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-3 text-base"
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.1em',
                  fontSize: '1.2rem',
                  border: '3px solid #111',
                  borderRadius: '4px',
                  background: isActive(item.to) ? 'var(--c-red)' : '#fff',
                  color: isActive(item.to) ? '#fff' : '#111',
                  boxShadow: '3px 3px 0 #111',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            <LanguageSwitcher />
            <a href="/cv-ersaf.pdf" download className="btn-primary flex-1 justify-center px-4 py-2 text-sm">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
