'use client'

import { OrbitControls,} from "@react-three/drei";
import { Canvas,useFrame} from '@react-three/fiber';
import React, { useRef } from 'react'
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
        <Canvas shadows camera={{ position: [0, 0,5], fov: 15 }}>
      <color attach="background" args={["#F9F1E4"]} />
      
      <ambientLight intensity={2} />
      <Cube/>
      <directionalLight position={[2,1,1]}/>
      <OrbitControls enableZoom={false} />
        
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

function Cube()
{
  const meshref=useRef(null);
  useFrame((state,delta)=>{
    meshref.current.rotation.x += delta *0.25
    meshref.current.rotation.y += delta *0.25
    meshref.current.rotation.z += delta *0.25
  })
  return(
    <mesh ref={meshref}>
        <boxGeometry/>
      <meshStandardMaterial color={"orange"} />
      </mesh>
  )
}