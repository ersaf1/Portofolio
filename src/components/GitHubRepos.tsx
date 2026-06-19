import React, { useEffect, useState } from 'react'
import { Github, Star, GitFork } from 'lucide-react'

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
          <div key={i} className="comic-panel p-6 h-48 animate-pulse flex flex-col bg-comic-cream">
            <div className="flex justify-between items-center mb-4">
              <div className="w-8 h-8 bg-comic-yellow comic-border rounded-full" />
              <div className="w-16 h-4 bg-comic-yellow comic-border rounded" />
            </div>
            <div className="w-3/4 h-6 bg-comic-yellow comic-border rounded mb-3" />
            <div className="space-y-2 flex-1">
              <div className="w-full h-4 bg-comic-yellow comic-border rounded" />
              <div className="w-2/3 h-4 bg-comic-yellow comic-border rounded" />
            </div>
            <div className="flex gap-2 mt-4">
              <div className="w-12 h-5 bg-comic-yellow comic-border rounded" />
              <div className="w-12 h-5 bg-comic-yellow comic-border rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <Github className="w-12 h-12 mx-auto text-comic-black opacity-20 mb-3" />
        <p className="text-comic-black font-comic mb-4">{error}</p>
        <a
          href="https://github.com/ersaf1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-comic-red font-bold hover:underline"
        >
          View GitHub Profile
        </a>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="comic-panel p-6 transition-all group flex flex-col h-full bg-comic-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Github className="w-6 h-6 text-comic-black" />
            <div className="flex gap-3 text-sm text-comic-black opacity-60">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-4 h-4" /> {repo.forks_count}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-comic-red transition-colors font-bangers text-comic-black">
            {repo.name}
          </h3>

          <p className="text-sm text-comic-black font-comic mb-4 flex-1 line-clamp-3 opacity-70">
            {repo.description || 'No description available'}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {repo.language && (
              <span className="tag-comic">
                {repo.language}
              </span>
            )}
            {repo.topics?.slice(0, 3).map(topic => (
              <span key={topic} className="tag-comic">{topic}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}

export default GitHubRepos
