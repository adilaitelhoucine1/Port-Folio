import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import TypewriterText from './TypewriterText'
import MagneticButton from './MagneticButton'
import StatsCounter from './StatsCounter'

const Hero = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Geometric Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        
        {/* Floating Code Snippets */}
        <motion.div
          className="absolute top-1/4 left-1/4 font-mono text-xs text-primary/20 dark:text-primary/10"
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {'<code>'}
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 font-mono text-xs text-secondary/20 dark:text-secondary/10"
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
            delay: 2
          }}
        >
          {'{ }'}
        </motion.div>
      </div>

      <div className="section-container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4"
          >
            {t('hero.greeting')} 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
          >
            <span className="gradient-text">{t('hero.name')}</span>
          </motion.h1>

          {/* Title with Glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 glass-card rounded-full backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="relative">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
              </div>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </div>
          </motion.div>

          {/* Dynamic Tagline with Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 md:mb-6 h-10 sm:h-12 flex items-center justify-center px-2"
          >
            <TypewriterText
              texts={[
                t('hero.tagline'),
                t('hero.tagline2'),
                t('hero.tagline3'),
                t('hero.tagline4')
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={3000}
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t('hero.description')}
          </motion.p>

          {/* Tech Stack Pills with Unique Effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-4"
          >
            {['React.js', 'Laravel', 'Spring Boot', 'TypeScript', 'MySQL', 'Docker'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 glass-card rounded-full text-sm font-medium gradient-border overflow-hidden group cursor-pointer"
              >
                <span className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                  {tech}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.span>
            ))}
          </motion.div>

          {/* Location & Status */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-10 text-gray-600 dark:text-gray-400 text-sm md:text-base px-4"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="text-secondary font-semibold">{t('hero.status')}</span>
            </div>
          </motion.div>

          {/* CTAs with Magnetic Effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-10 px-4"
          >
            <MagneticButton href="#projects">
              <div className="btn-primary inline-flex items-center space-x-2 cursor-pointer text-base md:text-lg w-full sm:w-auto justify-center">
                <span>{t('hero.cta.primary')}</span>
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
              </div>
            </MagneticButton>
            
            <MagneticButton href="/CV-Adil Ait Elhoucine.pdf">
              <a
                href="/CV-Adil Ait Elhoucine.pdf"
                download
                className="btn-outline inline-flex items-center space-x-2 cursor-pointer text-base md:text-lg w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                <span>{t('hero.cta.secondary')}</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links with 3D Effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 md:space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/adilaitelhoucine1', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adil-ait-el-houcine/', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: 'mailto:adilaitelhoucine@gmail.com', color: 'from-red-600 to-red-800' }
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-3 md:p-4 glass-card rounded-xl md:rounded-2xl group overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <Icon className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section - Hidden on mobile */}
      <div className="section-container max-w-6xl mx-auto px-4 hidden md:block">
        <StatsCounter
          stats={[
            { value: 15, suffix: '+', label: 'Projects Completed' },
            { value: 2, suffix: '+', label: 'Years Experience' },
            { value: 10, suffix: '+', label: 'Technologies' },
            { value: 100, suffix: '%', label: 'Dedication' },
          ]}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium hidden sm:block">Scroll Down</span>
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-primary animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero

