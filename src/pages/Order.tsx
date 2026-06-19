import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Rocket, Check, MessageCircle, Palette, Code,
  Smartphone, Globe, Zap, Clock, DollarSign, Shield,
  Sparkles, Star, Mail
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WA_NUMBER = '6282227166906'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Order: React.FC = () => {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const packages = [
    {
      id: 'basic', name: t('order.pkg.basic.name'), type: t('order.pkg.basic.type'),
      desc: t('order.pkg.basic.desc'), price: 'Rp 1 Juta', color: 'card-comic-yellow',
      features: [
        t('order.pkg.basic.f1'), t('order.pkg.basic.f2'), t('order.pkg.basic.f3'),
        t('order.pkg.basic.f4'), t('order.pkg.basic.f5'), t('order.pkg.basic.f6'),
        t('order.pkg.basic.f7'), t('order.pkg.basic.f8'), t('order.pkg.basic.f9'),
        t('order.pkg.basic.f10'), t('order.pkg.basic.f11'), t('order.pkg.basic.f12'),
      ],
    },
    {
      id: 'business', name: t('order.pkg.business.name'), type: t('order.pkg.business.type'),
      desc: t('order.pkg.business.desc'), price: 'Rp 3 Juta', color: 'card-comic-red',
      features: [
        t('order.pkg.business.f1'), t('order.pkg.business.f2'), t('order.pkg.business.f3'),
        t('order.pkg.business.f4'), t('order.pkg.business.f5'), t('order.pkg.business.f6'),
        t('order.pkg.business.f7'), t('order.pkg.business.f8'), t('order.pkg.business.f9'),
        t('order.pkg.business.f10'), t('order.pkg.business.f11'), t('order.pkg.business.f12'),
      ],
      popular: true,
    },
    {
      id: 'professional', name: t('order.pkg.professional.name'), type: t('order.pkg.professional.type'),
      desc: t('order.pkg.professional.desc'), price: 'Rp 5 Juta', color: 'card-comic-black',
      features: [
        t('order.pkg.professional.f1'), t('order.pkg.professional.f2'), t('order.pkg.professional.f3'),
        t('order.pkg.professional.f4'), t('order.pkg.professional.f5'), t('order.pkg.professional.f6'),
        t('order.pkg.professional.f7'), t('order.pkg.professional.f8'), t('order.pkg.professional.f9'),
        t('order.pkg.professional.f10'), t('order.pkg.professional.f11'), t('order.pkg.professional.f12'),
        t('order.pkg.professional.f13'), t('order.pkg.professional.f14'),
      ],
    },
    {
      id: 'enterprise', name: t('order.pkg.enterprise.name'), type: t('order.pkg.enterprise.type'),
      desc: t('order.pkg.enterprise.desc'), price: 'Rp 12 Juta', color: 'card-comic-blue',
      features: [
        t('order.pkg.enterprise.f1'), t('order.pkg.enterprise.f2'), t('order.pkg.enterprise.f3'),
        t('order.pkg.enterprise.f4'), t('order.pkg.enterprise.f5'), t('order.pkg.enterprise.f6'),
        t('order.pkg.enterprise.f7'), t('order.pkg.enterprise.f8'), t('order.pkg.enterprise.f9'),
        t('order.pkg.enterprise.f10'), t('order.pkg.enterprise.f11'), t('order.pkg.enterprise.f12'),
        t('order.pkg.enterprise.f13'), t('order.pkg.enterprise.f14'), t('order.pkg.enterprise.f15'),
        t('order.pkg.enterprise.f16'),
      ],
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
    <div className="space-y-12 py-8">

      {/* ── HERO ─────────────────────────────────────── */}
      <motion.section
        className="profile-card p-7 md:p-10 relative overflow-hidden"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp} custom={0}
      >
        <div className="action-lines opacity-20" />
        <motion.span
          className="onomatopoeia-pow absolute top-4 right-6 text-5xl z-10"
          animate={{ y: [0, -10, 0], rotate: [8, 12, 8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >ZAP!</motion.span>
        <motion.span
          className="onomatopoeia-bam absolute bottom-6 left-8 text-3xl z-10 opacity-30"
          animate={{ y: [0, -8, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >BOOM!</motion.span>

        <div className="relative z-10 max-w-3xl">
          <motion.span className="section-label inline-block" variants={fadeUp} custom={1}>
            <Rocket className="w-3 h-3" /> {t('order.hero.label')}
          </motion.span>
          <h1 className="mt-4 font-bangers text-[clamp(3rem,7vw,5.5rem)] text-comic-black tracking-tight leading-[0.9]">
            <motion.span variants={fadeUp} custom={2} className="inline-block">{t('order.hero.title1')}</motion.span>{' '}
            <motion.span variants={scaleIn} custom={3} className="text-comic-red inline-block">{t('order.hero.title2')}</motion.span>{' '}
            <motion.span variants={fadeUp} custom={4} className="inline-block">{t('order.hero.title3')}</motion.span>
          </h1>
          <motion.p className="mt-5 max-w-2xl text-sm leading-7 text-comic-black font-comic md:text-base" variants={fadeUp} custom={5}>
            {t('order.hero.desc')}
          </motion.p>
        </div>
      </motion.section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section>
        <motion.span
          className="section-label mb-6 inline-block"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
        >
          <Zap className="w-3 h-3" /> {t('order.steps.label')}
        </motion.span>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={`card-comic ${step.color} p-5 hover:-translate-y-2 hover:shadow-[8px_8px_0_#111] transition-all duration-300 group cursor-default`}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn} custom={i}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.span
                  className="badge-comic"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >{step.num}</motion.span>
                <motion.div
                  className="icon-box icon-box-yellow w-9 h-9"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >{step.icon}</motion.div>
              </div>
              <h3 className="font-bangers text-lg text-comic-black tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-comic-black font-comic">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────── */}
      <section>
        <motion.span
          className="section-label mb-6 inline-block"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
        >
          <DollarSign className="w-3 h-3" /> {t('order.packages.label')}
        </motion.span>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className={`card-comic ${pkg.color} p-5 flex flex-col h-full hover:-translate-y-2 hover:shadow-[8px_8px_0_#111] transition-all duration-300 group`}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp} custom={i}
            >
              {pkg.popular && (
                <div className="mb-3 text-center">
                  <motion.span
                    className="badge-comic badge-comic-yellow text-[10px] px-3 py-1 inline-block"
                    animate={{ boxShadow: ['0 0 0 0 rgba(255,215,0,0.4)', '0 0 0 8px rgba(255,215,0,0)', '0 0 0 0 rgba(255,215,0,0.4)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t('order.popular')}
                  </motion.span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-bangers text-lg text-comic-black tracking-tight leading-tight group-hover:text-comic-red transition-colors duration-300">{pkg.name}</h3>
                <div className="font-mono text-[10px] text-comic-black opacity-50 uppercase tracking-wider mt-1">
                  {pkg.type}
                </div>
              </div>

              <motion.div
                className="mb-4 bg-comic-red/10 border-2 border-comic-red rounded-md p-3 text-center"
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(232,25,44,0.25)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="font-bangers text-3xl text-comic-black tracking-tight block leading-none">
                  {pkg.price}
                </span>
                <span className="text-[10px] font-comic text-comic-black opacity-50">
                  {t('order.perproject')}
                </span>
              </motion.div>

              <p className="text-[11px] leading-relaxed text-comic-black font-comic mb-4">
                {pkg.desc}
              </p>

              <div className="space-y-2 mb-5 flex-1">
                {pkg.features.map((f, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: j * 0.04 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.4, rotate: 15 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <Check className="h-3.5 w-3.5 text-comic-red shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-[11px] font-comic text-comic-black leading-snug">{f}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Ersaf! Saya tertarik dengan paket *${pkg.name}* (${pkg.price}).\n\nBisa info lebih lanjut? Terima kasih!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-comic w-full text-sm py-2.5 bg-comic-yellow text-comic-black justify-center"
                whileHover={{ scale: 1.03, backgroundColor: '#16a34a', color: '#fff', boxShadow: '0 0 24px rgba(22,163,74,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── VALUE PROPS ───────────────────────────────── */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: <Clock className="h-5 w-5" />, title: t('order.value.fast.title'), desc: t('order.value.fast.desc'), color: 'card-comic-yellow' },
          { icon: <Shield className="h-5 w-5" />, title: t('order.value.quality.title'), desc: t('order.value.quality.desc'), color: 'card-comic-red' },
          { icon: <Smartphone className="h-5 w-5" />, title: t('order.value.mobile.title'), desc: t('order.value.mobile.desc'), color: 'card-comic-black' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className={`card-comic ${item.color} p-5 flex items-start gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0_#111] transition-all duration-300 group`}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn} custom={i}
          >
            <motion.div
              className="icon-box icon-box-yellow shrink-0"
              whileHover={{ rotate: 20, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >{item.icon}</motion.div>
            <div>
              <h3 className="font-bangers text-sm uppercase tracking-wider text-comic-black mb-1 group-hover:text-comic-red transition-colors duration-200">{item.title}</h3>
              <p className="text-xs font-comic text-comic-black opacity-70">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section>
        <motion.span
          className="section-label mb-6 inline-block"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
        >
          <MessageCircle className="w-3 h-3" /> {t('order.faq.label')}
        </motion.span>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className="card-comic bg-comic-white overflow-visible group"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={slideLeft} custom={i}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-bangers text-sm md:text-base text-comic-black tracking-tight group-hover:text-comic-red transition-colors duration-200">
                  {item.q}
                </span>
                <motion.span
                  className="badge-comic shrink-0 text-xs w-8 h-8"
                  animate={{ rotate: openFaq === i ? 45 : 0, backgroundColor: openFaq === i ? '#E8192C' : '#FFD700', color: openFaq === i ? '#fff' : '#111' }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >+</motion.span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <motion.div
                        className="highlight-box"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      >
                        {item.a}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <motion.section
        className="profile-card p-7 md:p-10 text-center relative overflow-hidden"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn} custom={0}
      >
        <div className="action-lines opacity-15" />
        <motion.span
          className="onomatopoeia-bam absolute bottom-4 left-6 text-4xl z-10"
          animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >BAM!</motion.span>
        <motion.span
          className="onomatopoeia-pow absolute top-6 right-8 text-3xl z-10 opacity-40"
          animate={{ y: [0, -8, 0], rotate: [8, 12, 8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >POW!</motion.span>

        <div className="relative z-10">
          <h2 className="font-bangers text-[clamp(2.2rem,5vw,4rem)] text-comic-black tracking-tight mb-4">
            <motion.span variants={fadeUp} custom={1} className="inline-block">{t('order.cta.title')}</motion.span>{' '}
            <motion.span variants={scaleIn} custom={2} className="text-comic-red inline-block">{t('order.cta.title2')}</motion.span>
          </h2>
          <motion.p className="max-w-xl mx-auto text-sm leading-7 text-comic-black font-comic mb-6" variants={fadeUp} custom={3}>
            {t('order.cta.desc')}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Ersaf! Saya ingin konsultasi tentang pembuatan website.')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-comic bg-comic-yellow text-comic-black"
              variants={fadeUp} custom={4}
              whileHover={{ scale: 1.05, backgroundColor: '#16a34a', color: '#fff', boxShadow: '0 0 30px rgba(22,163,74,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-4 w-4" /> {t('order.cta.whatsapp')}
            </motion.a>
            <motion.a
              href="mailto:ersafrexx@gmail.com"
              className="btn-comic bg-comic-red text-white"
              variants={fadeUp} custom={5}
              whileHover={{ scale: 1.05, backgroundColor: '#111', boxShadow: '0 0 30px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4" /> {t('order.cta.email')}
            </motion.a>
            <motion.div variants={fadeUp} custom={6}>
              <Link to="/projects" className="btn-comic bg-comic-white text-comic-black">
                <Globe className="h-4 w-4" /> {t('order.cta.work')}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Order
