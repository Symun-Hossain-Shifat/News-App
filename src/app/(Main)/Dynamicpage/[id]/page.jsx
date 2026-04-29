import Leftpage from '@/components/leftbar';
import Middlebar from '@/components/middlebar';
import Rightbar from '@/components/rightbar';
import React from 'react'

async function Dynamicpage({ params }) {
const {id} = await params
  console.log(id)
   const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const Datas = await res.json();
  const Data = Datas.data.news_category;
 console.log(Data) 


 const NewRes = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  const NeWdatas = await NewRes.json();
  const Newdata = NeWdatas.data;
//  console.log(Newdata)



return (
   <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto gap-3">
    <div className="md:col-span-3 bg-gray-50 rounded-sm space-y-2 p-3">
      
      <Leftpage  Data = {Data} isActive = {id} ></Leftpage>
  
  
    </div>
    
    
    <div className="md:col-span-6 bg-gray-50 rounded-sm space-y-2 p-3">
      <Middlebar Newdata = {Newdata}></Middlebar>



    </div>
    <div className="md:col-span-3  bg-gray-50 rounded-sm p-3 space-y-2 ">
      <Rightbar></Rightbar>
    </div>
    

   </div>
  );
}

export default Dynamicpage