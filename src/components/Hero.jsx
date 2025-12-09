import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 200, damping: 25 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
        setMousePosition({ 
          x: (e.clientX - rect.left) / rect.width, 
          y: (e.clientY - rect.top) / rect.height 
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" ref={containerRef}>
      {/* Abstract Geometric Background */}
      <div className="hero-geometric-bg">
        <div className="geometric-grid"></div>
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-lines"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Left: Text Content */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="hero-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="label-line"></span>
              <span className="label-text">{t.hero.badge}</span>
              <span className="label-line"></span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="title-line-1">{t.hero.title1}</span>
              <span className="title-line-2">{t.hero.title2}</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
            <motion.button
              className="btn-primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.hero.getStarted}</span>
              <FiArrowRight />
              <div className="btn-accent"></div>
            </motion.button>
            <motion.a
              href="#qualifications"
              className="btn-secondary"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.hero.viewQualifications}</span>
              <span className="btn-underline"></span>
            </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Visual Element */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* 3D Geometric Container */}
            <motion.div
              className="hero-3d-container"
              style={{ rotateX, rotateY }}
            >
              {/* Main Photo Frame */}
              <div className="photo-frame-3d">
                <div className="photo-container-3d">
                  <img 
                    src="/hero-image.jpeg" 
                    alt="Carmen Meșter" 
                    className="hero-photo"
                    onError={(e) => {
                      console.error('Failed to load hero image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('Hero image loaded successfully');
                    }}
                  />
                  <div className="photo-overlay-3d"></div>
                </div>
                {/* Geometric Frame Accents */}
                <div className="frame-accent frame-top"></div>
                <div className="frame-accent frame-right"></div>
                <div className="frame-accent frame-bottom"></div>
                <div className="frame-accent frame-left"></div>
              </div>

              {/* Floating Geometric Elements */}
              <motion.div
                className="floating-geometric geo-1"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="floating-geometric geo-2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="floating-geometric geo-3"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FiChevronDown />
          </motion.div>
          <div className="scroll-line"></div>
        </motion.div>

        {/* Company Logos Carousel */}
        <motion.div
          className="hero-logos-carousel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="logos-carousel-wrapper">
            <div className="logos-carousel-track">
              {/* Duplicate company names for seamless loop */}
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  <div className="logo-item">De'Longhi</div>
                  <div className="logo-item">Nokia</div>
                  <div className="logo-item">Friesland Foods</div>
                  <div className="logo-item">Blashine</div>
                  <div className="logo-item">ROMBAT</div>
                  <div className="logo-item">BRD</div>
                  <div className="logo-item">EVW Holding</div>
                  <div className="logo-item">Brinel</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
