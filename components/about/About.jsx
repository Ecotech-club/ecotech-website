import React from 'react'
import Image from 'next/Image'
const About = () => {
  return (
    <section className='bg-red-500 flex h-screen'>
    {/* left side  */ }
      <div className='flex-1 flex flex-col'>
      <div className='flex-1 bg-slate-900 relative'>
        <Image src='/About-Images/above.png' layout='responsive' height={40} width={40}  />
      </div>
     {/*} <div className='flex-1 relative'>
      <Image src='/About-Images/down.png'  layout='responsive' height={40} width={50} />
      </div>*/}
      
      </div>
    {/* right side  */ }

      <div className='flex-1'>
        <div>
          <h2>About Us</h2>
          <span></span>
        </div>
        <div>
          <p>Ecotech est un club estudiantin créé en 2012 sous le nom de “Club Vert de l’École Nationale Supérieure d'Informatique" par des étudiants passionnés par la nature et le service environnemental. Depuis sa création, le club a travaillé sur des campagnes de sensibilisation pour faire savoir au citoyen la nécessité de préserver notre environnement, tout ça en impliquant d’autres domaines, à leur tête l'informatique. D’où l’idée de fusionner le domaine écologique et technologique pour donner un nouveau visage à notre club en 2020 sous le nom d’EcoTech.
</p>
        </div>
      </div>
    </section> 
  )
}

export default About
