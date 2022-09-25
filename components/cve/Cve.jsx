import React from 'react'
import Event from './event'

const Cve = () => {
  return (
    <section className='h-screen flex flex-col bg-gradient-to-b from-bgFirst/20 to-bgSecond/80'>
    {/*above*/}
      <div className='mx-3 md:mx-12 lg:mx-24'>
         <div className='flex justify-start items-baseline'>
            <div className='bg-main h-1.5 w-1/12 mr-8  rounded-3xl mb-2'></div>
            <h1 className='sm:text-sm md:font-bold font-semibold md:text-3xl xl:text-4xl mt-3 lg:my-4 mb-2'>D'où avons nous commencé?  </h1>
         </div>
         <div className='flex flex-col md:flex-row justify-around items-center'>
          <p className='font-sans sm:text-lg text-base  lg:text-xl'>Le CVE est le premier club à vision environnementale créé à l’ESI (ex. INI) en 2012, son principal but était d’encourager les étudiants à l'entrepreneuriat vert et les aider à développer des projets à impact environnemental.
           Ce club était d’une importance majeure à l’école grâce à ses activités et ses événements
           qui permettent aux étudiants une adaptation facile à l’école, et créent un espace  enrichissant et encourageant les nouvelles technologies.
          </p>
          <img src='/cve-Images/logo_cve.png' className='w-56 h-36 lg:w-96 lg:h-52' />
         </div>
      </div>
    {/*down*/}
      <div className='flex flex-col bg-blue flex-1 mx-14 space-y-8 ' >
           <div className='flex justify-center my-0  sm:my-3 md:my-4 items-center'>
                <div className='bg-main h-1.5 mx-2 w-2/12  rounded-3xl mt-1 '></div>
                <h1 className='font-sans sm:text-sm md:font-bold sm:font-semibold md:text-2xl xl:text-3xl mx-2'>Events CVE </h1>
                <div className='bg-main h-1.5 mx-2 w-2/12  rounded-3xl mt-1'></div>
            
           </div>
           <div className='flex flex-col flex-1 text-xs xs:flex-row flex-wrap md:y-12 mb-1     justify-start relative space-x-4 lg:space-x-16 '>
            <div></div>
            <Event title='Reboisement' />
            <Event title='Open class' />
            <Event title='Sahra_IT'/>
           </div>
      </div>
    </section>
  )
}

export default Cve
