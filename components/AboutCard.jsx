'use client'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const AboutCard = () => {
  return (
    <div className=' rounded-lg border-2 border-black shadow-body1 hover:shadow-none transition '>
        <div className=' border-b-2 border-black flex justify-between items-center'>
            <div>
                <div className=' p-2 border-2 border-black rounded-lg' />
            </div>
            <p className=' font-bold'>INTRODUCTION</p>
        <div/>

        </div>
    
    <div className=' flex p-2'>
        {/* left */}
    <div className='flex-1   border-2 border-black h-72 w-56'>
        {/* iamge div */}
        <div className=' h-64 w-full'>
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
        </div>
        <div className=' items-center pt-1 justify-between flex border-t-2 border-black'>
        <IoIosArrowBack/>
        <div className=' px-8 py-2 rounded-lg border-2 border-black' />
        <IoIosArrowForward />
        </div>
    </div>
    </div>
    
        </div>
  )
}

export default AboutCard