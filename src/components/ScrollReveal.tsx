import React from 'react'
import { useInView } from '../hooks/useInView'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: string
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  threshold?: number
  rootMargin?: string
}

export default function ScrollReveal({
  children,
  animation = 'animate-fade-in-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold, rootMargin })

  return React.createElement(
    Tag,
    {
      ref,
      className: `${className} ${inView ? animation : 'scroll-hidden'}`,
      style: inView && delay > 0 ? { animationDelay: `${delay}ms` } : undefined,
    },
    children
  )
}
