import React from 'react'

//import { BeakerIcon } from '@heroicons/react/solid'
//import { bsFillPlusCircleFill } from 'react-icons/bs';
import { HiPlusCircle } from "react-icons/hi";

export default function Qeustion({qst}) {
  return (
    <div className='flex-1 cursor-pointer
    transition duration-200 ease-in transform sm:hover:scale-105 '>
        <div className='flex justify-between flex-1 items-center'>
        <p className ='text-4xl'>{qst}</p>
        <HiPlusCircle size={70} className='' color='#3FA796'/>
        </div>
        <div className='bg-[3FA796] h-2 w-full  '></div>
    </div>
  )
}
