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
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A collection of frontend projects and UI/UX designs I've worked on.
        </p>
      </motion.section>

      {/* Tabs Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Tabs.Trigger
                key={category.value}
                value={category.value}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === category.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'glass hover:shadow-lg'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Tabs.Content value={activeTab}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
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
  )
}

export default Projects
