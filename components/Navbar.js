import Link from 'next/link';
import {FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react';

const Navbar = () => {
const [isOpen,setIsOpen] = useState(false);

return (
   <header className='bg-blue-400'>
    <nav className='mx-auto h-[65px] max-w-[1200px] flex items-center justify-end'>
        <ul className={`text-sm justify-end flex items-center ${isOpen ? 'flex' : 'hidden'} md:flex md:text-base`}>
            <li className='mx-2 text-white md:mx-3'>
                <Link href='/'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Home
                    </a>
                </Link>
            </li>
            <li className='mx-2 text-white md:mx-3'>
                <Link href='#projects' >
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Projects
                    </a>
                </Link>
            </li>
            <li className='mx-2 text-white md:mx-3'>
                <Link href='#skills'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        Skills
                    </a>
                </Link>
            </li>
            <li className='mx-2 text-white md:mx-3'>
                <Link href='#about'>
                    <a className='transition-all duration-250 hover:text-dark-700'>
                        About
                    </a>
                </Link>
            </li>
            <li className='mx-2 mr-[15px] text-white md:mx-3'>
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