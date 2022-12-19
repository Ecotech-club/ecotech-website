import React from 'react'

const Support = () => {
  return (
    <div className='lg:w-1024 p-20  w-full h-full  bg-background' >
    <div className='items-center flex'>
       <div className=' bg-[#DDE226] h-1.5 w-1/6 min-w-min	 ml-2 rounded-3xl mb-3 '></div>
       <div className='bg-[#DDE226] h-4 w-4 relative -left-1  rounded-3xl mb-3 xs:w-3 xs:h-3 lg:h-4 lg:w-4  min-w-min'></div>
       <div className='font-sans sm:text-3xl  md:text-4xl m-4  text-[#DDE226]  not-italic font-bold relative -top-1 '><h1>Nous Soutenir</h1></div>
    </div>
    <div className='py-16 px-3'>
        <p className='font-sans text-white lg:text-3xl sm:text-2xl leading-7 md:leading-8 tracking-wider mb-2 '> Si vous êtes un sponsor et  vous souhaitez soutenir notre club pour avoir plus de succès et des impacts, vous n'avez qu'à cliquer sur ce bouton ! </p>
        <div className='w-full flex  items-center mt-6 '>
        <button className='lg:w-60 lg:h-15 text-centre sm:h-14 sm:w-40 w-40 h-12  rounded-[40px] text-white lg:text-2xl text-lg font-sans transition duration-200 ease-in transform sm:hover:scale-105 bg-secondary tracking-wider leading-8 my-8 py-3  md:py-2 shadow-md'>Nous Soutenir</button>
        </div>
      </div>
    </div>
  )
}

export default Support
