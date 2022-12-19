import React from 'react'
import styles from "../../styles/hero.module.css"
const Hero = () => {
  return (
    <section className={styles.hero_section} id={"hero"}>
      <div className={styles.hero_container}>
        {/**left --paragraph and button-- */}
        <div className={styles.left_hero_txt}>
          <div>
            <h2 className={styles.hero_paragraph}>
              EcoTech (ex. Club Vert de l'ESI) est un club estudiantin crée dont le but de préserver l'environnement.
            </h2>
          </div>
          <div>
            <a href='#'>
              <button className={styles.hero_btn}>
                S'inscrire
              </button>
            </a>
          </div>
        </div>
        {/**wright --big logo-- */}
        <div className={styles.right_hero_image}>
          <img
            src="/Home-images/Big_Logo_Image.png"
            alt="Logo"
            className={styles.big_logo_image}
          />
        </div>
      </div>

    </section>
  )
}

export default Hero
