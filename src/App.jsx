import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { FirstGame } from './pages/FirstGame'

const App = () => {
  return (
    <Routes>
      <Route path='/FirstGame' element={<FirstGame />} />
      <Route path='/' element={
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;