import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiTrendingUp, FiUsers, FiBarChart2, FiShield, FiZap } from 'react-icons/fi'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FiTarget />,
      title: 'Organizational Diagnosis & Departmental Analysis',
      description: 'Comprehensive assessment of your organizational structure and departmental functions to identify opportunities for improvement.',
      color: '#8b5cf6'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Organizational Strategies & Reorganizations',
      description: 'Strategic planning, organizational restructuring, and negotiation of working conditions and terms to optimize your business operations.',
      color: '#7c3aed'
    },
    {
      icon: <FiUsers />,
      title: 'Personnel Needs Assessment',
      description: 'Evaluation of staffing requirements and creation of comprehensive personnel strategies aligned with your business objectives.',
      color: '#a78bfa'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Performance Evaluation Systems',
      description: 'Creation and implementation of professional performance evaluation systems, including individual and group assessments, professional and skills tests, and Hogan behavioral inventory.',
      color: '#8b5cf6'
    },
    {
      icon: <FiShield />,
      title: 'Compensation & Benefits',
      description: 'Establishment of salary grids and benefits structures that attract, retain, and motivate top talent.',
      color: '#7c3aed'
    },
    {
      icon: <FiZap />,
      title: 'Talent Management',
      description: 'Creation of talent maps (HIPO), succession planning, and detailed reports with recommendations for future actions.',
      color: '#a78bfa'
    },
    {
      icon: <FiUsers />,
      title: 'Coaching & Development',
      description: 'One-on-one coaching, group and team coaching, creation of constructive dialogues, and conflict negotiation support.',
      color: '#8b5cf6'
    },
    {
      icon: <FiTarget />,
      title: 'Team Building & Activities',
      description: 'Support in organizing team activities or across teams, including teambuilding initiatives that strengthen collaboration and engagement.',
      color: '#7c3aed'
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
          <h2 className="section-title">Guiding Your Business Through</h2>
          <p className="section-description">
            Comprehensive human resources consulting services designed to transform your organization, 
            optimize performance, and build sustainable success through strategic expertise and practical implementation.
          </p>
          <p className="section-description" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            Leadership focus: Individual/own management, team management, business management. 
            Talent and excellence – focus on execution and excellence. Detailed reports and recommendations for future actions.
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
