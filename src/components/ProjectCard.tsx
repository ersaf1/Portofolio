import React from 'react'
import { Link } from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Project } from '../types'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Tooltip.Provider>
      <article
        className="comic-panel p-6 transition-all duration-300 group h-full flex flex-col overflow-hidden relative bg-comic-white"
      >
        {/* Project Image Placeholder */}
        <div
          className={`w-full aspect-square rounded-xl mb-4 flex items-center justify-center overflow-hidden relative comic-border ${
            project.image ? 'bg-comic-cream' : 'bg-comic-yellow'
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 bg-comic-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="text-6xl opacity-50 relative z-10">
                🚀
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bangers text-xl text-comic-black mb-2 transition-all group-hover:text-comic-red">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-comic-black font-comic mb-4 flex-1 opacity-70">
          {project.summary}
        </p>

        {/* Tech Stack with Tooltips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <Tooltip.Root key={idx}>
              <Tooltip.Trigger asChild>
                <span className="tag-comic cursor-default">
                  {tech}
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="comic-panel px-3 py-2 text-xs rounded-lg shadow-lg max-w-xs z-50 bg-comic-cream text-comic-black font-comic"
                  sideOffset={5}
                >
                  Technology used in this project
                  <Tooltip.Arrow className="fill-comic-cream" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
          {project.tech.length > 3 && (
            <span className="tag-comic opacity-50">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t-4 border-comic-black">
          <div className="flex gap-3">
            {project.repo && (
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={project.repo}
                    className="p-2 hover:bg-comic-yellow comic-border rounded-lg transition-all text-comic-black"
                    aria-label="View code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="comic-panel px-3 py-2 text-xs rounded-lg shadow-lg z-50 bg-comic-cream text-comic-black font-comic" sideOffset={5}>
                    View Source Code
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            )}

            {project.demo && (
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={project.demo}
                    className="p-2 hover:bg-comic-yellow comic-border rounded-lg transition-all text-comic-black"
                    aria-label="View live demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="comic-panel px-3 py-2 text-xs rounded-lg shadow-lg z-50 bg-comic-cream text-comic-black font-comic" sideOffset={5}>
                    View Live Demo
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            )}
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 text-sm font-bold text-comic-black group-hover:text-comic-red group-hover:gap-2 transition-all font-bangers"
          >
            Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </Tooltip.Provider>
  )
}

export default ProjectCard
