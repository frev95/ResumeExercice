import Header from './sections/Header'
import Home from './sections/Home'
import About from './sections/About'
import Facts from './sections/Facts'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {

  return (
    <>
      <main>
        <Header />
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
