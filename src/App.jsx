import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Qualifications from './components/Qualifications'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Qualifications />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
