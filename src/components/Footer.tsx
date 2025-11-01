import React from 'react'
import { Heart, Code, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="glass border-t border-white/20 dark:border-slate-700/50 mt-20 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
            © {new Date().getFullYear()} Ersaf Sirazi Arifin • Made with 
            <Heart className="w-4 h-4 text-cyan-500 inline animate-pulse" /> 
            and 
            <Code className="w-4 h-4 text-teal-500 inline" />
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Crafted with passion ✨
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer
