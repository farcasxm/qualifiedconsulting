import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Why Choose Us', href: '#why-us' },
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
    { icon: <FiMail />, href: 'mailto:info@qualifiedconsulting.ro', label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-logo">Qualified Consulting</h3>
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
                  whileHover={{ scale: 1.2, y: -3 }}
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
              <p>Email: info@qualifiedconsulting.ro</p>
              <p>Phone: +40 XXX XXX XXX</p>
              <p>Location: Romania</p>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Qualified Consulting. All rights reserved.</p>
          <p>Designed with excellence for your success.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
