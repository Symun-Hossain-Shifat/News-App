import React from 'react'
import Link from "next/link";

function Leftpage ({Data}) {
  return (
    <>
    <h1 className="text-xl font-semibold">All Categories</h1>
      <div className="flex flex-col space-y-2">
        {Data.map( D => <Link className="btn border-2" href={''} key={D.category_id}>{D.category_name}</Link>)}
      </div>
    </>
    
  )
}

export default Leftpage