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
  'nav.gallery': { en: 'Gallery', id: 'Galeri' },
  'nav.order': { en: 'Order', id: 'Pesan' },
  
  // Home Page
  'home.greeting': { en: "Hi, I'm", id: 'Halo, Saya' },
  'home.name': { en: 'Ersaf Sirazi Arifin', id: 'Ersaf Sirazi Arifin' },
  'home.school': { en: 'SMK Negeri 2 Magelang Student', id: 'Siswa SMK Negeri 2 Magelang' },
  'home.major': { en: 'Software and Game Development', id: 'Pengembangan Perangkat Lunak dan Gim (PPLG)' },
  'home.role1': { en: 'Frontend Developer', id: 'Frontend Developer' },
  'home.role2': { en: 'UI/UX Designer', id: 'Desainer UI/UX' },
  'home.role3': { en: 'Creative Designer', id: 'Desainer Kreatif' },
  'home.role4': { en: 'React Specialist', id: 'Spesialis React' },
  'home.intro': { 
    en: 'I am a vocational high school student majoring in Software and Game Development who is passionate about programming and web design. I love creating beautiful and functional user interfaces.',
    id: 'Saya adalah pelajar SMK jurusan PPLG yang tertarik pada pemrograman dan desain web. Saya senang membuat antarmuka pengguna yang indah dan fungsional.'
  },
  'home.description': { 
    en: 'Crafting beautiful and intuitive user interfaces with React and modern design tools. Passionate about creating seamless user experiences and pixel-perfect designs.',
    id: 'Membuat antarmuka pengguna yang indah dan intuitif dengan React dan tools desain modern. Passionate dalam menciptakan pengalaman pengguna yang mulus dan desain yang pixel-perfect.'
  },
  'home.cta.projects': { en: 'View My Projects', id: 'Lihat Proyek Saya' },
  'home.cta.gallery': { en: 'View Gallery', id: 'Lihat Galeri' },
  'home.cta.contact': { en: 'Contact Me', id: 'Hubungi Saya' },
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
  'about.subtitle': {
    en: 'SMK student passionate about programming and web design',
    id: 'Pelajar SMK yang passionate dalam pemrograman dan desain web'
  },
  'about.personal.title': { en: 'Personal Information', id: 'Informasi Pribadi' },
  'about.personal.age': { en: 'Age', id: 'Umur' },
  'about.personal.school': { en: 'School', id: 'Sekolah' },
  'about.personal.major': { en: 'Major', id: 'Jurusan' },
  'about.hobbies.title': { en: 'Hobbies & Interests', id: 'Hobi & Minat' },
  'about.hobbies.desc': { 
    en: 'I enjoy coding, designing user interfaces, exploring new technologies, and participating in programming competitions. I also love learning from online courses and building creative projects.',
    id: 'Saya senang coding, mendesain antarmuka pengguna, mengeksplorasi teknologi baru, dan mengikuti kompetisi pemrograman. Saya juga suka belajar dari kursus online dan membangun proyek kreatif.'
  },
  'about.goals.title': { en: 'Goals & Dreams', id: 'Tujuan & Cita-cita' },
  'about.goals.desc': { 
    en: 'My dream is to become a professional web developer and create impactful digital products. I want to continue learning and mastering the latest technologies to build innovative solutions.',
    id: 'Cita-cita saya adalah menjadi web developer profesional dan menciptakan produk digital yang bermanfaat. Saya ingin terus belajar dan menguasai teknologi terbaru untuk membangun solusi inovatif.'
  },
  'about.values.title': { en: 'Personal Values', id: 'Nilai-nilai Pribadi' },
  'about.values.diligent': { en: 'Diligent', id: 'Rajin' },
  'about.values.creative': { en: 'Creative', id: 'Kreatif' },
  'about.values.challenge': { en: 'Love Challenges', id: 'Suka Tantangan' },
  'about.values.teamwork': { en: 'Team Player', id: 'Kerja Tim' },
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
  'about.skills.programming': { en: '💻 Programming', id: '💻 Pemrograman' },
  'about.skills.design': { en: '🎨 Design', id: '🎨 Desain' },
  'about.skills.tools': { en: '🧩 Tools', id: '🧩 Tools' },
  'about.skills.softskills': { en: '🗣️ Soft Skills', id: '🗣️ Soft Skill' },
  'about.experience.title': { en: 'Experience & Activities', id: 'Pengalaman & Kegiatan' },
  'about.experience.extracurricular': { en: 'Extracurricular', id: 'Ekstrakurikuler' },
  'about.experience.competitions': { en: 'Competitions', id: 'Lomba' },
  'about.experience.workshops': { en: 'Workshops & Training', id: 'Workshop & Pelatihan' },
  'about.experience.organizations': { en: 'Organizations', id: 'Organisasi' },
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
  'contact.social.github': { en: 'GitHub', id: 'GitHub' },
  'contact.social.linkedin': { en: 'LinkedIn', id: 'LinkedIn' },
  'contact.social.instagram': { en: 'Instagram', id: 'Instagram' },
  'contact.download.cv': { en: 'Download CV', id: 'Unduh CV' },
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
  
  // Order Page
  'order.hero.label': { en: 'Order Services', id: 'Pesan Jasa' },
  'order.hero.title1': { en: 'Build Your', id: 'Bangun' },
  'order.hero.title2': { en: 'Dream', id: 'Impian' },
  'order.hero.title3': { en: 'Website', id: 'Website-mu' },
  'order.hero.desc': {
    en: 'From landing pages to full-stack apps — I design and develop modern, performant websites with a comic-book punch. Pick a package, fill out the form, and let\'s create something awesome.',
    id: 'Dari landing page hingga aplikasi full-stack — saya mendesain dan mengembangkan website modern yang performan dengan sentuhan komik. Pilih paket, isi formnya, dan mari buat sesuatu yang keren.'
  },
  'order.steps.label': { en: 'How It Works', id: 'Cara Kerja' },
  'order.step1.title': { en: 'Tell me your idea', id: 'Ceritakan idemu' },
  'order.step1.desc': { en: 'Fill out the order form with your project details, goals, and vibe.', id: 'Isi form pemesanan dengan detail proyek, tujuan, dan nuansa yang kamu inginkan.' },
  'order.step2.title': { en: 'Design & prototype', id: 'Desain & prototype' },
  'order.step2.desc': { en: 'I create wireframes and high-fidelity mockups for your approval.', id: 'Saya membuat wireframe dan mockup high-fidelity untuk persetujuanmu.' },
  'order.step3.title': { en: 'Development', id: 'Pengembangan' },
  'order.step3.desc': { en: 'Clean, performant code built with React and modern tools.', id: 'Kode bersih dan performan dibangun dengan React dan tools modern.' },
  'order.step4.title': { en: 'Launch & support', id: 'Peluncuran & dukungan' },
  'order.step4.desc': { en: 'Deploy, test, and get ongoing support after launch.', id: 'Deploy, test, dan dapatkan dukungan berkelanjutan setelah peluncuran.' },
  'order.packages.label': { en: 'Service Packages', id: 'Paket Jasa' },
  'order.popular': { en: 'MOST POPULAR', id: 'PALING POPULER' },
  'order.pkg.basic.name': { en: 'Basic Website', id: 'Basic Website' },
  'order.pkg.basic.type': { en: 'Landing Page / Company Profile', id: 'Landing Page / Company Profile' },
  'order.pkg.basic.desc': { en: 'Perfect for personal portfolios, landing pages, or company profiles.', id: 'Cocok untuk portfolio pribadi, landing page, atau company profile.' },
  'order.pkg.basic.f1': { en: 'Landing page / company profile', id: 'Landing page / company profile' },
  'order.pkg.basic.f2': { en: '3-5 halaman', id: '3-5 halaman' },
  'order.pkg.basic.f3': { en: 'Responsive HP & Desktop', id: 'Responsive HP & Desktop' },
  'order.pkg.basic.f4': { en: 'Custom warna brand', id: 'Custom warna brand' },
  'order.pkg.basic.f5': { en: 'Form kontak', id: 'Form kontak' },
  'order.pkg.basic.f6': { en: 'Tombol WhatsApp', id: 'Tombol WhatsApp' },
  'order.pkg.basic.f7': { en: 'Google Maps', id: 'Google Maps' },
  'order.pkg.basic.f8': { en: 'Social media link', id: 'Social media link' },
  'order.pkg.basic.f9': { en: 'Basic SEO', id: 'Basic SEO' },
  'order.pkg.basic.f10': { en: 'SSL HTTPS', id: 'SSL HTTPS' },
  'order.pkg.basic.f11': { en: 'Setup domain + hosting', id: 'Setup domain + hosting' },
  'order.pkg.basic.f12': { en: '1-2x revisi', id: '1-2x revisi' },
  'order.pkg.business.name': { en: 'Business Website', id: 'Business Website' },
  'order.pkg.business.type': { en: 'Business Site + Admin', id: 'Situs Bisnis + Admin' },
  'order.pkg.business.desc': { en: 'All Basic features + admin dashboard for managing content.', id: 'Semua fitur Basic + dashboard admin untuk mengelola konten.' },
  'order.pkg.business.f1': { en: 'Semua fitur Basic', id: 'Semua fitur Basic' },
  'order.pkg.business.f2': { en: 'Admin dashboard sederhana', id: 'Admin dashboard sederhana' },
  'order.pkg.business.f3': { en: 'Login admin', id: 'Login admin' },
  'order.pkg.business.f4': { en: 'CRUD konten', id: 'CRUD konten' },
  'order.pkg.business.f5': { en: 'Upload gambar', id: 'Upload gambar' },
  'order.pkg.business.f6': { en: 'Artikel/blog/news', id: 'Artikel/blog/news' },
  'order.pkg.business.f7': { en: 'Manajemen produk/jasa', id: 'Manajemen produk/jasa' },
  'order.pkg.business.f8': { en: 'Galeri dinamis', id: 'Galeri dinamis' },
  'order.pkg.business.f9': { en: 'Search fitur', id: 'Search fitur' },
  'order.pkg.business.f10': { en: 'Analytics visitor', id: 'Analytics visitor' },
  'order.pkg.business.f11': { en: 'Optimasi speed', id: 'Optimasi speed' },
  'order.pkg.business.f12': { en: 'Backup database', id: 'Backup database' },
  'order.pkg.professional.name': { en: 'Professional System', id: 'Professional System' },
  'order.pkg.professional.type': { en: 'Full-Stack System', id: 'Sistem Full-Stack' },
  'order.pkg.professional.desc': { en: 'All Business features + multi-user system with advanced capabilities.', id: 'Semua fitur Business + sistem multi-user dengan kemampuan lanjutan.' },
  'order.pkg.professional.f1': { en: 'Semua fitur Business', id: 'Semua fitur Business' },
  'order.pkg.professional.f2': { en: 'UI/UX custom premium', id: 'UI/UX custom premium' },
  'order.pkg.professional.f3': { en: 'Multi role user', id: 'Multi role user' },
  'order.pkg.professional.f4': { en: 'Dashboard user', id: 'Dashboard user' },
  'order.pkg.professional.f5': { en: 'Sistem akun user', id: 'Sistem akun user' },
  'order.pkg.professional.f6': { en: 'Database custom', id: 'Database custom' },
  'order.pkg.professional.f7': { en: 'Email notification', id: 'Email notification' },
  'order.pkg.professional.f8': { en: 'Export PDF/Excel', id: 'Export PDF/Excel' },
  'order.pkg.professional.f9': { en: 'Filter & sorting data', id: 'Filter & sorting data' },
  'order.pkg.professional.f10': { en: 'Advanced form', id: 'Advanced form' },
  'order.pkg.professional.f11': { en: 'Riwayat aktivitas', id: 'Riwayat aktivitas' },
  'order.pkg.professional.f12': { en: 'File upload system', id: 'File upload system' },
  'order.pkg.professional.f13': { en: 'Integrasi API eksternal', id: 'Integrasi API eksternal' },
  'order.pkg.professional.f14': { en: 'Security hardening', id: 'Security hardening' },
  'order.pkg.enterprise.name': { en: 'Enterprise Web App', id: 'Enterprise Web App' },
  'order.pkg.enterprise.type': { en: 'Full Custom Application', id: 'Aplikasi Full Custom' },
  'order.pkg.enterprise.desc': { en: 'All Professional features + full custom enterprise solution.', id: 'Semua fitur Professional + solusi enterprise full custom.' },
  'order.pkg.enterprise.f1': { en: 'Semua fitur Professional', id: 'Semua fitur Professional' },
  'order.pkg.enterprise.f2': { en: 'Full custom web application', id: 'Full custom web application' },
  'order.pkg.enterprise.f3': { en: 'Advanced admin panel', id: 'Advanced admin panel' },
  'order.pkg.enterprise.f4': { en: 'Multi cabang/divisi', id: 'Multi cabang/divisi' },
  'order.pkg.enterprise.f5': { en: 'Approval workflow', id: 'Approval workflow' },
  'order.pkg.enterprise.f6': { en: 'Payment gateway', id: 'Payment gateway' },
  'order.pkg.enterprise.f7': { en: 'Invoice otomatis', id: 'Invoice otomatis' },
  'order.pkg.enterprise.f8': { en: 'Real-time notification', id: 'Real-time notification' },
  'order.pkg.enterprise.f9': { en: 'Chat / ticketing system', id: 'Chat / ticketing system' },
  'order.pkg.enterprise.f10': { en: 'Advanced analytics', id: 'Advanced analytics' },
  'order.pkg.enterprise.f11': { en: 'Audit log', id: 'Audit log' },
  'order.pkg.enterprise.f12': { en: 'Permission management', id: 'Permission management' },
  'order.pkg.enterprise.f13': { en: 'Cloud storage', id: 'Cloud storage' },
  'order.pkg.enterprise.f14': { en: 'API backend', id: 'API backend' },
  'order.pkg.enterprise.f15': { en: 'Integrasi AI (opsional)', id: 'Integrasi AI (opsional)' },
  'order.pkg.enterprise.f16': { en: 'Deployment profesional + dokumentasi', id: 'Deployment profesional + dokumentasi' },
  'order.choose': { en: 'Choose Package', id: 'Pilih Paket' },
  'order.selected': { en: 'Selected ✓', id: 'Dipilih ✓' },
  'order.perproject': { en: '/project', id: '/proyek' },
  'order.value.fast.title': { en: 'Fast Delivery', id: 'Pengiriman Cepat' },
  'order.value.fast.desc': { en: 'Projects delivered on time, every time.', id: 'Proyek selesai tepat waktu, setiap saat.' },
  'order.value.quality.title': { en: 'Quality Guarantee', id: 'Jaminan Kualitas' },
  'order.value.quality.desc': { en: 'Clean code, modern design, 100% responsive.', id: 'Kode bersih, desain modern, 100% responsif.' },
  'order.value.mobile.title': { en: 'Mobile-First', id: 'Mobile-First' },
  'order.value.mobile.desc': { en: 'Every site looks great on any device.', id: 'Setiap situs terlihat bagus di perangkat apapun.' },
  'order.form.label': { en: 'Place Your Order', id: 'Pesan Sekarang' },
  'order.form.title': { en: 'Tell me about your project.', id: 'Ceritakan tentang proyekmu.' },
  'order.form.desc': { en: 'Fill out the form below and I\'ll get back to you within 24 hours.', id: 'Isi form di bawah dan saya akan membalas dalam 24 jam.' },
  'order.form.name': { en: 'Full Name *', id: 'Nama Lengkap *' },
  'order.form.name.placeholder': { en: 'Your name', id: 'Nama Anda' },
  'order.form.email': { en: 'Email *', id: 'Email *' },
  'order.form.whatsapp': { en: 'WhatsApp (optional)', id: 'WhatsApp (opsional)' },
  'order.form.package': { en: 'Package *', id: 'Paket *' },
  'order.form.budget': { en: 'Budget Range', id: 'Range Budget' },
  'order.form.timeline': { en: 'Timeline', id: 'Timeline' },
  'order.form.desc.label': { en: 'Project Description *', id: 'Deskripsi Proyek *' },
  'order.form.desc.placeholder': { en: 'Tell me about your project — what type of site, features you need, design references, color preferences, etc.', id: 'Ceritakan tentang proyekmu — jenis situs, fitur yang dibutuhkan, referensi desain, preferensi warna, dll.' },
  'order.form.tip': { en: 'The more details you provide, the faster I can start. Include links to reference sites, your brand colors, and any specific features you need.', id: 'Semakin detail info yang kamu berikan, semakin cepat saya bisa mulai. Sertakan link referensi, warna brand, dan fitur spesifik yang dibutuhkan.' },
  'order.form.submit': { en: 'Submit Order', id: 'Kirim Pesanan' },
  'order.form.sending': { en: 'Sending Order...', id: 'Mengirim Pesanan...' },
  'order.form.success.title': { en: 'Order Received!', id: 'Pesanan Diterima!' },
  'order.form.success.desc': { en: 'Thanks for your order! I\'ll review your details and get back to you within 24 hours via email or WhatsApp.', id: 'Terima kasih atas pesanannya! Saya akan meninjau detail Anda dan membalas dalam 24 jam via email atau WhatsApp.' },
  'order.form.success.another': { en: 'Place Another Order', id: 'Pesan Lagi' },
  'order.form.success.contact': { en: 'Contact Me', id: 'Hubungi Saya' },
  'order.select.placeholder': { en: 'Select a package', id: 'Pilih paket' },
  'order.budget.placeholder': { en: 'Select budget', id: 'Pilih budget' },
  'order.timeline.placeholder': { en: 'Select timeline', id: 'Pilih timeline' },
  'order.timeline.asap': { en: 'ASAP', id: 'Secepatnya' },
  'order.timeline.1week': { en: 'Within 1 week', id: 'Dalam 1 minggu' },
  'order.timeline.2weeks': { en: 'Within 2 weeks', id: 'Dalam 2 minggu' },
  'order.timeline.1month': { en: 'Within 1 month', id: 'Dalam 1 bulan' },
  'order.timeline.flexible': { en: 'Flexible', id: 'Fleksibel' },
  'order.faq.label': { en: 'FAQ', id: 'FAQ' },
  'order.faq.q1': { en: 'How do I pay?', id: 'Bagaimana cara bayar?' },
  'order.faq.a1': { en: 'I accept bank transfer (BCA, Mandiri, BRI), Dana, GoPay, or OVO. Payment is 50% upfront, 50% on delivery.', id: 'Saya menerima transfer bank (BCA, Mandiri, BRI), Dana, GoPay, atau OVO. Pembayaran 50% di muka, 50% saat pengiriman.' },
  'order.faq.q2': { en: 'Can I request custom features?', id: 'Bisa minta fitur custom?' },
  'order.faq.a2': { en: 'Absolutely! Every project is tailored to your needs. Just describe what you want in the order form.', id: 'Tentu saja! Setiap proyek disesuaikan dengan kebutuhanmu. Cukup deskripsikan yang kamu inginkan di form pemesanan.' },
  'order.faq.q3': { en: 'Do you provide hosting?', id: 'Apakah kamu menyediakan hosting?' },
  'order.faq.a3': { en: 'I can help you set up hosting on Vercel, Netlify, or your preferred provider. Domain costs are not included.', id: 'Saya bisa bantu setup hosting di Vercel, Netlify, atau provider pilihanmu. Biaya domain tidak termasuk.' },
  'order.faq.q4': { en: 'What if I need changes after delivery?', id: 'Bagaimana jika saya butuh perubahan setelah pengiriman?' },
  'order.faq.a4': { en: 'Each package includes revision rounds. Additional revisions are available at a small extra cost.', id: 'Setiap paket sudah termasuk putaran revisi. Revisi tambahan tersedia dengan biaya kecil.' },
  'order.faq.q5': { en: 'Can I see examples of your work?', id: 'Bisa lihat contoh hasil kerjamu?' },
  'order.faq.a5': { en: 'Check out my Projects and Gallery pages! You can also contact me for more specific portfolio samples.', id: 'Cek halaman Proyek dan Galeri saya! Atau hubungi saya untuk contoh portfolio yang lebih spesifik.' },
  'order.cta.title': { en: 'Ready to', id: 'Siap untuk' },
  'order.cta.title2': { en: 'Start?', id: 'Mulai?' },
  'order.cta.desc': { en: 'Have questions or want to discuss a custom project? Reach out directly and let\'s make it happen.', id: 'Punya pertanyaan atau ingin diskusi proyek custom? Hubungi langsung dan mari wujudkan.' },
  'order.cta.email': { en: 'Email Me', id: 'Email Saya' },
  'order.cta.whatsapp': { en: 'WhatsApp', id: 'WhatsApp' },
  'order.cta.work': { en: 'See My Work', id: 'Lihat Hasil Kerja' },
  
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
