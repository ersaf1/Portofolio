import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Rocket, Check, MessageCircle, Palette, Code,
  Smartphone, Globe, Zap, Clock, DollarSign, Shield,
  Sparkles, Star, Mail, Send
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WA_NUMBER = '6282227166906'

const Order: React.FC = () => {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const orderWhatsApp = (pkgName: string, price: string) => {
    const msg = encodeURIComponent(`Halo Ersaf! Saya tertarik dengan paket *${pkgName}* (${price}).\n\nBisa info lebih lanjut? Terima kasih!`)
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  const packages = [
    {
      id: 'basic',
      name: t('order.pkg.basic.name'),
      type: t('order.pkg.basic.type'),
      desc: t('order.pkg.basic.desc'),
      price: 'Rp 1 Juta',
      color: 'card-comic-yellow',
      features: [
        t('order.pkg.basic.f1'), t('order.pkg.basic.f2'), t('order.pkg.basic.f3'),
        t('order.pkg.basic.f4'), t('order.pkg.basic.f5'), t('order.pkg.basic.f6'),
        t('order.pkg.basic.f7'), t('order.pkg.basic.f8'), t('order.pkg.basic.f9'),
        t('order.pkg.basic.f10'), t('order.pkg.basic.f11'), t('order.pkg.basic.f12'),
      ],
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      id: 'business',
      name: t('order.pkg.business.name'),
      type: t('order.pkg.business.type'),
      desc: t('order.pkg.business.desc'),
      price: 'Rp 3 Juta',
      color: 'card-comic-red',
      features: [
        t('order.pkg.business.f1'), t('order.pkg.business.f2'), t('order.pkg.business.f3'),
        t('order.pkg.business.f4'), t('order.pkg.business.f5'), t('order.pkg.business.f6'),
        t('order.pkg.business.f7'), t('order.pkg.business.f8'), t('order.pkg.business.f9'),
        t('order.pkg.business.f10'), t('order.pkg.business.f11'), t('order.pkg.business.f12'),
      ],
      icon: <Sparkles className="h-5 w-5" />,
      popular: true,
    },
    {
      id: 'professional',
      name: t('order.pkg.professional.name'),
      type: t('order.pkg.professional.type'),
      desc: t('order.pkg.professional.desc'),
      price: 'Rp 5 Juta',
      color: 'card-comic-black',
      features: [
        t('order.pkg.professional.f1'), t('order.pkg.professional.f2'), t('order.pkg.professional.f3'),
        t('order.pkg.professional.f4'), t('order.pkg.professional.f5'), t('order.pkg.professional.f6'),
        t('order.pkg.professional.f7'), t('order.pkg.professional.f8'), t('order.pkg.professional.f9'),
        t('order.pkg.professional.f10'), t('order.pkg.professional.f11'), t('order.pkg.professional.f12'),
        t('order.pkg.professional.f13'), t('order.pkg.professional.f14'),
      ],
      icon: <Star className="h-5 w-5" />,
    },
    {
      id: 'enterprise',
      name: t('order.pkg.enterprise.name'),
      type: t('order.pkg.enterprise.type'),
      desc: t('order.pkg.enterprise.desc'),
      price: 'Rp 12 Juta',
      color: 'card-comic-blue',
      features: [
        t('order.pkg.enterprise.f1'), t('order.pkg.enterprise.f2'), t('order.pkg.enterprise.f3'),
        t('order.pkg.enterprise.f4'), t('order.pkg.enterprise.f5'), t('order.pkg.enterprise.f6'),
        t('order.pkg.enterprise.f7'), t('order.pkg.enterprise.f8'), t('order.pkg.enterprise.f9'),
        t('order.pkg.enterprise.f10'), t('order.pkg.enterprise.f11'), t('order.pkg.enterprise.f12'),
        t('order.pkg.enterprise.f13'), t('order.pkg.enterprise.f14'), t('order.pkg.enterprise.f15'),
        t('order.pkg.enterprise.f16'),
      ],
      icon: <Zap className="h-5 w-5" />,
    },
  ]

  const steps = [
    { num: '01', icon: <MessageCircle className="h-5 w-5" />, title: t('order.step1.title'), desc: t('order.step1.desc'), color: 'card-comic-yellow' },
    { num: '02', icon: <Palette className="h-5 w-5" />, title: t('order.step2.title'), desc: t('order.step2.desc'), color: 'card-comic-red' },
    { num: '03', icon: <Code className="h-5 w-5" />, title: t('order.step3.title'), desc: t('order.step3.desc'), color: 'card-comic-black' },
    { num: '04', icon: <Globe className="h-5 w-5" />, title: t('order.step4.title'), desc: t('order.step4.desc'), color: 'bg-comic-white' },
  ]

  const faqItems = [
    { q: t('order.faq.q1'), a: t('order.faq.a1') },
    { q: t('order.faq.q2'), a: t('order.faq.a2') },
    { q: t('order.faq.q3'), a: t('order.faq.a3') },
    { q: t('order.faq.q4'), a: t('order.faq.a4') },
    { q: t('order.faq.q5'), a: t('order.faq.a5') },
  ]

  return (
    <div className="space-y-8 py-8">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="profile-card p-7 md:p-10 relative overflow-hidden">
        <div className="action-lines opacity-20" />
        <span className="onomatopoeia-pow absolute top-4 right-6 text-5xl z-10">ZAP!</span>
        <div className="relative z-10 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <span className="section-label"><Rocket className="w-3 h-3" /> {t('order.hero.label')}</span>
          <h1 className="mt-4 font-bangers text-[clamp(3rem,7vw,5.5rem)] text-comic-black tracking-tight leading-[0.9]">
            {t('order.hero.title1')}{' '}
            <span className="text-comic-red">{t('order.hero.title2')}</span>{' '}
            {t('order.hero.title3')}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-comic-black font-comic md:text-base">
            {t('order.hero.desc')}
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section>
        <span className="section-label mb-6 inline-block animate-fade-in-up"><Zap className="w-3 h-3" /> {t('order.steps.label')}</span>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`card-comic ${step.color} p-5 animate-fade-in-up`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="badge-comic">{step.num}</span>
                <div className="icon-box icon-box-yellow w-9 h-9">{step.icon}</div>
              </div>
              <h3 className="font-bangers text-lg text-comic-black tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-comic-black font-comic">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────── */}
      <section>
        <span className="section-label mb-6 inline-block animate-fade-in-up"><DollarSign className="w-3 h-3" /> {t('order.packages.label')}</span>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`card-comic ${pkg.color} p-5 flex flex-col animate-fade-in-up`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <div className="mb-3 text-center">
                  <span className="badge-comic badge-comic-yellow text-[10px] px-3 py-1 inline-block">
                    {t('order.popular')}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-bangers text-lg text-comic-black tracking-tight leading-tight">{pkg.name}</h3>
                <div className="font-mono text-[10px] text-comic-black opacity-50 uppercase tracking-wider mt-1">
                  {pkg.type}
                </div>
              </div>

              <div className="mb-4 bg-comic-red/10 border-2 border-comic-red rounded-md p-3 text-center">
                <span className="font-bangers text-3xl text-comic-black tracking-tight block leading-none">
                  {pkg.price}
                </span>
                <span className="text-[10px] font-comic text-comic-black opacity-50">
                  {t('order.perproject')}
                </span>
              </div>

              <p className="text-[11px] leading-relaxed text-comic-black font-comic mb-4">
                {pkg.desc}
              </p>

              <div className="space-y-2 mb-5 flex-1">
                {pkg.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-comic-red shrink-0 mt-0.5" />
                    <span className="text-[11px] font-comic text-comic-black leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Ersaf! Saya tertarik dengan paket *${pkg.name}* (${pkg.price}).\n\nBisa info lebih lanjut? Terima kasih!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-comic w-full text-sm py-2.5 bg-comic-yellow text-comic-black justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUE PROPS ───────────────────────────────── */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: <Clock className="h-5 w-5" />, title: t('order.value.fast.title'), desc: t('order.value.fast.desc'), color: 'card-comic-yellow' },
          { icon: <Shield className="h-5 w-5" />, title: t('order.value.quality.title'), desc: t('order.value.quality.desc'), color: 'card-comic-red' },
          { icon: <Smartphone className="h-5 w-5" />, title: t('order.value.mobile.title'), desc: t('order.value.mobile.desc'), color: 'card-comic-black' },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`card-comic ${item.color} p-5 flex items-start gap-4 animate-fade-in-up`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="icon-box icon-box-yellow shrink-0">{item.icon}</div>
            <div>
              <h3 className="font-bangers text-sm uppercase tracking-wider text-comic-black mb-1">{item.title}</h3>
              <p className="text-xs font-comic text-comic-black opacity-70">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section>
        <span className="section-label mb-6 inline-block animate-fade-in-up"><MessageCircle className="w-3 h-3" /> {t('order.faq.label')}</span>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="card-comic bg-comic-white animate-fade-in-up overflow-visible"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-bangers text-sm md:text-base text-comic-black tracking-tight">
                  {item.q}
                </span>
                <span className={`badge-comic ${openFaq === i ? 'badge-comic' : 'badge-comic-yellow'} shrink-0 text-xs w-8 h-8`}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="highlight-box">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="profile-card p-7 md:p-10 text-center relative overflow-hidden">
        <div className="action-lines opacity-15" />
        <span className="onomatopoeia-bam absolute bottom-4 left-6 text-4xl z-10">BAM!</span>
        <div className="relative z-10 animate-fade-in-up">
          <h2 className="font-bangers text-[clamp(2.2rem,5vw,4rem)] text-comic-black tracking-tight mb-4">
            {t('order.cta.title')} <span className="text-comic-red">{t('order.cta.title2')}</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-7 text-comic-black font-comic mb-6">
            {t('order.cta.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Ersaf! Saya ingin konsultasi tentang pembuatan website.')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-comic bg-comic-yellow text-comic-black"
            >
              <MessageCircle className="h-4 w-4" /> {t('order.cta.whatsapp')}
            </a>
            <a href="mailto:ersafrexx@gmail.com" className="btn-comic bg-comic-red text-white">
              <Mail className="h-4 w-4" /> {t('order.cta.email')}
            </a>
            <Link to="/projects" className="btn-comic bg-comic-white text-comic-black">
              <Globe className="h-4 w-4" /> {t('order.cta.work')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order
