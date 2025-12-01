import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: {
    en: string
    fr: string
    ar: string
  }
  technologies: string[]
  category: 'frontend' | 'backend' | 'fullstack'
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const Projects = () => {
  const { t, i18n } = useTranslation()

  const projects: Project[] = [
    {
      title: 'MarocAdsZone',
      description: {
        en: 'Full Stack classified ads platform built with React.js and Laravel 10. Includes Firebase Storage for secure image management.',
        fr: 'Plateforme Full Stack de petites annonces avec React.js et Laravel 10. Intègre Firebase Storage pour la gestion sécurisée des images.',
        ar: 'منصة إعلانات مبوبة Full Stack مبنية بتقنية React.js و Laravel 10. تتضمن Firebase Storage لإدارة الصور الآمنة.'
      },
      technologies: ['React.js', 'Laravel 10', 'MySQL', 'Firebase Storage', 'REST API'],
      category: 'fullstack',
      image: '🛒',
      demoUrl: 'https://marocadszone.com/',
      featured: true
    },
    {
      title: 'Tricol-App',
      description: {
        en: 'Spring Boot REST API for digitizing professional clothing supply chain. Includes AI suggestions and advanced category management.',
        fr: 'API REST Spring Boot pour la digitalisation de la chaîne d\'approvisionnement en vêtements professionnels. Intègre des suggestions IA et gestion avancée des catégories.',
        ar: 'واجهة برمجية REST بتقنية Spring Boot لرقمنة سلسلة توريد الملابس المهنية. يتضمن اقتراحات ذكاء اصطناعي وإدارة متقدمة للفئات.'
      },
      technologies: ['Spring Boot', 'Spring Data JPA', 'MapStruct', 'Liquibase', 'Swagger/OpenAPI'],
      category: 'backend',
      image: '🏢',
      githubUrl: 'https://github.com/adilaitelhoucine1/tricol-app',
      featured: true
    },
    {
      title: 'MedCore',
      description: {
        en: 'Monolithic Java Web application (JAKARTA EE) for GP/Specialist coordination with Stream API for consultation management.',
        fr: 'Application Web Java monolithique (JAKARTA EE) pour la coordination MG/Spécialiste avec Stream API pour la gestion des consultations.',
        ar: 'تطبيق ويب جافا متكامل (JAKARTA EE) لتنسيق الطبيب العام/الأخصائي مع Stream API لإدارة الاستشارات.'
      },
      technologies: ['Jakarta EE', 'Hibernate', 'JPA', 'Stream API', 'Jira'],
      category: 'backend',
      image: '🏥',
      githubUrl: 'https://github.com/adilaitelhoucine1/MedCore',
      featured: true
    },
    {
      title: 'Intranet CME',
      description: {
        en: 'Full digitalization platform for Evaluation Matrix Cards (CME) at Youcode Morocco using Laravel and React.',
        fr: 'Plateforme de digitalisation complète des Cartes de la Matrice d\'Évaluation (CME) chez Youcode Maroc avec Laravel et React.',
        ar: 'منصة رقمنة كاملة لبطاقات مصفوفة التقييم (CME) في Youcode المغرب باستخدام Laravel و React.'
      },
      technologies: ['Laravel', 'MySQL', 'TailwindCSS', 'Azure', 'Docker'],
      category: 'fullstack',
      image: '📊',
      featured: true
    }
  ]

  const getDescription = (description: Project['description']) => {
    return description[i18n.language as keyof typeof description] || description.en
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
          <span className="gradient-text">{t('projects.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('projects.subtitle')}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="group relative glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10 hover:shadow-primary/20 transition-all duration-500 transform-gpu perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Project Icon/Image with Glow */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative z-10"
              >
                {project.image}
              </motion.div>
              {/* Animated orbs in background */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-float-slow" />
            </div>

            {/* Project Content */}
            <div className="relative p-6 backdrop-blur-sm">
              <motion.h3 
                className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                {getDescription(project.description)}
              </p>

              {/* Technologies with Shimmer Effect */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="relative px-3 py-1 text-xs font-medium glass-card rounded-full overflow-hidden group/tech cursor-pointer"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {tech}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                  </motion.span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium glass-card rounded-full text-gray-600 dark:text-gray-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projects.viewDemo')}</span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-outline flex items-center justify-center space-x-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('projects.viewCode')}</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ⭐ Featured
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.a
          href="https://github.com/adilaitelhoucine1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          
          {/* Content */}
          <span className="relative z-10">{t('projects.viewMore')}</span>
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative z-10"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
          
          {/* Sparkle Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            initial={false}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.a>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 px-4"
        >
          Explore my complete portfolio of projects
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Projects
