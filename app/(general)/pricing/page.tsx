import type{ Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
  title:'Princing',
  description:'Aqui puedes encontrar todos nuestros productos a los mejores precios',
  keywords:['precios','productos','promociones'],
}

const page = () => {
  return (
    <>
      <h2 className='text-2xl text-white'>Pricing Page</h2>
    </>
  )
}

export default page
