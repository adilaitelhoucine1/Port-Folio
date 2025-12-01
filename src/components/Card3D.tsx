import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

const Card3D = ({ children, className = '', intensity = 20 }: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * intensity
    const rotateY = -((x - centerX) / centerX) * intensity
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative ${className}`}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${
            isHovered ? '50% 50%' : '-100% -100%'
          }, rgba(255,255,255,0.2) 0%, transparent 60%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}

export default Card3D

