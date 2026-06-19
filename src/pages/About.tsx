import React, { useRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { GraduationCap, Award, Heart, ChevronDown, Sparkles, Orbit, Code2, Palette, Wrench } from 'lucide-react'
import HeroPortrait from '../components/HeroPortrait'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const SkillBar: React.FC<{ name: string; level: number; delay?: number }> = ({ name, level }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-comic-black">{name}</span>
        <span className="font-mono text-xs text-comic-black opacity-60">{level}%</span>
      </div>
      <div className="h-3 comic-border bg-comic-cream overflow-hidden">
        <div
          className="h-full bg-comic-red"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const About: React.FC = () => {
  const { t } = useLanguage()

  const skillGroups = [
    {
      icon: <Code2 className="w-4 h-4" />,
      label: t('about.skills.programming'),
      accent: 'card-comic-red',
      iconClass: 'icon-box-red',
      skills: [
        { name: 'React / TypeScript', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Node.js', level: 60 },
        { name: 'Python', level: 55 },
      ],
    },
    {
      icon: <Palette className="w-4 h-4" />,
      label: t('about.skills.design'),
      accent: 'card-comic-yellow',
      iconClass: '',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'UI/UX Design', level: 70 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Adobe XD', level: 55 },
      ],
    },
    {
      icon: <Wrench className="w-4 h-4" />,
      label: t('about.skills.tools'),
      accent: 'card-comic-black',
      iconClass: 'icon-box-black',
      skills: [
        { name: 'Git / GitHub', level: 80 },
        { name: 'Vite', level: 82 },
        { name: 'VS Code', level: 92 },
        { name: 'Postman', level: 65 },
      ],
    },
  ]

  const timeline = [
    { year: '2024 - now', title: 'SMK Negeri 2 Magelang', desc: 'Pengembangan Perangkat Lunak & Gim (PPLG)', note: 'Focused on software craft, collaborative builds, and modern web practice.' },
    { year: '2021 - 2023', title: 'SMP Negeri 1 Tegalrejo', desc: 'Lulus dengan prestasi', note: 'Built the habit of learning fast and turning curiosity into projects.' },
  ]

  const softSkills = ['Teamwork', 'Communication', 'Creativity', 'Problem Solving', 'Fast Learner', 'Consistency']

  const values = [
    { icon: '💪', label: t('about.values.diligent') },
    { icon: '🎨', label: t('about.values.creative') },
    { icon: '🔥', label: t('about.values.challenge') },
    { icon: '🤝', label: t('about.values.teamwork') },
  ]

  const faqs = [
    { q: t('about.faq.q1'), a: t('about.faq.a1') },
    { q: t('about.faq.q2'), a: t('about.faq.a2') },
    { q: t('about.faq.q3'), a: t('about.faq.a3') },
    { q: t('about.faq.q4'), a: t('about.faq.a4') },
  ]

  return (
    <div className="space-y-8 py-8">

      {/* ── HERO CARD ──────────────────────────────── */}
      <ScrollReveal>
        <section className="profile-card p-7 md:p-10">
          <div className="action-lines opacity-30" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">

            <div className="lg:flex-1">
              <span className="section-label">Who I am</span>
              <h1 className="mt-4 font-bangers text-[clamp(2.8rem,6vw,5.5rem)] text-comic-black tracking-tight leading-[0.9]">
                Building my craft with patience, curiosity, and a sharper eye for detail.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-comic-black font-comic md:text-base">
                {t('about.subtitle')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {values.map((v) => (
                  <span key={v.icon} className="skill-pill">
                    <span>{v.icon}</span>{v.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini bento */}
            <div className="grid grid-cols-2 gap-3 lg:w-[340px] lg:shrink-0">
              <div className="card-comic col-span-2 flex items-center justify-center p-4 bg-comic-cream min-h-[180px]">
                <HeroPortrait size={160} />
              </div>
              <div className="card-comic card-comic-yellow p-4">
                <div className="icon-box mb-3"><Sparkles className="h-4 w-4" /></div>
                <div className="font-bangers text-sm text-comic-black">Creative focus</div>
                <p className="mt-1 text-xs text-comic-black font-comic leading-relaxed opacity-70">Premium, readable, emotionally intentional UI.</p>
              </div>
              <div className="card-comic card-comic-red p-4">
                <div className="icon-box icon-box-red mb-3"><Orbit className="h-4 w-4" /></div>
                <div className="font-bangers text-sm text-comic-black">Workflow</div>
                <p className="mt-1 text-xs text-comic-black font-comic leading-relaxed opacity-70">Build, test, refine, sand details until right.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── BIO + SOFT SKILLS ─────────────────────────── */}
      <ScrollReveal>
        <section className="grid gap-4 lg:grid-cols-[1fr_300px]">

          <div className="card-comic card-comic-black p-7 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="icon-box"><Heart className="h-4 w-4" /></div>
              <span className="font-bangers text-sm uppercase tracking-wider text-comic-black">{t('about.bio.title')}</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[t('about.bio.p1'), t('about.bio.p2'), t('about.bio.p3')].map((para, i) => (
                <div key={i} className="card-comic p-5 bg-comic-white">
                  <div className="badge-comic badge-comic-yellow mb-3">0{i + 1}</div>
                  <p className="text-sm leading-7 text-comic-black font-comic">{para}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-comic card-comic-yellow p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="icon-box"><Award className="h-4 w-4" /></div>
              <span className="font-bangers text-sm uppercase tracking-wider text-comic-black">{t('about.skills.softskills')}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {softSkills.map((skill) => (
                <div key={skill}
                  className="card-comic p-3 text-xs font-bold text-comic-black bg-comic-white text-center font-bangers tracking-wide">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── SKILLS ───────────────────────────────────── */}
      <ScrollReveal>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="icon-box icon-box-red"><Award className="h-4 w-4" /></div>
            <span className="font-bangers text-sm uppercase tracking-wider text-comic-black">{t('about.skills.title')}</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <ScrollReveal key={group.label} delay={i * 120}>
                <div className={`card-comic ${group.accent} p-6 md:p-7`}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`icon-box ${group.iconClass}`}>{group.icon}</div>
                    <span className="font-bangers text-sm uppercase tracking-wider text-comic-black">{group.label}</span>
                  </div>
                  <div className="space-y-4">
                    {group.skills.map((sk) => (
                      <SkillBar key={sk.name} name={sk.name} level={sk.level} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── HOBBIES + EDUCATION ────────────────────────── */}
      <ScrollReveal>
        <section className="grid gap-4 lg:grid-cols-2">

          <div className="card-comic card-comic-red p-7 md:p-8">
            <span className="section-label">Hobbies</span>
            <h2 className="mt-4 font-bangers text-[clamp(2rem,4vw,3.2rem)] text-comic-black tracking-tight">
              Process matters as much as output.
            </h2>
            <p className="mt-4 text-sm leading-7 text-comic-black font-comic">{t('about.hobbies.desc')}</p>
            <div className="my-6 border-t-4 border-comic-black" />
            <span className="section-label">Goals</span>
            <p className="mt-4 text-sm leading-7 text-comic-black font-comic">{t('about.goals.desc')}</p>
          </div>

          <div className="card-comic card-comic-yellow p-7 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="icon-box"><GraduationCap className="h-4 w-4" /></div>
              <span className="font-bangers text-sm uppercase tracking-wider text-comic-black">{t('about.education.title')}</span>
            </div>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 100}>
                  <div className="card-comic p-5 bg-comic-white relative pl-10">
                    <span className="absolute left-4 top-6 w-3 h-3 bg-comic-red comic-border block" />
                    <div className="badge-comic badge-comic-black mb-3 text-xs">{item.year}</div>
                    <h3 className="font-bangers text-lg text-comic-black tracking-tight">{item.title}</h3>
                    <p className="text-sm text-comic-black font-comic mt-1">{item.desc}</p>
                    <p className="mt-2 text-xs text-comic-black font-comic opacity-60 leading-relaxed">{item.note}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FAQ ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="card-comic card-comic-black p-7 md:p-8">
          <span className="section-label mb-6 block">{t('about.faq.title')}</span>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="card-comic bg-comic-white overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left font-bold text-comic-black hover:text-comic-red transition-colors">
                    <span className="text-sm">{faq.q}</span>
                    <ChevronDown className="ml-4 h-4 w-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-5 text-sm leading-7 text-comic-black font-comic data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp border-t-2 border-comic-black pt-4">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>
      </ScrollReveal>
    </div>
  )
}

export default About
