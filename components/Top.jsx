'use client'
import { usePathname } from 'next/navigation'
import { IoSettingsOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { useUser } from '@/app/context/UserContext';


const Top = () => {
    const userData = useUser();
    const pathname = usePathname()
  return (
    <div>
        <div className=' flex justify-between items-center w-full p-[6.5px] border-b-2  border-black'>
      <p className=' font-bold'>{pathname=='/'?"#home":pathname.replace("/","#")}</p>
      <div className='flex items-center space-x-2 font-semibold'>
        {userData && pathname=="/projects" && <p>Repo:[{userData.public_repos}]</p>}
        <IoSettingsOutline size={20}/>
        <CiStar size={25} />
      </div>
      </div>
    </div>
  )
}

export default Top