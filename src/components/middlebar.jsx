import React from 'react'

function Middlebar ({Newdata}) {
  return (
    <div>
        <h1 className="text-xl font-semibold">All News</h1>
      <div className="flex flex-col space-y-2 p-3">
        {Newdata.map( D => {
          return (
            <div key={D._id}>
              <h2>{D.title}</h2>
            </div>
                 );
        })}
      </div>
  </div>
  )
}

export default Middlebar 