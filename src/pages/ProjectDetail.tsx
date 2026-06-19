import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Tag } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6 px-4">
      <div className="space-y-4">
        <p className="text-sm font-mono text-comic-black opacity-50">project not found</p>
        <Link to="/projects" className="btn-comic px-5 py-2.5 text-sm bg-comic-yellow text-comic-black">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
      </div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-10">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-xs font-mono text-comic-black opacity-50 hover:opacity-100 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> back
      </button>

      {/* Title block */}
      <div>
        <span className="speech-bubble inline-block px-3 py-1 text-xs font-bangers uppercase tracking-wider text-comic-black mb-3">
          Project
        </span>
        <h1 className="font-bangers text-[clamp(2rem,5vw,3.5rem)] text-comic-black mb-4 tracking-tight">
          {project.title}
        </h1>
        <p className="text-comic-black font-comic text-lg max-w-xl leading-relaxed">{project.summary}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-comic px-5 py-2.5 text-sm bg-comic-yellow text-comic-black"
              aria-label="View source on GitHub"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-comic px-5 py-2.5 text-sm bg-comic-red text-white"
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="border-t-4 border-comic-red" />

      {/* Description */}
      <div className="comic-panel p-8 bg-comic-cream">
        <span className="font-bangers text-sm uppercase tracking-wider text-comic-black block mb-5">About this project</span>
        <p className="text-sm text-comic-black font-comic leading-relaxed whitespace-pre-line">{project.description}</p>
      </div>

      {/* Tech stack */}
      <div className="comic-panel p-8 bg-comic-cream">
        <div className="flex items-center gap-2 mb-6">
          <Tag className="w-3.5 h-3.5 text-comic-black opacity-40" />
          <span className="font-bangers text-sm uppercase tracking-wider text-comic-black">Tech Stack</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="tag-comic"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* More projects */}
      <div>
        <span className="font-bangers text-sm uppercase tracking-wider text-comic-black block mb-5">More projects</span>
        <div className="grid sm:grid-cols-2 gap-3">
          {projects.filter(p => p.id !== project.id).slice(0, 2).map(p => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="comic-panel p-5 group bg-comic-white hover:border-comic-red transition-all"
            >
              <h3 className="font-bangers text-sm text-comic-black group-hover:text-comic-red transition-colors mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="text-xs text-comic-black font-comic line-clamp-2 leading-relaxed mb-3 opacity-70">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map(t => <span key={t} className="tag-comic">{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
