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
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
      >
        {/* Project Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-6xl opacity-50">🚀</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>

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
