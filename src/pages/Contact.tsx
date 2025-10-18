import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, CheckCircle, Github, Linkedin, Instagram } from 'lucide-react'
import HeroPortrait from '../components/HeroPortrait'
import ScatteredPhotos from '../components/ScatteredPhotos'
import { useLanguage } from '../context/LanguageContext'

const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mx-auto max-w-5xl space-y-12">
      {/* Scattered photos background */}
      <ScatteredPhotos />
      
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex flex-col items-center gap-6 mb-2">
          <HeroPortrait size={180} />
          <h1 className="text-4xl md:text-5xl font-bold">
          {t('contact.title')} <span className="gradient-text">{t('contact.title.highlight')}</span>
          </h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">{t('contact.info.title')}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('contact.info.description')}
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ersafrexx@gmail.com"
                className="flex items-center gap-3 p-4 glass rounded-xl hover:shadow-lg transition-all group"
              >
                <Mail className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                  <div className="font-medium">ersafrexx@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                {t('contact.social.title')}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ersaf1', label: t('contact.social.github'), username: '@ersaf1' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: t('contact.social.linkedin'), username: 'Ersaf Sirazi Arifin' },
                  { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/3rsapp', label: t('contact.social.instagram'), username: '@3rsapp' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 glass rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="text-purple-500 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{social.label}</div>
                      <div className="font-medium">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t('contact.form.success.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {t('contact.form.success.message')}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 glass rounded-xl hover:shadow-lg transition-all"
              >
                {t('contact.form.success.button')}
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {t('contact.form.submit')}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
