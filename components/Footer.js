import Image from "next/image"
import Link from 'next/link'
import {
githubIcon,
linkedinIcon,
twitterIcon
} from '../helper/helper'

const Footer = () => {
  return (
    <footer className='bg-black h-[250px] md:py-10'>
        <div className='container mx-auto max-w-[1200px] h-full flex flex-col justify-between'>
            <div className="flex justify-center items-center sm2x:flex-col md:flex-row">
               <div className="flex items-center justify-start my-2 md:mx-5">
                    <Link href='https://github.com/saman-karashi'>
                      <a className='transition-all duration-350 hover:scale-105 hover:opacity-75'>
                        <Image src={githubIcon} width={40} height={40}  alt="github" />
                      </a>
                    </Link>
                    <span className='ml-3 text-white font-semibold text-xl'>Github</span>
                </div>
                <div className="flex items-center my-2 md:mx-5">
                    <Link href='https://www.linkedin.com/in/saman-karashi-0a5344221/'>
                      <a className='transition-all duration-350 hover:scale-105 hover:opacity-75'>
                        <Image src={linkedinIcon} width={45} height={45} alt="linkedin" />
                      </a>
                    </Link>
                    <span className='ml-3 text-white font-semibold text-xl'>Linkdin</span>
                </div>
                <div className="flex items-center my-2 md:mx-5">
                    <Link href='https://twitter.com/saman_karashi'>
                      <a className='transition-all duration-350 hover:scale-105 hover:opacity-75'>
                        <Image src={twitterIcon} width={40} height={40} alt="twitter" />
                      </a>
                    </Link>
                    <span className='ml-3 text-white font-semibold text-xl'>Twitter</span>
                </div> 
            </div>
            <p className="text-white text-center mb-2">Saman2022&copy;</p>
        </div>
    </footer>
  )
}

export default Footer