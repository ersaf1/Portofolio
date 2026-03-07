import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LightPillar from './components/LightPillar'
import { LanguageProvider } from './context/LanguageContext'

const App: React.FC = () => {
  const location = useLocation()

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col relative">
        {/* Global LightPillar background — fixed, behind everything */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <LightPillar
            topColor="#000000"
            bottomColor="#ffffff"
            intensity={1}
            rotationSpeed={1.4}
            glowAmount={0.003}
            pillarWidth={3.5}
            pillarHeight={0.4}
            noiseIntensity={0}
            pillarRotation={225}
            interactive={false}
            mixBlendMode="screen"
            quality="low"
          />
        </div>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ 
              opacity: 0, 
              y: 30,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              y: -30,
              scale: 0.95
            }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="flex-1 container mx-auto px-4 py-8 relative z-10"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/galery" element={<Gallery />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
