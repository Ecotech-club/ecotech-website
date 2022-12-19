import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGooglePlusSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='bg-background   p-14'>
      <div className=''>
        <div className='flex justify-center'>
          <div className=' bg-secondary2 h-1.5 w-20 min-w-min	 ml-2 rounded-3xl '></div>
          <h1 className='font-sans   text-sm lg:text-4xl   xs:text-2xl font-bold relative  sm:text-3xl  md:text-4xl text-secondary2  not-italic  -top-5 mx-3'>Suivez Nous</h1>
          <div className=' bg-secondary2 h-1.5 w-20 min-w-min	 ml-2 rounded-3xl '></div>
        </div>
        <ul>
          <div className='flex gap-6 pb-5 justify-center items-cerntre m-8'>
            {/* Sectin for icons  */}
            <a href="https://web.facebook.com/WhereTechnologyMeetsEcology?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='text-white text-4xl text-seconday2 cursor-pointer hover:text-secondary2 ' /></a>
            <a href="https://www.instagram.com/ecotech.club/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className='text-4xl text-white  cursor-pointer hover:text-secondary2' /></a>
            <a href="https://www.linkedin.com/company/ecotech-esi/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-4xl text-white  cursor-pointer hover:text-secondary2' /></a>
            <a href="https://mail.google.com/mail/u/0/?hl=fr&tf=cm&fs=1&to=ecotech@esi.dz" target="_blank" rel="noopener noreferrer"><FaGooglePlusSquare className='text-4xl text-white  cursor-pointer hover:text-secondary2' /></a>
          </div>
        </ul>
        <div className='flex justify-center'>
          <p className='font-sans text-white text-xs'>Copyright © 2022 Club Ecotech de l'ESI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
