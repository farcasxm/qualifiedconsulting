import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
import './About.css'

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Industry Experts' },
  ]

  const values = [
    'Excellence in every project',
    'Client-focused approach',
    'Data-driven solutions',
    'Transparent communication',
    'Continuous innovation',
    'Long-term partnerships'
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title">Your Trusted Consulting Partner</h2>
            <p className="about-description">
              Qualified Consulting brings together decades of combined experience 
              in strategic business consulting. We've helped hundreds of organizations 
              transform their operations, accelerate growth, and achieve their most 
              ambitious goals.
            </p>
            <p className="about-description">
              Our team of expert consultants combines deep industry knowledge with 
              innovative thinking to deliver solutions that drive real, measurable results. 
              We don't just provide advice—we partner with you to implement change that lasts.
            </p>

            <div className="values-list">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <FiCheckCircle className="check-icon" />
                  <span>{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="award-badge">
              <FiAward />
              <div>
                <div className="award-title">Industry Leader</div>
                <div className="award-subtitle">Recognized Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
