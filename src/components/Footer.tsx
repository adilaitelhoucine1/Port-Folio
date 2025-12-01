import { useTranslation } from 'react-i18next'
import { Heart, Code } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            {'<Adil />'}
          </div>

          {/* Built With */}
          <div className="flex items-center space-x-2 text-sm">
            <span>{t('footer.built')}</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          </div>

          {/* Tech Stack */}
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Code className="w-4 h-4" />
            <span>React + TypeScript + TailwindCSS + Framer Motion</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} Adil Ait Elhoucine. {t('footer.rights')}.
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

