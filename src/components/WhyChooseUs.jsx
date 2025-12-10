import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiStar, FiTarget, FiUsers, FiZap } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
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

  const features = [
    {
      icon: <FiStar />,
      title: t.whyChooseMe.features.uniqueness.title,
      description: t.whyChooseMe.features.uniqueness.description,
    },
    {
      icon: <FiTarget />,
      title: t.whyChooseMe.features.differentiating.title,
      description: t.whyChooseMe.features.differentiating.description,
    },
    {
      icon: <FiUsers />,
      title: t.whyChooseMe.features.holistic.title,
      description: t.whyChooseMe.features.holistic.description,
    },
    {
      icon: <FiZap />,
      title: t.whyChooseMe.features.connection.title,
      description: t.whyChooseMe.features.connection.description,
    },
  ]

  return (
    <section id="why-us" className="why-choose-me" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="why-geometric-bg">
        <div className="why-grid"></div>
        <div className="why-shape-1"></div>
        <div className="why-shape-2"></div>
        <div className="why-orange-glow"></div>
        <div className="why-orange-glow-2"></div>
        <div className="why-orange-glow-3"></div>
      </div>

      <div className="why-container">
        {/* Header */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.whyChooseMe.label}</span>
          <h2 className="section-title">{t.whyChooseMe.title}</h2>
          <p className="section-description">
            {t.whyChooseMe.description}
          </p>
        </motion.div>

        {/* Content: Cards Left, Image Right */}
        <div className="why-content">
          {/* Left: Features Cards - Vertical Stack */}
          <div className="why-features-vertical">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="why-feature-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  zIndex: 10
                }}
              >
                <div className="feature-border"></div>
                <div className="feature-corner"></div>
                
                <div className="feature-content">
                  <div className="feature-header-row">
                    <motion.div 
                      className="feature-icon-wrapper"
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                        y: hoveredIndex === index ? -4 : 0
                      }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <div className="feature-icon">{feature.icon}</div>
                      <motion.div
                        className="icon-pulse-ring"
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                          opacity: hoveredIndex === index ? [0.5, 0, 0.5] : 0
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: hoveredIndex === index ? Infinity : 0,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                </div>
                
                <div className="feature-accent-line"></div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            className="why-image-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="why-image-3d-container"
              style={{ rotateX, rotateY }}
            >
              <div className="why-image-frame-3d">
                <div className="why-image-container-3d">
                  <img 
                    src="/photo2.jpg" 
                    alt="Carmen Meșter" 
                    className="why-photo"
                    onError={(e) => {
                      console.error('Failed to load why image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('Why image loaded successfully');
                    }}
                  />
                  <div className="why-image-overlay-3d"></div>
                </div>
                {/* Geometric Frame Accents */}
                <div className="why-image-frame-accent frame-top"></div>
                <div className="why-image-frame-accent frame-right"></div>
                <div className="why-image-frame-accent frame-bottom"></div>
                <div className="why-image-frame-accent frame-left"></div>
              </div>

              {/* Floating Geometric Elements */}
              <motion.div
                className="why-floating-geometric geo-1"
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
                className="why-floating-geometric geo-2"
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
        </div>

        {/* CTA Section */}
        <motion.div
          className="why-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="cta-content">
            <h3 className="cta-title">{t.whyChooseMe.cta.title}</h3>
            <p className="cta-subtitle">{t.whyChooseMe.cta.subtitle}</p>
            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.whyChooseMe.cta.button}</span>
              <div className="cta-button-accent"></div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
