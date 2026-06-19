import React, { useState } from 'react'
import { Clock, Tag, ArrowUpRight, Search } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  category: string
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Belajar React dari Nol: Perjalanan Seorang Pelajar SMK',
    excerpt: 'Bagaimana saya memulai belajar React saat masih kelas 10 SMK, dari tutorial YouTube sampai bisa bikin project yang lumayan keren.',
    date: '2026-05-10',
    readTime: '5 min',
    tags: ['React', 'Pemula'],
    category: 'Story'
  },
  {
    id: '2',
    title: 'Kenapa Tailwind CSS Mengubah Cara Saya Menulis CSS',
    excerpt: 'Dulu saya anti Tailwind karena "class-nya terlalu panjang". Setelah 3 bulan paksa diri pakai, sekarang tidak bisa balik ke CSS biasa lagi.',
    date: '2026-04-22',
    readTime: '4 min',
    tags: ['Tailwind', 'CSS'],
    category: 'Tips'
  },
  {
    id: '3',
    title: 'Membangun Skanida Apps: Platform Digital untuk SMKN 2 Magelang',
    excerpt: 'Proses di balik pembuatan Skanida Apps — dari riset kebutuhan, desain UI di Figma, sampai deploy pertama yang penuh drama.',
    date: '2026-03-15',
    readTime: '8 min',
    tags: ['Project', 'PWA'],
    category: 'Project'
  },
  {
    id: '4',
    title: 'TypeScript untuk Frontend Developer: Worth It atau Nggak?',
    excerpt: '"Perlu nggak belajar TypeScript?" — pertanyaan yang sering ditanya teman-teman. Jawaban singkatnya: ya. Jawaban panjangnya ada di sini.',
    date: '2026-02-28',
    readTime: '6 min',
    tags: ['TypeScript', 'JavaScript'],
    category: 'Tips'
  },
  {
    id: '5',
    title: 'Animasi Web dengan Framer Motion: Panduan Praktis',
    excerpt: 'Framer Motion adalah library animasi favorit saya untuk React. Di sini saya share cara-cara yang sering saya pakai untuk bikin UI yang lebih hidup.',
    date: '2026-01-20',
    readTime: '7 min',
    tags: ['Framer Motion', 'Animation'],
    category: 'Tutorial'
  },
  {
    id: '6',
    title: 'Git & GitHub: Workflow yang Saya Pakai Setiap Hari',
    excerpt: 'Dari commit message yang baik sampai branching strategy sederhana. Ini workflow Git yang saya gunakan untuk semua project.',
    date: '2025-12-10',
    readTime: '5 min',
    tags: ['Git', 'Tools'],
    category: 'Tips'
  }
]

const CATS = ['All', 'Story', 'Tips', 'Tutorial', 'Project']

function fmt(d: string) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

const Blog: React.FC = () => {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')

  const filtered = posts.filter(p => {
    const mc = cat === 'All' || p.category === cat
    const mq = !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(q.toLowerCase()))
    return mc && mq
  })

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 space-y-14">

      {/* Header */}
      <ScrollReveal>
        <div>
          <span className="speech-bubble inline-block px-3 py-1 text-xs font-bangers uppercase tracking-wider text-comic-black mb-3">
            Writing
          </span>
          <h1 className="font-bangers text-[clamp(2.5rem,5vw,4rem)] text-comic-black tracking-tight">
            My <span className="text-comic-red">Blog</span>
          </h1>
          <p className="text-comic-black font-comic mt-4 max-w-md leading-relaxed text-sm">
            Catatan perjalanan belajar, tips & trick, dan behind-the-scenes project.
          </p>
        </div>
      </ScrollReveal>

      {/* Search + filter row */}
      <ScrollReveal delay={100}>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-comic-black opacity-40" />
            <input
              type="text"
              placeholder="Search articles…"
              value={q}
              onChange={e => setQ(e.target.value)}
              className="input-comic w-full pl-10 pr-4 py-2.5 text-sm"
              aria-label="Search articles"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className="px-4 py-2 text-xs font-bold transition-all comic-border"
                style={{
                  background: cat === c ? '#E8192C' : '#fffbe6',
                  color: cat === c ? '#fff' : '#111',
                }}
              >
                {c.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Post grid */}
      <div key={cat + q} className="grid md:grid-cols-2 gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full py-20 text-center">
            <p className="text-sm font-mono text-comic-black">No articles found.</p>
          </div>
        ) : filtered.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 80}>
            <article
              className="comic-panel p-7 flex flex-col gap-4 group cursor-pointer bg-comic-white"
              aria-label={post.title}
            >
              {/* Top meta */}
              <div className="flex items-center justify-between">
                <span className="font-bangers text-xs uppercase tracking-wider text-comic-red">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-comic-black opacity-50 font-mono text-xs">
                  <Clock className="w-3 h-3" />{post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-bangers text-lg leading-snug text-comic-black group-hover:text-comic-red transition-colors tracking-tight">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-sm text-comic-black font-comic leading-relaxed line-clamp-3 flex-1 opacity-70">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <span key={tag} className="tag-comic flex items-center gap-1">
                    <Tag className="w-2.5 h-2.5" />{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t-4 border-comic-black">
                <span className="text-xs font-mono text-comic-black opacity-50">
                  {fmt(post.date)}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-comic-black opacity-50 group-hover:opacity-100 transition-colors">
                  read <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer CTA */}
      <ScrollReveal>
        <div className="text-center py-4">
          <p className="text-xs font-mono text-comic-black opacity-50">
            more coming soon —{' '}
            <a href="mailto:ersafrexx@gmail.com" className="text-comic-red hover:underline underline-offset-2 transition-colors">
              request a topic
            </a>
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default Blog
