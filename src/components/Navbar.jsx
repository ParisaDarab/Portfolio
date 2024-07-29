import {useState} from 'react'
import { links } from '../data'

export const Navbar = () => {
 
  return (
    <nav className='bg-emerald-100'>
        <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center' >
            <h2 className='text-3xl font-bold'>Web
                <span className='text-emerald-600'>Dev</span>
            </h2>
            <div className='flex gap-x-3'>{
                links.map((link)=>{
                    return <a className='capitalize tracking-wide text-lg hover:text-emerald-600' href={link.href} key={link.id}>
                        {link.text}
                    </a>
                     })}
            </div>
    </div>
    </nav>
  )
}
