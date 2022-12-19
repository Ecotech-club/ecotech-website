import React from 'react'

const Ecotech = () => {
  return (
    <section className=' bg-background f-screen w-full p-12'>
      <div className='items-center flex pt-8 px-4 pb-4 '>
        <div className=' bg-secondary2 h-1.5 w-1/6  min-w-min	 ml-2 rounded-3xl mb-3'></div>
        <div className='bg-secondary2  h-4 w-4 xs:w-3 xs:h-3 lg:h-4 lg:w-4 relative -left-1 min-w-min  rounded-3xl mb-3'></div>
        <div className=' md:w-11/12 lg:w-8/12 relative -top-2 flex min-w-min '>
        <h2 className='font-sans text-bold  text-sm sm:text-xl lg:text-4xl  md:text-2xl xs:text-md text-white font-bold  mx-4 '>Qui sommes-nous aujourd'hui?</h2>
        </div>
      </div>
    <div className='flex flex-col-reverse  lg:flex-row w-full'>    
      {/* left side  */ }
      <div className=' flex md:flex-row md:space-x-0 justify-center  lg:flex-col w-full lg:w-4/12 md:mt-16 mt-4  relative'>
          <div className=' lg:mx-10 items-centre text-center mt-8'>
            <img src='/Ecotech-images/logo_ecotech.png' className=' w-40 h-40  lg:w-60 lg:h-60 object-contain'  />
            <p className='font-sans font-bold text-white  text-xl '><span className='font-bold text-main'>ECOTECH</span> <br />Club vert de l'ESI</p> 
          </div>
          
        </div> 
      {/* right side  */ }

        <div className='flex flex-col sm:w-full m-0 md:w-11/12 lg:w-8/12 mb-7 mx-8 lg:mt-10 lg:mx-6 p-2'>
            <p className='font-sans text-white md:text-xl xs:text-md lg:text-3xl leading-6 md:leading-8 tracking-wide'> Ecotech n’est qu’un nouveau visage donné à notre club en 2020, c’est une combinaison écologique et technologique qui garde la passion de CVE, mais qui crée de nouvelles perspectives pour les membres et les étudiants. Notre équipe a fait preuve de son intérêt à remédier aux dommages environnementaux en décrochant la troisième place à la première édition du Summer Break Challenge lancé par InclubMe en collaboration avec Djezzy en 2021. Ce qui reflète exactement les objectifs de notre club qui consistent à construire une technologie verte intégrée et à traiter les risques d’une manière numérique et innovante.</p>
        </div>

    </div>
  </section>
  )
}

export default Ecotech
