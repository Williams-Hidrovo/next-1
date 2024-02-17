import { Metadata } from 'next';
import React from 'react'


export const metadata:Metadata = {
 title: 'about',
 description: 'Pagina que habla sobre nosotros',
 keywords:['Nosotros','conocenos','info','equipo','personal','valores'],
};


const page = () => {
  return (
    <>
      <span className='text-lg text-white'> Hola mundo </span>
      <h1 className='text-7xl text-white'>About Page</h1>
    </>
  )
}

export default page
