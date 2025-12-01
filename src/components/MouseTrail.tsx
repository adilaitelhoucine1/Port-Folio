import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
}

const MouseTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    let particleId = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      }
      
      setParticles(prev => [...prev, newParticle].slice(-15)) // Keep last 15 particles
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-sm"
          style={{
            left: particle.x - 6,
            top: particle.y - 6,
            zIndex: 50 - index,
          }}
        />
      ))}
    </div>
  )
}

export default MouseTrail

