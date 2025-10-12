import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'id'

type Translations = {
  [key: string]: {
    en: string
    id: string
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Semua terjemahan aplikasi
const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', id: 'Beranda' },
  'nav.about': { en: 'About', id: 'Tentang' },
  'nav.contact': { en: 'Contact', id: 'Kontak' },
  
  // Home Page
  'home.greeting': { en: "Hi, I'm", id: 'Halo, Saya' },
  'home.name': { en: 'Ersaf Sirazi Arifin', id: 'Ersaf Sirazi Arifin' },
  'home.role1': { en: 'Frontend Developer', id: 'Frontend Developer' },
  'home.role2': { en: 'UI/UX Designer', id: 'Desainer UI/UX' },
  'home.role3': { en: 'Creative Designer', id: 'Desainer Kreatif' },
  'home.role4': { en: 'React Specialist', id: 'Spesialis React' },
  'home.description': { 
    en: 'Crafting beautiful and intuitive user interfaces with React and modern design tools. Passionate about creating seamless user experiences and pixel-perfect designs.',
    id: 'Membuat antarmuka pengguna yang indah dan intuitif dengan React dan tools desain modern. Passionate dalam menciptakan pengalaman pengguna yang mulus dan desain yang pixel-perfect.'
  },
  'home.cta.gallery': { en: 'View Gallery', id: 'Lihat Galeri' },
  'home.cta.contact': { en: 'Get in Touch', id: 'Hubungi Saya' },
  'home.whatido.title': { en: 'What I Do', id: 'Apa yang Saya Lakukan' },
  'home.feature1.title': { en: 'Frontend Development', id: 'Pengembangan Frontend' },
  'home.feature1.desc': { 
    en: 'Building responsive, performant web applications with React, TypeScript, and modern tools.',
    id: 'Membangun aplikasi web yang responsif dan performan dengan React, TypeScript, dan tools modern.'
  },
  'home.feature2.title': { en: 'UI/UX Design', id: 'Desain UI/UX' },
  'home.feature2.desc': { 
    en: 'Designing beautiful, intuitive interfaces that users love using Figma and design systems.',
    id: 'Mendesain antarmuka yang indah dan intuitif yang disukai pengguna menggunakan Figma dan design systems.'
  },
  'home.feature3.title': { en: 'User Experience', id: 'Pengalaman Pengguna' },
  'home.feature3.desc': { 
    en: 'Creating seamless, accessible experiences optimized for all devices and users.',
    id: 'Menciptakan pengalaman yang mulus dan accessible yang dioptimalkan untuk semua perangkat dan pengguna.'
  },
  'home.cta.title': { en: "Let's Create Something Beautiful", id: 'Mari Buat Sesuatu yang Indah' },
  'home.cta.description': { 
    en: "I'm always interested in hearing about new design and development projects. Let's connect and bring your ideas to life!",
    id: 'Saya selalu tertarik mendengar tentang proyek desain dan pengembangan baru. Mari terhubung dan wujudkan ide Anda!'
  },
  
  // About Page
  'about.title': { en: 'About', id: 'Tentang' },
  'about.me': { en: 'Me', id: 'Saya' },
  'about.intro': {
    en: 'Frontend developer and UI/UX designer who is passionate about creating beautiful and user-friendly interfaces.',
    id: 'Frontend developer dan UI/UX designer yang passionate dalam menciptakan interface yang indah dan user-friendly.'
  },
  'about.bio.title': { en: 'My Story', id: 'Cerita Saya' },
  'about.bio.p1': {
    en: 'I am a frontend developer and UI/UX designer with a passion for creating beautiful and intuitive user experiences. My journey started with an interest in design and evolved into a love for bringing those designs to life with code.',
    id: 'Saya adalah seorang frontend developer dan UI/UX designer dengan passion dalam menciptakan pengalaman pengguna yang indah dan intuitif. Perjalanan saya dimulai dengan ketertarikan pada desain dan berkembang menjadi kecintaan untuk mewujudkan desain tersebut dengan kode.'
  },
  'about.bio.p2': {
    en: 'I specialize in building modern web applications with React and TypeScript, while ensuring every pixel is perfectly aligned with the design vision. I believe great products live at the intersection of beautiful design and clean, performant code.',
    id: 'Saya berspesialisasi dalam membangun aplikasi web modern dengan React dan TypeScript, sambil memastikan setiap pixel selaras sempurna dengan visi desain. Saya percaya produk yang hebat berada di persimpangan antara desain yang indah dan kode yang bersih dan performan.'
  },
  'about.bio.p3': {
    en: "When I'm not coding or designing, you'll find me exploring the latest design trends, experimenting with animations, or contributing to the design and developer community.",
    id: 'Ketika tidak sedang coding atau mendesain, Anda akan menemukan saya mengeksplorasi tren desain terbaru, bereksperimen dengan animasi, atau berkontribusi untuk komunitas desain dan developer.'
  },
  'about.skills.title': { en: 'Skills & Technologies', id: 'Keahlian & Teknologi' },
  'about.skills.frontend': { en: 'Frontend', id: 'Frontend' },
  'about.skills.design': { en: 'UI/UX Design', id: 'Desain UI/UX' },
  'about.skills.tools': { en: 'Tools & Others', id: 'Tools & Lainnya' },
  'about.education.title': { en: 'Education', id: 'Pendidikan' },
  'about.faq.title': { en: 'Frequently Asked Questions', id: 'Pertanyaan yang Sering Diajukan' },
  'about.faq.q1': { en: 'What technologies do you master?', id: 'Teknologi apa yang kamu kuasai?' },
  'about.faq.a1': {
    en: 'I specialize in React, TypeScript, Tailwind CSS, and Next.js for frontend development. For UI/UX design, I work with Figma, Adobe XD, and create design systems. I am passionate about creating accessible, performant, and beautiful user interfaces.',
    id: 'Saya berspesialisasi dalam React, TypeScript, Tailwind CSS, dan Next.js untuk pengembangan frontend. Untuk desain UI/UX, saya bekerja dengan Figma, Adobe XD, dan membuat design systems. Saya passionate dalam menciptakan user interface yang accessible, performan, dan indah.'
  },
  'about.faq.q2': { en: 'Do you accept freelance projects?', id: 'Apakah kamu menerima proyek freelance?' },
  'about.faq.a2': {
    en: "Yes! I'm always open to interesting freelance projects. Whether you need a full website, UI/UX design, or help with an existing React project, feel free to contact me at ersafrexx@gmail.com.",
    id: 'Ya! Saya selalu terbuka untuk proyek freelance yang menarik. Apakah kamu membutuhkan website lengkap, desain UI/UX, atau bantuan dengan proyek React yang sudah ada, jangan ragu untuk menghubungi saya di ersafrexx@gmail.com.'
  },
  'about.faq.q3': { en: 'How long does a project take?', id: 'Berapa lama waktu yang dibutuhkan untuk sebuah proyek?' },
  'about.faq.a3': {
    en: 'Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a full web application could take 4-8 weeks. I always provide detailed estimates after understanding your requirements.',
    id: 'Timeline proyek bervariasi berdasarkan lingkup dan kompleksitas. Landing page sederhana mungkin memakan waktu 1-2 minggu, sedangkan aplikasi web lengkap bisa memakan waktu 4-8 minggu. Saya selalu memberikan estimasi detail setelah memahami kebutuhan Anda.'
  },
  'about.faq.q4': { en: 'What is your design process?', id: 'Bagaimana proses desain kamu?' },
  'about.faq.a4': {
    en: 'I start by understanding your goals and users, then create wireframes and prototypes. After feedback, I refine the design and create high-fidelity mockups. Finally, I develop the design into a functional, responsive application.',
    id: 'Saya mulai dengan memahami tujuan dan pengguna Anda, lalu membuat wireframe dan prototype. Setelah feedback, saya memperbaiki desain dan membuat mockup high-fidelity. Akhirnya, saya mengembangkan desain menjadi aplikasi yang fungsional dan responsif.'
  },
  
  // Contact Page
  'contact.title': { en: 'Get In', id: 'Hubungi' },
  'contact.title.highlight': { en: 'Touch', id: 'Saya' },
  'contact.subtitle': {
    en: "Have a design project or need a frontend developer? I'd love to hear from you!",
    id: 'Punya proyek desain atau butuh frontend developer? Saya ingin mendengar dari Anda!'
  },
  'contact.info.title': { en: "Let's Talk", id: 'Mari Bicara' },
  'contact.info.description': {
    en: "Whether you have a design project, need a frontend developer, or just want to connect, feel free to reach out. I'll get back to you as soon as possible!",
    id: 'Baik Anda punya proyek desain, butuh frontend developer, atau hanya ingin terhubung, jangan ragu menghubungi saya. Saya akan segera membalas Anda!'
  },
  'contact.social.title': { en: 'Find me on', id: 'Temukan saya di' },
  'contact.form.name': { en: 'Name', id: 'Nama' },
  'contact.form.name.placeholder': { en: 'Your name', id: 'Nama Anda' },
  'contact.form.email': { en: 'Email', id: 'Email' },
  'contact.form.email.placeholder': { en: 'your@email.com', id: 'email@anda.com' },
  'contact.form.message': { en: 'Message', id: 'Pesan' },
  'contact.form.message.placeholder': { en: 'Tell me about your project...', id: 'Ceritakan tentang proyek Anda...' },
  'contact.form.submit': { en: 'Send Message', id: 'Kirim Pesan' },
  'contact.form.success.title': { en: 'Message Sent! 🎉', id: 'Pesan Terkirim! 🎉' },
  'contact.form.success.message': {
    en: "Thanks for reaching out! I'll get back to you at ersafrexx@gmail.com as soon as possible.",
    id: 'Terima kasih sudah menghubungi! Saya akan segera membalas di ersafrexx@gmail.com.'
  },
  'contact.form.success.button': { en: 'Send Another', id: 'Kirim Lagi' },
  
  // Footer
  'footer.rights': { en: 'All rights reserved.', id: 'Hak cipta dilindungi.' },
  'footer.made': { en: 'Made with', id: 'Dibuat dengan' },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  // Load saved language dari localStorage saat mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLanguageState(savedLang)
    }
  }, [])

  // Simpan ke localStorage setiap kali bahasa berubah
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Helper function untuk mendapatkan terjemahan
  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
