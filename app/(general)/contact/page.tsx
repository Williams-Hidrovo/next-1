import React from 'react'
import type { Metadata} from 'next';

export const metadata:Metadata={
  title:'contactos',
  description:'aqui nos puedes contactar',
  keywords:['contacts','phone','test','email'],
}

const page = () => {
  return (
    <>
        <h2 className='text-2xl text-white'>CONTACTS PAGE</h2>
    </>
  )
}

export default page
