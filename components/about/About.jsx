import React from 'react'

const About = () => {
  return (
    <section id='about' className='min-h-screen bg-background p-[3%] text-white'>
      <div className='flex flex-col-reverse bg-red lg:flex-row w-full'>
        {/* left side  */}
        <div className=' flex md:flex-row md:space-x-0 justify-center lg:flex-col w-full lg:w-4/12 mt-4 md:mt-16  relative'>
          <div className='lg:flex-1 relative lg:mx-10 '>
            <img src='/About-Images/above.png' className=' w-40 h-24  lg:w-96 lg:h-80 object-contain' />
          </div>

          <div className='lg:flex-1 lg:absolute  lg:mt-40 ml-0 '>
            <img src='/About-Images/down.png' className='w-40 h-24 sm:w-64 sm:h-48  lg:w-96 lg:h-80 object-contain' />
          </div>

        </div>
        {/* right side  */}

        <div className='flex flex-col sm:w-full m-0 md:w-11/12 lg:w-8/12 mt-4 mx-8 lg:mt-24 lg:mx-10  mb-4'>
          <div className=' flex justify-start items-baseline '>
            <h2 className='font-sans sm:text-3xl md:text-5xl font-bold' >À propos</h2>
            <div className='bg-secondary2 h-1.5 w-2/12 ml-8  rounded-3xl mb-3'></div>
          </div>
          <div className=''>
            <p className='font-sans text-base lg:text-2xl leading-6 md:leading-8 tracking-wide'>Ecotech est un club estudiantin créé en 2012 sous le nom de “Club Vert de l’École Nationale Supérieure d'Informatique" par des étudiants passionnés par la nature et le service environnemental. Depuis sa création, le club a travaillé sur des campagnes de sensibilisation pour faire savoir au citoyen la nécessité de préserver notre environnement, tout ça en impliquant d’autres domaines, à leur tête l'informatique. D’où l’idée de fusionner le domaine écologique et technologique pour donner un nouveau visage à notre club en 2020 sous le nom d’EcoTech.
            </p>
          </div>
          <div className='w-full flex justify-center items-center mt-6 '>
            <button className='lg:px-[45px] lg:py-3 px-8 rounded-[60px] text-white lg:text-4xl text-lg font-sans 
                transition duration-200 ease-in transform sm:hover:scale-105
                 bg-secondary tracking-wider leading-10'>Plus</button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
