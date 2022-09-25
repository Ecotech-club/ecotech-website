import React from 'react'
import Qeustion from './qeustion'

const Faq = () => {

  const qeustions = [
    {
      id:1,
      qeustion:'Qui peut nous rejoindre?',
      answer:'All the students can join *<*'  
    },
    {
      id:2,
      qeustion:'Comment nous rejoindre?',
      answer:'formulaire t3 google'  
    },
    {
      id:3,
      qeustion:'Pourquoi Ecotech?',
      answer:'We are the best XD'  
    },
    {
      id:4,
      qeustion:'Rejoindre Ecotech nécessite-il des compétences/pré-requis?',
      answer:'Walo, arwa7 brk'  
    },
    {
      id:5,
      qeustion:'Question non trouvée?',
      answer:'Allah Ghalb Lol '  
    }
  ]

  return (
    <section className='bg-gradient-to-b from-secondary/20 to-main/80 ml-15 flex flex-col min-h-screen justify-start items-center overflow-y-visible'>
      <div className='sm:text-2xl md:font-bold font-semibold md:text-3xl xl:text-5xl  mt-16 mb-10 font-sans'>Questions fréquemment posées</div>
      <div className='flex flex-col w-10/12 xl:w-8/12 space-x-4 md:ml-16  ml-4 mb-24 '>
      <div></div>
         {
          qeustions.map(qeustion => (

         <Qeustion qst={qeustion} key={qeustion.id} />
          ))
         }
      <div></div>
      </div>
    </section>
  )
}

export default Faq
