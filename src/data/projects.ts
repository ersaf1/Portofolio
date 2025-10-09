import { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Website',
    summary: 'A responsive personal website built with React and Tailwind CSS.',
    description:
      'This project is my main personal website where I showcase my portfolio, blog posts, and contact information. It includes responsive layout, dark mode, and optimized images.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    repo: 'https://github.com/ersaf1/personal-website'
  },
  {
    id: '2',
    title: 'Task Manager App',
    summary: 'A small task manager with local persistence and filters.',
    description:
      'Task Manager lets you add, edit, and remove tasks. It demonstrates state management, accessibility, and small animations.',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    repo: 'https://github.com/ersaf1/task-manager'
  }
]
