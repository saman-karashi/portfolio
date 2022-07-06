import Image from 'next/image';
import {
  css,
  tailwind,
  sass,
  redux,
  react,
  nextJs,
  github,
  html,
  supabase,
  javascript,
} from '../helper/helper';

const skillsArr = [
  {
    name: 'Html',
    icon: html,
  },
  {
    name: 'Github&Git',
    icon: github,
  },
  {
    name: 'Javascript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: react,
  },
  {
    name: 'Next JS',
    icon: nextJs,
  },
  {
    name: 'Supabase',
    icon: supabase,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Css',
    icon: css,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
];

const Skills = () => {
  return (
    <section id='skills' className='my-16 px-5'>
      <h1 className='text-2xl text-center font-bold my-10'>Skills</h1>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm2x:px-5 md:px-0 md:grid-cols-4'>
        {skillsArr.map(({ icon, name }) => {
          return (
            <div key={name} className='shadow-md p-[50px] flex-col flex items-center transition-all duration-250 hover:scale-105'>
              <Image
                className='object-cover'
                src={icon}
                height={'100%'}
                width={'100%'}
                alt={name}
              />
              <h1 className='font-bold text-xl my-2'>{name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
