import { HomeFillIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '..'
const navItems=[
  {path:'/about',text:'About'},
  {path:'/pricing',text:'Pricing'},
  {path:'/contact',text:'Contact'},
]

export const Navbar = () => {
  console.log('Navbar creado')
  return (
    <nav className='flex justify-between items-center bg-blue-800 bg-opacity-30 p-2 m-2 rounded gap-2'>  
      <Link href="/" className='flex items-center gap-2'>
        <HomeFillIcon />
        <span>Home</span>
      </Link>

      <div className='flex gap-2 text-lg text-white'>
        {
          navItems.map(navItem => (
            // <ActiveLink key={text} path={path} text={text}/>
            <ActiveLink key={navItem.text} {...navItem}/>
          ))
        }
      </div>

    </nav>
  )
}

