import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code2, Layers, Zap } from 'lucide-react'
import Card3D from './Card3D'

interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools'
}

const Skills = () => {
  const { t } = useTranslation()

  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'TailwindCSS', level: 90, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    
    // Backend
    { name: 'Laravel', level: 90, category: 'backend' },
    { name: 'Spring Boot', level: 85, category: 'backend' },
    { name: 'PHP', level: 90, category: 'backend' },
    { name: 'Java (JEE)', level: 85, category: 'backend' },
    { name: 'MySQL', level: 85, category: 'backend' },
    
    // Tools
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'Git/GitHub', level: 90, category: 'tools' },
    { name: 'Azure', level: 75, category: 'tools' },
    { name: 'Firebase', level: 80, category: 'tools' },
    { name: 'Jira', level: 85, category: 'tools' },
    { name: 'UML', level: 85, category: 'tools' },
  ]

  const categories = [
    { 
      key: 'frontend' as const, 
      icon: Code2, 
      color: 'from-primary to-primary-dark',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary'
    },
    { 
      key: 'backend' as const, 
      icon: Layers, 
      color: 'from-secondary to-secondary-dark',
      bgColor: 'bg-secondary/10',
      textColor: 'text-secondary'
    },
    { 
      key: 'tools' as const, 
      icon: Zap, 
      color: 'from-accent to-accent-dark',
      bgColor: 'bg-accent/10',
      textColor: 'text-accent'
    },
  ]

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
          <span className="gradient-text">{t('skills.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('skills.subtitle')}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, catIndex) => {
          const categorySkills = skills.filter(s => s.category === category.key)
          const CategoryIcon = category.icon

          return (
            <Card3D
              key={category.key}
              intensity={15}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                viewport={{ once: true }}
              >
              {/* Category Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-6`}>
                <CategoryIcon className="w-8 h-8 text-white" />
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${category.textColor}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              </motion.div>
            </Card3D>
          )
        })}
      </div>

      {/* Additional Skills Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 italic">
          🚀 Always learning and adapting to new technologies!
        </p>
      </motion.div>
    </div>
  )
}

export default Skills

