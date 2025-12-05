import React from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiClock, FiUsers, FiTarget } from 'react-icons/fi'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiStar />,
      title: 'Proven Expertise',
      description: 'Our team brings years of industry experience and a track record of successful transformations.'
    },
    {
      icon: <FiTarget />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: <FiUsers />,
      title: 'Personalized Approach',
      description: 'Every solution is tailored to your unique business needs, industry, and goals.'
    },
    {
      icon: <FiClock />,
      title: 'Rapid Implementation',
      description: 'We move quickly without compromising quality, ensuring you see results fast.'
    },
  ]

  return (
    <section id="why-us" className="why-choose-us">
      <div className="why-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">The Qualified Consulting Advantage</h2>
          <p className="section-description">
            We combine deep expertise with innovative thinking to deliver solutions 
            that transform businesses and drive lasting success.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>Let's discuss how we can help you achieve your goals</p>
            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
