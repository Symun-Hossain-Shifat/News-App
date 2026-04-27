import Link from 'next/link'
import React from 'react'

function Notfound () {
  return (
    <div className='text-center content-center h-screen space-y-2 justify-center'>
      <p className='font-semibold text-2xl'>This URl Is Invalid <br /> Plese Enter Valid URl </p> 
      <Link href={'/'}><button className='btn btn-accent text-white font-bold'>Back To Home</button></Link>
      
      </div>
  )
}

export default Notfound 