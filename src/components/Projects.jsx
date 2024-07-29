import React from 'react'
import SectionTitle from './Title'
import { projects } from '../data'
import { ProjectCart } from './ProjectCart'

export const Projects = () => {
  return (
    <section className='bg-slate-50 py-10'>
<div  className='mx-auto max-w-7xl px-8 py-20'>
    <SectionTitle text={'Projects'}/>
    <article className='gap-6 grid md:grid-cols-2 lg:grid-cols-3 '>
        {
            projects.map((project)=>{
                return <ProjectCart {...project} key={project.id} />
            })
        }
    </article>

</div>
    </section>
  )
}

