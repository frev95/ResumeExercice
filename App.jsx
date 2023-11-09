import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Facts from './components/Facts'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <main>
        <Nav />
        <Home />
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
