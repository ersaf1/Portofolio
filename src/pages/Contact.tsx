import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send, CheckCircle, Github, Linkedin, Instagram, ArrowUpRight, PhoneCall, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const SOCIALS = [
  { icon: <Github className="w-4 h-4" />, href: 'https://github.com/ersaf1', label: 'GitHub', username: '@ersaf1', accent: 'card-comic-black' },
  { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/ersaf-arifin-57190b33b', label: 'LinkedIn', username: 'Ersaf Arifin', accent: 'card-comic-red' },
  { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/3rsapp', label: 'Instagram', username: '@3rsapp', accent: 'card-comic-yellow' },
]

function SocialLink({ s, delay }: { s: typeof SOCIALS[number]; delay: number }) {
  return (
    <a
      href={s.href} target="_blank" rel="noopener noreferrer"
      className={`card-comic ${s.accent} flex items-center gap-4 p-4 group bg-comic-white animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}>
      <div className="icon-box shrink-0 w-9 h-9 text-sm">{s.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="font-bangers text-xs uppercase tracking-wider text-comic-black">{s.label}</div>
        <div className="text-xs font-bold text-comic-black truncate">{s.username}</div>
      </div>
      <ArrowUpRight className="h-3.5 w-3.5 text-comic-black opacity-30 group-hover:opacity-100 shrink-0 transition-opacity" />
    </a>
  )
}

const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div className="space-y-8 py-8">

      {/* HERO */}
      <section className="profile-card p-7 md:p-10 relative overflow-hidden">
        <div className="action-lines opacity-20" />
        <span className="onomatopoeia-pow absolute top-4 right-6 text-5xl z-10">ZAP!</span>
        <div className="relative z-10 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <span className="section-label"><MessageCircle className="w-3 h-3" /> Get in touch</span>
          <h1 className="mt-4 font-bangers text-[clamp(3rem,7vw,5.5rem)] text-comic-black tracking-tight leading-[0.9]">
            {t('contact.title')}{' '}
            <span className="text-comic-red">{t('contact.title.highlight')}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-comic-black font-comic md:text-base">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">

        {/* LEFT COLUMN */}
        <div className="space-y-4">

          {/* Email card */}
          <a href="mailto:ersafrexx@gmail.com"
            className="card-comic card-comic-red p-5 flex items-center gap-4 group bg-comic-white animate-fade-in-up"
            style={{ animationDelay: '50ms' }}>
            <div className="icon-box icon-box-red shrink-0">
              <Mail className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bangers text-xs uppercase tracking-wider text-comic-black mb-1">Email</div>
              <div className="text-sm font-bold text-comic-black truncate">ersafrexx@gmail.com</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-comic-black opacity-30 group-hover:opacity-100 shrink-0 transition-opacity" />
          </a>

          {/* Phone card */}
          <a href="tel:+6282227166906"
            className="card-comic card-comic-yellow p-5 flex items-center gap-4 group bg-comic-white animate-fade-in-up"
            style={{ animationDelay: '75ms' }}>
            <div className="icon-box icon-box-yellow shrink-0">
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bangers text-xs uppercase tracking-wider text-comic-black mb-1">Phone</div>
              <div className="text-sm font-bold text-comic-black truncate">+62 822-2716-6906</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-comic-black opacity-30 group-hover:opacity-100 shrink-0 transition-opacity" />
          </a>

          {/* Response style card */}
          <div className="card-comic card-comic-yellow p-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start gap-4">
              <div className="icon-box shrink-0"><PhoneCall className="h-4 w-4" /></div>
              <div>
                <div className="font-bangers text-sm uppercase tracking-wider text-comic-black mb-2">Response style</div>
                <p className="text-xs leading-relaxed text-comic-black font-comic">
                  Best for freelance inquiries, collaborations, UI feedback, and portfolio discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="card-comic card-comic-black p-5 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="font-bangers text-sm uppercase tracking-wider text-comic-black mb-4">{t('contact.social.title')}</div>
            <div className="space-y-3">
              {SOCIALS.map((s, i) => (
                <SocialLink key={s.label} s={s} delay={180 + i * 60} />
              ))}
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="card-comic card-comic-black p-7 md:p-8 animate-fade-in-up" style={{ animationDelay: '120ms' }}>
          {submitted ? (
            <div className="flex min-h-[480px] flex-col items-center justify-center text-center animate-scale-in">
              <div className="icon-box icon-box-red w-20 h-20 mx-auto mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="font-bangers text-[clamp(2rem,4vw,3rem)] text-comic-black tracking-tight">
                {t('contact.form.success.title')}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-comic-black font-comic">
                {t('contact.form.success.message')}
              </p>
              <button onClick={() => setSubmitted(false)}
                className="btn-comic mt-6 bg-comic-yellow text-comic-black px-5 py-3">
                {t('contact.form.success.button')}
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault(); setError(null); setLoading(true)
                if (!formRef.current) return
                try {
                  await emailjs.sendForm('service_17875m8', 'template_a8pxdjm', formRef.current, '9zbYFy_ilaYAZac-J')
                  setSubmitted(true); formRef.current.reset()
                } catch {
                  setError('Gagal mengirim. Kirim langsung ke ersafrexx@gmail.com')
                } finally { setLoading(false) }
              }}
              className="space-y-5"
            >
              <div>
                <span className="section-label block mb-3">Send a message</span>
                <h2 className="font-bangers text-[clamp(2rem,4vw,3.2rem)] text-comic-black tracking-tight">
                  A more thoughtful start to the conversation.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-bangers text-xs uppercase tracking-wider text-comic-black block">
                    {t('contact.form.name')}
                  </label>
                  <input name="name" required className="input-comic" />
                </div>
                <div className="space-y-2">
                  <label className="font-bangers text-xs uppercase tracking-wider text-comic-black block">
                    {t('contact.form.email')}
                  </label>
                  <input type="email" name="email" required
                    placeholder={t('contact.form.email.placeholder')}
                    className="input-comic" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bangers text-xs uppercase tracking-wider text-comic-black block">
                  {t('contact.form.message')}
                </label>
                <textarea name="message" required rows={7}
                  placeholder={t('contact.form.message.placeholder')}
                  className="input-comic resize-none min-h-[200px]" />
              </div>

              <div className="highlight-box">
                Share the project type, timeline, and vibe you want. The clearer the brief, the better the direction.
              </div>

              <button type="submit" disabled={loading}
                className="btn-comic w-full bg-comic-red text-white px-6 py-4 disabled:opacity-50">
                <Send className="h-4 w-4" />
                {loading ? 'Mengirim...' : t('contact.form.submit')}
              </button>

              {error && (
                <p className="text-center text-xs font-mono text-comic-red">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
