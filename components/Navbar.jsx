import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-fit flex justify-between items-center border-b-2 border-black pb-4'>
        <div className='    w-10 flex space-x-2'>
            <div className=' p-2 rounded-full md:p-3 bg-black ' />
            <div className=' p-2  rounded-full md:p-3 border-2 border-black shadow-art' />
            <div className='p-2  rounded-full md:p-3 border-2 border-black shadow-art' />
        </div>
        <div>
            <p className=' max-md:hidden font-integral text-[22px]'>tenzin Portfolio</p>
            <p className=' md:hidden font-integral text-[22px]'>TENZIN</p>
        </div>
        <div/>
    </div>
  )
}

export default Navbar