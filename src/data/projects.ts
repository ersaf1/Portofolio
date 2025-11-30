import { Project } from '../types'
import skanidaLogo from '../assets/skanida-logo.svg'

/*
  TEMPLATE PROJECT
  Copy object di bawah ini untuk menambahkan project baru secara manual:
  
  {
    id: 'unique-id',
    title: 'Nama Project',
    summary: 'Deskripsi singkat untuk kartu (1-2 kalimat).',
    description: 'Deskripsi lengkap project. Jelaskan fitur utama, tantangan, dan solusi.',
    tech: ['React', 'TypeScript', 'Tailwind'], // List teknologi
    repo: 'https://github.com/username/repo', // Optional: Link repository
    demo: 'https://demo-url.com', // Optional: Link live demo
    image: imageImport // Optional: Import gambar di atas dulu
  },
*/

export const projects: Project[] = [
  {
    id: '1',
    title: 'Skanida Apps',
    summary: 'Platform digital terintegrasi untuk SMKN 2 Magelang (E-Presensi, Jurnal, dll).',
    description: 'Skanida Apps adalah solusi digital komprehensif untuk lingkungan sekolah SMKN 2 Magelang. Aplikasi ini mencakup sistem presensi elektronik (E-Presensi), jurnal kegiatan siswa, dan berbagai fitur administratif lainnya untuk memudahkan manajemen sekolah.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'PWA'],
    image: skanidaLogo,
    demo: 'https://skanida.app'
  },
  {
    id: '2',
    title: 'Personal Website',
    summary: 'A responsive personal website built with React and Tailwind CSS.',
    description:
      'This project is my main personal website where I showcase my portfolio, blog posts, and contact information. It includes responsive layout, dark mode, and optimized images.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    repo: 'https://github.com/ersaf1/personal-website'
  },
  {
    id: '3',
    title: 'Task Manager App',
    summary: 'A small task manager with local persistence and filters.',
    description:
      'Task Manager lets you add, edit, and remove tasks. It demonstrates state management, accessibility, and small animations.',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    repo: 'https://github.com/ersaf1/task-manager'
  }
]
