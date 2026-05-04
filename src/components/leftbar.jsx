import React from 'react'
import Link from "next/link";

function Leftpage ({Data , isActive}) {
  return (
    <div className='md:sticky md:top-20 md:z-50'>
    <h1 className="text-xl font-semibold mb-5">All Categories</h1>
      <div className="flex flex-col space-y-2">
        {Data.map( D => <Link className={`${isActive === D.category_id? 'btn-accent text-white' : ''} btn border-2`} href={`/Dynamicpage/${D.category_id}`} key={D.category_id}>{D.category_name}</Link>)}
      </div>
    </div>
    
  )
}

export default Leftpage