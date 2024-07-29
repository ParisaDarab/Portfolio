import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


import React from 'react'

export const Hero = () => {
  return (
    <div className='py-24 bg-emerald-100'>
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 gap-8 items-center gap-8'>
      <article>
        <h1 className='text-7xl font-bold tracking-wide'>I'm Parisa</h1>
        <p className='mt-4 text-3xl text-slate-700 tracking-wide'>
            Front-End Developer
        </p>
        <p className='mt-2 text lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality

        </p>
        <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/'><FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black'/></a>
            <a href=''><FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black'/></a>
            <a href=''><FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black'/></a>

        </div>
      </article>
    <article className='hidden md:block'>
        <img src={heroImg} alt="" srcset="" className='h-80 lg:h-96' />
    </article>
        </div>
    </div>
  )
}
