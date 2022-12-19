import React from 'react'
import Image from 'next/image'
const Events = () => {
  return (
    <section className='h-screen w-screen px-[2%] pt-[5%] text-center bg-background' >
      <p className='font-black text-2xl md:text-3xl lg:text-5xl text-white'>Nos Évenements</p>
    <div className='flex flex-row h-[90%] '>
      <div className='flex flex-col w-[70%] align-middle justify-center'>
        <div className='flex flex-row justify-evenly border-b-2'>
          <div className='px-[5%] py-[5%]'></div>
          <div className='border-l-4 px-[10%] py-[5%] relative border-l-[#C4F573]'>
            <div className='absolute top-0 translate-y-[-100%] left-0 translate-x-[-51.4%] flex flex-col justify-center items-center '>
              <p className='font-extrabold text-white text-lg md:text-2xl'>Hackotech</p>
              <div className='p-3 rounded-full bg-[#DDE226]'></div>
            </div>
          </div>
          <div className='border-r-4 px-[10%] py-[5%] relative border-r-[#C4F573]'>
            <div className='absolute top-0 translate-y-[-100%] right-0 translate-x-[51.4%] flex flex-col justify-center items-center '>
              <p className='font-extrabold text-white text-lg md:text-2xl'>PlanTech</p>
              <div className='p-3 rounded-full bg-[#DDE226]'></div>
            </div>
          </div>
          <div className='px-[10%] py-[5%]'></div>
          <div className='px-[10%] py-[5%]'></div>
        </div>
        <div className='flex flex- justify-evenly border-t-2'>
          <div className='px-[5%] py-[5%]'></div>
          <div className='border-r-4 px-[10%] py-[5%] relative border-r-[#C4F573]'>
            <div className='absolute bottom-0 translate-y-[100%] right-0 translate-x-[51.4%] flex flex-col justify-center items-center '>
              <div className='p-3 rounded-full bg-[#DDE226]'></div>
              <p className='font-extrabold text-white text-lg md:text-2xl'>Earth Day</p>
            </div>
          </div>
          <div className='px-[10%] py-[5%]'></div>
          <div className='border-r-4 px-[10%] py-[5%] relative border-r-[#C4F573]'>
            <div className='absolute bottom-0 translate-y-[100%] right-0 translate-x-[51.4%] flex flex-col justify-center items-center '>
              <div className='p-3 rounded-full bg-[#DDE226]'></div>
              <p className='font-extrabold text-white text-lg md:text-2xl'>EcoWorkshops</p>
            </div>
          </div>
          <div className='px-[10%] py-[5%]'></div>
        </div>
      </div>
      <div className='relative w-[30%] p-0 -translate-x-3' >
        <Image layout='fill'  objectFit={'contain'} src="/../public/events-images/conference.png" ></Image>
      </div>
    </div>
    </section>
  )
}

export default Events
