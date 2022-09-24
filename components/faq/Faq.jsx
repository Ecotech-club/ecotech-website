import React from 'react'
import Qeustion from './qeustion'

const Faq = () => {
  return (
    <section className='bg-blue-500 ml-15 flex flex-col h-screen justify-start items-center'>
      <div className='text-5xl  mt-16 mb-10'>Questions fréquemment posées</div>
      <div className='flex flex-col w-8/12 space-x-4 ml-32 space-y-10  '>
         <Qeustion qst='How are you '/>
         <Qeustion qst='How are you '/>
         <Qeustion qst='How are you '/>
         <Qeustion qst='How are you '/>
      </div>
    </section>
  )
}

export default Faq
