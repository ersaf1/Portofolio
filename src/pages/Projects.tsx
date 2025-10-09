import React, { useState } from 'react'
import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'web', label: 'Web Apps', count: projects.filter(p => p.tech.includes('React')).length },
    { value: 'design', label: 'UI/UX', count: projects.filter(p => p.tech.includes('Figma')).length },
    { value: 'other', label: 'Others', count: 2 }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => {
        if (activeTab === 'web') return p.tech.includes('React')
        if (activeTab === 'design') return p.tech.includes('Figma')
        return true
      })

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Background Gradient & Glassmorphism */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-700/40 via-pink-500/30 to-blue-600/40 dark:from-purple-900/60 dark:via-pink-900/40 dark:to-blue-900/60 backdrop-blur-xl" />
      <div className="mx-auto max-w-6xl w-full space-y-12 py-16 px-4">
        {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My{' '}
          <motion.span 
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Projects
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A collection of frontend projects and UI/UX designs I've worked on.
        </motion.p>
      </motion.section>

        {/* Tabs Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <motion.div 
            className="flex flex-wrap gap-2 justify-center mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.value}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tabs.Trigger
                  value={category.value}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                    activeTab === category.value
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'glass hover:shadow-lg hover:scale-105'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
                    whileHover={{ opacity: activeTab !== category.value ? 0.1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="relative z-10">
                    {category.label}
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </span>
                </Tabs.Trigger>
              </motion.div>
            ))}
          </motion.div>

          <Tabs.Content value={activeTab}>
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white/70 dark:bg-slate-900/60 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800"
            >
              {filteredProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 30, 
                      scale: 0.9,
                      rotateX: -15 
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </motion.div>
          </Tabs.Content>
        </Tabs.Root>
      </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects found in this category yet. Check back soon! 🚀
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
