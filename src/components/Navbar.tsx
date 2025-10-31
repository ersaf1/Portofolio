import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Moon, Sun, Menu, X, User, Mail, FileText, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar: React.FC = () => {
  const { t } = useLanguage()
  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })
  
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/galery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') }
  ]

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="glass sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-text flex items-center gap-2">
          <span className="text-3xl">⚡</span>
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === l.to 
                  ? 'bg-slate-700 dark:bg-slate-600 text-white shadow-lg' 
                  : 'hover:bg-white/60 dark:hover:bg-slate-700/60'
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />

          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="ml-2 p-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all duration-300"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Profile Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="ml-2 p-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all duration-300"
                aria-label="Profile menu"
              >
                <User className="w-5 h-5" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="glass rounded-xl p-2 min-w-[200px] shadow-2xl z-50"
                sideOffset={5}
              >
                <DropdownMenu.Item className="px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 cursor-pointer outline-none flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </DropdownMenu.Item>
                
                <DropdownMenu.Item asChild>
                  <a
                    href="mailto:ersafrexx@gmail.com"
                    className="px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 cursor-pointer outline-none flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </a>
                </DropdownMenu.Item>

                <DropdownMenu.Item className="px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 cursor-pointer outline-none flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="h-px bg-slate-200 dark:bg-slate-700 my-2" />

                <DropdownMenu.Item className="px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 cursor-pointer outline-none flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === l.to 
                      ? 'bg-slate-700 dark:bg-slate-600 text-white' 
                      : 'hover:bg-white/60 dark:hover:bg-slate-700/60'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              
              {/* Language Switcher Mobile */}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              
              <button
                onClick={() => setDark((d) => !d)}
                className="px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center gap-2"
              >
                {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
