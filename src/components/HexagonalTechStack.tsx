import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface Tech {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'devops'
  level: number
  description: string
}

const HexagonalTechStack = () => {
  const { t } = useTranslation()
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null)

  const technologies: Tech[] = [
    // Center - Most important
    { name: 'Full Stack', icon: '🚀', category: 'frontend', level: 95, description: 'Complete web development' },
    
    // Frontend Ring
    { name: 'React', icon: '⚛️', category: 'frontend', level: 90, description: 'UI library expert' },
    { name: 'TypeScript', icon: '📘', category: 'frontend', level: 85, description: 'Type-safe JavaScript' },
    { name: 'JavaScript', icon: '🟨', category: 'frontend', level: 95, description: 'Core language mastery' },
    { name: 'TailwindCSS', icon: '🎨', category: 'frontend', level: 90, description: 'Utility-first CSS' },
    { name: 'HTML/CSS', icon: '🌐', category: 'frontend', level: 95, description: 'Web fundamentals' },
    { name: 'Next.js', icon: '▲', category: 'frontend', level: 80, description: 'React framework' },
    
    // Backend Ring
    { name: 'Laravel', icon: '🔴', category: 'backend', level: 90, description: 'PHP framework expert' },
    { name: 'Spring Boot', icon: '🍃', category: 'backend', level: 85, description: 'Java enterprise' },
    { name: 'PHP', icon: '🐘', category: 'backend', level: 90, description: 'Server-side scripting' },
    { name: 'Java', icon: '☕', category: 'backend', level: 85, description: 'OOP powerhouse' },
    { name: 'MySQL', icon: '🗄️', category: 'backend', level: 85, description: 'Relational databases' },
    { name: 'Node.js', icon: '🟢', category: 'backend', level: 80, description: 'JavaScript runtime' },
    
    // DevOps Ring
    { name: 'Docker', icon: '🐳', category: 'devops', level: 80, description: 'Containerization' },
    { name: 'Git', icon: '🔀', category: 'devops', level: 90, description: 'Version control' },
    { name: 'Azure', icon: '☁️', category: 'devops', level: 75, description: 'Cloud platform' },
    { name: 'Firebase', icon: '🔥', category: 'devops', level: 80, description: 'Backend services' },
    { name: 'Jira', icon: '📊', category: 'devops', level: 85, description: 'Project management' },
    { name: 'Linux', icon: '🐧', category: 'devops', level: 80, description: 'Server management' },
  ]

  const categoryColors = {
    frontend: { 
      bg: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/50',
      ring: 'ring-blue-500/30'
    },
    backend: { 
      bg: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/50',
      ring: 'ring-green-500/30'
    },
    devops: { 
      bg: 'from-amber-500 to-orange-500',
      glow: 'shadow-amber-500/50',
      ring: 'ring-amber-500/30'
    },
  }

  // Hexagonal grid positions (row, col)
  const hexPositions = [
    // Row 0 (top)
    { row: 0, col: 3 }, // Full Stack (center top)
    
    // Row 1
    { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 },
    
    // Row 2
    { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }, { row: 2, col: 5 },
    
    // Row 3
    { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 }, { row: 3, col: 4 }, { row: 3, col: 5 },
    
    // Row 4
    { row: 4, col: 2 }, { row: 4, col: 3 }, { row: 4, col: 4 }, { row: 4, col: 5 },
    
    // Row 5
    { row: 5, col: 3 }, { row: 5, col: 4 },
  ]

  const getHexPosition = (index: number) => {
    const pos = hexPositions[index] || { row: 0, col: 0 }
    const hexWidth = 140
    const hexHeight = 120
    const offsetX = pos.col * hexWidth
    const offsetY = pos.row * hexHeight + (pos.col % 2 === 1 ? hexHeight / 2 : 0)
    
    return { x: offsetX, y: offsetY }
  }

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">{t('techStack.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Interactive Hexagonal Visualization
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Click any technology to see details
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Hexagonal Grid */}
        <div className="relative min-h-[700px] flex items-center justify-center">
          <svg width="0" height="0">
            <defs>
              <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
                <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
              </clipPath>
            </defs>
          </svg>

          {technologies.map((tech, index) => {
            const pos = getHexPosition(index)
            const colors = categoryColors[tech.category]
            const isSelected = selectedTech?.name === tech.name

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15, 
                  zIndex: 50,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
                style={{
                  position: 'absolute',
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                }}
                className="cursor-pointer"
                onClick={() => setSelectedTech(isSelected ? null : tech)}
              >
                <div 
                  className={`
                    w-28 h-28 relative
                    bg-gradient-to-br ${colors.bg}
                    ${isSelected ? `ring-4 ${colors.ring} scale-110` : 'ring-2 ring-white/20'}
                    shadow-lg ${isSelected ? colors.glow : 'hover:' + colors.glow}
                    transition-all duration-300
                  `}
                  style={{ 
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <motion.div
                      animate={isSelected ? { rotate: 360 } : {}}
                      transition={{ duration: 0.6 }}
                      className="text-4xl mb-1"
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="text-xs font-bold text-center px-2">
                      {tech.name}
                    </span>
                  </div>

                  {/* Level indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 glass-card px-2 py-0.5 rounded-full">
                    <span className="text-xs font-bold text-white">
                      {tech.level}%
                    </span>
                  </div>

                  {/* Pulse effect for selected */}
                  {isSelected && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`}
                      style={{ 
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Selected Tech Details */}
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12 glass-card rounded-2xl p-8 border-2 border-white/20"
          >
            <div className="flex items-start space-x-6">
              <div className="text-6xl">{selectedTech.icon}</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {selectedTech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedTech.description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Proficiency</div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedTech.level}%` }}
                        className={`h-full bg-gradient-to-r ${categoryColors[selectedTech.category].bg}`}
                      />
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {selectedTech.level}%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Frontend</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Backend</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">DevOps & Tools</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HexagonalTechStack

