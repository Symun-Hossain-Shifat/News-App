import Rightbar from '@/components/rightbar';
import Image from 'next/image';
import React from 'react'

async function Detailspage ({params}) {
    const {id} = await params
    // console.log(id)
    

     const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const Datas = await res.json();
    const Data = Datas.data[0]
   console.log(Data) 
   
  return (
    <div className='w-8/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 '>


      <div className='  md:col-span-2  bg-white py-3 rounded-lg shadow-md '>
        
      
      {/* Image */}
      <div className=" ">
       <Image
  src={Data.image_url}
  alt="news image"
  width={900}
  height={500}
/>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <h2 className="text-lg font-semibold leading-snug">
         {Data.title}
        </h2>

        {/* Meta */}
        <p className="text-xs text-gray-500">
          {Data.author.published_date}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
         {Data.details}
        </p>

        {/* Button */}
        <button className="mt-2 px-4 py-2 text-sm bg-rose-600 text-white rounded-md hover:bg-rose-700 transition">
          ← All news in this category
        </button>

    
    </div> 
        
        
        
        
        
         </div>



      <div className='col-span-1 sticky top-20  '>
      <Rightbar></Rightbar>
      </div>
      

    </div>
    
  )
}

export default Detailspage 