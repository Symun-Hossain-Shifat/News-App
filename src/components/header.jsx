import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { format } from 'date-fns'

function headerpage () {
  return (
    <div className='items-center justify-center text-center py-10 space-y-2'> 
      
      <Image src={logo} alt="logo Image " className='mx-auto'  />
      <h1 className='text-gray-700 text-2xl font-semibold'>Journalism Without Fear and Favour</h1>
      <p>{format(new Date(2014, 1, 11), "EEEE , MMM dd , yyyy" )} </p>

      
      
      </div>
  )
}

export default headerpage 