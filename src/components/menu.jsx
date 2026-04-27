import React from 'react'
import Marquee from "react-fast-marquee";


function MenuPage () {


  const Datas = [
  {
    "id": 1,
    "title": "Global Economy Shows Signs of Recovery Amid Inflation Concerns"
  },
  {
    "id": 2,
    "title": "Breakthrough in AI Technology Transforms Web Development Industry"
  },
  {
    "id": 3,
    "title": "Climate Change Effects Intensify as Heatwaves Hit Multiple Countries"
  },
  {
    "id": 4,
    "title": "New Education Policy Aims to Modernize Higher Studies Worldwide"
  },
  {
    "id": 5,
    "title": "Tech Giants Compete to Lead the Future of Artificial Intelligence"
  }
]



  return (
    <div className='bg-gray-200 container mx-auto p-2 rounded-md flex'>
      <button className='btn btn-success mr-2'>News</button>
      <Marquee pauseOnHover={true}>
       {Datas.map( Data => <p className='mx-5' key={Data.id}>{Data.title}</p>)}
      </Marquee>
   </div>
  )
}

export default MenuPage 