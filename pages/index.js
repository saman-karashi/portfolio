import Image from 'next/image'
import heroImage from '../public/hero-image.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
     <section className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap md:justify-between">
       <div className='md:order-1 md:basis-[70%]'>
         <Image src={heroImage}  className="object-cover w-[100%] h-[100%]" />
        </div> 
       <div className=' text-center mt-2 md:mt-0 md:order-0 md:pl-2'>
        <h1 className='uppercase font-bold text-xl md:text-2xl md:text-left'>hi,i am saman <br/> karashi</h1>
        <p className='my-4 md:text-left max-w-[350px]'>A creative front end developer who loves to solve issues by own.</p>
         <Link href='/projects' >
           <button className='py-2 text-sm px-5 bg-red-300 text-white font-bold transition-all border duration-250 hover:text-red-300 hover:border-red-300 hover:bg-white'>
              Projects
           </button>
         </Link>
        </div> 
     </section>
    </>
  )
}
