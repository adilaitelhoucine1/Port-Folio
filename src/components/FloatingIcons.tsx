import { motion } from 'framer-motion'

const FloatingIcons = () => {
  const icons = [
    { emoji: '⚛️', delay: 0, duration: 15, x: '10%', y: '20%' },
    { emoji: '🚀', delay: 2, duration: 18, x: '85%', y: '15%' },
    { emoji: '💻', delay: 4, duration: 20, x: '15%', y: '80%' },
    { emoji: '✨', delay: 1, duration: 16, x: '90%', y: '70%' },
    { emoji: '🎨', delay: 3, duration: 17, x: '50%', y: '50%' },
    { emoji: '🔥', delay: 5, duration: 19, x: '75%', y: '40%' },
    { emoji: '⚡', delay: 2.5, duration: 14, x: '30%', y: '60%' },
    { emoji: '💎', delay: 4.5, duration: 21, x: '60%', y: '85%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20 dark:opacity-10"
          style={{
            left: icon.x,
            top: icon.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            delay: icon.delay,
            ease: 'easeInOut',
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingIcons

