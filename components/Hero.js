import Image from 'next/image'
import heroImage from '../public/hero-image.jpg'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <div className='md:order-1 md:basis-[70%]'>
        <Image src={heroImage}  className="object-cover w-[100%] h-[100%]" />
    </div> 
    <div className=' text-center mt-8 md:mt-0 md:order-0 md:pl-2'>
    <h1 className='uppercase font-bold text-xl md:text-2xl md:text-left'>hi,i am saman <br/> karashi</h1>
    <p className='my-4 md:text-left max-w-[350px]'>A creative front end developer who loves to solve issues by own.</p>
        <Link href='#projects' >
        <button className='py-2 text-sm px-5 bg-red-300 text-white font-bold transition-all border-2 border-transparent duration-250 hover:text-red-300 hover:bg-white hover:border-b-red-300 hover:border-l-red-300'>
            Projects
        </button>
        </Link>
        <Link href='#contact' >
        <button className='ml-5 py-2 text-sm px-4 bg-dark-700 text-white font-bold transition-all border-2 border-transparent duration-250 hover:text-dark-700 hover:bg-white hover:border-b-dark-700 hover:border-l-dark-700'>
            Contact me
        </button>
        </Link>
    </div> 
    </>
  )
}

export default Hero