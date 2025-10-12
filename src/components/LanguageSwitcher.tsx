import React from 'react'
import { motion } from 'framer-motion'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Globe, Check } from 'lucide-react'
import { useLanguage, Language } from '../context/LanguageContext'

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'id' as Language, name: 'Indonesia', flag: '🇮🇩' }
]

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const currentLang = languages.find(l => l.code === language)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-slate-700/40 transition-all"
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">
            {currentLang?.flag} {currentLang?.name}
          </span>
        </motion.button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="glass rounded-xl p-2 min-w-[180px] shadow-2xl z-50"
          sideOffset={5}
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-slate-700/60 cursor-pointer outline-none flex items-center justify-between gap-3 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </div>
              {language === lang.code && (
                <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LanguageSwitcher
