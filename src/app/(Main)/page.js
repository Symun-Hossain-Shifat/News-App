import Leftpage from "@/components/leftbar";

export default async function Home() {
    

  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const Datas = await res.json();
  const Data = Datas.data.news_category;
 console.log(Data) 


 const NewRes = await fetch(`https://openapi.programming-hero.com/api/news/category/${'08'}`);
  const NeWdatas = await NewRes.json();
  const Newdata = NeWdatas.data;
 console.log(Newdata)



return (
   <div className="grid grid-cols-12 container mx-auto gap-3">
    <div className="col-span-3 border-2 space-y-2 p-3">
      
      <Leftpage  Data = {Data} ></Leftpage>
  
  
    </div>
    
    
    <div className="col-span-6 border-2 space-y-2 p-3">
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
    <div className="col-span-3 border-2"></div>


   </div>
  );
}
