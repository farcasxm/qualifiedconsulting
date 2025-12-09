import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Qualifications', href: '#qualifications' },
      { name: 'Why Choose Me', href: '#why-us' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiMail />, href: 'mailto:office@qualifiedconsulting.ro', label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="footer-geometric-bg">
        <div className="footer-grid"></div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-logo">QUALIFIED<br />CONSULTING</h3>
            <p className="footer-description">
              Transforming businesses through expert consulting and strategic solutions. 
              Your success is our mission.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <p>Email: office@qualifiedconsulting.ro</p>
              <p>Phone: +40 751 222 417</p>
              <p>Location: Romania</p>
            </div>
          </motion.div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>Copyright © {currentYear} Qualified Consulting SRL | CUI: 29865760 | J12/599/2012 | Cluj-Napoca, CJ, RO, GMT +2</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
