import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl text-center py-20"
      >
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Sorry, the project you're looking for doesn't exist.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </motion.section>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Hero */}
      <div className="glass rounded-3xl p-8 md:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 mb-6"
        >
          {project.summary}
        </motion.p>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>2024</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Tag className="w-4 h-4" />
            <span>Personal Project</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 glass rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-3xl p-8"
      >
        <h2 className="text-2xl font-bold mb-4">About This Project</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-3xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Project Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass rounded-3xl p-8"
      >
        <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">🚀</div>
            <p className="text-slate-500 dark:text-slate-400">Project Screenshot</p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default ProjectDetail
