import Headerpage from '@/components/header'
import MenuPage from '@/components/menu'
import React from 'react'

function layoutpage ({children}) {
  return (
    <>
    <Headerpage></Headerpage>
   <MenuPage></MenuPage>
   {children}
    </>
   
  )
}

export default layoutpage 