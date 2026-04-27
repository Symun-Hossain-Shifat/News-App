import Link from "next/link";


export default async function Home() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const Datas = await res.json();
  const Data = Datas.data.news_category;
 console.log(Data)
  return (
   <div className="grid grid-cols-12 container mx-auto gap-3">
    <div className="col-span-3 border-2 space-y-2">
      <h1 className="text-xl font-semibold">All Categories</h1>
      <div className="flex flex-col space-y-2">
        {Data.map( D => <Link className="btn border-2" href={''} key={D.category_id}>{D.category_name}</Link>)}
      </div>




    </div>
    <div className="col-span-6 border-2"></div>
    <div className="col-span-3 border-2"></div>


   </div>
  );
}
