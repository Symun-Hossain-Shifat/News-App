"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import user from '@/assets/user.png'
import Image from 'next/image';

function Navbarpage () {
    const [btn , setBtn ] = useState('home');
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 gap-3 items-center container mx-auto' >
       <div></div>
        
        
         
        <div className='flex gap-3  justify-center my-5 font-bold items-center text-gray-700'>
        <Link className={`${btn === 'home' && 'border-b-2 border-b-purple-600'}`} onClick={() => setBtn('home')} href = '/'>Home</Link>
        <Link className={`${btn === 'about' && 'border-b-2 border-b-purple-600'}`} onClick={() => setBtn('about')} href = '/About'>About</Link>
        <Link className={`${btn === 'career' && 'border-b-2 border-b-purple-600'}`} onClick={() => setBtn('career')} href = '/career'>Career</Link>

        </div>




        <div className='flex justify-center md:justify-end gap-2 mr-3'>
          <Image src={user} alt="" />
          <Link href={'/signup'}>
           <button className='bg-black py-3 px-8 btn text-white'>Login</button>
          </Link>
         



        </div>
       
       
        
    </div> 
  )
}

export default Navbarpage 