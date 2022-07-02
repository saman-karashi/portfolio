import Link from 'next/link';
import {FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState,useEffect} from 'react';

const Navbar = () => {
const [isOpen,setIsOpen] = useState(false);

return (
   <header className='bg-blue-400'>
    <nav className='mx-auto h-[65px] flex justify-end max-w-[1200px]'>
        <ul className={`text-sm justify-end flex items-center ${isOpen ? 'flex' : 'hidden'} md:flex md:text-base`}>
            <li className='mx-3 text-white'>
                <Link href='/'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Home
                    </a>
                </Link>
            </li>
            <li className='mx-3 text-white'>
                <Link href='#projects' >
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Projects
                    </a>
                </Link>
            </li>
            <li className='mx-3 text-white'>
                <Link href='#skills'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Skills
                    </a>
                </Link>
            </li>
            <li className='mx-3 text-white'>
                <Link href='#about'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        About
                    </a>
                </Link>
            </li>
            <li className='mx-3 mr-[15px] text-white'>
                <Link href='#contact'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Contact
                    </a>
                </Link>
            </li>
        </ul>
        {
          !isOpen
          ?
        <button onClick={()=> setIsOpen(true)} className='block md:hidden'>
            <GiHamburgerMenu size={30} color={'#fff'}/>
        </button>
        :
        <button onClick={()=> setIsOpen(false)}  className='block md:hidden'>
            <FaTimes size={30} color={'#fff'}/>
        </button>

        }

    </nav>

   </header>
  )
}

export default Navbar