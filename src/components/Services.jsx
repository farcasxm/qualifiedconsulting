import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiTrendingUp, FiUsers, FiBarChart2, FiShield, FiZap } from 'react-icons/fi'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FiTarget />,
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development to align your goals with actionable roadmaps for sustainable growth.',
      color: '#2563eb'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Business Growth',
      description: 'Data-driven approaches to accelerate revenue, expand market share, and scale your operations effectively.',
      color: '#10b981'
    },
    {
      icon: <FiUsers />,
      title: 'Organizational Development',
      description: 'Transform your team structure, culture, and processes to maximize productivity and employee engagement.',
      color: '#f59e0b'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Performance Optimization',
      description: 'Identify bottlenecks, streamline workflows, and implement best practices to enhance operational efficiency.',
      color: '#8b5cf6'
    },
    {
      icon: <FiShield />,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your business and ensure compliance.',
      color: '#ef4444'
    },
    {
      icon: <FiZap />,
      title: 'Digital Transformation',
      description: 'Modernize your technology infrastructure and processes to stay competitive in the digital age.',
      color: '#06b6d4'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Expert Solutions for Your Business</h2>
          <p className="section-description">
            We offer comprehensive consulting services tailored to your unique needs, 
            helping you achieve sustainable growth and operational excellence.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="service-icon"
                style={{ '--service-color': service.color }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <motion.div
                className="service-link"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
