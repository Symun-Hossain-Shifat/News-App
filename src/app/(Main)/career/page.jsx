import Link from 'next/link'
import React from 'react'

function careerpage () {
  return (
    <div className='text-center content-center h-screen space-y-2 justify-center'>
      <p className='font-semibold text-2xl'>This Career Page </p> 
      <Link href={'/'}><button className='btn btn-accent text-white font-bold'>Back To Home</button></Link>
      
      </div>
  )
}

export default careerpage 