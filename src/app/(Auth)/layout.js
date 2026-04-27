import Headerpage from '@/components/header'
import React from 'react'

function layoutpageauth ({children}) {
  return (
   <>
   <Headerpage></Headerpage>
   {children}
   
   </>
  )
}

export default layoutpageauth 