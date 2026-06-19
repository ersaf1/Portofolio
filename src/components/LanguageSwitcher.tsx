import React from 'react'
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
        <button
          className="flex items-center gap-2 px-3 py-2 font-bold text-sm comic-border bg-comic-yellow hover:scale-105 active:scale-95 transition-transform"
          aria-label="Select language"
        >
          <Globe className="w-4 h-4 text-comic-black" />
          <span className="text-sm font-bold text-comic-black">
            {currentLang?.flag} {currentLang?.name}
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="comic-panel bg-comic-cream p-2 min-w-[180px] z-50"
          sideOffset={5}
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="px-4 py-2 cursor-pointer outline-none flex items-center justify-between gap-3 transition-all hover:bg-comic-yellow font-bold text-sm text-comic-black"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
              {language === lang.code && (
                <Check className="w-4 h-4 text-comic-red" />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LanguageSwitcher
