import Headerpage from '@/components/header'
import MenuPage from '@/components/menu'
import Navbarpage from '@/components/Navbar'
import React from 'react'

function layoutpage ({children}) {
  return (
    <>
    <Headerpage></Headerpage>
   <MenuPage></MenuPage>
   <Navbarpage></Navbarpage>
   {children}
    </>
   
  )
}

export default layoutpage 