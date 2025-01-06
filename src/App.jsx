import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import CoffeeMenu from './components/CoffeeMenu'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <CoffeeMenu/> */}
      <Menu/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
