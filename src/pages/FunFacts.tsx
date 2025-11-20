import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Coffee, Music, Gamepad2, Book, Camera, Plane, Code } from 'lucide-react'
import HeroPortrait from '../components/HeroPortrait'
import ScatteredPhotos from '../components/ScatteredPhotos'
import { useLanguage } from '../context/LanguageContext'

const FunFacts: React.FC = () => {
  const { t } = useLanguage()

  const facts = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: ' Fleksibel',
      description: 'Suka apa saja sesuai mood',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Music Enthusiast',
      description: 'Suka dengerin musik pas stress numpuk,apalagi lagunya kasih putih wak',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Gamer',
      description: 'MOBILE LEGENDS sejati dan pemuja roblox',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Bookworm',
      description: 'Suka baca buku yg relate aja',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Travel',
      description: 'Hobi keluar kesana kesini tapi nunggu duit dulu',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Food Fav',
      description: 'MIE AYAM SAMPING SMEA JUARAA BOLO',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Code at Night',
      description: 'Lebih produktif coding di malam hari. nokturnal jier!',
      color: 'from-slate-500 to-gray-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Open Source',
      description: 'Kontribusi ke open source projects saat ada waktu luang',
      color: 'from-pink-500 to-red-500'
    }
  ]

  return (
    <div className="mx-auto max-w-6xl space-y-12">
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
            Fun <span className="gradient-text">Facts</span> About Me
          </h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Beberapa hal menarik tentang saya di luar dunia programming
        </p>
      </motion.section>

      {/* Fun Facts Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-2xl p-6 hover:shadow-xl transition-all group"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${fact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <div className="text-white">
                {fact.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
              {fact.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {fact.description}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Random Facts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          <span className="gradient-text">Random Facts</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Favorite Quote</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                bunga indah selalu dipetik oleh manusia
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Perfect Day</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                ngoding,dengerin musik,ngegame,dan makan uenak
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Dream Project</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Membuat aplikasi yang bisa membantu banyak orang(saya usahakan)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">4</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1"> Goals</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Selalu pengen menjadi kebanggaan ibu dan prioritas keluarga
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Personal Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="glass rounded-2xl p-6 text-center">
          <div className="text-4xl font-bold gradient-text mb-2">70+</div>
          <div className="text-slate-600 dark:text-slate-400">Cups of Tea</div>
          <div className="text-xs text-slate-500 mt-1">per month</div>
        </div>
        <div className="glass rounded-2xl p-6 text-center">
          <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
          <div className="text-slate-600 dark:text-slate-400">Music Playing</div>
        </div>
        <div className="glass rounded-2xl p-6 text-center">
          <div className="text-4xl font-bold gradient-text mb-2">∞</div>
          <div className="text-slate-600 dark:text-slate-400">Pokoke Stecu</div>
          <div className="text-xs text-slate-500 mt-1">never ending</div>
        </div>
      </motion.section>
    </div>
  )
}

export default FunFacts
