import React from 'react'
import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { Briefcase, GraduationCap, Award, Heart, ChevronDown } from 'lucide-react'

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript'] },
    { category: 'Desain UI/UX', items: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'Design Systems'] },
    { category: 'Tools & Lainnya', items: ['Git', 'VS Code', 'Framer Motion', 'Responsive Design', 'Accessibility'] }
  ]

  const timeline = [
    { year: '2023', title: 'SMK Negeri 2 Magelang', company: 'Sekolah Menengah Kejuruan', icon: <GraduationCap className="w-5 h-5" /> },
    { year: '2020', title: 'SMP Negeri 1 Tegalrejo', company: 'Sekolah Menengah Pertama', icon: <GraduationCap className="w-5 h-5" /> }
  ]

  return (
    <div className="mx-auto max-w-5xl space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tentang <span className="gradient-text">Saya</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Frontend developer dan UI/UX designer yang passionate dalam menciptakan interface yang indah dan user-friendly.
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
          <Heart className="w-6 h-6 text-pink-500" />
          <h2 className="text-2xl font-bold">Cerita Saya</h2>
        </div>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            Saya adalah seorang frontend developer dan UI/UX designer dengan passion dalam menciptakan 
            pengalaman pengguna yang indah dan intuitif. Perjalanan saya dimulai dengan ketertarikan pada 
            desain dan berkembang menjadi kecintaan untuk mewujudkan desain tersebut dengan kode.
          </p>
          <p>
            Saya berspesialisasi dalam membangun aplikasi web modern dengan React dan TypeScript, sambil 
            memastikan setiap pixel selaras sempurna dengan visi desain. Saya percaya produk yang hebat 
            berada di persimpangan antara desain yang indah dan kode yang bersih dan performan.
          </p>
          <p>
            Ketika tidak sedang coding atau mendesain, Anda akan menemukan saya mengeksplorasi tren desain 
            terbaru, bereksperimen dengan animasi, atau berkontribusi untuk komunitas desain dan developer.
          </p>
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
          <Award className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold">Keahlian & Teknologi</h2>
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
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg text-sm cursor-default"
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
        <h2 className="text-2xl font-bold mb-8 text-center">Pendidikan</h2>
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
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.year}</div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.company}</p>
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
        <h2 className="text-2xl font-bold mb-8 text-center">Pertanyaan yang Sering Diajukan</h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          <Accordion.Item value="item-1" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>Teknologi apa yang kamu kuasai?</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              Saya berspesialisasi dalam React, TypeScript, Tailwind CSS, dan Next.js untuk pengembangan frontend. 
              Untuk desain UI/UX, saya bekerja dengan Figma, Adobe XD, dan membuat design systems. 
              Saya passionate dalam menciptakan user interface yang accessible, performan, dan indah.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>Apakah kamu menerima proyek freelance?</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              Ya! Saya selalu terbuka untuk proyek freelance yang menarik. Apakah kamu membutuhkan website 
              lengkap, desain UI/UX, atau bantuan dengan proyek React yang sudah ada, jangan ragu untuk 
              menghubungi saya di ersafrexx@gmail.com.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>Berapa lama waktu yang dibutuhkan untuk sebuah proyek?</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              Timeline proyek bervariasi berdasarkan lingkup dan kompleksitas. Landing page sederhana mungkin 
              memakan waktu 1-2 minggu, sedangkan aplikasi web lengkap bisa memakan waktu 4-8 minggu. Saya 
              selalu memberikan estimasi detail setelah memahami kebutuhan Anda.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4" className="glass rounded-xl overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all group">
                <span>Bagaimana proses desain kamu?</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-slate-600 dark:text-slate-400 data-[state=open]:animate-slideDown">
              Saya mengikuti proses desain yang berpusat pada pengguna: Riset → Wireframing → Prototyping → 
              Desain Visual → Development → Testing. Saya percaya pada desain iteratif dengan feedback loop 
              yang teratur untuk memastikan produk akhir memenuhi visi Anda dan kebutuhan pengguna.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </motion.section>
    </div>
  )
}

export default About
