import styles from '../styles/Home.module.css'
import {About, Hero , Navbar,Events, Footer, Support, Ecotech,Faq, Contact, Cve} from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About/>
      <Cve/>
      <Ecotech/>
      <Events/>
      <Faq/>
      <Support/>
      <Contact/>
      <Footer/>

      
    </div>
  )
}
