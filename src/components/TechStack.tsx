import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code, Database, Server, Wrench } from 'lucide-react'

interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'devops'
  proficiency: number
  years: number
  icon: string
}

const TechStack = () => {
  const { t } = useTranslation()

  const technologies: Technology[] = [
    // Frontend
    { name: 'React.js', category: 'frontend', proficiency: 90, years: 3, icon: '⚛️' },
    { name: 'TypeScript', category: 'frontend', proficiency: 85, years: 2, icon: '📘' },
    { name: 'JavaScript', category: 'frontend', proficiency: 95, years: 4, icon: '🟨' },
    { name: 'TailwindCSS', category: 'frontend', proficiency: 90, years: 2, icon: '🎨' },
    { name: 'HTML/CSS', category: 'frontend', proficiency: 95, years: 4, icon: '🌐' },
    
    // Backend
    { name: 'Laravel', category: 'backend', proficiency: 90, years: 3, icon: '🔴' },
    { name: 'Spring Boot', category: 'backend', proficiency: 85, years: 2, icon: '🍃' },
    { name: 'PHP', category: 'backend', proficiency: 90, years: 3, icon: '🐘' },
    { name: 'Java', category: 'backend', proficiency: 85, years: 2, icon: '☕' },
    { name: 'MySQL', category: 'backend', proficiency: 85, years: 3, icon: '🗄️' },
    
    // DevOps
    { name: 'Docker', category: 'devops', proficiency: 80, years: 2, icon: '🐳' },
    { name: 'Git/GitHub', category: 'devops', proficiency: 90, years: 4, icon: '🔀' },
    { name: 'Azure', category: 'devops', proficiency: 75, years: 1, icon: '☁️' },
    { name: 'Firebase', category: 'devops', proficiency: 80, years: 2, icon: '🔥' },
    { name: 'Jira', category: 'devops', proficiency: 85, years: 2, icon: '📊' },
  ]

  const categories = [
    { key: 'frontend' as const, label: t('techStack.frontend'), icon: Code, color: 'primary' },
    { key: 'backend' as const, label: t('techStack.backend'), icon: Server, color: 'secondary' },
    { key: 'devops' as const, label: t('techStack.devops'), icon: Wrench, color: 'accent' },
  ]

  const categoryColors = {
    primary: 'from-primary to-primary-dark',
    secondary: 'from-secondary to-secondary-dark',
    accent: 'from-accent to-accent-dark',
  }

  return (
    <div className="section-container bg-gray-50 dark:bg-gray-900/50">
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
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('techStack.subtitle')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className={`flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r ${categoryColors[category.color]} text-white`}>
              <category.icon className="w-6 h-6" />
              <h3 className="text-xl font-bold">{category.label}</h3>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              {technologies
                .filter((tech) => tech.category === category.key)
                .map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tech.years} {t('techStack.years')}
                      </span>
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${categoryColors[category.color]} rounded-full`}
                      />
                    </div>
                    <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
                      {tech.proficiency}%
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack

