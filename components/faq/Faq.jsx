import React from 'react'
import Qeustion from './qeustion'

const Faq = () => {
  return (
    <section className='bg-gradient-to-b from-bgFirst/20 to-bgSecond/80 ml-15 flex flex-col h-screen justify-start items-center'>
      <div className='sm:text-2xl md:font-bold font-semibold md:text-3xl xl:text-5xl  mt-16 mb-10 font-sans'>Questions fréquemment posées</div>
      <div className='flex flex-col w-10/12 xl:w-8/12 space-x-4 md:ml-16  ml-4 '>
      <div></div>
         <Qeustion qst='Qui peut nous rejoindre? ' />
         <Qeustion qst='Comment nous rejoindre? '/>
         <Qeustion qst='Pourquoi Ecotech? ' />
         <Qeustion qst='Rejoindre Ecotech nécessite-il des compétences/pré-requis?  ' />
         <Qeustion qst='Question non trouvée?' />
         <div></div>
      </div>
    </section>
  )
}

export default Faq
