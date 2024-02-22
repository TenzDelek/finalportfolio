import Top from "@/components/Top"
import Image from "next/image"

const Projects = () => {
 
  
  return (
    <div>
      <Top/>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
   
   <div className=" flex flex-col justify-between items-center border-2 border-black m-3 p-2 rounded-md shadow-body1 hover:shadow-none transition ">
   <div className="  h-10  w-10  rounded-lg overflow-hidden ">
   <Image src="/spotify.png" height={20} width={20} alt="project image" className="  object-fit w-full h-full" />
   </div>
  
   <p className=" text-center text-sm font-bold">Spotify Clone</p>
   <p className=" text-xs">Fullstack Development</p>
   <p className=" mt-2 text-xs max-md:text-center"><span className="font-bold">Takeaway from this project: <br/></span>
   first time using Supabase.got to know more about fullstack in general and tenzin delek is goat</p>
   
   <button className=" px-2 text-sm py-1 mt-2 transition hover:bg-black hover:text-white rounded-lg border-2 border-black">View</button>
   </div>
 
 </div>
    </div>
  )
}

export default Projects