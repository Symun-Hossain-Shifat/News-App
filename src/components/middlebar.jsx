import Link from 'next/link';
import React from 'react'

function Middlebar ({Newdata}) {
  console.log(Newdata)
  return (
    <div className=''>
        <h1 className="text-xl font-semibold">All News</h1>
      <div className="flex flex-col space-y-2 p-3">
       {Newdata.length > 0 ? (Newdata.map( D => {
          return (
            <div className='border-2 p-5' key={D._id}>
              <h2>{D.title}</h2>
              <Link href={`/Detailspage/${D.category_id}`}>See Details</Link>
            </div>
                 );
        })) : <p className='font-bold text-3xl h-screen text-center'>No Data Found </p>} 
      </div>
  </div>
  )
}

export default Middlebar 