import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher">
      <motion.button
        className={`lang-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Switch to English"
      >
        <span className="lang-text">EN</span>
        {language === 'en' && (
          <motion.div
            className="lang-indicator"
            layoutId="activeLang"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </motion.button>
      
      <div className="lang-divider"></div>
      
      <motion.button
        className={`lang-button ${language === 'ro' ? 'active' : ''}`}
        onClick={() => setLanguage('ro')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Switch to Romanian"
      >
        <span className="lang-text">RO</span>
        {language === 'ro' && (
          <motion.div
            className="lang-indicator"
            layoutId="activeLang"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </motion.button>
    </div>
  )
}

export default LanguageSwitcher
