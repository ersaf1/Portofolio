import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Project } from '../types'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Tooltip.Provider>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -12, 
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(168, 85, 247, 0.15)",
          transition: { duration: 0.3, type: "spring", stiffness: 300 }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col overflow-hidden relative"
      >
        {/* Project Image Placeholder */}
        <motion.div 
          className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div 
            className="text-6xl opacity-50 relative z-10"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="text-xl font-bold mb-2 transition-all"
          whileHover={{ 
            backgroundImage: "linear-gradient(45deg, #8b5cf6, #ec4899)",
            backgroundClip: "text",
            color: "transparent",
            scale: 1.05
          }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>

        {/* Summary */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
          {project.summary}
        </p>

        {/* Tech Stack with Tooltips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <Tooltip.Root key={idx}>
              <Tooltip.Trigger asChild>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg cursor-default"
                >
                  {tech}
                </motion.span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="glass px-3 py-2 text-xs rounded-lg shadow-lg max-w-xs z-50"
                  sideOffset={5}
                >
                  Technology used in this project
                  <Tooltip.Arrow className="fill-white/20" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 text-xs text-slate-500">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex gap-3">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="#"
                  className="p-2 hover:bg-white/60 dark:hover:bg-slate-700/60 rounded-lg transition-all"
                  aria-label="View code"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="glass px-3 py-2 text-xs rounded-lg shadow-lg z-50" sideOffset={5}>
                  View Source Code
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="#"
                  className="p-2 hover:bg-white/60 dark:hover:bg-slate-700/60 rounded-lg transition-all"
                  aria-label="View live demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="glass px-3 py-2 text-xs rounded-lg shadow-lg z-50" sideOffset={5}>
                  View Live Demo
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all"
          >
            Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.article>
    </Tooltip.Provider>
  )
}

export default ProjectCard
