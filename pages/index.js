import Projects from '../components/Projects'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
     <section className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap md:justify-between">
        <Hero />
     </section>
     <section id='projects' className='my-16 overflow-hidden'>
        <Projects />
     </section>
    </>
  )
}
