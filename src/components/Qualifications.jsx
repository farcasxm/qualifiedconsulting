import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiAward, 
  FiBriefcase, 
  FiUsers, 
  FiBook, 
  FiCheckCircle, 
  FiShield, 
  FiLock
} from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import './Qualifications.css'

const Qualifications = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedCategoryKey, setSelectedCategoryKey] = useState('all')

  const iconMap = [
    <FiAward />,
    <FiBriefcase />,
    <FiUsers />,
    <FiBook />,
    <FiCheckCircle />,
    <FiShield />,
    <FiLock />
  ]

  const years = ['2020', '2019', '2021', '2018', '2020', '2019', '2022']

  const qualifications = t.qualifications.items.map((item, index) => ({
    ...item,
    icon: iconMap[index],
    year: years[index],
    category: t.qualifications.categories[item.categoryKey]
  }))

  const categoryKeys = Object.keys(t.qualifications.categories)
  const categories = categoryKeys.map(key => ({
    key,
    label: t.qualifications.categories[key]
  }))

  useEffect(() => {
    setSelectedCategoryKey('all')
  }, [language])

  const filteredQualifications = selectedCategoryKey === 'all'
    ? qualifications
    : qualifications.filter(q => q.categoryKey === selectedCategoryKey)

  return (
    <section id="qualifications" className="qualifications">
      <div className="qualifications-geometric-bg">
        <div className="qual-grid"></div>
        <div className="qual-shape-1"></div>
        <div className="qual-shape-2"></div>
        <div className="qual-lines"></div>
        <div className="qual-orange-glow"></div>
        <div className="qual-orange-glow-2"></div>
        <div className="qual-orange-glow-3"></div>
      </div>

      <div className="qualifications-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.qualifications.label}</span>
          <h2 className="section-title">{t.qualifications.title}</h2>
          <p className="section-description">
            {t.qualifications.description}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              className={`filter-button ${selectedCategoryKey === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategoryKey(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {selectedCategoryKey === category.key && (
                <motion.div
                  className="filter-indicator"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Qualifications Grid */}
        <div className="qualifications-grid">
          {filteredQualifications.map((qualification, index) => (
            <motion.div
              key={index}
              className="qualification-card-new"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -12,
                zIndex: 10
              }}
            >
              {/* Card Border */}
              <div className="card-border-new"></div>
              
              {/* Corner Accent */}
              <div className="card-corner-new"></div>
              
              {/* Card Content */}
              <div className="card-content-new">
                {/* Icon Section */}
                <motion.div 
                  className="card-icon-section"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    y: hoveredIndex === index ? -4 : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <div className="card-icon-wrapper">
                    <div className="card-icon">{qualification.icon}</div>
                    <motion.div
                      className="qualification-icon-pulse-ring"
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
                  </div>
                </motion.div>

                {/* Header */}
                <div className="card-header-new">
                  <div className="card-meta">
                    <span className="card-year">{qualification.year}</span>
                    <span className="card-category">{qualification.category}</span>
                  </div>
                  <h3 className="card-title-new">{qualification.title}</h3>
                  <div className="card-subtitle-new">{qualification.subtitle}</div>
                  <div className="card-organization">{qualification.organization}</div>
                </div>

                {/* Description */}
                <div className="card-description-new">
                  <p>{qualification.description}</p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="card-bottom-accent"></div>

              {/* Hover Glow Effect */}
              <motion.div
                className="card-glow-new"
                animate={{
                  opacity: hoveredIndex === index ? 0.3 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Qualifications
