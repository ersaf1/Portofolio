import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Palette, Zap, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import HeroPortrait from '../components/HeroPortrait'
import ScatteredPhotos from '../components/ScatteredPhotos'
import { useLanguage } from '../context/LanguageContext'

const Home: React.FC = () => {
  const { t, language } = useLanguage()
  const [typedText, setTypedText] = useState('')
  
  const roles = [
    t('home.role1'),
    t('home.role2'),
    t('home.role3'),
    t('home.role4')
  ]
  
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, roleIndex, roles])

  return (
    <div className="space-y-20">
      {/* Scattered photos background */}
      <ScatteredPhotos />
      
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center py-20 relative">
        {/* Floating particles with improved animations */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
          className="absolute top-10 right-10 text-4xl opacity-60"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
          className="absolute bottom-20 left-10 text-4xl opacity-60"
        >
          🚀
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-20 text-3xl"
        >
          ⭐
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <HeroPortrait />
            <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t('home.greeting')}{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{
                backgroundSize: "200% 200%",
                transition: { duration: 0.5 }
              }}
            >
              {t('home.name')}
            </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center space-y-2"
            >
              <p className="text-lg md:text-xl text-purple-600 dark:text-purple-400 font-semibold">
                {t('home.school')}
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                {t('home.major')}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 h-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span>{typedText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('home.intro')}
          </motion.p>
          
          <motion.p 
            className="text-base text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t('home.description')}
          </motion.p>

          <motion.div 
            className="flex flex-row gap-6 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl font-semibold shadow-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                {/* aura gradient removed for hover */}
                <motion.span className="relative z-10">{t('home.cta.projects')}</motion.span>
                <motion.div className="relative z-10">
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                backdropFilter: "blur(20px)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/contact"
                className="px-8 py-4 glass rounded-xl font-semibold hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {t('home.cta.contact')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('home.whatido.title')}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: t('home.feature1.title'),
                desc: t('home.feature1.desc'),
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: t('home.feature2.title'),
                desc: t('home.feature2.desc'),
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('home.feature3.title'),
                desc: t('home.feature3.desc'),
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className={`inline-block p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  whileHover={{ color: "#8b5cf6" }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ersafrexx@gmail.com"
              className="p-3 glass rounded-xl hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
