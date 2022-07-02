import Image from "next/image";
import css from '../public/icons-languages/css.png'
import tailwind from '../public/icons-languages/tailwind.png'
import sass from '../public/icons-languages/sass.webp'
import redux from '../public/icons-languages/redux.png'
import react from '../public/icons-languages/react.png'
import nextJs from '../public/icons-languages/nextJs.png'
import github from '../public/icons-languages/github.png'
import html from '../public/icons-languages/html.png'
import supabase from '../public/icons-languages/supabase.png'
import javascript from '../public/icons-languages/javascript.jpg'

const Skills = () => {
  return (
   <section id='skills' className='my-16 px-5'>
     <h1 className='text-2xl text-center font-bold my-10'>Skills</h1>
     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div className="shadow-md p-[50px] flex flex-col items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={html} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Html</h1>
        </div>
        <div className="shadow-md p-[50px] flex flex-col items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover block" src={css} height={'100%'} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Css</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={tailwind} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Tailwind</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={sass} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Sass</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={javascript} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Javascript</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={supabase} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Supabase</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={react} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">React JS</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={nextJs} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Next JS</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={github} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Github&Git</h1>
        </div>
        <div className="shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105">
        <Image className="object-cover" src={redux} height={"100%"} width={"100%"} />
        <h1 className="font-bold text-xl my-2">Redux</h1>
        </div>
     </div>
   </section>
  )
}

export default Skills