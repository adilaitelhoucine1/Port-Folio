import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Briefcase, Terminal, TrendingUp } from 'lucide-react'

interface ChooseYourPathProps {
  onChoose: (isTechnical: boolean) => void
}

const ChooseYourPath = ({ onChoose }: ChooseYourPathProps) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const options = [
    {
      id: 'technical',
      title: '💻 Tech Mode',
      subtitle: 'I speak in code',
      description: 'VSCode-style portfolio for developers',
      icon: Terminal,
      color: 'from-green-500 to-emerald-600',
      keywords: ['React', 'Laravel', 'Spring Boot', 'APIs', 'Docker'],
      onClick: () => {
        // Redirect to VSCode portfolio
        window.location.href = 'http://adilaitelhoucine.me/My-Portfolio-/'
      }
    },
    {
      id: 'business',
      title: '💼 Professional Mode',
      subtitle: 'Show me the results',
      description: 'Beautiful, recruiter-friendly portfolio',
      icon: TrendingUp,
      color: 'from-primary to-secondary',
      keywords: ['Projects', 'Experience', 'Skills', 'Contact'],
      onClick: () => onChoose(false)
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-light to-gray-100 dark:from-background-dark dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🤔
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Choose Your Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            How technical are you?
          </p>
        </motion.div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon
            const isHovered = hoveredOption === option.id

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredOption(option.id)}
                onHoverEnd={() => setHoveredOption(null)}
                onClick={option.onClick}
                className="relative cursor-pointer"
              >
                <div className="glass-card rounded-3xl p-8 h-full border-2 border-white/20 dark:border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    animate={isHovered ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${option.color} mb-6`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold mb-2">
                    {option.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {option.subtitle}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {option.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {option.keywords.map((keyword, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="px-3 py-1 text-xs font-medium glass-card rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    animate={isHovered ? { x: [0, 10, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex items-center space-x-2 text-primary font-semibold"
                  >
                    <span>Enter</span>
                    <span>→</span>
                  </motion.div>
                </div>

                {/* Particle Effect */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            x: '50%', 
                            y: '50%', 
                            scale: 0,
                            opacity: 1 
                          }}
                          animate={{
                            x: `${50 + (Math.random() - 0.5) * 100}%`,
                            y: `${50 + (Math.random() - 0.5) * 100}%`,
                            scale: Math.random() * 2,
                            opacity: 0,
                          }}
                          transition={{ duration: 1 }}
                          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${option.color}`}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-600">
            💡 Psst... both lead to amazing experiences!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ChooseYourPath

