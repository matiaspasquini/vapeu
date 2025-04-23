
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="quienes-somos" className="pt-30">
       <Stats />
      </section>
      <section id="quienes-somos" className="mt-40 md:mt-32">
       <About />
      </section>
      <section id="servicios" className="">
      <Services />
      </section>
      <section id="contacto" className="pt-20">
      <Contact />
      </section>
      <Footer />

    </div>
  )
}

export default App
