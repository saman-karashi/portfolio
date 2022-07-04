import Projects from '../components/Projects'
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import {ToastContainer,Slide} from 'react-toastify'

export default function Home() {
  return (
    <>
        <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        transition={Slide}
    />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
