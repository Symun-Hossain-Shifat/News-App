import React from 'react'

async function Detailspage ({params}) {
    const {id} = await params
    console.log(id)
    

     const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const Datas = await res.json();
    const Data = Datas.data[0]
   console.log(Data) 
   
  return (
    <div className='border container mx-auto'>Detailspage {Data.title} </div>
  )
}

export default Detailspage 