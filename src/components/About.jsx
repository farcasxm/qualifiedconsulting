import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiCheckCircle, FiTarget, FiUsers, FiTrendingUp, FiZap, FiAward } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import './About.css'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    }
  }

  const expertise = [
    { icon: <FiCheckCircle />, text: t.about.expertise.holistic },
    { icon: <FiTarget />, text: t.about.expertise.macro },
    { icon: <FiUsers />, text: t.about.expertise.connection },
    { icon: <FiTrendingUp />, text: t.about.expertise.analysis },
    { icon: <FiZap />, text: t.about.expertise.negotiation },
    { icon: <FiAward />, text: t.about.expertise.diverse }
  ]

  return (
    <section id="about" className="about" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="about-geometric-bg">
        <div className="about-grid"></div>
        <div className="about-shape-1"></div>
        <div className="about-shape-2"></div>
        <div className="about-lines"></div>
        <div className="about-orange-glow"></div>
        <div className="about-orange-glow-2"></div>
        <div className="about-orange-glow-3"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">
            <span className="name-highlight">{t.about.name}</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Left: Image */}
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="image-3d-container"
              style={{ rotateX, rotateY }}
            >
              <div className="image-frame-3d">
                <div className="image-container-3d">
                  <img 
                    src="/photo1.png" 
                    alt="Carmen Meșter" 
                    className="about-photo"
                    onError={(e) => {
                      console.error('Failed to load about image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('About image loaded successfully');
                    }}
                  />
                  <div className="image-overlay-3d"></div>
                </div>
                {/* Geometric Frame Accents */}
                <div className="image-frame-accent frame-top"></div>
                <div className="image-frame-accent frame-right"></div>
                <div className="image-frame-accent frame-bottom"></div>
                <div className="image-frame-accent frame-left"></div>
              </div>

              {/* Floating Geometric Elements */}
              <motion.div
                className="floating-geometric-about geo-1"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="floating-geometric-about geo-2"
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="about-text-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-card">
              <div className="text-accent"></div>
              <p className="text-lead">
                {t.about.lead.split('{years}').map((part, i, arr) => 
                  i === arr.length - 1 ? part : (
                    <React.Fragment key={i}>
                      {part}
                      <span className="highlight">{t.about.years}</span>
                    </React.Fragment>
                  )
                )}
              </p>
              <p className="text-body">
                {t.about.body.split('{connection}').map((part, i, arr) => 
                  i === arr.length - 1 ? part : (
                    <React.Fragment key={i}>
                      {part}
                      <span className="highlight">{t.about.connection}</span>
                    </React.Fragment>
                  )
                )}
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="expertise-grid">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="expertise-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="expertise-icon">{item.icon}</div>
                  <span className="expertise-text">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="about-stat-item">
            <div className="about-stat-number">25+</div>
            <div className="about-stat-label">{t.hero.stats.years}</div>
          </div>
          <div className="about-stat-divider"></div>
          <div className="about-stat-item">
            <div className="about-stat-number">100%</div>
            <div className="about-stat-label">{t.hero.stats.custom}</div>
          </div>
          <div className="about-stat-divider"></div>
          <div className="about-stat-item">
            <div className="about-stat-number">Multi</div>
            <div className="about-stat-label">{t.hero.stats.industry}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
