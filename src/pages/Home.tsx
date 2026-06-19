import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  MapPin, Layers, Zap, Smartphone, Star
} from 'lucide-react'
import HeroPortrait from '../components/HeroPortrait'
import SpotifyWidget from '../components/SpotifyWidget'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const stats = [
  { value: '03+', label: 'Projects', color: 'bg-comic-red', text: 'text-white' },
  { value: '2yr', label: 'Experience', color: 'bg-comic-yellow', text: 'text-comic-black' },
  { value: '10+', label: 'Tech stack', color: 'bg-comic-black', text: 'text-white' },
]

const skills = [
  { icon: <Layers className="w-5 h-5" />, label: 'React / TypeScript', desc: 'Component-driven, typed, production-ready.', color: 'card-comic-red' },
  { icon: <Zap className="w-5 h-5" />, label: 'UI Motion', desc: 'Anime.js animations that feel intentional.', color: 'card-comic-yellow' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'Responsive Craft', desc: 'Layouts that breathe from mobile to desktop.', color: 'card-comic-black' },
]

const works = [
  { no: '01', title: 'Interface systems', desc: 'Structured React builds with motion and intentional front-end architecture.', bg: 'bg-comic-yellow' },
  { no: '02', title: 'Visual direction', desc: 'Turning ideas into tactile UI with atmosphere, spacing discipline, and storytelling.', bg: 'bg-comic-red' },
  { no: '03', title: 'Fast iteration', desc: 'From concept to polished prototype quickly, while keeping the result production-ready.', bg: 'bg-comic-white' },
]

function useTyping(words: string[]) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    const delay = deleting ? 40 : 88
    const t = window.setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) setText(word.slice(0, text.length + 1))
        else window.setTimeout(() => setDeleting(true), 1600)
      } else if (text.length > 0) {
        setText(word.slice(0, text.length - 1))
      } else {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }
    }, delay)
    return () => window.clearTimeout(t)
  }, [deleting, text, wordIdx, words])

  return text
}

const Home: React.FC = () => {
  const { t } = useLanguage()
  const roles = [t('home.role1'), t('home.role2'), t('home.role3'), t('home.role4')]
  const typed = useTyping(roles)

  return (
    <div className="space-y-16 py-8">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <ScrollReveal className="mb-5 flex flex-wrap items-center gap-3">
            <span className="section-label">
              <Star className="w-3 h-3" /> Creative Developer
            </span>
            <span className="flex items-center gap-1 font-bangers text-xs uppercase tracking-wider text-comic-red">
              <MapPin className="h-3 w-3" /> Magelang, Indonesia
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-bangers text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.86] text-comic-black tracking-tight">
              Ersaf{' '}<span className="text-comic-red">Sirazi</span>{' '}Arifin
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200} className="mt-5 inline-flex items-center gap-2 px-4 py-2 card-comic bg-comic-white">
            <span className="font-mono text-xs text-comic-black opacity-50">role &#x25B8;</span>
            <span className="font-mono text-sm font-bold text-comic-black">{typed}</span>
            <span className="font-mono text-sm text-comic-red animate-pulse">_</span>
          </ScrollReveal>

          <ScrollReveal delay={300} className="mt-7 max-w-xl">
            <div className="speech-bubble p-5">
              <p className="text-base leading-7 text-comic-black font-comic">{t('home.intro')}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-comic bg-comic-red text-white px-6 py-3">
              {t('home.cta.projects')} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-comic bg-comic-yellow text-comic-black px-6 py-3">
              {t('home.cta.contact')} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200} className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="action-lines" />
            <div className="comic-panel-thick overflow-hidden bg-comic-yellow">
              <HeroPortrait size={320} />
            </div>
            <span className="onomatopoeia-bam absolute -top-5 -right-5 z-10">BAM!</span>
          </div>
          <SpotifyWidget />
        </ScrollReveal>
      </section>

      {/* ── STAT CARDS ────────────────────────────────── */}
      <section className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 100}>
            <div className={`stat-card ${s.color}`}>
              <span className={`stat-val ${s.text}`}>{s.value}</span>
              <span className={`stat-lbl ${s.text === 'text-white' ? 'text-white opacity-80' : ''}`}>{s.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ── WHAT I DO — BENTO GRID ────────────────────── */}
      <section>
        <ScrollReveal className="mb-8">
          <span className="section-label">What I do</span>
          <h2 className="mt-4 font-bangers text-[clamp(2rem,5vw,3.8rem)] text-comic-black tracking-tight">
            Building products that feel cinematic, tactile, and ready to ship.
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {works.map((item, i) => (
            <ScrollReveal key={item.no} delay={200 + i * 100}>
              <div
                className={`card-comic card-comic-${i === 0 ? 'yellow' : i === 1 ? 'red' : 'black'} p-7 flex flex-col gap-4 min-h-[220px] hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className={`badge-comic ${i === 1 ? 'badge-comic-yellow' : i === 2 ? '' : 'badge-comic-black'}`}>
                  {item.no}
                </div>
                <h3 className="font-bangers text-2xl text-comic-black tracking-tight mt-auto">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-comic-black font-comic opacity-80">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SKILLS CARDS ─────────────────────────────── */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <ScrollReveal>
            <span className="section-label">Selected direction</span>
            <h2 className="mt-4 max-w-2xl font-bangers text-[clamp(2rem,4vw,3.4rem)] text-comic-black tracking-tight">
              Interfaces should feel personal before they feel expensive.
            </h2>
          </ScrollReveal>
          <Link
            to="/projects"
            className="btn-comic bg-comic-yellow text-comic-black px-4 py-2 text-sm"
          >
            See work <ArrowUpRight className="h-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.label} delay={200 + i * 100}>
              <div
                className={`card-comic ${skill.color} p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className="icon-box icon-box-red">
                  {skill.icon}
                </div>
                <div>
                  <div className="font-bangers text-xl text-comic-black tracking-tight">{skill.label}</div>
                  <p className="mt-2 text-sm leading-7 text-comic-black font-comic opacity-80">{skill.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA PANEL ─────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative overflow-hidden profile-card p-8 md:p-12">
          <div className="action-lines opacity-40" />
          <span className="onomatopoeia-pow absolute top-6 right-6 text-5xl z-10">POW!</span>

          <div className="relative z-10 max-w-3xl">
            <span className="section-label">Let&apos;s work together</span>
            <h2 className="mt-4 font-bangers text-[clamp(2.8rem,7vw,6rem)] text-comic-black tracking-tight leading-[0.9]">
              {t('home.cta.title')}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-comic-black font-comic">
              {t('home.cta.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-comic bg-comic-black text-white px-6 py-3">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://github.com/ersaf1" target="_blank" rel="noopener noreferrer"
                 className="btn-comic bg-comic-white text-comic-black px-5 py-3">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ersaf-arifin-57190b33b" target="_blank" rel="noopener noreferrer"
                 className="btn-comic bg-comic-white text-comic-black px-5 py-3">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="mailto:ersafrexx@gmail.com"
                 className="btn-comic bg-comic-white text-comic-black px-5 py-3">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  )
}

export default Home
