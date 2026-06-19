import React, { useEffect, useState } from 'react'
import { Github, Star, GitFork, ExternalLink, RefreshCw, Clock, ArrowUpRight } from 'lucide-react'

const GITHUB_USERNAME = 'ersaf1'
const CACHE_KEY = 'gh_repos_cache'
const CACHE_TTL = 1000 * 60 * 10

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

interface CacheEntry { data: GitHubRepo[]; timestamp: number }

function getCached(): GitHubRepo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const entry: CacheEntry = JSON.parse(raw)
    if (Date.now() - entry.timestamp > CACHE_TTL) return null
    return entry.data
  } catch { return null }
}
function setCache(data: GitHubRepo[]) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() })) } catch {}
}
function timeAgo(dateStr: string): string {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000)
  if (days === 0) return 'today'
  if (days === 1) return '1d ago'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

const LANG_COLOR: Record<string, string> = {
  TypeScript: '#3b82f6', JavaScript: '#facc15', Python: '#22c55e',
  HTML: '#f97316', CSS: '#d8b57d', Vue: '#10b981', Go: '#06b6d4',
}
const LANG_ACCENT: string[] = ['card-comic-red', 'card-comic-yellow', 'card-comic-black', 'card-comic-red', 'card-comic-yellow', 'card-comic-black']

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const [fromCache, setFromCache] = useState(false)

  const fetchRepos = async (force = false) => {
    setLoading(true); setError(''); setFromCache(false)
    if (!force) {
      const cached = getCached()
      if (cached) {
        setRepos(cached.filter(r => !r.fork && !r.name.toLowerCase().includes('porto')))
        setFromCache(true); setLoading(false); return
      }
    }
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`)
      if (!res.ok) throw new Error(`${res.status}`)
      const data: GitHubRepo[] = await res.json()
      setCache(data)
      setRepos(data.filter(r => !r.fork && !r.name.toLowerCase().includes('porto')))
    } catch { setError('Gagal memuat repositories.') }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchRepos() }, [])

  const languages = ['all', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]))]
  const filtered = filter === 'all' ? repos : repos.filter(r => r.language === filter)

  return (
    <div className="space-y-8 py-8">

      {/* HEADER CARD */}
      <section className="profile-card p-7 md:p-10 relative overflow-hidden">
        <div className="action-lines opacity-20" />
        <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <div>
            <span className="section-label">Open source</span>
            <h1 className="mt-4 font-bangers text-[clamp(2.8rem,6vw,5rem)] text-comic-black tracking-tight leading-[0.9]">
              Projects & repositories with craft and ongoing iteration.
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer"
              className="btn-comic bg-comic-black text-white px-4 py-2 text-sm">
              <Github className="h-4 w-4" /> @{GITHUB_USERNAME}
            </a>
            {fromCache && <span className="badge-comic badge-comic-black text-xs">cached</span>}
            <button onClick={() => fetchRepos(true)}
              className="btn-comic bg-comic-white text-comic-black px-4 py-2 text-sm">
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
          </div>
        </div>

        {!loading && !error && (
          <div className="relative z-10 mt-8 flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {languages.map(lang => (
              <button key={lang} onClick={() => setFilter(lang)}
                className="btn-comic text-xs px-4 py-2"
                style={{
                  background: filter === lang ? '#E8192C' : '#fff',
                  color: filter === lang ? '#fff' : '#111',
                }}>
                {lang === 'all' ? 'all' : lang.toLowerCase()}
                <span className="ml-1.5 opacity-50 font-mono">
                  {lang === 'all' ? repos.length : repos.filter(r => r.language === lang).length}
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* LOADING SKELETON */}
      {loading && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-comic h-72 animate-pulse p-6 bg-comic-cream">
              <div className="flex justify-between mb-4">
                <div className="w-11 h-11 bg-comic-yellow comic-border" />
                <div className="w-16 h-5 bg-comic-yellow comic-border" />
              </div>
              <div className="h-6 w-2/3 bg-comic-yellow comic-border mb-3" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-comic-yellow comic-border" />
                <div className="h-3 w-4/5 bg-comic-yellow comic-border" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="card-comic p-12 text-center bg-comic-cream animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <Github className="mx-auto h-12 w-12 text-comic-black opacity-20 mb-4" />
          <p className="text-sm font-mono text-comic-black mb-6">{error}</p>
          <button onClick={() => fetchRepos(true)}
            className="btn-comic bg-comic-yellow text-comic-black px-5 py-3">
            <RefreshCw className="h-4 w-4" /> Retry
          </button>
        </div>
      )}

      {/* REPO CARDS */}
      {!loading && !error && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.length === 0 ? (
            <div className="card-comic col-span-full p-12 text-center bg-comic-cream">
              <p className="text-sm font-mono text-comic-black">No repos in this language.</p>
            </div>
          ) : filtered.map((repo, i) => (
            <article key={repo.id}
              className={`card-comic ${LANG_ACCENT[i % LANG_ACCENT.length]} p-6 flex flex-col min-h-[300px] group hover:-translate-y-1 transition-transform duration-200`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="icon-box icon-box-red">
                  <Github className="h-4 w-4" />
                </div>
                <div className="flex gap-3 font-mono text-xs text-comic-black">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />{repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />{repo.forks_count}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="flex-1">
                <div className="flex items-center gap-1 font-bangers text-xs uppercase tracking-wider text-comic-black mb-2">
                  repo <ArrowUpRight className="h-3 w-3" />
                </div>
                <h3 className="font-bangers text-[1.7rem] leading-none text-comic-black group-hover:text-comic-red transition-colors tracking-tight">
                  {repo.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-comic-black font-comic opacity-80">
                  {repo.description || 'No description.'}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {repo.language && (
                  <span className="tag-comic">
                    <span className="w-2 h-2 rounded-full inline-block"
                      style={{ background: LANG_COLOR[repo.language] ?? '#888' }} />
                    {repo.language}
                  </span>
                )}
                {repo.topics?.slice(0, 3).map(t => (
                  <span key={t} className="tag-comic">{t}</span>
                ))}
              </div>

              {/* Footer — hover reveal */}
              <div className="mt-5 pt-4 border-t-4 border-comic-black opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                      className="btn-comic bg-comic-yellow text-comic-black px-3 py-1.5 text-xs">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
                        className="btn-comic bg-comic-red text-white px-3 py-1.5 text-xs">
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
                    )}
                  </div>
                  <span className="font-mono text-xs text-comic-black opacity-50">
                    <Clock className="inline h-3 w-3 mr-1" />{timeAgo(repo.updated_at)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
