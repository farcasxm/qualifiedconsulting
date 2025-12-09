import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import LanguageSwitcher from './LanguageSwitcher'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.qualifications, href: '#qualifications' },
    { name: t.nav.whyChooseMe, href: '#why-us' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a href="#home">
            <span className="logo-text">QUALIFIED</span>
            <span className="logo-divider">|</span>
            <span className="logo-subtext">CONSULTING</span>
          </a>
        </motion.div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link"
              >
                <span className="nav-link-text">{item.name}</span>
                <span className="nav-link-underline"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <LanguageSwitcher />
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* Geometric accent line */}
      <motion.div 
        className="nav-accent-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.nav>
  )
}

export default Navbar
