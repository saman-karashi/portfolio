import snakeImg from '../public/snake.png';
import movieOmdbImg from '../public/movieOmdb.png'
import pingPongImg from '../public/pingPong.png';
import weatherImg from '../public/weather.png'
import Image from 'next/image';
import {FaChevronRight} from 'react-icons/fa'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id='projects' className='my-16 overflow-hidden'>
        <h1 className='mb-10 text-center font-bold text-2xl'>Projects</h1>
         <div className='grid grid-cols-1 gap-y-3 md:grid-cols-3 sm2x:px-5 md:gap-x-3 md:px-0'>
            <div className=' mx-auto shadow-lg border rounded-xl overflow-hidden md:w-full sm:w-[350px] sm2x:w-[300px]'>
                <Image src={snakeImg} className='object-cover'/>
                <div className='px-2'>
                <h1 className='my-2'>Snake game is developed by pure javascript.</h1>
                <Link href='https://saman-karashi.github.io/snake/'>
                    <button className='my-5 mx-auto flex items-center bg-blue-400 px-8 text-sm font-bold py-2 transition-all duration-250 border-2 border-transparent text-white hover:text-blue-400 hover:border-b-blue-400 hover:bg-transparent'>
                        Visit
                        <span className='ml-1'>
                            <FaChevronRight />
                        </span>
                    </button>
                </Link>
                </div>
            </div>
            <div className='mx-auto shadow-lg border rounded-xl overflow-hidden md:w-full sm:w-[350px] sm2x:w-[300px]'>
                <Image src={movieOmdbImg} className="object-cover" height={1080} />
                <div className='px-2'>
                <h1 className='my-2'>Full stack movie app is developed by react js.</h1>
                <Link href='https://saman-karashi.github.io/omdbMovie'>
                    <button className='my-5 mx-auto flex items-center bg-blue-400 px-8 text-sm font-bold py-2 transition-all duration-250 border-2 border-transparent text-white hover:text-blue-400 hover:border-b-blue-400 hover:bg-transparent'>
                        Visit
                        <span className='ml-1'>
                            <FaChevronRight />
                        </span>
                    </button>
                </Link>
                </div>
            </div>
 
            <div className='mx-auto shadow-lg border rounded-xl overflow-hidden md:w-full sm:w-[350px] sm2x:w-[300px]'>
                <Image src={pingPongImg} className="object-cover" height={600}/>
                <div className='px-2'>
                <h1 className='my-2'>Ping pong game is developed by javascript.</h1>
                <Link href='https://saman-karashi.github.io/pingPong/'>
                    <button className='my-5 mx-auto flex items-center bg-blue-400 px-8 text-sm font-bold py-2 transition-all duration-250 border-2 border-transparent text-white hover:text-blue-400 hover:border-b-blue-400 hover:bg-transparent'>
                        Visit
                        <span className='ml-1'>
                            <FaChevronRight />
                        </span>
                    </button>
                </Link>
                </div>
            </div>
            <div className='mx-auto shadow-lg border rounded-xl overflow-hidden md:w-full sm:w-[350px] sm2x:w-[300px]'>
                <Image src={weatherImg} className="object-cover" height={800}/>
                <div className='px-2'>
                <h1 className='my-2'>Weather app is developed by pure javascript.</h1>
                <Link href='https://saman-karashi.github.io/weather-app/'>
                    <button className='my-5 mx-auto flex items-center bg-blue-400 px-8 text-sm font-bold py-2 transition-all duration-250 border-2 border-transparent text-white hover:text-blue-400 hover:border-b-blue-400 hover:bg-transparent'>
                        Visit
                        <span className='ml-1'>
                            <FaChevronRight />
                        </span>
                    </button>
                </Link>
                </div>
            </div>

         </div>
 

    </section>
  )
}

export default Projects