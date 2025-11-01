import React from 'react'
import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { Briefcase, GraduationCap, Award, Heart, ChevronDown } from 'lucide-react'
import HeroPortrait from '../components/HeroPortrait'
import ScatteredPhotos from '../components/ScatteredPhotos'
import { useLanguage } from '../context/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()
  
  const skills = [
    { category: t('about.skills.programming'), items: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js'] },
    { category: t('about.skills.design'), items: ['Figma', 'Canva', 'Adobe XD', 'UI/UX Design'] },
    { category: t('about.skills.tools'), items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
    { category: t('about.skills.softskills'), items: ['Teamwork', 'Communication', 'Creativity', 'Problem Solving'] }
  ]

  const timeline = [
    { year: '2027', title: 'SMK NEGERI 2 MAGELANG', icon: <GraduationCap className="w-5 h-5" /> },
    { year: '2023', title: 'SMP NEGERI 1 TEGALREJO', icon: <GraduationCap className="w-5 h-5" /> }
  ]
  
  const personalValues = [
    { icon: '💪', label: t('about.values.diligent') },
    { icon: '🎨', label: t('about.values.creative') },
    { icon: '🔥', label: t('about.values.challenge') },
    { icon: '🤝', label: t('about.values.teamwork') }
  ]
  
  return (
    <div className="mx-auto max-w-5xl space-y-16">
      {/* Scattered photos background */}
      <ScatteredPhotos />
      
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex flex-col items-center gap-6 mb-4">
          <HeroPortrait size={220} />
          <h1 className="text-4xl md:text-5xl font-bold">
            {t('about.title')} <span className="gradient-text">Me</span>
          </h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {t('about.subtitle')}
        </p>
      </motion.section>

      {/* Bio */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-cyan-500" />
          <h2 className="text-2xl font-bold">{t('about.bio.title')}</h2>
        </div>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            {t('about.bio.p1')}
          </p>
          <p>
            {t('about.bio.p2')}
          </p>
          <p>
            {t('about.bio.p3')}
          </p>
        </div>
      </motion.section>

      {/* Hobbies & Goals */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-xl font-bold">{t('about.hobbies.title')}</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            {t('about.hobbies.desc')}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h2 className="text-xl font-bold">{t('about.goals.title')}</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            {t('about.goals.desc')}
          </p>
        </motion.section>
      </div>

      {/* Personal Values */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">{t('about.values.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">{value.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-teal-500" />
          <h2 className="text-2xl font-bold">{t('about.skills.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 gradient-text">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg text-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">{t('about.education.title')}</h2>
        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.year}</div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                {/* company removed for balance */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Accordion */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">{t('about.faq.title')}</h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          <Accordion.Item value="item-1" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>{t('about.faq.q1')}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              {t('about.faq.a1')}
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>{t('about.faq.q2')}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              {t('about.faq.a2')}
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>{t('about.faq.q3')}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              {t('about.faq.a3')}
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>{t('about.faq.q4')}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              {t('about.faq.a4')}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </motion.section>
    </div>
  )
}

export default About
