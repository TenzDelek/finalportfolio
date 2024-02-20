'use client'
import  { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Sidebaritem from "./Sidebaritem";
import { Tooltip } from 'react-tooltip'
const Sidebar = ({ children }) => {
  const pathname=usePathname();
  const icons = [
    {
      icon: FaPlus,
    },
    {
      icon: GoFileDirectory,
    },
    {
      icon: AiOutlineUser,
    },
    {
      icon: CiMail,
    },
  ];
  const route=useMemo(()=>[
    {
      label:'Home',
      active:pathname==='/',
      href:'/'
    },
    {
      label:'Projects',
      active:pathname==='/projects',
      href:'/projects'
    },
    
    {
      label:'CaseStudy',
      active:pathname==='/casestudy',
      href:'/casestudy'
    },
    {
      label:'Blog',
      active:pathname==='/blog',
      href:'/blog'
    },
    {
      label:'Social',
      active:pathname==='/bio',
      href:'/bio'
    },
    {
      label:'Contact',
      active:pathname==='/contact',
      href:'/contact'
    },
  ],[pathname])
  
  const[admin,setadmin]=useState(false)
  return (
    <div className="flex   border-2 border-black  py-4">
      <div className="hidden md:flex flex-col w-[300px]  border-r-2 border-black pb-2">
        <div className="flex space-x-3 border-b-2 border-black pb-2 cursor-pointer">
        {icons.map(({icon:Icon},index)=>(
            <div className={` pl-2 ${!admin && Icon !== FaPlus ? "text-black" : admin ? "text-black" : "text-black/30 cursor-not-allowed"}`} key={index}>
              {Icon===FaPlus?<Icon className="warning outline-none" size={30}/>:<Icon size={30}/>}
              </div>
        ))}
        <Tooltip  anchorSelect=".warning" place="bottom">
        Access only to Admin
</Tooltip>
      </div>

      <div className=" flex justify-between items-center border-2 border-black m-3 p-2 rounded-md shadow-body1">
        <p className=" font-bold">Name </p>
          <div className=" bg-black text-[#F9F1E4] p-2 rounded-md"> <FaCaretDown/></div>
      </div>

      <div className="flex" >
        {/* left */}
        <div className=" flex-1/2 ml-5  flex flex-col  items-center justify-center">
          <div className=" bg-black text-[#F9F1E4] px-2 rounded-md">
            -
          </div>
            {/* line */}
          <div className=" border-r-2 border-black  w-[1px] h-[250px]"/>
        </div>
         {/* right */}
         <div className=" flex-1 flex flex-col  ml-2">
          <div className=" flex font-bold space-x-2  mt-3 mb-4"><GoFileDirectory size={25} /> <p>Channels</p></div>

            <div className=" mt-5 flex flex-col space-y-3">
            {
              route.map((data)=>(
                <Sidebaritem key={data.label} {...data}/>
              ))
            }
            </div>
        </div>
      </div>
      </div>

      <main className=" h-full flex-1 overflow-y-auto">
      {children}
     </main>
    </div>
  );
};

export default Sidebar;
