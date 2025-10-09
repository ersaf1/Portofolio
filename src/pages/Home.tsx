import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Palette, Zap, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState('')
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Creative Designer', 'React Specialist']
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
  }, [typedText, isDeleting, roleIndex])

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center py-20 relative">
        {/* Floating particles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 text-4xl opacity-50"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 text-4xl opacity-50"
        >
          🚀
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Ersaf Sirazi Arifin
            </span>
          </motion.h1>
          
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
            className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafting beautiful and intuitive user interfaces with React and modern design tools. 
            Passionate about creating seamless user experiences and pixel-perfect designs.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              to="/projects" 
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 glass rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Frontend Development',
                desc: 'Building responsive, performant web applications with React, TypeScript, and modern tools.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'UI/UX Design',
                desc: 'Designing beautiful, intuitive interfaces that users love using Figma and design systems.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'User Experience',
                desc: 'Creating seamless, accessible experiences optimized for all devices and users.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-3xl font-bold mb-4">Let's Create Something Beautiful</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new design and development projects. 
            Let's connect and bring your ideas to life!
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
