import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork } from 'lucide-react'
import { Project } from '../types'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  stargazers_count: number
  forks_count: number
  language: string
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Ganti 'ersaf1' dengan username GitHub Anda
        const response = await fetch('https://api.github.com/users/ersaf1/repos?sort=updated&per_page=6')
        if (!response.ok) throw new Error('Failed to fetch repos')
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError('Could not load repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="glass p-6 rounded-2xl h-48 animate-pulse flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="w-8 h-8 bg-slate-400/20 rounded-full" />
              <div className="w-16 h-4 bg-slate-400/20 rounded" />
            </div>
            <div className="w-3/4 h-6 bg-slate-400/20 rounded mb-3" />
            <div className="space-y-2 flex-1">
              <div className="w-full h-4 bg-slate-400/20 rounded" />
              <div className="w-2/3 h-4 bg-slate-400/20 rounded" />
            </div>
            <div className="flex gap-2 mt-4">
              <div className="w-12 h-5 bg-slate-400/20 rounded" />
              <div className="w-12 h-5 bg-slate-400/20 rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <Github className="w-12 h-12 mx-auto text-slate-400 mb-3" />
        <p className="text-slate-600 dark:text-slate-400 mb-4">{error}</p>
        <a 
          href="https://github.com/ersaf1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-500 font-medium hover:underline"
        >
          View GitHub Profile
        </a>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo, index) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass p-6 rounded-2xl hover:shadow-xl transition-all group flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-4">
            <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            <div className="flex gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-4 h-4" /> {repo.forks_count}
              </span>
            </div>
          </div>
          
          <h3 className="text-lg font-bold mb-2 group-hover:text-teal-500 transition-colors">
            {repo.name}
          </h3>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1 line-clamp-3">
            {repo.description || 'No description available'}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {repo.language && (
              <span className="px-2 py-1 text-xs bg-teal-500/10 text-teal-600 rounded-md">
                {repo.language}
              </span>
            )}
            {repo.topics?.slice(0, 3).map(topic => (
              <span key={topic} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded-md">
                {topic}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export default GitHubRepos
