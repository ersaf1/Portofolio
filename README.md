# 🚀 Ersaf Sirazi Arifin - Portfolio

Modern, interactive portfolio website for a Frontend Developer & UI/UX Designer, built with React, TypeScript, and Framer Motion.

## 👨‍💻 About

Frontend Developer and UI/UX Designer specializing in:
- **Frontend Development** - React, TypeScript, Next.js
- **UI/UX Design** - Figma, Adobe XD, Design Systems
- **Responsive Design** - Mobile-first, accessible interfaces
- **Animation** - Framer Motion, CSS animations

📧 Contact: ersafrexx@gmail.com

## ✨ Features

### 🎨 UI/UX
- **Glassmorphism Design** - Beautiful frosted glass effects
- **Smooth Animations** - Page transitions and micro-interactions with Framer Motion
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Mobile-first approach, works on all devices
- **Gradient Effects** - Animated gradients and color transitions

### 🎯 Interactive Elements
- **Typing Animation** - Auto-typing role/title on homepage
- **Cursor Trail** - Beautiful particle trail following mouse movement
- **Particle Background** - Animated floating particles
- **Progress Bars** - Animated skill level indicators
- **Hover Effects** - Smooth transitions on all interactive elements
- **Scroll to Top** - Quick navigation button in footer

### 📄 Pages
- **Home** - Hero section with animated intro
- **About** - Personal story, skills, and experience timeline
- **Projects** - Showcase of work with detailed project cards
- **Contact** - Contact form with social media links

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Modern icons
- **React Router** - Client-side routing

## 🚀 Quick Start

This project uses pnpm. If you don't have pnpm installed, you can enable it via Corepack (recommended) or install it globally.

Corepack (recommended, Node >=16.14):

```powershell
corepack enable; corepack prepare pnpm@8.9.0 --activate
```

Or install with npm:

```powershell
# npm install -g pnpm
```

Then use pnpm commands below:

```powershell
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ParticleBackground.tsx
│   └── CursorTrail.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   └── Contact.tsx
├── data/               # Static data
│   └── projects.ts
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

1. **Update Personal Info** - Edit `src/pages/Home.tsx` and `src/pages/About.tsx`
2. **Add Projects** - Modify `src/data/projects.ts`
3. **Change Colors** - Update gradients in `src/index.css`
4. **Social Links** - Update links in `src/pages/Home.tsx` and `src/pages/Contact.tsx`

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

---

Made with ❤️ and ⚡ by Ersaf Sirazi Arifin
