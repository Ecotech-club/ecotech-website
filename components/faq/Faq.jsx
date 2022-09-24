import React from 'react'
import Qeustion from './qeustion'

const Faq = () => {
  return (
    <section className='bg-back ml-15 flex flex-col h-screen justify-start items-center'>
      <div className='sm:text-xl font-bold md:font-semibold md:text-3xl xl:text-5xl  mt-16 mb-10'>Questions fréquemment posées</div>
      <div className='flex flex-col w-10/12 xl:w-8/12 space-x-4 ml-16  '>
         <Qeustion qst='Qui peut nous rejoindre? '/>
         <Qeustion qst='Comment nous rejoindre? '/>
         <Qeustion qst='Pourquoi Ecotech? '/>
         <Qeustion qst='Rejoindre Ecotech nécessite-il des compétences/pré-requis? '/>
         <Qeustion qst='Question non trouvée?'/>
      
      </div>
    </section>
  )
}

export default Faq
