import React from 'react'
import SectionTitle from './Title'
import aboutSvg from '../assets/about.svg';

export const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
    <div class='mx-auto max-w-7xl px-8 grid  md:grid-cols-2 items-center gap-16'>
      <img src={aboutSvg} className='w-full h-64' />
      <article>
        <SectionTitle text='code and coffee' />
        <p className='text-slate-600 mt-8 leading-loose'>
        I am a computer engineering student at the Azad University of Tehran-West. I am also a master in 
        web development technologies such as JavaScript, React, Redux, Next JS, and so on. I am working 
        with the React libraries as well as I have several fundamental projects with that.
        </p>
      </article>
    </div>
  </section>
  )
}
