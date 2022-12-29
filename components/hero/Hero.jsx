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
              <button className={styles.hero_btn} data-tf-slider="guiMX8as" data-tf-width="550" data-tf-iframe-props="title=My 1st typeform" data-tf-			medium="snippet">S'inscrire</button><script src="//embed.typeform.com/next/embed.js"></script>
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
