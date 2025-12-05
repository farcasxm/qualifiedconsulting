import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FiTrendingUp />
            <span>Expert Consulting Solutions</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform Your Business with
            <span className="gradient-text"> Expert Consulting</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We deliver strategic solutions that drive growth, optimize operations, 
            and unlock your organization's full potential. Experience the difference 
            of working with true experts.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              className="btn-primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <FiArrowRight />
            </motion.button>
            <motion.a
              href="#services"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="floating-card card-1">
            <div className="card-icon">📊</div>
            <div className="card-text">Strategic Planning</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">💼</div>
            <div className="card-text">Business Growth</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🎯</div>
            <div className="card-text">Expert Solutions</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}

export default Hero
