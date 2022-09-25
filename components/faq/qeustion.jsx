import React from 'react'

//import { BeakerIcon } from '@heroicons/react/solid'
//import { bsFillPlusCircleFill } from 'react-icons/bs';
import { HiPlusCircle } from "react-icons/hi";

export default function Qeustion({qst}) {
  return (
    <div className='flex-1 cursor-pointer my-1.5 mr-20
    transition duration-200 ease-in transform sm:hover:scale-105 '>
        <div className='flex  justify-between flex-1 items-center'>
        <p className ='font-sans text-base  md:text-2xl xl:text-3xl pb-8 md:pt-2'>{qst}</p>
        <HiPlusCircle size={70} className='w-10 md:w-16' color='#3FA796'/>
        </div>
        <div className='bg-main h-1 w-full  rounded-3xl '></div>
    </div>
  )
}
