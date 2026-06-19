import React, { Suspense, lazy, useEffect, useState, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import { LanguageProvider } from './context/LanguageContext'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const FunFacts = lazy(() => import('./pages/FunFacts'))
const Blog = lazy(() => import('./pages/Blog'))
const Order = lazy(() => import('./pages/Order'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageSkeleton: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-comic-cream">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 comic-border bg-comic-yellow animate-spin-slow" />
      <p className="font-bangers text-sm text-comic-black">Loading...</p>
    </div>
  </div>
)

const PageTransition: React.FC<{ children: React.ReactNode; pathname: string }> = ({ children, pathname }) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitioning, setTransitioning] = useState(false)
  const isFirst = useRef(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      setDisplayChildren(children)
      return
    }
    if (timerRef.current) clearTimeout(timerRef.current)
    setTransitioning(true)
    timerRef.current = setTimeout(() => {
      setDisplayChildren(children)
      setTransitioning(false)
      timerRef.current = null
    }, 200)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [pathname])

  return (
    <main
      className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-4 py-4 md:px-6 md:py-6 xl:px-8"
      style={{
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'opacity 200ms ease, transform 200ms ease',
      }}
    >
      {displayChildren}
    </main>
  )
}

const App: React.FC = () => {
  const location = useLocation()

  return (
    <LanguageProvider>
      <div className="comic-plus-bg min-h-screen flex flex-col relative bg-comic-cream font-comic text-comic-black">
        <ThreeBackground />
        <Navbar />
        <PageTransition pathname={location.pathname}>
          <Suspense fallback={<PageSkeleton />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/galery" element={<Gallery />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Order />} />
              <Route path="/fun-facts" element={<FunFacts />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
