// Centralized list of photo URLs. Put your images into /public/photos and use these names
// Use Vite BASE_URL to support sub-path deployments
const BASE = (import.meta as any).env?.BASE_URL || '/'
const photoPath = (name: string) => `${BASE}photos/${name}`

export const photos = [
  photoPath('hero.jpg'),
  photoPath('1.jpg'),
  photoPath('2.jpg'),
  photoPath('3.jpg'),
  photoPath('4.jpg'),
  photoPath('5.jpg'),
  photoPath('6.jpg'),
  photoPath('7.jpg'),
  photoPath('8.jpg'),
]

export const heroPhoto = photos[0]
