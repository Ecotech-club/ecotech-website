import React from 'react'
import styles from "../../styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <a href='/'>
          <img
            src="/Home-images/Small_logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </a>
      </div>
      <div className={styles.nav_container}>
        <div className={styles.link_container}>
          <a href='#hero'>Home</a>
        </div>
        <div className={styles.link_container}>
          <a href='#ecotech'>Ecotech</a>
        </div>
        <div className={styles.link_container}>
          <a href='#events'>Events</a>
        </div>
        <div className={styles.link_container}>
          <a href='#faq'>FAQ</a>
        </div>
        <div className={styles.link_container}>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
