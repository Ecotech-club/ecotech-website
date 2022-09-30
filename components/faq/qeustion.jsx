import React from 'react'
import { HiPlusCircle } from "react-icons/hi";
import {useState} from 'react';

export default function Qeustion({qst}) {
  const [showAnswer ,setShowAnswer] = useState(false);
  return (
    <div className='flex-1 cursor-pointer my-1.5 mr-20
    transition duration-200 ease-in transform sm:hover:scale-105 '>
        
        <div className='flex  justify-between items-center'>
          <p className ='font-sans text-xl  md:text-3xl xl:text-4xl pb-2 flex-[90%]'>{qst.qeustion}</p>
          <HiPlusCircle size={70} className='flex-[10%]' color='#3FA796' onClick={() =>setShowAnswer(!showAnswer)}/>
        </div>
          {
            showAnswer  && 
          <p className =' font-sans text-base  md:text-xl xl:text-2xl pt-2  mb-4 ml-8  '>{qst.answer}</p>
          }
          
        <div className='bg-main h-1 w-full  rounded-3xl '></div>         
        
    </div>
  )
}
