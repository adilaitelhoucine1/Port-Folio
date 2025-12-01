import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

interface StatsCounterProps {
  stats: Stat[]
}

const StatsCounter = ({ stats }: StatsCounterProps) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          
          stats.forEach((stat, index) => {
            const duration = 2000 // 2 seconds
            const steps = 60
            const increment = stat.value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(current)
                return newCounts
              })
            }, duration / steps)
          })
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [stats, hasAnimated])

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center p-6 glass-card rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <motion.div
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2"
            animate={{ scale: hasAnimated ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {stat.prefix}{counts[index]}{stat.suffix}
          </motion.div>
          <div className="text-gray-600 dark:text-gray-400 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCounter

