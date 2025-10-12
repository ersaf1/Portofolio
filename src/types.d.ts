export interface Project {
  id: string
  title: string
  summary: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
}

// Deklarasi tipe untuk import file gambar
// Ini memberitahu TypeScript bahwa file gambar bisa diimpor sebagai module
declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}
