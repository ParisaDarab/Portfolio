import React from 'react'
import { skills } from '../data'
import { SkillsCard } from './SkillCarts'
import SectionTitle from './Title'

export const Skills = () => {
  return (
    <section className='bg-slate-50 py-10' id='skills'>
  <div className='mx-auto max-w-7xl px-8 py-20' >
  <SectionTitle text={'Skills'}/>
    <div className='py-20 px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
       {
        skills.map((skill)=>{
            return <SkillsCard {...skill} key={skill.id}/>
        })
       }
    </div>
  </div>
    
    </section>
  )
}
