import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { X, Heart, Share2, Camera } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  category: 'professional' | 'personal' | 'travel' | 'events'
  gradient: string
  icon: string
  description: string
  date: string
  likes: number
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())

  const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Professional Photo', category: 'professional', gradient: 'from-blue-500 to-purple-600', icon: '', description: 'Professional headshot', date: '2024-01', likes: 42 },
    { id: 2, title: 'Coding Session', category: 'professional', gradient: 'from-green-500 to-teal-600', icon: '', description: 'Working on project', date: '2024-02', likes: 38 },
    { id: 3, title: 'Team Meeting', category: 'professional', gradient: 'from-orange-500 to-red-600', icon: '', description: 'Team collaboration', date: '2024-01', likes: 35 },
    { id: 4, title: 'UI Design', category: 'professional', gradient: 'from-pink-500 to-purple-600', icon: '', description: 'Designing interfaces', date: '2024-03', likes: 50 },
    { id: 5, title: 'Coffee Break', category: 'personal', gradient: 'from-amber-500 to-orange-600', icon: '', description: 'Coffee time', date: '2024-02', likes: 28 },
    { id: 6, title: 'Reading', category: 'personal', gradient: 'from-indigo-500 to-blue-600', icon: '', description: 'Learning new things', date: '2024-03', likes: 31 },
    { id: 7, title: 'Evening Walk', category: 'personal', gradient: 'from-violet-500 to-purple-600', icon: '', description: 'Sunset walk', date: '2024-01', likes: 45 },
    { id: 8, title: 'Beach Trip', category: 'travel', gradient: 'from-cyan-500 to-blue-600', icon: '', description: 'Weekend at beach', date: '2024-02', likes: 52 },
    { id: 9, title: 'Mountain Hiking', category: 'travel', gradient: 'from-green-600 to-emerald-700', icon: '', description: 'Mountain adventure', date: '2024-03', likes: 48 },
    { id: 10, title: 'City Tour', category: 'travel', gradient: 'from-yellow-500 to-orange-600', icon: '', description: 'Exploring cities', date: '2024-01', likes: 40 },
    { id: 11, title: 'Conference', category: 'events', gradient: 'from-red-500 to-pink-600', icon: '', description: 'Tech conference', date: '2024-02', likes: 55 },
    { id: 12, title: 'Workshop', category: 'events', gradient: 'from-purple-500 to-indigo-600', icon: '', description: 'Design workshop', date: '2024-03', likes: 47 }
  ]

  const categories = [
    { id: 'all', label: 'Semua', count: galleryItems.length },
    { id: 'professional', label: 'Professional', count: galleryItems.filter(i => i.category === 'professional').length },
    { id: 'personal', label: 'Personal', count: galleryItems.filter(i => i.category === 'personal').length },
    { id: 'travel', label: 'Travel', count: galleryItems.filter(i => i.category === 'travel').length },
    { id: 'events', label: 'Events', count: galleryItems.filter(i => i.category === 'events').length }
  ]

  const filteredItems = selectedCategory === 'all' ? galleryItems : galleryItems.filter(item => item.category === selectedCategory)

  const toggleLike = (id: number) => {
    setLikedImages(prev => {
      const newSet = new Set(prev)
      newSet.has(id) ? newSet.delete(id) : newSet.add(id)
      return newSet
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      professional: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      personal: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      travel: 'bg-green-500/10 text-green-500 border-green-500/20',
      events: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
    }
    return colors[category] || colors.personal
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Camera className="w-8 h-8 text-purple-500" />
          <h1 className="text-4xl md:text-5xl font-bold"><span className="gradient-text">Gallery</span></h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kumpulan momen dan karya visual yang menginspirasi</p>
      </motion.section>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105' : 'glass hover:shadow-lg hover:scale-105'}`}>
            {category.label}<span className="ml-2 text-sm opacity-75">({category.count})</span>
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="group relative aspect-square glass rounded-2xl overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item)}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 border ${getCategoryColor(item.category)}`}>{item.category}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-white/60 text-sm">
                    <span>{item.date}</span>
                    <span className="flex items-center gap-1"><Heart className="w-4 h-4" />{item.likes + (likedImages.has(item.id) ? 1 : 0)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog.Root open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl p-8 z-50">
            {selectedImage && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="space-y-6">
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${selectedImage.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-9xl">{selectedImage.icon}</span>
                  <Dialog.Close className="absolute top-4 right-4 p-2 glass rounded-xl hover:scale-110 transition-transform"><X className="w-5 h-5" /></Dialog.Close>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 border ${getCategoryColor(selectedImage.category)}`}>{selectedImage.category}</span>
                      <Dialog.Title className="text-3xl font-bold mb-2">{selectedImage.title}</Dialog.Title>
                      <Dialog.Description className="text-slate-600 dark:text-slate-400">{selectedImage.description}</Dialog.Description>
                    </div>
                    <span className="text-sm text-slate-500">{selectedImage.date}</span>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => toggleLike(selectedImage.id)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${likedImages.has(selectedImage.id) ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' : 'glass hover:shadow-lg'}`}>
                      <Heart className={`w-5 h-5 ${likedImages.has(selectedImage.id) ? 'fill-current' : ''}`} />{selectedImage.likes + (likedImages.has(selectedImage.id) ? 1 : 0)} Likes
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 glass rounded-xl hover:shadow-lg transition-all"><Share2 className="w-5 h-5" />Share</button>
                  </div>
                </div>
              </motion.div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Gallery
