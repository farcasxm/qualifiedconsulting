import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import './Contact.css'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
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
    console.log('Form submitted:', formData)
    alert(t.contact.form.success)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: t.contact.email,
      content: 'office@qualifiedconsulting.ro',
      link: 'mailto:office@qualifiedconsulting.ro'
    },
    {
      icon: <FiPhone />,
      title: t.contact.phone,
      content: '+40 751 222 417',
      link: 'tel:+40751222417'
    },
    {
      icon: <FiMapPin />,
      title: t.contact.location,
      content: 'Romania',
      link: '#'
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-geometric-bg">
        <div className="contact-grid"></div>
        <div className="contact-shape"></div>
        <div className="contact-orange-glow"></div>
        <div className="contact-orange-glow-2"></div>
        <div className="contact-orange-glow-3"></div>
      </div>

      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-description">
            {t.contact.description}
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
            <h3 className="contact-info-title">{t.contact.infoTitle}</h3>
            <p className="contact-intro">
              {t.contact.intro}
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
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <div className="contact-item-border"></div>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-item-content-wrapper">
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
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">{t.contact.form.company}</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t.contact.form.companyPlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder={t.contact.form.messagePlaceholder}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.contact.form.submit}</span>
              <FiSend />
              <div className="submit-button-accent"></div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
