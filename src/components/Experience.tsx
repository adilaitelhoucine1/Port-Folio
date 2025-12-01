import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

interface Experience {
  title: {
    en: string
    fr: string
    ar: string
  }
  company: string
  location: string
  period: {
    en: string
    fr: string
    ar: string
  }
  achievements: {
    en: string[]
    fr: string[]
    ar: string[]
  }
}

const Experience = () => {
  const { t, i18n } = useTranslation()

  const experiences: Experience[] = [
    {
      title: {
        en: 'Full Stack Developer Intern',
        fr: 'Stagiaire Développeur Full Stack',
        ar: 'متدرب مطور فول ستاك'
      },
      company: 'DEVTI TECHNOLOGY LTD',
      location: 'Tangier, Morocco',
      period: {
        en: 'May 2025 - August 2025',
        fr: 'Mai 2025 - Août 2025',
        ar: 'مايو 2025 - أغسطس 2025'
      },
      achievements: {
        en: [
          'Developed MarocAdsZone platform (React.js, Laravel 10, MySQL)',
          'Managed technical architecture: database structuring, RESTful APIs, deployment',
          'Integrated Firebase Storage for secure image management'
        ],
        fr: [
          'Développé la plateforme MarocAdsZone (React.js, Laravel 10, MySQL)',
          'Géré l\'architecture technique : structuration BDD, APIs RESTful, déploiement',
          'Intégré Firebase Storage pour la gestion sécurisée des images'
        ],
        ar: [
          'تطوير منصة MarocAdsZone (React.js, Laravel 10, MySQL)',
          'إدارة البنية التقنية: هيكلة قاعدة البيانات، APIs RESTful، النشر',
          'دمج Firebase Storage لإدارة الصور الآمنة'
        ]
      }
    },
    {
      title: {
        en: 'Full Stack Developer Intern',
        fr: 'Stagiaire Développeur Full Stack',
        ar: 'متدرب مطور فول ستاك'
      },
      company: 'Proface SARL',
      location: 'Marrakech, Morocco',
      period: {
        en: 'July 2021 - September 2021',
        fr: 'Juillet 2021 - Septembre 2021',
        ar: 'يوليو 2021 - سبتمبر 2021'
      },
      achievements: {
        en: [
          'Ensured complete project management autonomously from functional analysis to production',
          'Developed Back-End architecture (Laravel, MySQL) and database structuring',
          'Created client/admin interfaces and business logic for order/reservation management'
        ],
        fr: [
          'Assuré la gestion de projet complète en autonomie, de l\'analyse fonctionnelle à la mise en production',
          'Développé l\'architecture Back-End (Laravel, MySQL) et la structuration des bases de données',
          'Créé les interfaces client/admin et la logique métier pour la gestion des commandes/réservations'
        ],
        ar: [
          'ضمان إدارة مشروع كاملة بشكل مستقل من التحليل الوظيفي إلى الإنتاج',
          'تطوير بنية Back-End (Laravel, MySQL) وهيكلة قواعد البيانات',
          'إنشاء واجهات العميل/المسؤول ومنطق الأعمال لإدارة الطلبات/الحجوزات'
        ]
      }
    }
  ]

  const getText = (text: { en: string; fr: string; ar: string }) => {
    return text[i18n.language as keyof typeof text] || text.en
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
          <span className="gradient-text">{t('experience.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('experience.subtitle')}
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative mb-12 ${
              index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
            } pl-16 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
          >
            {/* Timeline Dot */}
            <div className={`absolute top-6 ${
              index % 2 === 0 ? 'right-auto left-4 md:left-auto md:-right-4' : 'left-4 md:-left-4'
            } w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 flex items-center justify-center`}>
              <Briefcase className="w-4 h-4 text-white" />
            </div>

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
            >
              {/* Period */}
              <div className="flex items-center space-x-2 text-sm text-primary mb-2 justify-start md:justify-start">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">{getText(exp.period)}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {getText(exp.title)}
              </h3>

              {/* Company & Location */}
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-semibold">{exp.company}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 text-left">
                {getText(exp.achievements).map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}

        {/* End Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-8 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold"
        >
          🚀
        </motion.div>
      </div>
    </div>
  )
}

export default Experience

