import { useUser } from '@/app/context/UserContext';
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Sidebaritem = ({label,active,href}) => {
  const userData = useUser();
  return (
    <div className='flex items-center '>
    <div className="border-t-2 border-black  w-[30px] h-0 ml-[-20px]"/>
    <div className='  flex w-[220px] justify-between'>
    <Link href={href} 
    className={twMerge(` transition py-1  font-semibold text-neutral-400 hover:text-black  text-sm cursor-pointer`
    ,active && 'text-black')}>
      
      <p className=" w-full truncate"># {label}</p>
    </Link>
    {label==='Projects' &&(
       <div className=' px-2 rounded-full bg-black text-white text-sm flex items-center'>{userData?.public_repos || 0}</div>
    )}
   
     </div>

    </div>
  )
}

export default Sidebaritem