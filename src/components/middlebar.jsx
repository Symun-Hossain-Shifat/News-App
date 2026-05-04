import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Star, Eye, Bookmark, Share2 } from "lucide-react";

function Middlebar ({Newdata}) {
  // console.log(Newdata)
  return (
    <div className=''>
        <h1 className="text-xl font-semibold">All News</h1>
      <div className="flex flex-col space-y-2 p-3">
       {Newdata.length > 0 ? (Newdata.map( (Data , index) => {
        console.log(Data)
          return (
            <div key={index} className=" bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <Image
            src={Data.author.img} // put your image in public folder
            alt="Author"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
             {Data.author.name}
            </h3>
            <p className="text-xs text-gray-500">2022-08-21</p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-500">
          <Bookmark size={18} className="cursor-pointer hover:text-black" />
          <Share2 size={18} className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
          {Data.title}
        </h2>
      </div>

      {/* News Image */}
      <div className="px-4 pt-4">
        <Image
          src={Data.image_url
} // put image in public folder
          alt="News"
          width={500}
          height={300}
          className="rounded-lg w-full h-[220px] object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-600 leading-6 line-clamp-3">
          {Data.details}
          
        
        </p>


  <Link href={`/Detailspage/${Data._id}`}>
  <button className="mt-2 text-orange-500 font-medium hover:underline">
          Read More
        </button>
  </Link>
        
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} className="text-gray-300" />
          <span className="ml-1 text-gray-700 font-medium">4.9</span>
        </div>

        <div className="flex items-center gap-1">
          <Eye size={16} />
          <span>499</span>
        </div>
      </div>
    </div>
                 );
        })) : <p className='font-bold text-3xl h-screen text-center'>No Data Found </p>} 
      </div>
  </div>
  )
}

export default Middlebar 