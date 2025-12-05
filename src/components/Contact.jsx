import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'info@qualifiedconsulting.ro',
      link: 'mailto:info@qualifiedconsulting.ro'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+40 XXX XXX XXX',
      link: 'tel:+40XXXXXXXXX'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Romania',
      link: '#'
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p className="section-description">
            Ready to transform your business? Contact us today to discuss how 
            we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-intro">
              We're here to help. Reach out to us through any of these channels, 
              and we'll respond as soon as possible.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-title">{item.title}</div>
                    <div className="contact-item-content">{item.content}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <FiSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
