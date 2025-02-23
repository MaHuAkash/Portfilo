'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, } from 'react'

export const ParticleBackground = () => {
  const particles = Array(100).fill(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0">
      {particles.map((_, i) => {
        const xOffset = useMotionValue((Math.random() - 0.5) * 100)
        const yOffset = useMotionValue((Math.random() - 0.5) * 100)
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              x: useTransform(mouseX, val => val + xOffset.get()),
              y: useTransform(mouseY, val => val + yOffset.get())
            }}
            animate={{
              scale: [0, 0.5, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        )
      })}
    </div>
  )
}

