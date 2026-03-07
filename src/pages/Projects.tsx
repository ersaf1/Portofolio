import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, RefreshCw } from 'lucide-react'

const GITHUB_USERNAME = 'ersaf1'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  fork: boolean
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const fetchRepos = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
      )
      if (!response.ok) throw new Error(`GitHub API error: ${response.status}`)
      const data: GitHubRepo[] = await response.json()
      // exclude forks and portfolio repo
      setRepos(data.filter(r => !r.fork && !r.name.toLowerCase().includes('porto')))
    } catch (err) {
      setError('Gagal memuat repositories. Cek koneksi internet kamu.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  // Build filter list from unique languages
  const languages = ['all', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]))]

  const filtered = activeFilter === 'all'
    ? repos
    : repos.filter(r => r.language === activeFilter)

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-xl" />
      <div className="mx-auto max-w-6xl w-full space-y-12 py-16 px-4">

        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
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
              className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Projects
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Github className="w-5 h-5" />
            Diambil langsung dari GitHub
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              @{GITHUB_USERNAME}
            </a>
          </motion.p>
        </motion.section>

        {/* Filter Buttons */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {languages.map(lang => (
              <motion.button
                key={lang}
                onClick={() => setActiveFilter(lang)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === lang
                    ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-white shadow-lg'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {lang === 'all' ? 'All' : lang}
                <span className="ml-1.5 text-xs opacity-60">
                  ({lang === 'all' ? repos.length : repos.filter(r => r.language === lang).length})
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass p-6 rounded-2xl h-52 animate-pulse flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="w-8 h-8 bg-white/10 rounded-full" />
                  <div className="w-16 h-4 bg-white/10 rounded" />
                </div>
                <div className="w-3/4 h-5 bg-white/10 rounded" />
                <div className="w-full h-4 bg-white/10 rounded" />
                <div className="w-2/3 h-4 bg-white/10 rounded" />
                <div className="flex gap-2 mt-auto">
                  <div className="w-16 h-5 bg-white/10 rounded" />
                  <div className="w-16 h-5 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 flex flex-col items-center gap-4"
          >
            <Github className="w-14 h-14 text-slate-500" />
            <p className="text-slate-400">{error}</p>
            <button
              onClick={fetchRepos}
              className="flex items-center gap-2 px-5 py-2 rounded-xl glass hover:bg-white/10 transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Coba Lagi
            </button>
          </motion.div>
        )}

        {/* Repo Grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.length === 0 ? (
                <p className="col-span-full text-center text-slate-500 py-16">
                  Tidak ada repo dengan bahasa ini.
                </p>
              ) : (
                filtered.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.06, type: 'spring', stiffness: 120 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass p-6 rounded-2xl flex flex-col h-full hover:shadow-xl transition-all group"
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-4">
                      <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                      <div className="flex gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-base font-bold mb-2 group-hover:text-white transition-colors">
                      {repo.name}
                    </h3>

                    {/* Description */}
                    {repo.description && (
                      <p className="text-sm text-slate-400 flex-1 line-clamp-3 mb-4">
                        {repo.description}
                      </p>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.language && (
                        <span className="px-2 py-0.5 text-xs bg-white/10 text-gray-300 rounded-md">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 3).map(topic => (
                        <span key={topic} className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded-md">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </div>
  )
}

export default Projects

