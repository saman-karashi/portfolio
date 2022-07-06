import Projects from '../components/Projects'
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import {ToastContainer,Slide} from 'react-toastify'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
      <meta content='personal website' description="Personal website is created by next js" />
      <title>Saman</title>
    </Head>
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
