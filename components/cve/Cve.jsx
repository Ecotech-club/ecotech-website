import React from 'react'
import Event from './event'

const Cve = () => {
  return (
    <section className='flex flex-col bg-background p-[3%] min-h-screen text-white'>
    {/*above*/}
        <div className=' m-auto w-[85%]'>

         <div className='flex justify-start items-baseline'>
            <div className='bg-[secondary2] h-1.5 w-1/12 mr-8  rounded-3xl mb-2'></div>
            <h1 className='sm:text-sm md:font-bold font-semibold md:text-3xl xl:text-4xl p-[3%] align-middle justify-center flex'>D'où avons nous commencé?  </h1>
         </div>

          <div className='flex flex-col md:flex-row justify-between items-center p-[3%]'>
            <p className='font-sans sm:text-lg text-base  lg:text-xl'>Le CVE est le premier club à vision environnementale créé à l’ESI (ex. INI) en 2012, son principal but était d’encourager les étudiants à l'entrepreneuriat vert et les aider à développer des projets à impact environnemental.
            Ce club était d’une importance majeure à l’école grâce à ses activités et ses événements
            qui permettent aux étudiants une adaptation facile à l’école, et créent un espace  enrichissant et encourageant les nouvelles technologies.
            </p>
            <img src='/cve-images/Logo_cve.png' className='w-56 h-36 lg:w-96 lg:h-52' />
          </div>
        
        </div>
    {/*down*/}
      <div className='flex flex-col bg-blue flex-1 p-[5%] ' >
           <div className='flex justify-center my-0  sm:my-3 md:my-4 items-center'>
                <div className='bg-secondary2 h-1.5 mx-2 w-2/12  rounded-3xl mt-1 '></div>
                <h1 className='font-sans sm:text-sm md:font-bold sm:font-semibold md:text-2xl xl:text-3xl mx-2'> Événements </h1>
                <div className='bg-secondary2 h-1.5 mx-2 w-2/12  rounded-3xl mt-1'></div>
            
           </div>
           <div className='flex flex-col flex-1 text-xs xs:flex-row flex-wrap md:my-12  mb-1     justify-start relative space-x-4 lg:space-x-16 '>
            <div></div>
            <Event title='Reboisement' />
            <Event title='Open class' />
            <Event title='Sahra_IT'/>
           </div>
      </div>
      <button data-tf-slider="guiMX8as" data-tf-width="550" data-tf-iframe-props="title=My 1st typeform" data-tf-medium="snippet">Launch me</button><script src="//embed.typeform.com/next/embed.js"></script>
    </section>
  )
}

export default Cve
